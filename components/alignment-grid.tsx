import Link from "next/link";
import type { AlignmentCheck, AlignmentStatus } from "@/lib/funding/alignment";

const ICON: Record<AlignmentStatus, string> = { ok: "✓", warning: "!", mismatch: "✗", missing: "○" };
const LABEL: Record<AlignmentStatus, string> = { ok: "Matches", warning: "Worth a look", mismatch: "Mismatch", missing: "Missing" };

export function AlignmentGrid({ checks }: { checks: AlignmentCheck[] }) {
  const flagged = checks.filter((c) => c.status === "mismatch").length;
  const toReview = checks.filter((c) => c.status === "warning" || c.status === "missing").length;

  return (
    <section className="fm-card" aria-labelledby="alignment-heading">
      <h2 id="alignment-heading" className="fm-h3">
        Does your business look bankable?
      </h2>
      <p className="fm-muted fm-small">
        Lenders and credit bureaus compare your name, address, phone, email and website across every record. This compares what you&apos;ve entered — it
        isn&apos;t a lender decision.{" "}
        {flagged > 0 ? `${flagged} mismatch${flagged > 1 ? "es" : ""} to fix.` : toReview > 0 ? `${toReview} item${toReview > 1 ? "s" : ""} to review.` : "Everything lines up."}
      </p>
      <ul className="fm-rules">
        {checks.map((c) => (
          <li key={c.key} className={`fm-rule fm-align-${c.status}`}>
            <span className="fm-rule-icon" aria-label={LABEL[c.status]}>
              {ICON[c.status]}
            </span>
            <div>
              <p>
                {c.label} <span className={`fm-tag fm-align-tag-${c.status}`}>{LABEL[c.status]}</span>
              </p>
              <p className="fm-muted fm-small">{c.detail}</p>
            </div>
            {c.status !== "ok" && c.fix_step && (
              <Link href={`/app/setup/${c.fix_step}`} className="fm-small">
                Fix
              </Link>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
