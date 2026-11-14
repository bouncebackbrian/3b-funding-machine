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
  };
}
