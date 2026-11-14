import type { FundingState } from "./types";

export const CAPITAL_PREP = [
  "Keep operating cash available for payroll, taxes, bills, and expected repairs. Track unrestricted cash separately from pledged deposits.",
  "Build a dated asset list with the legal owner, current supported value, and any liens. Include eligible business deposits, certificates, equipment, and collectible invoices without double-counting proceeds or collateral.",
  "Show what will repay the requested financing. Compare a conservative cash-flow estimate with existing and proposed payments. Ask for business-only offers first, then verify any guarantee, collateral, fees, and repayment terms in writing.",
];

const truckingTypes = new Set(["owner_op", "carrier", "brokerage", "fleet_management"]);
const truckEquipment = new Set(["super_dump", "standard_dump_truck", "water_truck", "tractor"]);

export function isTruckingBusiness(state: FundingState): boolean {
  return truckingTypes.has(state.business.business_type) ||
    /^(484|488510)/.test(state.business.naics_code ?? "") ||
    (state.profile?.funding_goal_type === "equipment" && truckEquipment.has(state.equipment?.equipment_category ?? ""));
}

export function truckingPreparation(state: FundingState): string[] {
  if (!isTruckingBusiness(state)) return [];

  return [
    "Move dedicated work lines and dispatch or data service to a business account where practical. Keep the contract and itemized bills. Track the business portion of shared lines.",
    "Record fuel, tolls, maintenance, tires, registration, vehicle payments, insurance, and work cellular expenses in Fleet Commander or Expense Tracker. Use one source per transaction. Upload a dated summary for this business to Funding Machine. Keep titles or leases and lien balances for the asset list.",
    "Confirm insurance with an agent familiar with motor carriers. Check the named insured, equipment, operations, and any required filings. Keep current coverage and renewal costs on file.",
    "Compare business fuel cards for route coverage, fees, payment timing, collateral, personal guarantee, and bureau reporting. Choose terms the company can cover during a slow settlement week.",
    "Optional IUL review for an existing indexed universal life policy. Request the current insurer statement and confirm ownership, available loan value, loan rate, and policy impact with a licensed insurance professional. List only verified business-owned value as a company asset. If the owner funds the LLC personally, document it separately.",
  ];
}
