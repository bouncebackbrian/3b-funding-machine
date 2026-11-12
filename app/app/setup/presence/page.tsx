import { ActionForm, Select, SubmitButton } from "@/components/form";
import { OfferList } from "@/components/offer-list";
import { StepHeader } from "@/components/step-header";
import { requireFundingContext } from "@/lib/dal";
import type { OfferGap } from "@/lib/funding/offers";
import { attestationsOf, PRESENCE_ITEMS, presenceOutcome, type PresenceKey } from "@/lib/funding/presence";
import { savePresence } from "../../actions";

const GAP_FOR: Partial<Record<PresenceKey, OfferGap>> = {
  phone_line_type: "business_phone",
  listed_411: "listed_411",
  google_business_profile: "google_business_profile",
};

export default async function PresenceStep() {
  const { state } = await requireFundingContext();
  const a = attestationsOf(state);

  return (
    <>
      <StepHeader
        step="presence"
        intro="Before a bank reads your numbers, it checks that the business is real and reachable: a business phone it can look up, a listing that matches your filing, an account in the company's name, and good standing with the state. Answer honestly — anything that isn't in place goes on your roadmap with a way to fix it."
      />
      {a === undefined ? (
        <p className="fm-alert fm-alert-error">This checklist is being switched on for your account. You can continue setup and come back to it.</p>
      ) : (
        <ActionForm action={savePresence}>
          {PRESENCE_ITEMS.map((item) => {
            const outcome = presenceOutcome(a, item.key);
            const gap = GAP_FOR[item.key];
            return (
              <div key={item.key} className="fm-disclosure">
                <Select name={item.key} label={item.label} required options={item.options} defaultValue={a[item.key]?.value} hint={item.why} />
                {outcome === "fail" && gap && <OfferList gap={gap} />}
              </div>
            );
          })}
          <p className="fm-muted fm-small">These answers are self-reported. 3B doesn&apos;t verify them, and lenders will check for themselves.</p>
          <SubmitButton>Save and continue</SubmitButton>
        </ActionForm>
      )}
    </>
  );
}
