import "server-only";
import { cache } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { FUNDING_UNLOCK_FICO, hasFundingUnlock, MFSN_VIP_ENTITLEMENT } from "@/lib/funding/credit-unlock";
import type { Business, FundingState, ReadinessRule } from "@/lib/funding/types";

export const ACTIVE_BUSINESS_COOKIE = "3b_active_business_id";

/** Verifies the session with Supabase Auth (not just the cookie). Redirects to /login when signed out. */
export const verifySession = cache(async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");
  return { user, supabase };
});

/** Businesses the user belongs to, via business_members (RLS-scoped). Shared across all 3B products. */
export const getUserBusinesses = cache(async (): Promise<(Business & { role: string | null })[]> => {
  const { user, supabase } = await verifySession();
  const { data: memberships, error } = await supabase
    .from("business_members")
    .select("business_id, role")
    .eq("user_id", user.id);
  if (error) throw new Error(`Could not load business memberships: ${error.message}`);
  if (!memberships?.length) return [];

  const { data: businesses, error: bErr } = await supabase
    .from("businesses")
    .select("*")
    .in(
      "id",
      memberships.map((m) => m.business_id),
    )
    .order("created_at", { ascending: true });
  if (bErr) throw new Error(`Could not load businesses: ${bErr.message}`);

  return (businesses ?? []).map((b) => ({
    ...b,
    role: memberships.find((m) => m.business_id === b.id)?.role ?? null,
  }));
});

/** Active business = cookie selection if the user still belongs to it, else their first business. */
export const getActiveBusiness = cache(async (): Promise<Business | null> => {
  const businesses = await getUserBusinesses();
  if (!businesses.length) return null;
  const selected = (await cookies()).get(ACTIVE_BUSINESS_COOKIE)?.value;
  return businesses.find((b) => b.id === selected) ?? businesses[0];
});

/** Use staff-managed FICO records and service-managed VIP membership. */
export const getFundingUnlock = cache(async (businessId: string) => {
  const { user, supabase } = await verifySession();
  const [credit, vip] = await Promise.all([
    supabase.from("funding_credit_profiles").select("bureau")
      .eq("business_id", businessId).eq("user_id", user.id).gte("fico_score", FUNDING_UNLOCK_FICO),
    supabase.from("entitlements").select("id")
      .eq("user_id", user.id).is("business_id", null)
      .eq("plan_sku", MFSN_VIP_ENTITLEMENT).eq("status", "active")
      .gt("expires_at", new Date().toISOString()).limit(1),
  ]);
  if (credit.error || vip.error) throw new Error("Could not check Funding Machine access.");
  return hasFundingUnlock(credit.data ?? [], Boolean(vip.data?.length));
});

export const getReadinessRules = cache(async (): Promise<ReadinessRule[]> => {
  const { supabase } = await verifySession();
  const { data, error } = await supabase.from("funding_readiness_rules").select("*").eq("active", true).order("sort_order");
  if (error) throw new Error(`Could not load readiness rules: ${error.message}`);
  return data ?? [];
});

/** Loads every piece of the funding sequence for one business in parallel. */
export const getFundingState = cache(async (business: Business): Promise<FundingState> => {
  const { supabase } = await verifySession();
  const id = business.id;

  const [profile, owners, snapshot, consents, documents, equipment, readiness, strategy] = await Promise.all([
    supabase.from("funding_profiles").select("*").eq("business_id", id).maybeSingle(),
    supabase.from("funding_owners").select("*").eq("business_id", id).order("created_at"),
    supabase
      .from("funding_financial_snapshots")
      .select("*")
      .eq("business_id", id)
      .order("as_of_date", { ascending: false })
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle(),
    supabase.from("funding_consents").select("*").eq("business_id", id),
    supabase.from("funding_documents").select("*").eq("business_id", id).order("created_at"),
    supabase
      .from("funding_equipment_requests")
      .select("*")
      .eq("business_id", id)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle(),
    supabase
      .from("funding_readiness_snapshots")
      .select("*")
      .eq("business_id", id)
      .order("computed_at", { ascending: false })
      .limit(1)
      .maybeSingle(),
    supabase
      .from("funding_strategies")
      .select("*")
      .eq("business_id", id)
      .eq("status", "active")
      .order("strategy_version", { ascending: false })
      .limit(1)
      .maybeSingle(),
  ]);

  for (const [name, res] of Object.entries({ profile, owners, snapshot, consents, documents, equipment, readiness, strategy })) {
    if (res.error) throw new Error(`Could not load ${name}: ${res.error.message}`);
  }

  let steps: FundingState["steps"] = [];
  if (strategy.data) {
    const res = await supabase
      .from("funding_strategy_steps")
      .select("*")
      .eq("strategy_id", strategy.data.id)
      .order("sequence");
    if (res.error) throw new Error(`Could not load roadmap steps: ${res.error.message}`);
    steps = res.data ?? [];
  }

  return {
    business,
    profile: profile.data,
    owners: owners.data ?? [],
    snapshot: snapshot.data,
    consents: consents.data ?? [],
    documents: documents.data ?? [],
    equipment: equipment.data,
    readiness: readiness.data,
    strategy: strategy.data,
    steps,
  };
});

/** Page helper: signed-in user + active business + full funding state, or redirect into setup. */
export async function requireFundingContext() {
  const { user } = await verifySession();
  const business = await getActiveBusiness();
  if (!business) redirect("/app/setup/contact");
  const state = await getFundingState(business);
  return { user, business, state };
}
