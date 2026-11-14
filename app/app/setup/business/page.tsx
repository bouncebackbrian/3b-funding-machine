import { redirect } from "next/navigation";
import { hasBusinessLocation } from "@/lib/funding/sequence";
import Link from "next/link";
import { ActionForm, Field, Select, SubmitButton } from "@/components/form";
import { StepHeader } from "@/components/step-header";
import { getActiveBusiness, getUserBusinesses } from "@/lib/dal";
import { ENTITY_TYPES } from "@/lib/funding/types";
import { saveBusiness, saveDuns, switchBusiness } from "../../actions";

const INDUSTRY = [
  { value: "owner_op", label: "Trucking — owner-operator" },
  { value: "carrier", label: "Trucking — carrier / fleet" },
  { value: "brokerage", label: "Freight brokerage" },
  { value: "fleet_management", label: "Fleet management" },
  { value: "service", label: "Service business" },
  { value: "other", label: "Other" },
];

export default async function BusinessStep({ searchParams }: { searchParams: Promise<{ new?: string }> }) {
  const creatingNew = (await searchParams).new === "1";
  const [businesses, active] = await Promise.all([getUserBusinesses(), getActiveBusiness()]);
  if (creatingNew) redirect("/app/setup/contact?new=1");
  if (!active || !hasBusinessLocation(active)) redirect("/app/setup/contact");
  const b = active;

  return (
    <>
      <StepHeader
        step="business"
        intro="Enter the details from your state filing. If you are forming an LLC, complete the state filing before you apply for an EIN."
      />

      {businesses.length > 0 && (
        <div className="fm-callout">
          <p>
            <strong>Working on:</strong> {active?.legal_name}
          </p>
          {businesses.length > 1 && (
            <form action={switchBusiness} className="fm-inline">
              <input type="hidden" name="return_to" value="/app/setup/business" />
              <select name="business_id" defaultValue={active?.id} aria-label="Choose a business">
                {businesses.map((x) => (
                  <option key={x.id} value={x.id}>
                    {x.legal_name}
                  </option>
                ))}
              </select>
              <button type="submit" className="fm-btn fm-btn-ghost">
                Use this one
              </button>
            </form>
          )}
          <Link href="/app/setup/contact?new=1" className="fm-small">
            + Set up a different business
          </Link>
        </div>
      )}

      <p className="fm-muted">NAICS code {b.naics_code || "pending review"}. <Link href="/app/setup/contact#industry-review">Review your industry code</Link> before filing.</p>
      <ActionForm action={saveBusiness}>
        <Field name="legal_name" label="Legal business name" defaultValue={b?.legal_name} required autoComplete="organization" />
        <Field name="dba_name" label="DBA / trade name" hint="Only if you operate under a different name." defaultValue={b?.dba_name} />
        <div className="fm-grid-2">
          <Select name="entity_type" label="Entity type" required defaultValue={b?.entity_type} options={ENTITY_TYPES.map((e) => ({ value: e, label: e }))} />
          <Field name="formation_state" label="State of formation" placeholder="CA" maxLength={2} defaultValue={b?.formation_state} required />
        </div>
        <div className="fm-grid-2">
          <Field name="formation_date" label="Date formed" type="date" defaultValue={b?.formation_date} hint="Time in business matters to lenders." />
          <Select name="business_type" label="Industry" options={INDUSTRY} defaultValue={b.business_type ?? "other"} />

        </div>
        <Field
          name="ein"
          label="EIN"
          placeholder="12-3456789"
          inputMode="numeric"
          defaultValue={b?.ein}
          hint="Your federal Employer Identification Number. No EIN yet? Leave blank — your roadmap will show you how to get one free."
        />
        {!b?.ein && (
          <Select
            name="ein_status"
            label="If you don't have an EIN yet"
            defaultValue={b?.ein_status === "pending" ? "pending" : "not_applied"}
            options={[
              { value: "not_applied", label: "Haven't applied" },
              { value: "pending", label: "Applied, waiting on IRS" },
            ]}
          />
        )}
        <SubmitButton>Save and continue</SubmitButton>
      </ActionForm>

      {/* Shown once the D-U-N-S columns exist (migration 20261112_bankability_foundation). */}
      {b && "duns_number" in b && (
        <section className="fm-card" aria-labelledby="duns-heading">
          <h2 id="duns-heading" className="fm-h3">
            D-U-N-S number
          </h2>
          <p className="fm-muted fm-small">
            A free D-U-N-S number from Dun &amp; Bradstreet opens your business credit file. Register with the exact legal name, address and phone in
            your profile.{" "}
            <a href="https://www.dnb.com/duns/get-a-duns.html" target="_blank" rel="noopener noreferrer">
              Get one free ↗
            </a>{" "}
            Paid &ldquo;expedite&rdquo; options are optional.
          </p>
          <ActionForm action={saveDuns}>
            <Field name="duns_number" label="D-U-N-S number" placeholder="123456789" inputMode="numeric" maxLength={11} defaultValue={b.duns_number} />
            {!b.duns_number && (
              <Select
                name="duns_status"
                label="If you don't have one yet"
                defaultValue={b.duns_status === "requested" ? "requested" : "not_applied"}
                options={[
                  { value: "not_applied", label: "Haven't requested" },
                  { value: "requested", label: "Requested, waiting on D&B" },
                ]}
              />
            )}
            <SubmitButton>Save D-U-N-S</SubmitButton>
          </ActionForm>
        </section>
      )}
    </>
  );
}
