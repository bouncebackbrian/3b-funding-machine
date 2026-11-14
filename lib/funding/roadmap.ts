import { isTruckingBusiness } from "./capital-prep";
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
  /**
   * True for a fix to a readiness rule that is failing right now. Its prior
   * "complete" status must never carry forward: the rule failing again means
   * the fix needs doing again.
   */
  readiness_gap: boolean;
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
  business_email_on_domain: { category: "foundation", title: "Move to an email on your own domain", how: "Set up you@yourbusiness.com on the same domain as your website — lenders and vendors read a personal inbox as a newer, riskier business.", url: "/app/setup/contact" },
  identity_aligned: { category: "foundation", title: "Fix mismatches in your business identity", how: "Your name, email domain, website, and phone should match exactly everywhere. Your dashboard shows each mismatch and how to fix it.", url: "/app/dashboard" },
  entity_documents_complete: { category: "documentation", title: "Upload formation and EIN documents", how: "Articles of Organization/Incorporation and your IRS EIN letter.", url: "/app/setup/documents" },
};

const GOAL_STEPS: Record<string, Omit<PlannedStep, "sequence" | "dependency_sequence" | "readiness_gap">[]> = {
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
  business_credit: [],
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
  const steps: Omit<PlannedStep, "sequence" | "dependency_sequence" | "readiness_gap">[] = [];

  // The digital presence work is grouped into a single later milestone.
  const laterKeys = new Set(["website_present", "business_email_present", "business_email_on_domain", "duns_on_file"]);
  const gaps = readiness.rule_results.filter((rule) => rule.outcome === "fail" && GAP_PLAYBOOK[rule.rule_key] && !laterKeys.has(rule.rule_key));
  for (const r of gaps) {
    const play = GAP_PLAYBOOK[r.rule_key];
    if (!play) continue;
    steps.push({
      category: play.category,
      title: play.title,
      description: [play.how, r.why_it_matters].filter(Boolean).join(" "),
      action_url: play.url,
    });
  }

  steps.push({
    category: "banking",
    title: "Build a record of operating cash flow",
    description: "Deposit customer payments and pay real business expenses through business checking. Reconcile monthly, separate transfers and financing deposits from revenue, and document cash available for repayment.",
    action_url: "/app/setup/banking",
  });

  if (!state.business.duns_number?.trim()) {
    steps.push({
      category: "credit",
      title: "Get a D-U-N-S number for your business",
      description: "A free D-U-N-S number from Dun & Bradstreet opens your business credit file, which many lenders and vendors check.",
      action_url: "https://www.dnb.com/duns/get-a-duns.html",
    });
  }

  steps.push(
    {
      category: "credit",
      title: "Review personal credit through 3B Credit Builders",
      description: "Choose Basic or VIP Credit Builder, or use your existing MyFreeScoreNow membership. Upload your current report PDF in 3B Credit Builders. Funding Desk staff separately verifies three-bureau FICO eligibility.",
      action_url: "/app/setup/owners#personal-credit",
    },
  );

  steps.push(
    {
      category: "credit",
      title: "Review Net 30 and fuel accounts",
      description: "Check the terms and payment reporting for accounts that fit real business expenses. Track due dates and pay on time.",
      action_url: "/app/net-30",
    },
    {
      category: "credit",
      title: "Prepare for a business credit card review",
      description: "After 3B staff verifies Funding Desk eligibility, compare written terms, fees, repayment costs, and any personal guarantee before applying.",
      action_url: null,
    },
    {
      category: "foundation",
      title: "Build your logo and business website",
      description: "Prepare the logo, domain, business email, and website. Publish a Company page with your legal name, services, location, phone, and email for bank review. Open the dashboard for the 3B Media handoff.",
      action_url: "/app/dashboard",
    },
  );

  steps.push({
    category: "foundation",
    title: "Check Google and 411 business listings",
    description: "For an eligible business, claim or verify its Google Business Profile. Ask the phone provider whether it offers a 411 listing. Match the public name, phone, website, and storefront address or service area to the Company page.",
    action_url: "/app/packet#public-listings",
  });

  steps.push({
    category: "application_prep",
    title: "Document business assets and repayment capacity",
    description: "List available cash, owned assets, and liens. Compare operating cash flow with existing debt and the new payment. Check small business-only financing offers first.",
    action_url: "/app/packet#capital-preparation",
  });

  if (isTruckingBusiness(state)) {
    steps.push({
      category: "banking",
      title: "Set up trucking expenses and reserves",
      description: "Track operating expenses in Fleet Commander or Expense Tracker. Upload a dated summary to the funding packet and keep a separate repair reserve.",
      action_url: "/app/packet#trucking-preparation",
    });
  }

  if (state.profile?.funding_goal_type && state.profile.target_amount) {
    steps.push({
      category: "application_prep",
      title: "Review business credit and compare funding paths",
      description: "Review current credit and repayment evidence. Compare the original request, asset-backed options, and a smaller phase when useful. Check business-only terms first.",
      action_url: "/app/packet#funding-goal-match",
    });
  }

  const goal = state.profile?.funding_goal_type ?? "other";
  steps.push(...(GOAL_STEPS[goal] ?? GOAL_STEPS.other));

  steps.push(
    {
      category: "documentation",
      title: "Finish your document package",
      description: "Update your business plan, bank statements, financials, and supporting records. Confirm which items and date ranges the lender requires.",
      action_url: "/app/setup/documents",
    },
    {
      category: "funding",
      title: "Funding options review",
      description:
        "Once 3B verifies Funding Desk eligibility, confirm requirements with the bank. Review and download the packet, then have the owner or authorized representative submit it through the bank’s secure channel.",
      action_url: "/app/packet",
    },
  );

  // Gap fixes are independent; everything after the gaps depends on the last gap fix.
  const gapCount = gaps.length;
  return steps.map((s, i) => ({
    ...s,
    sequence: i + 1,
    readiness_gap: i < gapCount,
    // The funding review always waits on the finished document package (the step before it).
    dependency_sequence: i === steps.length - 1 ? i : i >= gapCount && gapCount > 0 ? gapCount : null,
  }));
}
