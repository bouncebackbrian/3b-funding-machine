import { ActionForm, Field, Select, SubmitButton } from "@/components/form";
import { StepHeader } from "@/components/step-header";
import { requireFundingContext } from "@/lib/dal";
import { addOwner, continueFromOwners, removeOwner } from "../../actions";

export default async function OwnersStep({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { state } = await requireFundingContext();
  const { error } = await searchParams;
  const total = state.owners.reduce((s, o) => s + Number(o.ownership_percent ?? 0), 0);

  return (
    <>
      <StepHeader
        step="owners"
        intro="Most business funding includes a personal guarantee from owners of 20% or more. List everyone who owns part of the business."
      />

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
