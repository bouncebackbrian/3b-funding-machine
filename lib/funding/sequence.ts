import { allDisclosuresAccepted } from "./disclosures";
import { isProvided, requirementsForFunding } from "./documents";
import type { SetupStepKey } from "./readiness";
import type { Business, FundingState } from "./types";

export interface SetupStep {
  key: SetupStepKey;
  title: string;
  summary: string;
  /** Blocking steps must be done before the readiness review; documents can trail. */
  blocking: boolean;
}

/**
 * The funding setup sequence, in order. Each step saves straight to Core_Eco;
 * a user can leave and resume anywhere.
 */
export const SETUP_STEPS: SetupStep[] = [
  { key: "contact", title: "Business location & phone", summary: "Physical business address and phone", blocking: true },
  { key: "business", title: "LLC formation & EIN", summary: "Entity details and federal EIN", blocking: true },
  { key: "owners", title: "Owners & guarantors", summary: "Who owns the business", blocking: true },
  { key: "banking", title: "Banking & revenue", summary: "Business bank account and current numbers", blocking: true },
  { key: "goal", title: "Funding worksheet", summary: "What you need, how much, and why", blocking: true },
  { key: "disclosures", title: "Sign disclosures", summary: "Read, acknowledge, and electronically sign", blocking: true },
  { key: "documents", title: "Business Vault", summary: "Upload and update supporting documents", blocking: false },
];

export type StepStatus = "complete" | "in_progress" | "not_started";

export function hasBusinessLocation(business: Business) {
  return [business.address_line1, business.city, business.state, business.zip_code, business.business_phone].every((value) => value?.trim());
}

export function stepStatus(key: SetupStepKey, s: FundingState): StepStatus {
  const b = s.business;
  switch (key) {
    case "business":
      return b.legal_name && b.entity_type && b.formation_state ? "complete" : "in_progress";
    case "contact": {
      const fields = [b.address_line1, b.city, b.state, b.zip_code, b.business_phone];
      const filled = fields.filter((v) => v && v.trim()).length;
      return hasBusinessLocation(b) ? "complete" : filled > 0 ? "in_progress" : "not_started";
    }
    case "owners":
      return s.owners.length > 0 ? "complete" : "not_started";
    case "banking":
      return s.snapshot ? "complete" : b.bank_account_status !== "none" ? "in_progress" : "not_started";
    case "goal":
      return s.profile?.funding_goal_type && s.profile.target_amount != null && s.profile.funding_purpose
        ? "complete"
        : "not_started";
    case "disclosures":
      return allDisclosuresAccepted(s.consents) ? "complete" : s.consents.length > 0 ? "in_progress" : "not_started";
    case "documents": {
      const required = requirementsForFunding(s).filter((r) => r.classification === "required");
      const provided = required.filter((r) => isProvided(s.documents.find((d) => d.document_type === r.documentType)));
      return provided.length === required.length ? "complete" : provided.length > 0 ? "in_progress" : "not_started";
    }
  }
}

export function sequenceProgress(s: FundingState) {
  const statuses = SETUP_STEPS.map((step) => ({ ...step, status: stepStatus(step.key, s) }));
  const complete = statuses.filter((x) => x.status === "complete").length;
  const nextStep = statuses.find((x) => x.status !== "complete") ?? null;
  const blockingDone = statuses.filter((x) => x.blocking).every((x) => x.status === "complete");
  return { statuses, complete, total: statuses.length, nextStep, blockingDone };
}

export function stepIndex(key: SetupStepKey): number {
  return SETUP_STEPS.findIndex((s) => s.key === key);
}

export function nextStepKey(key: SetupStepKey): SetupStepKey | null {
  return SETUP_STEPS[stepIndex(key) + 1]?.key ?? null;
}

export function isSetupStepKey(v: string): v is SetupStepKey {
  return SETUP_STEPS.some((s) => s.key === v);
}
