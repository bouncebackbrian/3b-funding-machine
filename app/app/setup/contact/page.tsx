import { ActionForm, Field, SubmitButton } from "@/components/form";
import { MediaGroupCta } from "@/components/media-group-cta";
import { StepHeader } from "@/components/step-header";
import { checkAlignment } from "@/lib/funding/alignment";
import { domainHint, mediaNeeds } from "@/lib/funding/media-group";
import { getActiveBusiness } from "@/lib/dal";
import { saveContact } from "../../actions";

export default async function ContactStep({ searchParams }: { searchParams: Promise<{ new?: string; error?: string }> }) {
  const params = await searchParams;
  const creatingNew = params.new === "1";
  const active = await getActiveBusiness();
  const b = creatingNew ? null : active;
  return (
    <>
      <StepHeader
        step="contact"
        intro="Enter the physical business address and phone you plan to use. You can add business email and a website when they are available."
      />
      {params.error === "save" && <p role="alert">Your profile was created. Re-enter your contact details to finish this step.</p>}
      <ActionForm action={saveContact}>
        {creatingNew && <input type="hidden" name="create_new" value="1" />}
        {!b && <Field name="working_name" label="Working business name" hint="Use the name you plan to operate under. You can enter the legal name after formation." required />}
        <Field name="address_line1" label="Street address" defaultValue={b?.address_line1} autoComplete="address-line1" required />
        <Field name="address_line2" label="Suite / unit" defaultValue={b?.address_line2} autoComplete="address-line2" />
        <div className="fm-grid-3">
          <Field name="city" label="City" defaultValue={b?.city} autoComplete="address-level2" required />
          <Field name="state" label="State" maxLength={2} placeholder="CA" defaultValue={b?.state} autoComplete="address-level1" required />
          <Field name="zip_code" label="ZIP" inputMode="numeric" defaultValue={b?.zip_code} autoComplete="postal-code" required />
        </div>
        <div className="fm-grid-2">
          <Field name="business_phone" label="Business phone" type="tel" inputMode="tel" defaultValue={b?.business_phone} required />
          <Field name="business_email" label="Business email" type="email" defaultValue={b?.business_email} />
        </div>
        <Field name="website_url" label="Website" type="url" placeholder="https://" defaultValue={b?.website_url} hint="Optional, but it helps legitimacy checks." />
        <section className="fm-stack" aria-labelledby="industry-review">
          <h2 id="industry-review" className="fm-h3">Review your industry code before filing</h2>
          <p className="fm-muted">Compare the official descriptions and exclusions against your primary business activity. If more than one code looks plausible, check the filing instructions and ask the lender how it classifies the activity. Save the code that accurately describes what the business does.</p>
          <a href="https://www.census.gov/naics/" target="_blank" rel="noreferrer">Look up NAICS codes at the U.S. Census Bureau</a>
          <Field name="naics_code" label="NAICS code" inputMode="numeric" maxLength={6} defaultValue={b?.naics_code} hint="Enter the six-digit code once reviewed. Leave blank if you’re still checking." />
        </section>
        <SubmitButton>Save and continue</SubmitButton>
      </ActionForm>
      {/* Only when there's a web gap to fix here; the logo-only offer lives on the dashboard. */}
      {b && mediaNeeds(checkAlignment(b)).some((n) => n !== "logo") && <MediaGroupCta needs={b && mediaNeeds(checkAlignment(b))} domain={domainHint(b)} />}
    </>
  );
}
