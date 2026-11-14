import { CREDIT_REVIEW, matchFundingGoal } from "./goal-fit";
import { CAPITAL_PREP, truckingPreparation } from "./capital-prep";
import { isProvided, requirementsForFunding } from "./documents";
import type { ReadinessResult } from "./readiness";
import { FUNDING_GOAL_TYPES, type FundingState } from "./types";

export const PACKET_TITLE = "3B Funding Machine Bankable Readiness Packet";
export const PACKET_NOTICE = "This packet organizes your financing request and supporting evidence. Confirm the lender’s current requirements before submitting. The lender makes the credit decision.";

export const BUSINESS_CREDIT_EXAMPLES = [
  {
    name: "Grainger",
    use: "Tools, maintenance, and safety supplies. Review Net 30 terms for established credit accounts.",
    url: "https://www.grainger.com/content/mc/policies/terms-of-sale",
  },
  {
    name: "Uline",
    use: "Packaging and shipping supplies. Net 30 billing is available to qualified businesses.",
    url: "https://www.uline.com/CustomerService/ULINE_FAQ_Ans?FAQ_ID=104&Search=net",
  },
  {
    name: "Fleet fuel cards",
    use: "Fuel for business vehicles. Compare network coverage, fees, billing cadence, spend controls, and any guarantee.",
    url: "https://www.wexinc.com/products/fuel-cards-fleet/select/business-gas-card/wex-fleet-card/",
  },
];

export const CASH_FLOW_GUIDANCE = "Deposit real customer receipts into business checking and pay ordinary business expenses from that account. Reconcile statements against invoices and payment records monthly. Record owner contributions, loan proceeds, and transfers separately from sales. Count each customer payment once.";

export const PUBLIC_LISTING_GUIDANCE = "For eligible businesses, claim or verify Google Business Profile. Use a service area and hide the street address on Google if customers aren’t served at that address. Check 411 availability with the phone provider. Compare public details with the Company page and record intentional differences in the private packet.";

export const BUSINESS_CREDIT_GUIDANCE = "Choose accounts for purchases the business already needs and can pay on time. Ask the provider in writing whether it reports positive payment history, to which business bureaus, and how often. Keep invoices and payment records and check the business report before marking a trade line as reporting.";

const money = (value: number | null | undefined) =>
  value == null ? "Not provided" : new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);

const outcomes = {
  pass: "On file",
  fail: "Action needed",
  unverified: "Needs verification",
  not_applicable: "Not applicable",
} as const;

export function buildPacket(state: FundingState, readiness: ReadinessResult, now: Date) {
  const { business, profile, snapshot, equipment } = state;
  const goal = FUNDING_GOAL_TYPES.find((item) => item.value === profile?.funding_goal_type)?.label;
  const documents = requirementsForFunding(state).map((requirement) => {
    const record = state.documents.find((document) => document.document_type === requirement.documentType);
    const path = record?.storage_path;
    const prefix = `${business.id}/${requirement.documentType}/`;
    const hasFile = isProvided(record) && path?.startsWith(prefix) && /^[^/]+$/.test(path.slice(prefix.length));
    const status = hasFile
      ? "On file"
      : record?.requirement_classification === "not_applicable" && requirement.classification !== "required"
        ? "Client marked not applicable"
        : record?.status === "rejected"
          ? "Replacement needed"
          : "Missing";
    const extension = path?.match(/\.(pdf|jpe?g|png|heic|heif|webp)$/i)?.[0]?.toLowerCase() ?? "";
    return {
      documentType: requirement.documentType,
      label: requirement.label,
      help: requirement.help,
      classification: requirement.classification.replaceAll("_", " "),
      status,
      path: hasFile ? path : null,
      archiveName: `documents/${requirement.documentType}${extension}`,
    };
  });

  return {
    date: new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeZone: "America/Los_Angeles" }).format(now),
    businessName: business.legal_name,
    contact: [
      ["Business location", [
        business.address_line1,
        business.address_line2,
        [business.city, [business.state, business.zip_code].filter(Boolean).join(" ")].filter(Boolean).join(", "),
      ].filter(Boolean).join("\n") || "Not provided"],
      ["Business phone", business.business_phone || "Not provided"],
      ["Business email", business.business_email || "Not provided"],
      ["Business website", business.website_url || "Not provided"],
      ["NAICS code on file", business.naics_code || "Not provided"],
    ],
    funding: [
      ["Entity", [business.entity_type, business.formation_state].filter(Boolean).join(" · ")],
      ["Funding goal", goal ?? "Not provided"],
      ["Estimated amount requested", money(profile?.target_amount)],
      ["Use of funds", profile?.funding_purpose ?? "Not provided"],
      ["Target timing", profile?.desired_timeline ?? "Not provided"],
      ...(equipment && profile?.funding_goal_type === "equipment"
        ? [["Equipment", [equipment.equipment_year, equipment.equipment_subtype].filter(Boolean).join(" ")], ["Estimated equipment price", money(equipment.estimated_purchase_price)]]
        : []),
    ],
    goalFit: matchFundingGoal(state, readiness, documents.find((doc) => doc.documentType === "business_credit_report")?.status ?? "Missing"),
    finances: [
      ["Figures as of", snapshot?.as_of_date ?? "Not provided"],
      ["Monthly business revenue", money(snapshot?.monthly_revenue)],
      ["Annual business revenue", money(snapshot?.annual_revenue)],
      ["Existing business debt", money(snapshot?.existing_business_debt)],
      ["Business checking balance", money(snapshot?.checking_balance)],
      ["Other unrestricted business cash on hand", money(snapshot?.cash_on_hand)],
    ],
    checks: readiness.rule_results.map((rule) => ({
      label: rule.label,
      status: outcomes[rule.outcome],
      fix: rule.fix_step,
    })),
    documents,
    capitalPreparation: CAPITAL_PREP,
    truckingPreparation: truckingPreparation(state),
    lenderChecklist: [
      "Compare the business address and phone in this packet with the supporting documents that show them. Explain legitimate differences, such as a separate registered-agent or mailing address.",
      "Share the public Company page with the banker so they can review the business name, services, location, phone, and email. Send financials and supporting documents through the lender’s secure channel.",
      "Confirm required ownership records, operating agreement, licenses, and good-standing evidence with the lender.",
      "Update the business plan for this request. Explain what the company does, who it serves, who runs it, the amount requested, how it will be used, and what will repay it.",
      "Break down the use of funds by item and identify the source of any owner contribution.",
      "Refresh statements through the latest closed month, reconcile them with the books, and confirm the required statement periods with the lender.",
      "Check that every lender-requested item is attached or flagged for follow-up. Have the owner or authorized representative review the packet and submit it through the lender’s secure channel.",
      "Document repayment from business cash flow. Include current financial statements or cash-flow projections with assumptions as applicable.",
      "Confirm the lender’s requested periods for statements and returns, plus any debt schedule, collateral, or lender-specific forms.",
    ],
  };
}

