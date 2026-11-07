import { ActionForm, Field, Select, SubmitButton, TextArea } from "@/components/form";
import { GoalFields } from "@/components/goal-fields";
import { StepHeader } from "@/components/step-header";
import { requireFundingContext } from "@/lib/dal";
import { saveGoal } from "../../actions";

export default async function GoalStep() {
  const { state } = await requireFundingContext();
  const p = state.profile;
  return (
    <>
      <StepHeader
        step="goal"
        intro="Your goal shapes your roadmap and which documents you'll need. Be specific about how the money will be used in the business."
      />
      <ActionForm action={saveGoal}>
        <GoalFields goal={p?.funding_goal_type ?? null} equipment={state.equipment} />
        <div className="fm-grid-2">
          <Field name="target_amount" label="Amount you're looking for ($)" inputMode="decimal" required defaultValue={p?.target_amount} />
          <Select
            name="desired_timeline"
            label="When do you need it?"
            defaultValue={p?.desired_timeline}
            placeholder="No set date"
            options={[
              { value: "30_days", label: "Within 30 days" },
              { value: "90_days", label: "Within 90 days" },
              { value: "6_months", label: "Within 6 months" },
              { value: "planning", label: "Just planning ahead" },
            ]}
          />
        </div>
        <TextArea
          name="funding_purpose"
          label="How will the funding be used?"
          required
          defaultValue={p?.funding_purpose}
          hint="Example: “Buy a used super dump to take on a signed hauling contract with ABC Aggregates.”"
        />
        <SubmitButton>Save and continue</SubmitButton>
      </ActionForm>
    </>
  );
}
