"use client";

import { useId, useState } from "react";
import { reviewFundingAmount } from "@/lib/funding/amount-review";

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const fields = [
  ["projectCost", "Documented project cost ($)", "Include any additional business use you can document."],
  ["cashContribution", "Business cash available for this project ($)", "Keep your operating reserve available."],
  ["monthlyBudget", "Available for a new monthly payment ($)", "Use a slower month after expenses and current debt payments."],
  ["annualRate", "Quoted annual interest rate (%)", "Use the note rate for a fixed-rate monthly installment offer."],
  ["months", "Repayment term in months", ""],
  ["quotedLimit", "Quoted maximum principal ($)", "Include fees financed as part of principal."],
  ["financedFee", "Financed fees included in principal ($)", "Enter 0 if no fees are financed."],
] as const;

export function AmountReview({ originalAmount }: { originalAmount: number | null }) {
  const prefix = useId();
  const [result, setResult] = useState<ReturnType<typeof reviewFundingAmount> | null>(null);

  return (
    <section className="fm-card fm-stack" id="funding-amount-review">
      <h2 className="fm-h2">Compare your funding amount</h2>
      {originalAmount != null && <p>Original request <strong>{money.format(originalAmount)}</strong></p>}
      <p className="fm-muted">Use a written fixed-rate, monthly installment quote. Compare no-personal-guarantee offers first. This estimate uses the project budget, the loan terms, and what the business can repay.</p>
      <form className="fm-form" onChange={() => setResult(null)} onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const value = (name: string) => Number(data.get(name));
        setResult(reviewFundingAmount({
          projectCost: value("projectCost"), cashContribution: value("cashContribution"),
          monthlyBudget: value("monthlyBudget"), annualRate: value("annualRate"),
          months: value("months"), quotedLimit: value("quotedLimit"), financedFee: value("financedFee"),
        }));
      }}>
        <div className="fm-grid-2">
          {fields.map(([name, label, hint]) => (
            <div className="fm-field" key={name}>
              <label htmlFor={prefix + name}>{label}</label>
              <input id={prefix + name} name={name} type="number" required inputMode="decimal"
                min={name === "months" ? 1 : 0} max={name === "months" ? 600 : name === "annualRate" ? 100 : 100000000}
                step={name === "months" ? 1 : 0.01}
                aria-describedby={hint ? prefix + name + "-hint" : undefined}
                defaultValue={name === "financedFee" || name === "cashContribution" ? 0 : undefined}
              />
              {hint && <p id={prefix + name + "-hint"} className="fm-hint">{hint}</p>}
            </div>
          ))}
        </div>
        <button type="submit" className="fm-btn fm-btn-primary">Compare amounts</button>
      </form>
      {result && <div role="status" className="fm-stack">
        <p>Documented funding gap <strong>{money.format(result.gap)}</strong></p>
        <p>Estimated amount supported by this quote and budget <strong>{money.format(result.supportedAmount)}</strong></p>
        {result.remainingGap > 0 && <p>Remaining gap <strong>{money.format(result.remainingGap)}</strong>. Consider a smaller phase if it can operate on its own, or compare another quote.</p>}
        {originalAmount != null && result.supportedAmount > originalAmount && <p>This exceeds the original request. Review the additional documented uses and payment with the client before changing the request.</p>}
        <p className="fm-muted">Confirm all fees and the guarantee in the written offer. The lender sets the final terms. Use the client’s business need and repayment capacity to choose the amount.</p>
      </div>}
    </section>
  );
}
