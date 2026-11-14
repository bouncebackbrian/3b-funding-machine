import { redirect } from "next/navigation";
import { getActiveBusiness, getFundingState } from "@/lib/dal";
import { sequenceProgress } from "@/lib/funding/sequence";

/** /app routes people to the right place: first unfinished setup step, or the dashboard. */
export default async function AppIndex() {
  const business = await getActiveBusiness();
  if (!business) redirect("/app/setup/contact");
  const state = await getFundingState(business);
  if (state.profile?.onboarding_completed_at) redirect("/app/dashboard");
  const { nextStep, blockingDone } = sequenceProgress(state);
  if (blockingDone) redirect("/app/setup/review");
  redirect(`/app/setup/${nextStep?.key ?? "review"}`);
}
