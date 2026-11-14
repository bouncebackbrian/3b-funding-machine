import type { Database } from "@/lib/supabase/database.types";

type Tables = Database["public"]["Tables"];
export type Row<T extends keyof Tables> = Tables[T]["Row"];

export type Business = Row<"businesses">;
export type FundingProfile = Row<"funding_profiles">;
export type FundingOwner = Row<"funding_owners">;
export type FinancialSnapshot = Row<"funding_financial_snapshots">;
export type FundingConsent = Row<"funding_consents">;
export type FundingDocument = Row<"funding_documents">;
export type EquipmentRequest = Row<"funding_equipment_requests">;
export type ReadinessRule = Row<"funding_readiness_rules">;
export type ReadinessSnapshot = Row<"funding_readiness_snapshots">;
export type Strategy = Row<"funding_strategies">;
export type StrategyStep = Row<"funding_strategy_steps">;

/** Everything the sequence needs to know about one business, loaded once per request. */
export interface FundingState {
  business: Business;
  profile: FundingProfile | null;
  owners: FundingOwner[];
  snapshot: FinancialSnapshot | null;
  consents: FundingConsent[];
  documents: FundingDocument[];
  equipment: EquipmentRequest | null;
  readiness: ReadinessSnapshot | null;
  strategy: Strategy | null;
  steps: StrategyStep[];
}

export const FUNDING_GOAL_TYPES = [
  { value: "equipment", label: "Equipment / vehicle financing" },
  { value: "working_capital", label: "Working capital" },
  { value: "line_of_credit", label: "Business line of credit" },
  { value: "business_credit", label: "Build business credit" },
  { value: "real_estate", label: "Commercial real estate" },
  { value: "startup", label: "Startup funding" },
  { value: "other", label: "Something else" },
] as const;
export type FundingGoalType = (typeof FUNDING_GOAL_TYPES)[number]["value"];

export const ENTITY_TYPES = [
  "LLC",
  "Corporation",
  "S-Corp",
  "Partnership",
  "Sole Proprietorship",
  "Non-Profit",
  "Other",
] as const;

export const BANK_ACCOUNT_STATUSES = [
  { value: "active", label: "Yes — open and in use" },
  { value: "in_progress", label: "Opening one now" },
  { value: "none", label: "Not yet" },
] as const;

export const EQUIPMENT_CATEGORIES = [
  { value: "super_dump", label: "Super dump" },
  { value: "standard_dump_truck", label: "Dump truck" },
  { value: "water_truck", label: "Water truck" },
  { value: "tractor", label: "Semi tractor" },
  { value: "trailer", label: "Trailer" },
  { value: "excavator", label: "Excavator" },
  { value: "loader", label: "Loader" },
  { value: "skid_steer", label: "Skid steer" },
  { value: "other", label: "Other equipment" },
] as const;
