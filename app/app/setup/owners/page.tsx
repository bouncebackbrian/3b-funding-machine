import { ActionForm, Field, Select, SubmitButton } from "@/components/form";
import { StepHeader } from "@/components/step-header";
import { requireFundingContext } from "@/lib/dal";
import { CREDIT_BUILDERS_START_URL, FUNDING_UNLOCK_FICO } from "@/lib/funding/credit-unlock";
import { addOwner, continueFromOwners, removeOwner } from "../../actions";

export default async function OwnersStep({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { state } = await requireFundingContext();
  const { error } = await searchParams;
  const total = state.owners.reduce((s, o) => s + Number(o.ownership_percent ?? 0), 0);

  return (
    <>
      <StepHeader
        step="owners"
        intro="List everyone who owns part of the business. Review any personal guarantee in the lender’s written terms."
      />

      <section className="fm-card fm-stack" id="personal-credit">
        <h2 className="fm-h3">Review personal credit through 3B Credit Builders</h2>
        <ul className="fm-mini">
          <li><strong>Basic Credit Builder</strong> · Start your personal credit review and prepare your business.</li>
          <li><strong>VIP Credit Builder</strong> · Active MyFreeScoreNow VIP membership is required to unlock the full Funding Machine packet. Use Bounce Back Brian support for questions about your report and funding preparation.</li>
          <li><strong>Already a member?</strong> Use your current MyFreeScoreNow membership.</li>
        </ul>
        <div className="flex flex-wrap gap-3">
          <a href={CREDIT_BUILDERS_START_URL}>Compare Basic and VIP</a>
          <a href="https://credit.bouncebackbrian.com/login">Sign in to Credit Builders</a>
        </div>
        <p>Confirm which bureaus your plan covers. Download your current report PDF from MyFreeScoreNow, upload it in 3B Credit Builders, then return here to continue setup.</p>
        <p className="fm-muted fm-small">
          MyFreeScoreNow provides consumer credit reports and educational scores. 3B verifies active VIP and a FICO score of at least {FUNDING_UNLOCK_FICO} at every bureau for the one-time unlock. Funding Desk application support requires a separate review of current credit and business records. Keep personal reports in Credit Builders.
        </p>
        <p className="fm-muted fm-small">MyFreeScoreNow bills for its membership. 3B may earn a commission on referrals.</p>
      </section>

      {error === "owner_required" && <p className="fm-alert fm-alert-error">Add at least one owner to continue.</p>}

      {state.owners.length > 0 && (
        <ul className="fm-list">
          {state.owners.map((o) => (
            <li key={o.id}>
              <div>
                <strong>{o.full_name}</strong>
                <span className="fm-muted">
                  {" "}
                  · {Number(o.ownership_percent ?? 0)}%{o.role ? ` · ${o.role}` : ""}
                </span>
              </div>
              <form action={removeOwner}>
                <input type="hidden" name="owner_id" value={o.id} />
                <button type="submit" className="fm-link-btn">
                  Remove
                </button>
              </form>
            </li>
          ))}
          <li className="fm-muted fm-small">Total ownership listed: {total}%</li>
        </ul>
      )}

      <h2 className="fm-h2">{state.owners.length ? "Add another owner" : "Add an owner"}</h2>
      <ActionForm action={addOwner} resetOnSuccess>
        <Field name="full_name" label="Full legal name" required autoComplete="name" />
        <div className="fm-grid-2">
          <Field name="ownership_percent" label="Ownership %" inputMode="decimal" required />
          <Field name="role" label="Title" placeholder="Owner, Managing Member…" />
        </div>
        <div className="fm-grid-2">
          <Field name="transportation_experience_years" label="Years of industry experience" inputMode="decimal" hint="Optional." />
          <Select
            name="has_cdl"
            label="Holds a CDL?"
            placeholder="Not applicable"
            options={[
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ]}
          />
        </div>
        <SubmitButton pendingText="Adding…">Add owner</SubmitButton>
      </ActionForm>

      {state.owners.length > 0 && (
        <form action={continueFromOwners} className="fm-continue">
          <button type="submit" className="fm-btn fm-btn-primary">
            Continue
          </button>
        </form>
      )}
    </>
  );
}
