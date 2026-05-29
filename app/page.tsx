import WaitlistForm from "./components/WaitlistForm";

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
    desc: "Leverage your credit profile to unlock business credit cards, revolving lines, and working capital — tied to your 3B Credit Builder progress.",
  },
  {
    icon: "🤝",
    title: "Alternative Lenders",
    desc: "Access non-traditional funding sources including CDFIs, revenue-based financing, and community capital programs.",
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
  { num: "01", title: "Assess Your Profile", desc: "Tell us about your business, credit, and funding goals. We map your current position and funding readiness." },
  { num: "02", title: "Match to Funding", desc: "Our system identifies the grants, loans, and credit programs that fit your exact situation and timeline." },
  { num: "03", title: "Apply with Support", desc: "Get step-by-step guidance through the application process — or let us handle the heavy lifting for you." },
  { num: "04", title: "Secure & Scale", desc: "Funding in hand. Now use it to grow — with the full 3B Ecosystem behind you every step of the way." },
];

const stats = [
  { val: "$50K+", label: "Avg. funding accessed" },
  { val: "100+", label: "Funding sources mapped" },
  { val: "72hrs", label: "Avg. match time" },
];

export default function FundingMachinePage() {
  return (
    <div style={{ background: "var(--bg-base)", color: "var(--text-primary)", minHeight: "100vh" }}>

      {/* NAV */}
      <nav className="nav-glass" style={{ position: "sticky", top: 0, zIndex: 50, padding: "0 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: "32px", height: "32px", borderRadius: "8px", flexShrink: 0,
              background: "linear-gradient(135deg, #00E676 0%, #FFD166 100%)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 900, fontSize: "12px", color: "#081120",
              boxShadow: "0 0 14px rgba(0,230,118,0.45)",
            }}>
              3B
            </div>
            <span style={{ fontWeight: 700, fontSize: "15px", color: "#F5F7FA" }}>
              3B<span style={{ color: "#00E676" }}>Funding</span>
            </span>
            <span style={{
              fontSize: "11px", fontWeight: 600, padding: "2px 8px", borderRadius: "20px",
              background: "rgba(0,230,118,0.1)", border: "1px solid rgba(0,230,118,0.2)",
              color: "#00E676", marginLeft: "4px",
            }}>
              Funding · Emerald & Gold
            </span>
          </div>
          <a
            href="https://bouncebackbrian.com"
            style={{ fontSize: "13px", color: "var(--text-dim)", textDecoration: "none" }}
          >
            ← 3B Nexus
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: "96px 1.5rem 80px", textAlign: "center", borderBottom: "1px solid var(--border-subtle)" }}>
        {/* Aurora glow */}
        <div style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          width: "700px", height: "450px", pointerEvents: "none",
          background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,230,118,0.16) 0%, transparent 70%)",
        }} />
        <div style={{ maxWidth: "820px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "6px 14px", borderRadius: "20px", marginBottom: "24px",
            background: "rgba(0,230,118,0.08)", border: "1px solid rgba(0,230,118,0.25)",
          }}>
            <span style={{
              width: "6px", height: "6px", borderRadius: "50%", background: "#00E676",
              boxShadow: "0 0 8px #00E676", display: "inline-block",
            }} />
            <span style={{ fontSize: "12px", fontWeight: 700, color: "#00E676", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              3B Funding Machine · Coming Soon
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, lineHeight: 1.05, marginBottom: "24px", color: "#F5F7FA" }}>
            Find Your Funding.<br />
            <span className="gradient-text-funding">Fuel Your Future.</span>
          </h1>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "40px", maxWidth: "600px", margin: "0 auto 40px" }}>
            Grants, SBA loans, business credit lines, and alternative capital — all in one place.
            Stop leaving money on the table. The 3B Funding Machine finds and unlocks
            the capital your business deserves.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#apply" className="btn-primary">Find My Funding →</a>
            <a href="#how-it-works" className="btn-outline">How It Works</a>
          </div>

          {/* Stat bar */}
          <div style={{
            marginTop: "64px", display: "flex", justifyContent: "center", gap: "48px", flexWrap: "wrap",
            padding: "32px 40px", borderRadius: "16px",
            background: "rgba(16,27,51,0.5)", border: "1px solid var(--border-subtle)",
            backdropFilter: "blur(12px)",
          }}>
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div className="stat-val">{s.val}</div>
                <div style={{ fontSize: "13px", color: "var(--text-dim)", marginTop: "4px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUNDING TYPES */}
      <section id="funding" style={{ padding: "96px 1.5rem", borderBottom: "1px solid var(--border-subtle)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00E676", marginBottom: "12px" }}>
              Funding Sources
            </p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#F5F7FA" }}>
              Every Type of Funding. One Platform.
            </h2>
            <p style={{ marginTop: "16px", color: "var(--text-muted)", maxWidth: "480px", margin: "16px auto 0", fontSize: "15px", lineHeight: 1.7 }}>
              Six capital lanes. Mapped to your situation. Ready when you are.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {fundingTypes.map((f) => (
              <div key={f.title} className="glass-card">
                <div className="icon-badge">{f.icon}</div>
                <h3 style={{ fontSize: "17px", fontWeight: 700, marginBottom: "10px", color: "#F5F7FA" }}>{f.title}</h3>
                <p style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--text-muted)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{ padding: "96px 1.5rem", borderBottom: "1px solid var(--border-subtle)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00E676", marginBottom: "12px" }}>
              The Process
            </p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#F5F7FA" }}>
              From Zero to Funded in 4 Steps
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
            {steps.map((s) => (
              <div key={s.num} className="glass-card">
                <div className="step-num">{s.num}</div>
                <h3 style={{ fontSize: "17px", fontWeight: 700, marginBottom: "10px", color: "#F5F7FA" }}>{s.title}</h3>
                <p style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--text-muted)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSYSTEM TIE-IN */}
      <section style={{ padding: "80px 1.5rem", borderBottom: "1px solid var(--border-subtle)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{
            background: "linear-gradient(135deg, rgba(0,230,118,0.07) 0%, rgba(255,209,102,0.04) 100%)",
            border: "1px solid rgba(0,230,118,0.2)", borderRadius: "20px", padding: "48px",
          }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "24px" }}>
              <div style={{ flex: 1, minWidth: "260px" }}>
                <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00E676", marginBottom: "12px" }}>
                  3B Ecosystem Advantage
                </p>
                <h3 style={{ fontSize: "clamp(1.25rem, 3vw, 1.75rem)", fontWeight: 900, color: "#F5F7FA", marginBottom: "14px", lineHeight: 1.2 }}>
                  Funding is stronger when<br />your credit is clean.
                </h3>
                <p style={{ fontSize: "15px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "24px" }}>
                  The 3B Funding Machine works hand-in-hand with{" "}
                  <a href="https://credit.bouncebackbrian.com" style={{ color: "#00E676", textDecoration: "none", fontWeight: 600 }}>
                    3B Credit Builder
                  </a>
                  . Fix your credit first, then unlock higher amounts at better rates.
                  Each product makes the others more powerful.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <a href="https://credit.bouncebackbrian.com" className="btn-outline" style={{ fontSize: "14px", padding: "10px 20px" }}>
                    Fix Your Credit First →
                  </a>
                  <a href="https://bouncebackbrian.com" style={{
                    border: "1px solid var(--border-subtle)", color: "var(--text-muted)",
                    padding: "10px 20px", borderRadius: "10px", fontWeight: 600, fontSize: "14px", textDecoration: "none",
                  }}>
                    See Full Ecosystem →
                  </a>
                </div>
              </div>
              {/* Credit score ring decoration */}
              <div style={{
                width: "120px", height: "120px", borderRadius: "50%", flexShrink: 0,
                border: "3px solid rgba(0,230,118,0.3)",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                background: "rgba(0,230,118,0.06)", boxShadow: "0 0 40px rgba(0,230,118,0.12)",
                animation: "float 4s ease-in-out infinite",
              }}>
                <div style={{ fontSize: "28px", fontWeight: 900, color: "#00E676" }}>💰</div>
                <div style={{ fontSize: "10px", color: "var(--text-dim)", marginTop: "4px" }}>Funded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / WAITLIST */}
      <section id="apply" style={{ padding: "96px 1.5rem" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
          <div className="glass-card-lg">
            <div style={{
              width: "56px", height: "56px", borderRadius: "16px", margin: "0 auto 24px",
              background: "linear-gradient(135deg, #00E676, #FFD166)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "24px", boxShadow: "0 0 24px rgba(0,230,118,0.4)",
            }}>
              💰
            </div>
            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00E676", marginBottom: "16px" }}>
              Get Early Access
            </p>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900, marginBottom: "16px", color: "#F5F7FA" }}>
              Be First in Line
            </h2>
            <p style={{ fontSize: "16px", color: "var(--text-muted)", marginBottom: "40px", lineHeight: 1.7 }}>
              3B Funding Machine is launching soon. Join the waitlist and get early access,
              exclusive funding match previews, and first dibs on our founding member rate.
            </p>
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid var(--border-subtle)", padding: "32px 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{
              width: "24px", height: "24px", borderRadius: "6px",
              background: "linear-gradient(135deg, #00E676, #FFD166)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 900, fontSize: "9px", color: "#081120", flexShrink: 0,
            }}>
              3B
            </div>
            <span style={{ fontSize: "13px", color: "var(--text-dim)" }}>
              © {new Date().getFullYear()} 3B Funding Machine · Part of the{" "}
              <a href="https://bouncebackbrian.com" style={{ color: "#00E676", textDecoration: "none" }}>3B EcoSystem</a>
            </span>
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <a href="https://credit.bouncebackbrian.com" style={{ fontSize: "13px", color: "var(--text-dim)", textDecoration: "none" }}>Credit Builder</a>
            <a href="https://fleet.bouncebackbrian.com"  style={{ fontSize: "13px", color: "var(--text-dim)", textDecoration: "none" }}>Fleet Commander</a>
            <a href="https://media.bouncebackbrian.com"  style={{ fontSize: "13px", color: "var(--text-dim)", textDecoration: "none" }}>Media Group</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
