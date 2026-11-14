import type { Metadata } from "next";
import Link from "next/link";
import { LlcFundingCheck } from "./readiness-check";

export const metadata: Metadata = {
  title: "LLC Funding Mode",
  alternates: { canonical: "/llc-funding" },
  description: "Check what your LLC has ready and get a short list of what to do before pursuing business funding.",
};

export default function LlcFundingPage() {
  return (
    <main className="fm-shell">
      <div className="fm-main fm-stack">
        <header>
          <Link href="/">3B Funding Machine</Link>
          <h1 className="fm-h1">LLC Funding Mode</h1>
          <p className="fm-muted">
            Planning an LLC or already taking orders? Get your next steps before you pursue funding.
          </p>
        </header>
        <LlcFundingCheck />
      </div>
    </main>
  );
}
