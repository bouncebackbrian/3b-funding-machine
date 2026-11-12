import { allDisclosuresAccepted } from "./disclosures";
import { isProvided, requirementsForGoal } from "./documents";
import type { SetupStepKey } from "./readiness";
import { attestationsOf, presenceComplete } from "./presence";
import type { FundingState } from "./types";

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
  { key: "business", title: "Business foundation", summary: "Legal name, entity, EIN", blocking: true },
  { key: "contact", title: "Contact & location", summary: "Address, phone, email, website", blocking: true },
  { key: "presence", title: "Lender-ready presence", summary: "Business phone, 411, Google listing, good standing", blocking: false },
  { key: "owners", title: "Owners & guarantors", summary: "Who owns the business", blocking: true },
  { key: "banking", title: "Banking & revenue", summary: "Business bank account and current numbers", blocking: true },
  { key: "goal", title: "Funding goal", summary: "What you need, how much, and why", blocking: true },
  { key: "disclosures", title: "Disclosures", summary: "Required certifications", blocking: true },
  { key: "documents", title: "Documents", summary: "Upload what lenders ask for", blocking: false },
];

export type StepStatus = "complete" | "in_progress" | "not_started";

export function stepStatus(key: SetupStepKey, s: FundingState): StepStatus {
  const b = s.business;
  switch (key) {
    case "business":
      return b.legal_name && b.entity_type && b.formation_state ? "complete" : "in_progress";
    case "contact": {
      const fields = [b.address_line1, b.city, b.state, b.zip_code, b.business_phone, b.business_email];
      const filled = fields.filter((v) => v && v.trim()).length;
      return filled === fields.length ? "complete" : filled > 0 ? "in_progress" : "not_started";
    }
    case "presence": {
      const a = attestationsOf(s);
      return presenceComplete(a) ? "complete" : a && Object.keys(a).length ? "in_progress" : "not_started";
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
      const required = requirementsForGoal(s.profile?.funding_goal_type).filter((r) => r.classification === "required");
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
