import type { FundingDocument, FundingGoalType } from "./types";

type Category = FundingDocument["category"];
type Classification = "required" | "conditionally_required" | "optional";

export interface DocumentRequirement {
  documentType: string;
  category: Category;
  label: string;
  help: string;
  classification: Classification;
  /** Only requested for these goals; omitted = all goals. */
  goals?: FundingGoalType[];
}

/**
 * Baseline document checklist. `category` values match the
 * funding_documents_category_check constraint in Core_Eco.
 */
export const DOCUMENT_REQUIREMENTS: DocumentRequirement[] = [
  {
    documentType: "formation_documents",
    category: "entity_formation",
    label: "Formation documents",
    help: "Articles of Organization / Incorporation filed with your state.",
    classification: "required",
  },
  {
    documentType: "ein_confirmation_letter",
    category: "ein_irs",
    label: "EIN confirmation letter",
    help: "IRS CP-575 or 147C letter showing your business EIN.",
    classification: "required",
  },
  {
    documentType: "bank_statements_3mo",
    category: "banking",
    label: "Last 3 months of business bank statements",
    help: "Full statements (all pages) from your business checking account.",
    classification: "required",
  },
  {
    documentType: "owner_id",
    category: "owner_guarantor",
    label: "Owner government ID",
    help: "Driver's license or passport for each owner with 20%+ ownership.",
    classification: "required",
  },
  {
    documentType: "business_tax_return",
    category: "tax",
    label: "Most recent business tax return",
    help: "If your business has filed one. Newer businesses can skip this.",
    classification: "conditionally_required",
  },
  {
    documentType: "equipment_quote",
    category: "equipment",
    label: "Equipment quote or spec sheet",
    help: "Dealer/seller quote with year, make, model, VIN/serial, and price.",
    classification: "required",
    goals: ["equipment"],
  },
  {
    documentType: "customer_contracts",
    category: "contracts_lois",
    label: "Customer contracts or letters of intent",
    help: "Signed work commitments that show where repayment comes from.",
    classification: "optional",
  },
  {
    documentType: "business_plan",
    category: "projections",
    label: "Business plan or projections",
    help: "Especially important for startups and businesses under 2 years old.",
    classification: "conditionally_required",
    goals: ["startup"],
  },
];

export function requirementsForGoal(goal: string | null | undefined): DocumentRequirement[] {
  return DOCUMENT_REQUIREMENTS.filter((r) => !r.goals || (goal != null && r.goals.includes(goal as FundingGoalType)));
}

export const PROVIDED_STATUSES = new Set(["uploaded", "under_review", "verified"]);

export function isProvided(doc: Pick<FundingDocument, "status"> | undefined): boolean {
  return !!doc && PROVIDED_STATUSES.has(doc.status);
}

export const MAX_UPLOAD_BYTES = 10 * 1024 * 1024;
export const ALLOWED_UPLOAD_TYPES = new Set([
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/heic",
  "image/heif",
  "image/webp",
]);
