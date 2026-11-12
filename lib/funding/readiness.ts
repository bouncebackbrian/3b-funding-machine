import { checkAlignment, emailDomain, FREE_EMAIL_DOMAINS, isIdentityAligned } from "./alignment";
import { allDisclosuresAccepted } from "./disclosures";
import { attestationsOf, presenceOutcome, type PresenceKey } from "./presence";
import { isProvided } from "./documents";
import type { FundingState, ReadinessRule } from "./types";

export const READINESS_ENGINE_VERSION = "readiness-v1";

/** pass / fail are scored; not_applicable and unverified are excluded from the denominator. */
export type RuleOutcome = "pass" | "fail" | "not_applicable" | "unverified";

export interface RuleResult {
  rule_key: string;
  label: string;
  category: string;
  weight: number;
  required: boolean;
  outcome: RuleOutcome;
  why_it_matters: string | null;
  /** Which setup step fixes this rule, when one exists. */
  fix_step: SetupStepKey | null;
}

export type ReadinessStatus = "not_ready" | "building" | "package_ready";

export interface ReadinessResult {
  engine_version: string;
  overall_score: number; // 0–100, rounded to 1 decimal
  status: ReadinessStatus;
  category_scores: Record<string, { earned: number; possible: number; score: number }>;
  rule_results: RuleResult[];
  next_best_action: { rule_key: string; label: string; fix_step: SetupStepKey | null } | null;
}

export type SetupStepKey =
  | "business"
  | "contact"
  | "presence"
  | "owners"
  | "banking"
  | "goal"
  | "disclosures"
  | "documents";

const REVENUE_FRESH_DAYS = 120;

type Evaluator = (s: FundingState, now: Date) => RuleOutcome;

/** Unanswered counts as a gap (fail); before the column exists the rule can't be checked (unverified). */
function attested(s: FundingState, key: PresenceKey): RuleOutcome {
  const a = attestationsOf(s);
  if (a === undefined) return "unverified";
  return presenceOutcome(a, key) === "pass" ? "pass" : "fail";
}

const present = (v: string | null | undefined) => (v != null && v.trim().length > 0 ? "pass" : "fail");

/**
 * Explicit rule_key vocabulary. A rule_key that isn't listed here evaluates
 * to "unverified" — it is never guessed as passing.
 */
