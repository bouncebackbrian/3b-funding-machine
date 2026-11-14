import type { ReadinessResult } from "./readiness";
import { FUNDING_GOAL_TYPES, type FundingGoalType, type FundingState } from "./types";

const routes: Record<FundingGoalType, { type: string; evidence: string }> = {
  equipment: { type: "Equipment loan or lease", evidence: "Get a written equipment quote and document the down payment, liens, and operating cash flow." },
  working_capital: { type: "Working capital term loan", evidence: "Show the use of funds and repayment from sales. If the need is tied to unpaid business invoices, compare invoice financing." },
  line_of_credit: { type: "Business line of credit", evidence: "Document the recurring cash gap, expected draw size, and when sales will cover the balance." },
  business_credit: { type: "Reporting vendor terms or business charge card", evidence: "Confirm which bureau receives payments and choose a spending limit the business can repay." },
  real_estate: { type: "Commercial property financing", evidence: "Gather the property price, down payment, property cash flow, and existing liens." },
  startup: { type: "Deposit-secured or other asset-backed business financing", evidence: "Document startup costs, available collateral, and the source of repayment. Review smaller phases if cash flow or collateral is limited." },
  other: { type: "Review the proposed business use", evidence: "Itemize the purchase or expense so the financing category can be matched to the goal." },
};

const firstExpenses: Record<FundingGoalType, string> = {
  equipment: "Price the smallest usable equipment purchase, lease, or repair that advances the original goal.",
  working_capital: "Identify one inventory order or operating expense with a documented source of repayment.",
  line_of_credit: "Size the first draw to one documented gap between paying expenses and collecting sales.",
  business_credit: "Start with one reporting vendor or card account for routine purchases the business can pay on time.",
  real_estate: "Identify a viable smaller phase, such as leasing space if it still serves the operating goal.",
  startup: "Price the smallest launch phase that lets the business begin serving customers.",
  other: "Itemize the original goal and identify its smallest useful, separately priced phase.",
};

export function matchFundingGoal(profile: FundingState["profile"], readiness: Pick<ReadinessResult, "overall_score" | "status">) {
  const goal = FUNDING_GOAL_TYPES.find(({ value }) => value === profile?.funding_goal_type);
  if (!goal) return null;
  const route = routes[goal.value];
  const readinessAction = {
    not_ready: "Complete the missing business and financial records before seeking offers.",
    building: "Close the remaining checklist gaps and collect repayment evidence.",
    package_ready: "Review the packet and compare written quotes after 3B verifies Funding Desk eligibility.",
  }[readiness.status];

  return {
    ...route,
    readinessAction,
    score: readiness.overall_score,
    amount: profile?.target_amount ?? null,
    stages: [
      {
        title: "Size the first request",
        detail: firstExpenses[goal.value] + " Subtract business cash available for the purchase after operating reserves. Use the remaining gap as the estimated first request. Compare written no-PG offers and check that payments fit conservative cash flow after expenses and existing debt.",
      },
      {
        title: "Build a payment record",
        detail: "Pay on time, keep statements and receipts, and check whether the lender or vendor reports under the company’s name. Document the first phase’s actual sales, costs, and cash available after debt payments.",
      },
      {
        title: "Reassess the original goal",
        detail: "Price the work still needed and update the cash-flow forecast, outstanding debt, and business credit reports. Seek a larger quote when the company can show how it would cover the combined payments, including during a slower month.",
      },
    ],
  };
}
