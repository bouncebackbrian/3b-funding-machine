import { ActionForm, Checkbox, SubmitButton } from "@/components/form";
import { StepHeader } from "@/components/step-header";
import { requireFundingContext } from "@/lib/dal";
import { DISCLOSURES, acceptedDisclosureTypes } from "@/lib/funding/disclosures";
import { acceptDisclosures } from "../../actions";

export default async function DisclosuresStep() {
  const { state } = await requireFundingContext();
  const accepted = acceptedDisclosureTypes(state.consents);
  const acceptedAt = state.consents
    .filter((c) => c.accepted)
    .map((c) => new Date(c.accepted_at))
    .sort((a, b) => b.getTime() - a.getTime())[0];

  return (
    <>
      <StepHeader step="disclosures" intro="Please read each one. Your acceptance is recorded with the date and the exact version you agreed to." />
      {accepted.size === DISCLOSURES.length && acceptedAt && (
        <p className="fm-alert fm-alert-ok">All accepted on {acceptedAt.toLocaleDateString()}.</p>
      )}
      <ActionForm action={acceptDisclosures}>
        {DISCLOSURES.map((d) => (
          <div key={d.type} className="fm-disclosure">
            <h2 className="fm-h3">{d.title}</h2>
            <p>{d.text}</p>
            <Checkbox name={`accept_${d.type}`} label="I agree" defaultChecked={accepted.has(d.type)} />
          </div>
        ))}
        <SubmitButton>Agree and continue</SubmitButton>
      </ActionForm>
    </>
  );
}
