"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface StepperItem {
  key: string;
  title: string;
  status: "complete" | "in_progress" | "not_started";
  enabled: boolean;
}

export function Stepper({ steps, done, total }: { steps: StepperItem[]; done: number; total: number }) {
  const pathname = usePathname();
  const pct = Math.round((done / total) * 100);
  return (
    <nav aria-label="Setup progress" className="fm-stepper">
      <div className="fm-progress" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
        <div className="fm-progress-bar" style={{ width: `${pct}%` }} />
      </div>
      <p className="fm-muted fm-small">
        {done} of {total} steps complete
      </p>
      <ol>
        {steps.map((s, i) => {
          const href = `/app/setup/${s.key}`;
          const current = pathname === href;
          const label = (
            <>
              <span className={`fm-dot fm-dot-${s.status}`} aria-hidden>
                {s.status === "complete" ? "✓" : i + 1}
              </span>
              <span>{s.title}</span>
            </>
          );
          return (
            <li key={s.key} className={current ? "fm-step-current" : undefined}>
              {s.enabled ? (
                <Link href={href} aria-current={current ? "step" : undefined}>
                  {label}
                </Link>
              ) : (
                <span className="fm-step-locked">{label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
