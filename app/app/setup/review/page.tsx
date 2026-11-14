import { redirect } from "next/navigation";
import { ActionForm, SubmitButton } from "@/components/form";
import { RuleList, ScoreBadge } from "@/components/readiness-view";
import { getReadinessRules, requireFundingContext } from "@/lib/dal";
import { evaluateReadiness } from "@/lib/funding/readiness";
import { sequenceProgress } from "@/lib/funding/sequence";
import { runReview } from "../../actions";

export default async function ReviewStep() {
  const { state } = await requireFundingContext();
  const { blockingDone, nextStep } = sequenceProgress(state);
  if (!blockingDone) redirect(`/app/setup/${nextStep?.key ?? "business"}`);

  // Live preview; nothing is saved until the user generates the roadmap.
  const preview = evaluateReadiness(state, await getReadinessRules(), new Date());
  const hasRoadmap = !!state.strategy;

  return (
    <>
      <header className="fm-step-header">
        <p className="fm-eyebrow">Final step</p>
        <h1 className="fm-h1">Your funding readiness</h1>
        <p className="fm-muted">
          Check your profile against the 3B readiness checklist. Get a roadmap and a packet with your funding request, documents, and remaining gaps.
        </p>
      </header>
      <ScoreBadge score={preview.overall_score} status={preview.status} />
      <RuleList rules={preview.rule_results} />
      <ActionForm action={runReview}>
        <SubmitButton pendingText="Building your roadmap…">{hasRoadmap ? "Update my roadmap" : "Build my funding roadmap"}</SubmitButton>
      </ActionForm>
    </>
  );
}