const EVALUATORS: Record<string, { fn: Evaluator; fix: SetupStepKey | null }> = {
  legal_name_present: { fn: (s) => present(s.business.legal_name), fix: "business" },
  entity_type_present: { fn: (s) => present(s.business.entity_type), fix: "business" },
  business_address_present: {
    fn: (s) =>
      [s.business.address_line1, s.business.city, s.business.state, s.business.zip_code].every(
        (v) => present(v) === "pass",
      )
        ? "pass"
        : "fail",
    fix: "contact",
  },
  ein_on_file: { fn: (s) => present(s.business.ein), fix: "business" },
  bank_account_active: { fn: (s) => (s.business.bank_account_status === "active" ? "pass" : "fail"), fix: "banking" },
  business_phone_present: { fn: (s) => present(s.business.business_phone), fix: "contact" },
  business_email_present: { fn: (s) => present(s.business.business_email), fix: "contact" },
  website_present: { fn: (s) => present(s.business.website_url), fix: "contact" },
  entity_documents_complete: {
    fn: (s) => {
      const formation = s.documents.find((d) => d.document_type === "formation_documents");
      const ein = s.documents.find((d) => d.document_type === "ein_confirmation_letter");
      return isProvided(formation) && isProvided(ein) ? "pass" : "fail";
    },
    fix: "documents",
  },
  revenue_data_present: {
    fn: (s, now) => {
      const snap = s.snapshot;
      if (!snap) return "fail";
      if (snap.monthly_revenue == null && snap.annual_revenue == null) return "fail";
      const ageDays = (now.getTime() - new Date(snap.as_of_date).getTime()) / 86_400_000;
      return ageDays <= REVENUE_FRESH_DAYS ? "pass" : "fail";
    },
    fix: "banking",
  },
  guarantor_documented: {
    fn: (s) => (s.owners.some((o) => o.full_name.trim() && (o.ownership_percent ?? 0) > 0) ? "pass" : "fail"),
    fix: "owners",
  },
  funding_purpose_documented: {
    fn: (s) =>
      s.profile?.funding_goal_type && (s.profile.funding_purpose ?? "").trim().length >= 10 ? "pass" : "fail",
    fix: "goal",
  },
  compliance_certifications_accepted: {
    fn: (s) => (allDisclosuresAccepted(s.consents) ? "pass" : "fail"),
    fix: "disclosures",
  },
  // Bankability foundation (2026-11-12). Rows are added by migration
  // 20261112_bankability_foundation.sql; until then these keys are simply not evaluated.
  business_email_on_domain: {
    fn: (s) => {
      const d = emailDomain(s.business.business_email);
      return d && !FREE_EMAIL_DOMAINS.has(d) ? "pass" : "fail";
    },
    fix: "contact",
  },
  identity_aligned: { fn: (s) => (isIdentityAligned(checkAlignment(s.business)) ? "pass" : "fail"), fix: "contact" },
  duns_on_file: { fn: (s) => present(s.business.duns_number), fix: "business" },
  // Lender-ready presence (self-attested; migration 20261112b_lender_ready_presence.sql).
  business_phone_dedicated: { fn: (s) => attested(s, "phone_line_type"), fix: "presence" },
  listed_411: { fn: (s) => attested(s, "listed_411"), fix: "presence" },
  google_business_profile: { fn: (s) => attested(s, "google_business_profile"), fix: "presence" },
  bank_account_legal_name: { fn: (s) => attested(s, "bank_account_legal_name"), fix: "presence" },
  state_good_standing: { fn: (s) => attested(s, "state_good_standing"), fix: "presence" },
  licenses_current: { fn: (s) => attested(s, "licenses_current"), fix: "presence" },
  // Not integrated yet — personal credit pull and application-velocity tracking
  // are future modules. Excluded from the score rather than assumed.
  credit_qualification_tracked: { fn: () => "not_applicable", fix: null },
  application_velocity_tracked: { fn: () => "not_applicable", fix: null },
};

export function evaluateReadiness(state: FundingState, rules: ReadinessRule[], now: Date): ReadinessResult {
  const active = rules.filter((r) => r.active).sort((a, b) => a.sort_order - b.sort_order);

  const rule_results: RuleResult[] = active.map((r) => {
    const ev = EVALUATORS[r.rule_key];
    return {
      rule_key: r.rule_key,
      label: r.label,
      category: r.category,
      weight: Number(r.weight),
      required: r.required,
      outcome: ev ? ev.fn(state, now) : "unverified",
      why_it_matters: r.why_it_matters,
      fix_step: ev?.fix ?? null,
    };
  });

  const scored = rule_results.filter((r) => r.outcome === "pass" || r.outcome === "fail");
  const possible = scored.reduce((sum, r) => sum + r.weight, 0);
  const earned = scored.filter((r) => r.outcome === "pass").reduce((sum, r) => sum + r.weight, 0);
  const overall_score = possible > 0 ? Math.round((earned / possible) * 1000) / 10 : 0;

  const category_scores: ReadinessResult["category_scores"] = {};
  for (const r of scored) {
    const c = (category_scores[r.category] ??= { earned: 0, possible: 0, score: 0 });
    c.possible += r.weight;
    if (r.outcome === "pass") c.earned += r.weight;
  }
  for (const c of Object.values(category_scores)) {
    c.score = c.possible > 0 ? Math.round((c.earned / c.possible) * 1000) / 10 : 0;
  }

  const requiredFailing = rule_results.filter((r) => r.required && r.outcome === "fail");
  const status: ReadinessStatus =
    requiredFailing.length === 0 && overall_score >= 80 ? "package_ready" : overall_score >= 50 ? "building" : "not_ready";

  const firstGap = requiredFailing[0] ?? rule_results.find((r) => r.outcome === "fail") ?? null;

  return {
    engine_version: READINESS_ENGINE_VERSION,
    overall_score,
    status,
    category_scores,
    rule_results,
    next_best_action: firstGap ? { rule_key: firstGap.rule_key, label: firstGap.label, fix_step: firstGap.fix_step } : null,
  };
}
