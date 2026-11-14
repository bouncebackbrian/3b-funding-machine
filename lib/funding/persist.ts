import "server-only";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/supabase/database.types";
import { evaluateReadiness } from "./readiness";
import { buildRoadmap } from "./roadmap";
import type { FundingProfile, FundingState, ReadinessRule } from "./types";

type Client = SupabaseClient<Database>;

/** funding_profiles has UNIQUE(business_id): one profile per business, created on first need. */
export async function getOrCreateFundingProfile(
  supabase: Client,
  businessId: string,
  userId: string,
): Promise<FundingProfile> {
  const existing = await supabase.from("funding_profiles").select("*").eq("business_id", businessId).maybeSingle();
  if (existing.error) throw new Error(existing.error.message);
  if (existing.data) return existing.data;

  const created = await supabase
    .from("funding_profiles")
    .insert({ business_id: businessId, status: "building", created_by: userId })
    .select("*")
    .single();
  if (created.error) {
    // Lost a race with a parallel request — the row exists now.
    if (created.error.code === "23505") {
      const again = await supabase.from("funding_profiles").select("*").eq("business_id", businessId).single();
      if (again.error) throw new Error(again.error.message);
      return again.data;
    }
    throw new Error(created.error.message);
  }
  return created.data;
}

const ADVANCEABLE_PROFILE_STATUSES = new Set(["not_ready", "building", "package_ready"]);

/**
 * Scores readiness from the live rules, stores an immutable snapshot, and
 * regenerates the roadmap as a new strategy version. Completed/skipped steps
 * carry forward by title so a user never loses progress on regeneration.
 */
export async function runReadinessAndRoadmap(
  supabase: Client,
  state: FundingState,
  rules: ReadinessRule[],
  userId: string,
  now: Date,
) {
  const profile = state.profile ?? (await getOrCreateFundingProfile(supabase, state.business.id, userId));
  const result = evaluateReadiness({ ...state, profile }, rules, now);

  const snap = await supabase
    .from("funding_readiness_snapshots")
    .insert({
      business_id: state.business.id,
      overall_score: result.overall_score,
      status: result.status,
      category_scores: result.category_scores,
      rule_results: result.rule_results as unknown as Database["public"]["Tables"]["funding_readiness_snapshots"]["Insert"]["rule_results"],
      next_best_action: result.next_best_action,
    })
    .select("*")
    .single();
  if (snap.error) throw new Error(`Could not save readiness snapshot: ${snap.error.message}`);

  // Never move a profile backwards out of underwriting/funded.
  const profilePatch: Database["public"]["Tables"]["funding_profiles"]["Update"] = {};
  if (ADVANCEABLE_PROFILE_STATUSES.has(profile.status)) profilePatch.status = result.status;
  if (!profile.onboarding_completed_at) profilePatch.onboarding_completed_at = now.toISOString();
  if (Object.keys(profilePatch).length) {
    const upd = await supabase.from("funding_profiles").update(profilePatch).eq("id", profile.id);
    if (upd.error) throw new Error(`Could not update funding profile: ${upd.error.message}`);
  }

  const planned = buildRoadmap({ ...state, profile }, result);
  const carried = new Map(
    state.steps.filter((s) => s.status === "complete" || s.status === "skipped").map((s) => [s.title, s.status]),
  );

  const latest = await supabase
    .from("funding_strategies")
    .select("strategy_version")
    .eq("business_id", state.business.id)
    .order("strategy_version", { ascending: false })
    .limit(1)
    .maybeSingle();
  if (latest.error) throw new Error(latest.error.message);
  const version = (latest.data?.strategy_version ?? 0) + 1;

  const strat = await supabase
    .from("funding_strategies")
    .insert({
      business_id: state.business.id,
      funding_profile_id: profile.id,
      equipment_request_id: profile.funding_goal_type === "equipment" ? (state.equipment?.id ?? null) : null,
      strategy_version: version,
      // Inserted inactive; only published once every step is saved, so a failed
      // step insert can never replace a working roadmap with an empty one.
      status: "superseded",
      target_amount_estimate: profile.target_amount,
      primary_goal: profile.funding_goal_type,
      change_reason: version === 1 ? "initial_setup" : "readiness_review",
      next_review_at: new Date(now.getTime() + 30 * 86_400_000).toISOString(),
    })
    .select("*")
    .single();
  if (strat.error) throw new Error(`Could not save roadmap: ${strat.error.message}`);

  if (planned.length) {
    const ins = await supabase.from("funding_strategy_steps").insert(
      planned.map((p) => ({
        strategy_id: strat.data.id,
        business_id: state.business.id,
        sequence: p.sequence,
        category: p.category,
        title: p.title,
        description: p.description,
        action_url: p.action_url,
        dependency_sequence: p.dependency_sequence,
        status: (p.readiness_gap ? undefined : carried.get(p.title)) ?? "pending",
        affiliate_relationship: false,
      })),
    );
    if (ins.error) throw new Error(`Could not save roadmap steps: ${ins.error.message}`);
  }

  // Publish the fully written version, then retire older ones. The DAL reads
  // the highest active version, so there is never a moment with no roadmap.
  const pub = await supabase.from("funding_strategies").update({ status: "active" }).eq("id", strat.data.id);
  if (pub.error) throw new Error(`Could not publish roadmap: ${pub.error.message}`);

  const sup = await supabase
    .from("funding_strategies")
    .update({ status: "superseded" })
    .eq("business_id", state.business.id)
    .eq("status", "active")
    .neq("id", strat.data.id);
  if (sup.error) throw new Error(`Could not supersede previous roadmap: ${sup.error.message}`);

  return { readiness: result, strategyId: strat.data.id };
}
