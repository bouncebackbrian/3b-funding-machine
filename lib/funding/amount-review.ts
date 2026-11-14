export function reviewFundingAmount(input: {
  projectCost: number;
  cashContribution: number;
  monthlyBudget: number;
  annualRate: number;
  months: number;
  quotedLimit: number;
  financedFee: number;
}) {
  const { projectCost, cashContribution, monthlyBudget, annualRate, months, quotedLimit, financedFee } = input;
  const monthlyRate = annualRate / 1200;
  const paymentPerDollar = monthlyRate === 0 ? 1 / months : monthlyRate / -Math.expm1(-months * Math.log1p(monthlyRate));
  const gap = Math.max(0, projectCost - cashContribution);
  const paymentCapacity = Math.max(0, monthlyBudget / paymentPerDollar - financedFee);
  const quoteProceeds = Math.max(0, quotedLimit - financedFee);
  const supportedAmount = Math.floor(Math.min(gap, paymentCapacity, quoteProceeds));
  return { gap, paymentCapacity, quoteProceeds, supportedAmount, remainingGap: gap - supportedAmount };
}