export type BankablePacket = ReturnType<typeof buildPacket>;

export function renderPacketSummary(packet: BankablePacket, evidence: string[] = []) {
  return [
    PACKET_TITLE, packet.businessName, packet.date, PACKET_NOTICE,
    "", "BUSINESS CONTACT", ...packet.contact.map(([label, value]) => `${label}: ${value}`),
    "", "FUNDING REQUEST", ...packet.funding.map(([label, value]) => `${label}: ${value}`),
    ...(packet.goalFit ? [
      "", "FINANCING OPTIONS FOR THE REQUEST",
      packet.goalFit.type,
      `Original requested amount: ${money(packet.goalFit.amount)}`,
      `3B readiness score: ${packet.goalFit.score}/100`,
      packet.goalFit.readinessAction,
      packet.goalFit.evidence,
      CREDIT_REVIEW,
      ...packet.goalFit.review.map(([label, value]) => `${label}: ${value}`),
      ...packet.goalFit.paths.map(({ title, detail }) => `- ${title}: ${detail}`),
      "The score measures preparation. Verify a no-personal-guarantee offer and confirm affordable payments before estimating a financeable amount.",
    ] : []),
    "", "CLIENT-REPORTED FINANCIALS", ...packet.finances.map(([label, value]) => `${label}: ${value}`),
    "", "BANKABILITY CHECKLIST", "On file means recorded in the portal. 3B Funding Desk eligibility requires a separate evidence review.",
    ...packet.checks.map(({ label, status }) => `- ${label} — ${status}`),
    "", "DOCUMENT CHECKLIST", ...packet.documents.map(({ label, status, classification }) => `- ${label} — ${status} (${classification})`),
    ...(evidence.length ? ["", "ATTACHMENTS", ...evidence] : []),
    "", "CONFIRM WITH YOUR LENDER", ...packet.lenderChecklist.map((item) => `- ${item}`),
    "", "ASSETS AND REPAYMENT CAPACITY", ...packet.capitalPreparation.map((item) => `- ${item}`),
    ...(packet.truckingPreparation.length ? ["", "TRUCKING OPERATING CHECKLIST", ...packet.truckingPreparation.map((item) => `- ${item}`)] : []),
    "", "PUBLIC BUSINESS LISTINGS", PUBLIC_LISTING_GUIDANCE,
    "", "BUSINESS CASH FLOW", CASH_FLOW_GUIDANCE,
    "", "BUSINESS PAYMENT HISTORY", BUSINESS_CREDIT_GUIDANCE,
    ...BUSINESS_CREDIT_EXAMPLES.map(({ name, use, url }) => `- ${name} — ${use} ${url}`),
    "",
  ].join("\n");
}
