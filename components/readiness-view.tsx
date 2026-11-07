import Link from "next/link";
import type { ReadinessResult, RuleResult } from "@/lib/funding/readiness";

const STATUS_COPY: Record<ReadinessResult["status"], { label: string; tone: string; blurb: string }> = {
  not_ready: { label: "Foundation stage", tone: "fm-tone-low", blurb: "Start with the basics below — each one is something lenders check before anything else." },
  building: { label: "Building", tone: "fm-tone-mid", blurb: "Good progress. Close the remaining gaps to get your package ready." },
  package_ready: { label: "Package ready", tone: "fm-tone-high", blurb: "Your foundation is in place. This means your profile is organized — not that any lender has approved you." },
};

export function ScoreBadge({ score, status }: { score: number; status: ReadinessResult["status"] }) {
  const s = STATUS_COPY[status];
  return (
    <div className={`fm-score ${s.tone}`}>
      <div className="fm-score-num">
        {Math.round(score)}
        <span>/100</span>
      </div>
      <div>
        <p className="fm-score-label">{s.label}</p>
        <p className="fm-muted fm-small">{s.blurb}</p>
      </div>
    </div>
  );
}

const OUTCOME: Record<RuleResult["outcome"], string> = {
  pass: "✓",
  fail: "✗",
  not_applicable: "—",
  unverified: "?",
};

export function RuleList({ rules }: { rules: RuleResult[] }) {
  return (
    <ul className="fm-rules">
      {rules.map((r) => (
        <li key={r.rule_key} className={`fm-rule fm-rule-${r.outcome}`}>
          <span className="fm-rule-icon" aria-label={r.outcome}>
            {OUTCOME[r.outcome]}
          </span>
          <div>
            <p>
              {r.label}
              {r.required && r.outcome === "fail" && <span className="fm-tag fm-tag-required">Required</span>}
            </p>
            {r.outcome === "fail" && r.why_it_matters && <p className="fm-muted fm-small">{r.why_it_matters}</p>}
            {r.outcome === "not_applicable" && <p className="fm-muted fm-small">Coming in a future module — not counted in your score.</p>}
          </div>
          {r.outcome === "fail" && r.fix_step && (
            <Link href={`/app/setup/${r.fix_step}`} className="fm-small">
              Fix
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
