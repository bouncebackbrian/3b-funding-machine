import Link from "next/link";
import type { Metadata } from "next";
import { getActiveBusiness, getUserBusinesses, verifySession } from "@/lib/dal";
import { signOut, switchBusiness } from "./actions";

export const metadata: Metadata = { title: "Your funding setup", robots: { index: false } };

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  await verifySession();
  const [businesses, active] = await Promise.all([getUserBusinesses(), getActiveBusiness()]);

  return (
    <div className="fm-shell" data-clarity-mask="true">
      <header className="fm-topbar">
        <Link href="/app/dashboard" className="fm-brand">
          3B <span className="gradient-text-funding">Funding</span>
        </Link>
        <nav className="fm-nav" aria-label="Main">
          <Link href="/app/dashboard">Dashboard</Link>
          <Link href="/app/roadmap">Roadmap</Link>
        </nav>
        <form action={signOut}>
          <button className="fm-link-btn" type="submit">
            Sign out
          </button>
        </form>
      </header>

      {businesses.length > 1 && active && (
        <form action={switchBusiness} className="fm-switcher">
          <label htmlFor="biz">Business</label>
          <select id="biz" name="business_id" defaultValue={active.id}>
            {businesses.map((b) => (
              <option key={b.id} value={b.id}>
                {b.dba_name || b.legal_name}
              </option>
            ))}
          </select>
          <button className="fm-btn fm-btn-ghost" type="submit">
            Switch
          </button>
        </form>
      )}

      <main className="fm-main">{children}</main>

      <footer className="fm-disclaimer">
        3B Funding Machine provides funding-readiness guidance. 3B is not a lender or broker and does not make credit
        decisions. Scores and roadmaps are not an approval, pre-approval, or guarantee of funding, amount, or terms.
      </footer>
    </div>
  );
}
