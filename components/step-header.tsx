import { SETUP_STEPS } from "@/lib/funding/sequence";
import type { SetupStepKey } from "@/lib/funding/readiness";

export function StepHeader({ step, intro }: { step: SetupStepKey; intro: string }) {
  const i = SETUP_STEPS.findIndex((s) => s.key === step);
  return (
    <header className="fm-step-header">
      <p className="fm-eyebrow">
        Step {i + 1} of {SETUP_STEPS.length}
      </p>
      <h1 className="fm-h1">{SETUP_STEPS[i].title}</h1>
      <p className="fm-muted">{intro}</p>
    </header>
  );
}
