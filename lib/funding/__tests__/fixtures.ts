import { DISCLOSURES } from "../disclosures";
import type { Business, FundingState, ReadinessRule } from "../types";

export const NOW = new Date("2026-11-07T12:00:00Z");

/** Mirrors the 15 live rows in Core_Eco funding_readiness_rules (2026-11-07). */
export const LIVE_RULES: ReadinessRule[] = (
  [
    ["legal_name_present", "identity_entity", 5, true, 10],
    ["entity_type_present", "identity_entity", 5, true, 20],
    ["business_address_present", "business_address", 8, true, 30],
    ["ein_on_file", "ein_registration", 10, true, 40],
    ["bank_account_active", "banking", 10, true, 50],
    ["business_phone_present", "business_contact", 3, true, 60],
    ["business_email_present", "business_contact", 3, true, 70],
    ["website_present", "digital_presence", 5, false, 80],
    ["entity_documents_complete", "business_documentation", 8, true, 90],
    ["revenue_data_present", "revenue_financials", 10, true, 100],
    ["guarantor_documented", "guarantor_readiness", 8, true, 110],
    ["credit_qualification_tracked", "credit_qualification", 5, false, 120],
    ["funding_purpose_documented", "funding_purpose", 8, true, 130],
    ["compliance_certifications_accepted", "compliance", 5, true, 140],
    ["application_velocity_tracked", "application_velocity", 2, false, 150],
  ] as const
).map(([rule_key, category, weight, required, sort_order]) => ({
  id: rule_key,
  rule_key,
  category,
  label: rule_key.replace(/_/g, " "),
  why_it_matters: `why ${rule_key}`,
  weight: String(weight) as unknown as number,
  required,
  active: true,
  sort_order,
  created_at: NOW.toISOString(),
  updated_at: NOW.toISOString(),
}));

const baseBusiness = {
  id: "biz-1",
  legal_name: "Acme Hauling LLC",
  entity_type: null,
  formation_state: null,
  ein: null,
  address_line1: null,
  city: null,
  state: null,
  zip_code: null,
  business_phone: null,
  business_email: null,
  website_url: null,
  bank_account_status: "none",
} as unknown as Business;

export function emptyState(overrides: Partial<Business> = {}): FundingState {
  return {
    business: { ...baseBusiness, ...overrides },
    profile: null,
    owners: [],
    snapshot: null,
    consents: [],
    documents: [],
    equipment: null,
    readiness: null,
    strategy: null,
    steps: [],
  };
}

export function completeState(): FundingState {
  const s = emptyState({
    entity_type: "LLC",
    formation_state: "CA",
    ein: "12-3456789",
    address_line1: "1 Main St",
    city: "Temecula",
    state: "CA",
    zip_code: "92590",
    business_phone: "555-555-5555",
    business_email: "ops@acme.com",
    website_url: "https://acme.com",
    bank_account_status: "active",
  });
  return {
    ...s,
    profile: {
      id: "p1",
      business_id: "biz-1",
      status: "building",
      funding_goal_type: "equipment",
      target_amount: 150000,
      funding_purpose: "Buy a used super dump for a signed hauling contract",
      desired_timeline: null,
      onboarding_completed_at: null,
      notes: null,
      created_at: NOW.toISOString(),
      updated_at: NOW.toISOString(),
      created_by: null,
    },
    owners: [{ id: "o1", full_name: "Jane Owner", ownership_percent: 100 } as FundingState["owners"][number]],
    snapshot: { as_of_date: "2026-11-01", monthly_revenue: 15000, annual_revenue: 180000 } as FundingState["snapshot"],
    consents: DISCLOSURES.map(
      (d) => ({ disclosure_type: d.type, disclosure_version: d.version, accepted: true, signer_name: "Example Owner", accepted_at: NOW.toISOString() }) as FundingState["consents"][number],
    ),
    documents: [
      { document_type: "formation_documents", status: "uploaded" },
      { document_type: "ein_confirmation_letter", status: "verified" },
    ] as FundingState["documents"],
  };
}
