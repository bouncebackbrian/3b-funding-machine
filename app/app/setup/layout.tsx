import { Stepper, type StepperItem } from "@/components/stepper";
import { getActiveBusiness, getFundingState } from "@/lib/dal";
import { SETUP_STEPS, sequenceProgress } from "@/lib/funding/sequence";

export default async function SetupLayout({ children }: { children: React.ReactNode }) {
  const business = await getActiveBusiness();

  let items: StepperItem[];
  let done = 0;
  if (!business) {
    // Nothing exists yet: only step 1 is reachable.
    items = SETUP_STEPS.map((s, i) => ({ key: s.key, title: s.title, status: "not_started", enabled: i === 0 }));
  } else {
    const progress = sequenceProgress(await getFundingState(business));
    done = progress.complete;
    items = progress.statuses.map((s) => ({ key: s.key, title: s.title, status: s.status, enabled: true }));
    items.push({ key: "review", title: "Readiness review", status: "not_started", enabled: progress.blockingDone });
  }

  return (
    <div className="fm-setup">
      <aside>
        <Stepper steps={items} done={done} total={SETUP_STEPS.length} />
      </aside>
      <section className="fm-card fm-setup-body">{children}</section>
    </div>
  );
}
