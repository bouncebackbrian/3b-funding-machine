import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="fm-auth">
      <Link href="/" className="fm-brand">
        3B <span className="gradient-text-funding">Funding Machine</span>
      </Link>
      <div className="fm-card fm-auth-card">{children}</div>
      <p className="fm-fineprint">
        One login for the whole 3B Ecosystem. 3B is not a lender and does not make credit decisions.
      </p>
    </main>
  );
}
