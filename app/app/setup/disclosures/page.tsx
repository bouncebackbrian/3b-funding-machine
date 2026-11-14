import { ActionForm, Checkbox, Field, SubmitButton } from "@/components/form";
import Link from "next/link";
import { StepHeader } from "@/components/step-header";
import { requireFundingContext } from "@/lib/dal";
import { DISCLOSURES, acceptedDisclosureTypes } from "@/lib/funding/disclosures";
import { acceptDisclosures } from "../../actions";

export default async function DisclosuresStep() {
  const { state } = await requireFundingContext();
  const accepted = acceptedDisclosureTypes(state.consents);
  const signed = state.consents
    .filter((c) => c.accepted && c.signer_name && DISCLOSURES.some((d) => d.type === c.disclosure_type && d.version === c.disclosure_version))
    .sort((a, b) => b.accepted_at.localeCompare(a.accepted_at))[0];

  return (
    <>
      <StepHeader step="disclosures" intro="Please read each one. Your acceptance is recorded with the date and the exact version you agreed to." />
      {accepted.size === DISCLOSURES.length && signed ? (
        <div className="fm-stack">
          <p className="fm-alert fm-alert-ok">Signed by {signed.signer_name} on {new Date(signed.accepted_at).toLocaleDateString()}.</p>
          <Link href="/app/setup/documents" className="fm-btn fm-btn-primary">Continue to Business Vault</Link>
        </div>
      ) : <ActionForm action={acceptDisclosures}>
        {DISCLOSURES.map((d) => (
          <div key={d.type} className="fm-disclosure">
            <h2 className="fm-h3">{d.title}</h2>
            <p>{d.text}</p>
            <Checkbox name={`accept_${d.type}`} label="I have read and acknowledge this disclosure" defaultChecked={accepted.has(d.type)} />
          </div>
        ))}
        <Field name="signer_name" label="Full legal name" autoComplete="name" maxLength={120} required />
        <Checkbox name="sign_electronically" label="I am authorized to act for this business and intend my typed name to serve as my electronic signature." />
        <SubmitButton>Sign and continue</SubmitButton>
      </ActionForm>}
    </>
  );
}
