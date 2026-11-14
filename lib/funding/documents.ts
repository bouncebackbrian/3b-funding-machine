import { isTruckingBusiness } from "./capital-prep";
import type { FundingDocument, FundingGoalType, FundingState } from "./types";

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
  truckingOnly?: boolean;
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
    label: "Current business bank statements",
    help: "Upload full statements for the latest three closed months. Confirm the exact period with your lender and include every page.",
    classification: "required",
  },
  {
    documentType: "owner_id",
    category: "owner_guarantor",
    label: "Owner government ID",
    help: "Confirm whose ID the lender needs and how it should be submitted securely.",
    classification: "required",
  },
  {
    documentType: "operating_agreement",
    category: "entity_formation",
    label: "Operating agreement or ownership records",
    help: "Use the current signed agreement or other ownership records applicable to your entity.",
    classification: "conditionally_required",
  },
  {
    documentType: "financial_statements",
    category: "financial_statements",
    label: "Current financial statements",
    help: "Prepare year-to-date profit and loss, balance sheet, and debt schedule as applicable.",
    classification: "conditionally_required",
  },
  {
    documentType: "business_asset_register",
    category: "financial_statements",
    label: "Existing asset register",
    help: "Upload a dated list of business-owned cash, deposits, equipment, or receivables, with supported value, liens, and unrestricted or pledged status. Label personal or leased property separately.",
    classification: "optional",
  },
  {
    documentType: "trucking_expense_summary",
    category: "financial_statements",
    label: "Trucking expense summary",
    help: "Upload a dated PDF summary from Fleet Commander or Expense Tracker for this business. If combining both sources, count each transaction once.",
    classification: "optional",
    truckingOnly: true,
  },
  {
    documentType: "repayment_plan",
    category: "projections",
    label: "Use-of-funds breakdown and repayment plan",
    help: "List major costs, owner contribution, cash-flow assumptions, and expected repayment source.",
    classification: "conditionally_required",
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
    label: "Current business plan",
    help: "Describe the company, customers, owners, operations, funding request, use of funds, and expected repayment. Date the plan and label projections with their assumptions.",
    classification: "conditionally_required",
  },
];

export function requirementsForFunding(state: FundingState): DocumentRequirement[] {
  const goal = state.profile?.funding_goal_type;
  const trucking = isTruckingBusiness(state) || state.documents.some((doc) => doc.document_type === "trucking_expense_summary");
  return DOCUMENT_REQUIREMENTS.filter((r) =>
    (!r.truckingOnly || trucking) && (!r.goals || (goal != null && r.goals.includes(goal as FundingGoalType))),
  );
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
