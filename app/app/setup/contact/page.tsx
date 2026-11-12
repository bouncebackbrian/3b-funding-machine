import { ActionForm, Field, SubmitButton } from "@/components/form";
import { MediaGroupCta } from "@/components/media-group-cta";
import { StepHeader } from "@/components/step-header";
import { checkAlignment } from "@/lib/funding/alignment";
import { domainHint, mediaNeeds } from "@/lib/funding/media-group";
import { requireFundingContext } from "@/lib/dal";
import { saveContact } from "../../actions";

export default async function ContactStep() {
  const { business: b } = await requireFundingContext();
  return (
    <>
      <StepHeader
        step="contact"
        intro="Lenders verify that your business is reachable and real. Use a physical business address and the phone/email you'll answer."
      />
      <ActionForm action={saveContact}>
        <Field name="address_line1" label="Street address" defaultValue={b.address_line1} autoComplete="address-line1" required />
        <Field name="address_line2" label="Suite / unit" defaultValue={b.address_line2} autoComplete="address-line2" />
        <div className="fm-grid-3">
          <Field name="city" label="City" defaultValue={b.city} autoComplete="address-level2" required />
          <Field name="state" label="State" maxLength={2} placeholder="CA" defaultValue={b.state} autoComplete="address-level1" required />
          <Field name="zip_code" label="ZIP" inputMode="numeric" defaultValue={b.zip_code} autoComplete="postal-code" required />
        </div>
        <div className="fm-grid-2">
          <Field name="business_phone" label="Business phone" type="tel" inputMode="tel" defaultValue={b.business_phone} required />
          <Field name="business_email" label="Business email" type="email" defaultValue={b.business_email} required />
        </div>
        <Field name="website_url" label="Website" type="url" placeholder="https://" defaultValue={b.website_url} hint="Optional, but it helps legitimacy checks." />
        <SubmitButton>Save and continue</SubmitButton>
      </ActionForm>
      {/* Only when there's a web gap to fix here; the logo-only offer lives on the dashboard. */}
      {mediaNeeds(checkAlignment(b)).some((n) => n !== "logo") && <MediaGroupCta needs={mediaNeeds(checkAlignment(b))} domain={domainHint(b)} />}
    </>
  );
}
