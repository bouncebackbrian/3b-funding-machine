import WaitlistForm from "./components/WaitlistForm";

const ACCENT = "#F97316";
const BORDER = "rgba(255,255,255,0.08)";
const SURFACE = "#111111";

const fundingTypes = [
  {
    icon: "🏛️",
    title: "Grants & Government Programs",
    desc: "Find federal, state, and local grant programs you actually qualify for — without spending hours on government websites.",
  },
  {
    icon: "🏦",
    title: "SBA Loan Navigation",
    desc: "Understand which SBA loan is right for your business, what you need to qualify, and how to structure your application.",
  },
  {
    icon: "💳",
    title: "Business Credit Lines",
    desc: "Leverage your credit profile to unlock business credit cards, revolving credit lines, and working capital — tied to your 3B Credit Builder progress.",
  },
  {
    icon: "🤝",
    title: "Alternative Lenders",
    desc: "Access non-traditional funding sources including community development financial institutions (CDFIs), revenue-based financing, and more.",
  },
  {
    icon: "📊",
    title: "Funding Readiness Audit",
    desc: "Know exactly where you stand before you apply. We analyze your business profile and tell you what to fix first.",
  },
  {
    icon: "⚡",
    title: "Fast-Track Applications",
    desc: "Stop wasting time on the wrong applications. We match you to the funding you can actually get — and help you move fast.",
  },
];

const steps = [
  { num: "01", title: "Assess Your Profile", desc: "Tell us about your business, credit, and funding goals. We map your current position." },
  { num: "02", title: "Match to Funding", desc: "Our system identifies the grants, loans, and credit programs that fit your exact situation." },
  { num: "03", title: "Apply with Support", desc: "Get step-by-step guidance through the application — or let us handle it for you." },
  { num: "04", title: "Secure & Scale", desc: "Funding in hand. Now use it to grow — with the full 3B Ecosystem behind you." },
];

export default function FundingMachinePage() {
  return (
    <div style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{ borderBottom: `1px solid ${BORDER}`, padding: "0 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "32px", height: "32px", background: ACCENT, borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "14px", color: "#fff" }}>
              3B
            </div>
            <span style={{ fontWeight: 700, fontSize: "16px" }}>3B Funding Machine</span>
          </div>
          <a
            href="https://bouncebackbrian.com"
            style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", textDecoration: "none" }}
          >
            ← 3B Ecosystem
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: "96px 1.5rem", textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: ACCENT, marginBottom: "16px" }}>
            3B Funding Machine
          </p>
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: "24px" }}>
            Find Your Funding.<br />
            <span style={{ color: ACCENT }}>Fuel Your Future.</span>
          </h1>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.7, color: "rgba(255,255,255,0.6)", marginBottom: "40px", maxWidth: "600px", margin: "0 auto 40px" }}>
            Grants, SBA loans, business credit lines, and alternative capital — all in one place.
            Stop leaving money on the table. The 3B Funding Machine helps you find and access the
            funding your business deserves.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="#apply"
              style={{ background: ACCENT, color: "#fff", padding: "14px 28px", borderRadius: "10px", fontWeight: 700, fontSize: "15px", textDecoration: "none" }}
            >
              Find My Funding →
            </a>
            <a
              href="#how-it-works"
              style={{ border: `1px solid rgba(249,115,22,0.4)`, color: "#FB923C", padding: "14px 28px", borderRadius: "10px", fontWeight: 600, fontSize: "15px", textDecoration: "none" }}
            >
              How It Works
            </a>
          </div>

          {/* stat bar */}
          <div style={{ marginTop: "64px", display: "flex", justifyContent: "center", gap: "48px", flexWrap: "wrap" }}>
            {[
              { val: "$50K+", label: "Avg. funding accessed" },
              { val: "100+", label: "Funding sources mapped" },
              { val: "72hrs", label: "Avg. match time" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "28px", fontWeight: 900, color: ACCENT }}>{s.val}</div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", marginTop: "4px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUNDING TYPES */}
      <section id="funding" style={{ padding: "96px 1.5rem", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: ACCENT, marginBottom: "12px" }}>
              Funding Sources
            </p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900 }}>
              Every Type of Funding. One Platform.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {fundingTypes.map((f) => (
              <div key={f.title} style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: "16px", padding: "32px" }}>
                <div style={{ fontSize: "36px", marginBottom: "16px" }}>{f.icon}</div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "10px" }}>{f.title}</h3>
                <p style={{ fontSize: "14px", lineHeight: 1.7, color: "rgba(255,255,255,0.55)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{ padding: "96px 1.5rem", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: ACCENT, marginBottom: "12px" }}>
              The Process
            </p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900 }}>
              From Zero to Funded in 4 Steps
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
            {steps.map((s) => (
              <div key={s.num} style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: "16px", padding: "32px" }}>
                <div style={{ fontSize: "36px", fontWeight: 900, color: ACCENT, marginBottom: "16px", opacity: 0.6 }}>{s.num}</div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "10px" }}>{s.title}</h3>
                <p style={{ fontSize: "14px", lineHeight: 1.7, color: "rgba(255,255,255,0.55)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3B ECOSYSTEM TIE-IN */}
      <section style={{ padding: "96px 1.5rem", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: "24px", padding: "56px 48px", display: "flex", flexDirection: "column", gap: "24px" }}>
            <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: ACCENT }}>
              3B Ecosystem Advantage
            </p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 900, lineHeight: 1.2 }}>
              Funding is stronger when your credit is clean.
            </h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "rgba(255,255,255,0.6)" }}>
              The 3B Funding Machine works hand-in-hand with{" "}
              <a href="https://credit.bouncebackbrian.com" style={{ color: ACCENT, textDecoration: "none", fontWeight: 600 }}>
                3B Credit Builder
              </a>
              . Fix your credit first, then unlock higher funding amounts at better rates.
              The ecosystem is designed so each product makes the others more powerful.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="https://credit.bouncebackbrian.com"
                style={{ border: `1px solid rgba(249,115,22,0.4)`, color: "#FB923C", padding: "12px 24px", borderRadius: "10px", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}
              >
                Fix Your Credit First →
              </a>
              <a
                href="https://bouncebackbrian.com"
                style={{ border: `1px solid ${BORDER}`, color: "rgba(255,255,255,0.6)", padding: "12px 24px", borderRadius: "10px", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}
              >
                See Full Ecosystem →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / WAITLIST */}
      <section id="apply" style={{ padding: "96px 1.5rem" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: "24px", padding: "64px 40px" }}>
            <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: ACCENT, marginBottom: "16px" }}>
              Get Early Access
            </p>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900, marginBottom: "16px" }}>
              Be First in Line
            </h2>
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.55)", marginBottom: "40px", lineHeight: 1.7 }}>
              3B Funding Machine is launching soon. Join the waitlist and get early access,
              exclusive funding match previews, and first dibs on our founding member rate.
            </p>
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid ${BORDER}`, padding: "32px 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)" }}>
            © {new Date().getFullYear()} 3B Funding Machine — Part of the{" "}
            <a href="https://bouncebackbrian.com" style={{ color: ACCENT, textDecoration: "none" }}>
              3B Ecosystem
            </a>{" "}
            by Brian A Martin
          </p>
        </div>
      </footer>

    </div>
  );
}
