import Link from "next/link";
import { AlignmentGrid } from "@/components/alignment-grid";
import { MediaGroupCta } from "@/components/media-group-cta";
import { ScoreBadge } from "@/components/readiness-view";
import { checkAlignment } from "@/lib/funding/alignment";
import { domainHint, mediaNeeds } from "@/lib/funding/media-group";
import { getFundingUnlock, requireFundingContext } from "@/lib/dal";
import type { ReadinessStatus } from "@/lib/funding/readiness";
import { sequenceProgress } from "@/lib/funding/sequence";
import { FUNDING_GOAL_TYPES } from "@/lib/funding/types";

const money = (n: number | null | undefined) =>
  n == null ? "—" : n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export default async function Dashboard() {
  const { business, state } = await requireFundingContext();
  const unlocked = await getFundingUnlock();
  const progress = sequenceProgress(state);
  const alignment = checkAlignment(business);
  const goal = FUNDING_GOAL_TYPES.find((g) => g.value === state.profile?.funding_goal_type)?.label;
  const nextRoadmapStep = state.steps.find((s) => s.status === "pending" || s.status === "in_progress");
  const roadmapDone = state.steps.filter((s) => s.status === "complete" || s.status === "skipped").length;

  return (
    <div className="fm-stack">
      <header>
        <p className="fm-eyebrow">{business.business_code}</p>
        <h1 className="fm-h1">{business.dba_name || business.legal_name}</h1>
        {goal && (
          <p className="fm-muted">
            Goal: {goal} · {money(state.profile?.target_amount)}
          </p>
        )}
      </header>

      <section className="fm-card fm-next">
        <p className="fm-eyebrow">Next best action</p>
        {!progress.blockingDone && progress.nextStep ? (
          <>
            <h2 className="fm-h2">{progress.nextStep.title}</h2>
            <p className="fm-muted">{progress.nextStep.summary}</p>
            <Link href={`/app/setup/${progress.nextStep.key}`} className="fm-btn fm-btn-primary">
              Continue setup
            </Link>
          </>
        ) : !state.strategy ? (
          <>
            <h2 className="fm-h2">Run your readiness review</h2>
            <p className="fm-muted">Your setup is complete. Get your score and your step-by-step roadmap.</p>
            <Link href="/app/setup/review" className="fm-btn fm-btn-primary">
              Review readiness
            </Link>
          </>
        ) : nextRoadmapStep ? (
          <>
            <h2 className="fm-h2">{nextRoadmapStep.title}</h2>
            <p className="fm-muted">{nextRoadmapStep.description}</p>
            <Link href="/app/roadmap" className="fm-btn fm-btn-primary">
              Open roadmap
            </Link>
          </>
        ) : (
          <>
            <h2 className="fm-h2">Roadmap complete</h2>
            <p className="fm-muted">Re-run your review so your score reflects everything you&apos;ve done.</p>
            <Link href="/app/setup/review" className="fm-btn fm-btn-primary">
              Re-run review
            </Link>
          </>
        )}
      </section>

      {state.readiness && (
        <section className="fm-card">
          <h2 className="fm-h3">Funding readiness</h2>
          <ScoreBadge score={Number(state.readiness.overall_score)} status={state.readiness.status as ReadinessStatus} />
          <Link href="/app/packet" className="fm-btn fm-btn-ghost">{unlocked ? "Open readiness packet" : "View packet unlock requirements"}</Link>
          <p className="fm-muted fm-small">Last scored {new Date(state.readiness.computed_at).toLocaleDateString()}.</p>
        </section>
      )}

      <section className="fm-card fm-stack">
        <div>
          <h2 className="fm-h3">LLC Funding Mode</h2>
          <p className="fm-muted fm-small">Check a funding scenario and see what to prepare for your LLC.</p>
        </div>
        <div>
          <Link href="/llc-funding" className="fm-btn fm-btn-ghost">Run an LLC readiness check</Link>
        </div>
      </section>

      <AlignmentGrid checks={alignment} />
      <MediaGroupCta needs={mediaNeeds(alignment)} domain={domainHint(business)} />

      <div className="fm-grid-2">
        <section className="fm-card">
          <h2 className="fm-h3">Setup</h2>
          <p className="fm-big">
            {progress.complete}/{progress.total}
          </p>
          <ul className="fm-mini">
            {progress.statuses.map((s) => (
              <li key={s.key}>
                <Link href={`/app/setup/${s.key}`}>
                  <span className={`fm-dot fm-dot-${s.status}`} aria-hidden>
                    {s.status === "complete" ? "✓" : ""}
                  </span>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="fm-card">
          <h2 className="fm-h3">Roadmap</h2>
          {state.strategy ? (
            <>
              <p className="fm-big">
                {roadmapDone}/{state.steps.length}
              </p>
              <Link href="/app/roadmap">View all steps</Link>
            </>
          ) : (
            <p className="fm-muted fm-small">Generated after your readiness review.</p>
          )}
        </section>
      </div>
    </div>
  );
}
