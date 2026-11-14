import { ActionForm, Checkbox, Field, Select, SubmitButton } from "@/components/form";
import { StepHeader } from "@/components/step-header";
import { requireFundingContext } from "@/lib/dal";
import { CASH_FLOW_GUIDANCE } from "@/lib/funding/packet";
import { BANK_ACCOUNT_STATUSES } from "@/lib/funding/types";
import { saveBanking } from "../../actions";

export default async function BankingStep() {
  const { business, state } = await requireFundingContext();
  const s = state.snapshot;
  const preRevenue = s != null && Number(s.monthly_revenue) === 0 && Number(s.annual_revenue) === 0;

  return (
    <>
      <StepHeader
        step="banking"
        intro="Enter actual revenue from your books and use your business statements to confirm account balances."
      />
      <p className="fm-callout fm-small">{CASH_FLOW_GUIDANCE}</p>
      {s && (
        <p className="fm-callout fm-small">
          Last updated {new Date(s.as_of_date).toLocaleDateString()}. Saving again creates a new dated snapshot — your history is kept.
        </p>
      )}
      <ActionForm action={saveBanking}>
        <Select
          name="bank_account_status"
          label="Do you have a dedicated business bank account?"
          required
          defaultValue={business.bank_account_status}
          options={BANK_ACCOUNT_STATUSES}
        />
        <div className="fm-grid-2">
          <Field name="monthly_revenue" label="Average monthly revenue ($)" inputMode="decimal" defaultValue={preRevenue ? null : s?.monthly_revenue} />
          <Field name="annual_revenue" label="Last 12 months revenue ($)" inputMode="decimal" defaultValue={preRevenue ? null : s?.annual_revenue} />
        </div>
        <Checkbox name="pre_revenue" label="My business has no revenue yet" defaultChecked={preRevenue} />
        <div className="fm-grid-2">
          <Field name="checking_balance" label="Current business checking balance ($)" inputMode="decimal" defaultValue={s?.checking_balance} />
          <Field name="average_daily_balance" label="Average daily balance ($)" inputMode="decimal" defaultValue={s?.average_daily_balance} hint="On your statements, if shown." />
        </div>
        <div className="fm-grid-2">
          <Field name="existing_business_debt" label="Existing business debt ($)" inputMode="decimal" defaultValue={s?.existing_business_debt} />
          <Field name="nsf_count_90d" label="Overdrafts / NSFs in last 90 days" inputMode="numeric" defaultValue={s?.nsf_count_90d} />
        </div>
        <Field name="cash_on_hand" label="Other money on hand ($)" inputMode="decimal" defaultValue={s?.cash_on_hand} hint="Unrestricted business cash outside the checking balance above. Leave blank if unknown. List owner funds and pledged deposits separately in your asset register." />
        <SubmitButton>Save and continue</SubmitButton>
      </ActionForm>
    </>
  );
}
