export interface FundingScenario {
  stage: "planning" | "pre_revenue" | "operating";
  purpose: "startup" | "working_capital" | "equipment" | "other";
  hasBusinessBanking: boolean;
  hasRecords: boolean;
}

const PURPOSE_ACTIONS: Record<FundingScenario["purpose"], string> = {
  startup: "List your launch costs and how much owner cash is available.",
  working_capital: "List the expenses the funding would cover and when incoming sales could repay it.",
  equipment: "Get a written quote and estimate what the equipment would earn or save each month.",
  other: "Write a line-item use of funds and explain how the business would repay it.",
};

export function fundingChecklist(scenario: FundingScenario): string[] {
  const actions: string[] = [];

  if (scenario.stage === "planning") {
    actions.push("Confirm your LLC formation plan and gather your formation paperwork once filed.");
  } else {
    actions.push("Gather your LLC formation records and EIN confirmation.");
  }
  if (!scenario.hasBusinessBanking) {
    actions.push("Set up a dedicated business bank account when your formation documents are ready.");
  }
  if (!scenario.hasRecords) {
    actions.push(
      scenario.stage === "operating"
        ? "Gather business bank statements, sales records, and a current profit and loss statement."
        : "Prepare startup projections that show expected sales, expenses, and repayment capacity.",
    );
  }
  actions.push(PURPOSE_ACTIONS[scenario.purpose]);
  return actions;
}
