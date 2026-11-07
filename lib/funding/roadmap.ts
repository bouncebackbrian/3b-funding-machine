import type { ReadinessResult } from "./readiness";
import type { FundingState } from "./types";

export const ROADMAP_ENGINE_VERSION = "roadmap-v1";

export interface PlannedStep {
  sequence: number;
  category: "foundation" | "compliance" | "documentation" | "banking" | "credit" | "application_prep" | "funding";
  title: string;
  description: string;
  action_url: string | null;
  dependency_sequence: number | null;
}

/** How to fix each readiness gap. Internal links go to the setup step; external links are official sources only. */
const GAP_PLAYBOOK: Record<string, { category: PlannedStep["category"]; title: string; how: string; url: string | null }> = {
  legal_name_present: { category: "foundation", title: "Add your legal business name", how: "Use the exact name on your state filing.", url: "/app/setup/business" },
  entity_type_present: { category: "foundation", title: "Confirm your entity type", how: "LLC, corporation, etc. — as filed with your state.", url: "/app/setup/business" },
  ein_on_file: { category: "foundation", title: "Get an EIN and add it to your profile", how: "EINs are free from the IRS and can be issued online in one session.", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" },
  business_address_present: { category: "foundation", title: "Add a verifiable business address", how: "Use a real physical address lenders can verify.", url: "/app/setup/contact" },
  business_phone_present: { category: "foundation", title: "Add a business phone number", how: "A dedicated business line, listed consistently everywhere.", url: "/app/setup/contact" },
  business_email_present: { category: "foundation", title: "Add a business email", how: "Ideally on your own domain, not a personal inbox.", url: "/app/setup/contact" },
  website_present: { category: "foundation", title: "Publish a basic business website", how: "Even a one-page site with your name, services, and contact info helps legitimacy checks.", url: "/app/setup/contact" },
  bank_account_active: { category: "banking", title: "Open a dedicated business checking account", how: "Run all business income and expenses through it — lenders underwrite from these statements.", url: "/app/setup/banking" },
  revenue_data_present: { category: "banking", title: "Update your revenue snapshot", how: "Enter current monthly and annual revenue from your actual records.", url: "/app/setup/banking" },
  guarantor_documented: { category: "foundation", title: "Add owner / guarantor details", how: "List every owner and their ownership percentage.", url: "/app/setup/owners" },
  funding_purpose_documented: { category: "application_prep", title: "Document your funding purpose", how: "A clear, specific business use of funds.", url: "/app/setup/goal" },
  compliance_certifications_accepted: { category: "compliance", title: "Accept the required certifications", how: "Required before 3B prepares anything for a lender.", url: "/app/setup/disclosures" },
  entity_documents_complete: { category: "documentation", title: "Upload formation and EIN documents", how: "Articles of Organization/Incorporation and your IRS EIN letter.", url: "/app/setup/documents" },
};

const GOAL_STEPS: Record<string, Omit<PlannedStep, "sequence" | "dependency_sequence">[]> = {
  equipment: [
    { category: "application_prep", title: "Get a written equipment quote", description: "Year, make, model, VIN/serial, mileage or hours, and price from the seller. Lenders price the deal off the specific unit.", action_url: "/app/setup/documents" },
    { category: "application_prep", title: "Confirm your down payment funds", description: "Many equipment lenders require a down payment. Have the funds sitting in your business account, not borrowed from another lender.", action_url: null },
    { category: "application_prep", title: "Line up work for the equipment", description: "Contracts, letters of intent, or a steady customer history show where the payment comes from.", action_url: "/app/setup/documents" },
  ],
  working_capital: [
    { category: "application_prep", title: "Write a use-of-funds breakdown", description: "List exactly what the capital pays for and how it produces revenue.", action_url: null },
    { category: "banking", title: "Keep 3–6 months of clean statements", description: "Consistent deposits and no overdrafts/NSFs are what working-capital underwriters look at first.", action_url: null },
  ],
  line_of_credit: [
    { category: "banking", title: "Talk to the bank you already use", description: "Your existing primary bank is usually the most natural place to ask about a business line of credit once you have history there.", action_url: null },
    { category: "banking", title: "Keep 3–6 months of clean statements", description: "Consistent deposits and no overdrafts/NSFs strengthen line-of-credit reviews.", action_url: null },
  ],
  business_credit: [
    { category: "credit", title: "Open vendor accounts that report to business bureaus", description: "Net-30 vendor accounts you actually use for business purchases, paid on time, build a business credit history.", action_url: null },
  ],
  real_estate: [
    { category: "application_prep", title: "Gather property details", description: "Address, purchase price or value, intended business use, and any existing debt on the property.", action_url: null },
    { category: "application_prep", title: "Confirm your down payment and reserves", description: "Commercial real estate lenders typically review both the down payment and cash left over after closing.", action_url: null },
  ],
  startup: [
    { category: "application_prep", title: "Write a business plan with projections", description: "Startups are underwritten on the plan, the owner's experience, and the owner's own capital in the business.", action_url: "/app/setup/documents" },
    { category: "application_prep", title: "Document the money you are putting in", description: "Owner capital injection shows commitment and is often required for startup funding.", action_url: null },
  ],
  other: [
    { category: "application_prep", title: "Write a use-of-funds breakdown", description: "List exactly what the funding pays for and how it supports the business.", action_url: null },
  ],
};

/**
 * Deterministic roadmap: fix readiness gaps first (in rule order), then build
 * fundability, then goal-specific prep, then the funding review.
 * No lender, partner, or payout data is an input — ordering is borrower-need only.
 */
export function buildRoadmap(state: FundingState, readiness: ReadinessResult): PlannedStep[] {
  const steps: Omit<PlannedStep, "sequence" | "dependency_sequence">[] = [];

  for (const r of readiness.rule_results) {
    if (r.outcome !== "fail") continue;
    const play = GAP_PLAYBOOK[r.rule_key];
    if (!play) continue;
    steps.push({
      category: play.category,
      title: play.title,
      description: [play.how, r.why_it_matters].filter(Boolean).join(" "),
      action_url: play.url,
    });
  }

  steps.push(
    {
      category: "credit",
      title: "Get a D-U-N-S number for your business",
      description: "A free D-U-N-S number from Dun & Bradstreet opens your business credit file, which many lenders and vendors check.",
      action_url: "https://www.dnb.com/duns/get-a-duns.html",
    },
    {
      category: "credit",
      title: "Review your personal credit reports",
      description: "Most small-business funding involves a personal guarantee. Pull your free reports from all three bureaus so you know what lenders will see — for funding preparation, not credit repair.",
      action_url: "https://www.annualcreditreport.com",
    },
  );

  const goal = state.profile?.funding_goal_type ?? "other";
  steps.push(...(GOAL_STEPS[goal] ?? GOAL_STEPS.other));

  steps.push(
    {
      category: "documentation",
      title: "Finish your document package",
      description: "Upload every required document so your package is complete before any lender sees it.",
      action_url: "/app/setup/documents",
    },
    {
      category: "funding",
      title: "Funding options review",
      description:
        "Once your package is ready, 3B matches your verified profile against lender programs based on fit only. Matching is not an approval — each lender decides independently.",
      action_url: null,
    },
  );

  // Gap fixes are independent; everything after the gaps depends on the last gap fix.
  const gapCount = readiness.rule_results.filter((r) => r.outcome === "fail" && GAP_PLAYBOOK[r.rule_key]).length;
  return steps.map((s, i) => ({
    ...s,
    sequence: i + 1,
    // The funding review always waits on the finished document package (the step before it).
    dependency_sequence: i === steps.length - 1 ? i : i >= gapCount && gapCount > 0 ? gapCount : null,
  }));
}
