import Link from "next/link";
import { ScoreBadge } from "@/components/readiness-view";
import { requireFundingContext } from "@/lib/dal";
import type { ReadinessStatus } from "@/lib/funding/readiness";
import type { StrategyStep } from "@/lib/funding/types";
import { setStepStatus } from "../actions";

const CATEGORY_LABEL: Record<string, string> = {
  foundation: "Foundation",
  compliance: "Compliance",
  documentation: "Documents",
  banking: "Banking",
  credit: "Credit",
  application_prep: "Application prep",
  funding: "Funding",
};

function StepActions({ step }: { step: StrategyStep }) {
  const next = step.status === "complete" ? "pending" : "complete";
  return (
    <div className="fm-step-actions">
      {step.action_url &&
        (step.action_url.startsWith("/") ? (
          <Link href={step.action_url} className="fm-btn fm-btn-ghost">
            Go
          </Link>
        ) : (
          <a href={step.action_url} target="_blank" rel="noopener noreferrer" className="fm-btn fm-btn-ghost">
            Open ↗
          </a>
        ))}
      <form action={setStepStatus}>
        <input type="hidden" name="step_id" value={step.id} />
        <input type="hidden" name="status" value={next} />
        <button type="submit" className={step.status === "complete" ? "fm-btn fm-btn-ghost" : "fm-btn fm-btn-primary"}>
          {step.status === "complete" ? "Undo" : "Mark done"}
        </button>
      </form>
    </div>
  );
}

export default async function RoadmapPage() {
  const { state } = await requireFundingContext();

  if (!state.strategy) {
    return (
      <div className="fm-card">
        <h1 className="fm-h1">Your roadmap isn&apos;t built yet</h1>
        <p className="fm-muted">Finish your setup steps and run the readiness review — your roadmap is generated from it.</p>
        <Link href="/app" className="fm-btn fm-btn-primary">
          Continue setup
        </Link>
      </div>
    );
  }

  const done = state.steps.filter((s) => s.status === "complete" || s.status === "skipped").length;
  const nextUp = state.steps.find((s) => s.status === "pending" || s.status === "in_progress");

  return (
    <div className="fm-stack">
      <header>
        <p className="fm-eyebrow">Funding roadmap · version {state.strategy.strategy_version}</p>
        <h1 className="fm-h1">
          {done} of {state.steps.length} steps done
        </h1>
        {state.readiness && <ScoreBadge score={Number(state.readiness.overall_score)} status={state.readiness.status as ReadinessStatus} />}
      </header>

      {nextUp && (
        <section className="fm-card fm-next">
          <p className="fm-eyebrow">Do this next</p>
          <h2 className="fm-h2">{nextUp.title}</h2>
          <p>{nextUp.description}</p>
          <StepActions step={nextUp} />
        </section>
      )}

      <ol className="fm-roadmap">
        {state.steps.map((s) => (
          <li key={s.id} className={`fm-roadmap-step fm-roadmap-${s.status}`}>
            <span className="fm-roadmap-num">{s.status === "complete" ? "✓" : s.sequence}</span>
            <div className="fm-roadmap-body">
              <p className="fm-eyebrow">{CATEGORY_LABEL[s.category] ?? s.category}</p>
              <h3 className="fm-h3">{s.title}</h3>
              {s.description && <p className="fm-muted fm-small">{s.description}</p>}
              <StepActions step={s} />
            </div>
          </li>
        ))}
      </ol>

      <section className="fm-card">
        <h2 className="fm-h3">Made changes?</h2>
        <p className="fm-muted fm-small">
          Re-run your readiness review after updating your profile. Your completed steps carry over to the new version.
        </p>
        <Link href="/app/setup/review" className="fm-btn fm-btn-ghost">
          Re-run readiness review
        </Link>
      </section>
    </div>
  );
}
