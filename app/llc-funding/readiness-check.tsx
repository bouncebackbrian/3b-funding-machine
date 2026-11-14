"use client";

import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { fundingChecklist, type FundingScenario } from "@/lib/funding/llc-readiness";

const fields = [
  {
    name: "stage",
    label: "Where is your LLC today?",
    options: [
      { value: "planning", label: "Planning the LLC" },
      { value: "pre_revenue", label: "Formed, with no sales yet" },
      { value: "operating", label: "Formed and generating revenue" },
    ],
  },
  {
    name: "purpose",
    label: "What will the money pay for?",
    options: [
      { value: "startup", label: "Launch costs" },
      { value: "working_capital", label: "Inventory or operating expenses" },
      { value: "equipment", label: "Equipment or a vehicle" },
      { value: "other", label: "Another business expense" },
    ],
  },
  {
    name: "banking",
    label: "Do you have a dedicated business bank account?",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No or still setting it up" },
    ],
  },
  {
    name: "records",
    label: "Do you have financial records or startup projections ready?",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No or still gathering them" },
    ],
  },
] as const;

type Result = { amount: number; actions: string[] };

export function LlcFundingCheck() {
  const [result, setResult] = useState<Result | null>(null);
  const resultHeading = useRef<HTMLHeadingElement>(null);

  function checkReadiness(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const amount = Number(form.get("amount"));
    if (!Number.isFinite(amount) || amount < 1) return;

    const stage = form.get("stage") as FundingScenario["stage"];
    const purpose = form.get("purpose") as FundingScenario["purpose"];
    const actions = fundingChecklist({
      stage,
      purpose,
      hasBusinessBanking: form.get("banking") === "yes",
      hasRecords: form.get("records") === "yes",
    });
    setResult({ amount, actions });
    resultHeading.current?.focus();
  }

  return (
    <>
      <section className="fm-card" aria-labelledby="llc-check-heading">
        <h2 id="llc-check-heading" className="fm-h3">Quick readiness check</h2>
        <p className="fm-muted fm-small">This check runs in your browser. Sign in to create or update your full funding profile.</p>
        <form className="fm-form" method="post" data-clarity-mask="true" onSubmit={checkReadiness} onChange={() => setResult(null)}>
          <div className="fm-grid-2">
            {fields.map(({ name, label, options }) => (
              <div className="fm-field" key={name}>
                <label htmlFor={name}>{label}</label>
                <select id={name} name={name} defaultValue="" required>
                  <option value="" disabled>Choose…</option>
                  {options.map(({ value, label }) => <option key={value} value={value}>{label}</option>)}
                </select>
              </div>
            ))}
            <div className="fm-field">
              <label htmlFor="amount">How much are you looking for ($)?</label>
              <input id="amount" name="amount" type="number" inputMode="decimal" min="1" step="0.01" required />
            </div>
          </div>
          <button className="fm-btn fm-btn-primary" type="submit">Show my next steps</button>
        </form>
      </section>

      <section className="fm-card fm-stack" aria-labelledby="llc-result-heading" aria-live="polite" data-clarity-mask="true">
        <h2 id="llc-result-heading" className="fm-h3" ref={resultHeading} tabIndex={-1}>Your next steps</h2>
        {result ? (
          <>
            <p className="fm-muted">Funding target {result.amount.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
            <ol className="list-decimal space-y-2 pl-5">
              {result.actions.map((action) => <li key={action}>{action}</li>)}
            </ol>
          </>
        ) : (
          <p className="fm-muted">Complete the check above to get your checklist.</p>
        )}
        <p className="fm-muted fm-small">For funding preparation. Lenders set their own criteria and make their own decisions.</p>
        <div className="flex flex-wrap gap-3">
          <Link className="fm-btn fm-btn-primary" href="/app">Open full funding setup</Link>
          <Link className="fm-btn fm-btn-ghost" href="/signup">Create an account</Link>
        </div>
      </section>
    </>
  );
}
