import { expect, it } from "vitest";
import { reviewFundingAmount } from "../amount-review";

it("supports a larger documented request and caps proceeds after fees", () => {
  const input = { projectCost: 50000, cashContribution: 5000, monthlyBudget: 4000, annualRate: 0, months: 12, quotedLimit: 46000, financedFee: 1000 };
  expect(reviewFundingAmount(input)).toMatchObject({ gap: 45000, supportedAmount: 45000, remainingGap: 0 });
  expect(reviewFundingAmount({ ...input, monthlyBudget: 2500 })).toMatchObject({ supportedAmount: 29000, remainingGap: 16000 });
  expect(reviewFundingAmount({ ...input, quotedLimit: 20000 })).toMatchObject({ supportedAmount: 19000, remainingGap: 26000 });
});
