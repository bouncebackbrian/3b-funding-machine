import { describe, expect, it } from "vitest";
import { OFFERS, offersFor, resolveOffer } from "../offers";
import { attestationsOf, presenceComplete, presenceOutcome } from "../presence";
import { evaluateReadiness } from "../readiness";
import { buildRoadmap } from "../roadmap";
import { stepStatus } from "../sequence";
import { completeState, LIVE_RULES, NOW } from "./fixtures";

const PRESENCE_RULES = [
  ...LIVE_RULES,
  ...(
    [
      ["business_email_on_domain", true],
      ["business_phone_dedicated", true],
      ["listed_411", false],
      ["google_business_profile", false],
      ["bank_account_legal_name", true],
      ["state_good_standing", true],
      ["licenses_current", false],
    ] as const
  ).map(([rule_key, required], i) => ({ ...LIVE_RULES[0], id: rule_key, rule_key, label: rule_key, required, sort_order: 300 + i })),
];
const out = (r: ReturnType<typeof evaluateReadiness>, k: string) => r.rule_results.find((x) => x.rule_key === k)?.outcome;

describe("lender-ready presence", () => {
  it("a fully attested, domain-email business is package_ready", () => {
    const r = evaluateReadiness(completeState(), PRESENCE_RULES, NOW);
    expect(r.status).toBe("package_ready");
  });

  it("a personal cell phone fails a required rule and blocks package_ready", () => {
    const s = completeState();
    s.profile = { ...s.profile!, bankability_attestations: { ...(s.profile!.bankability_attestations as object), phone_line_type: { value: "personal_cell", at: NOW.toISOString() } } };
    const r = evaluateReadiness(s, PRESENCE_RULES, NOW);
    expect(out(r, "business_phone_dedicated")).toBe("fail");
    expect(r.status).not.toBe("package_ready");
  });

  it("a Gmail address fails the required domain-email rule", () => {
    const s = completeState();
    s.business = { ...s.business, business_email: "acmehauling@gmail.com" };
    const r = evaluateReadiness(s, PRESENCE_RULES, NOW);
    expect(out(r, "business_email_on_domain")).toBe("fail");
    expect(r.status).not.toBe("package_ready");
  });

  it("unanswered items count as gaps; 'not sure' fails too", () => {
    const s = completeState();
    s.profile = { ...s.profile!, bankability_attestations: { listed_411: { value: "not_sure", at: NOW.toISOString() } } };
    const r = evaluateReadiness(s, PRESENCE_RULES, NOW);
    expect(out(r, "listed_411")).toBe("fail");
    expect(out(r, "state_good_standing")).toBe("fail");
    expect(stepStatus("presence", s)).toBe("in_progress");
  });

  it("before the migration, presence rules are unverified (never fail, never pass)", () => {
    const s = completeState();
    const { bankability_attestations: _omit, ...legacy } = s.profile!;
    void _omit;
    s.profile = legacy as typeof s.profile;
    expect(attestationsOf(s)).toBeUndefined();
    const r = evaluateReadiness(s, PRESENCE_RULES, NOW);
    expect(out(r, "business_phone_dedicated")).toBe("unverified");
    expect(stepStatus("presence", s)).toBe("not_started");
  });

  it("a business with no funding profile yet still gets the checklist (nothing answered)", () => {
    const s = completeState();
    s.profile = null;
    expect(attestationsOf(s)).toEqual({});
    expect(stepStatus("presence", s)).toBe("not_started");
  });

  it("licenses: 'not required for my business' passes", () => {
    expect(presenceOutcome({ licenses_current: { value: "not_applicable", at: "" } }, "licenses_current")).toBe("pass");
    expect(presenceComplete({})).toBe(false);
  });

  it("each failed presence item becomes a roadmap step pointing back to the checklist", () => {
    const s = completeState();
    s.profile = { ...s.profile!, bankability_attestations: {} };
    const plan = buildRoadmap(s, evaluateReadiness(s, PRESENCE_RULES, NOW));
    const presenceSteps = plan.filter((p) => p.action_url === "/app/setup/presence");
    expect(presenceSteps).toHaveLength(6);
    expect(presenceSteps.every((p) => p.readiness_gap)).toBe(true);
  });
});

describe("partner offers", () => {
  it("uses the official URL until an https affiliate link is configured", () => {
    expect(resolveOffer("quo", {})).toEqual({ url: "https://www.quo.com/", affiliate: false });
    expect(resolveOffer("quo", { AFF_QUO_URL: "http://bad.example" })).toEqual({ url: "https://www.quo.com/", affiliate: false });
    expect(resolveOffer("quo", { AFF_QUO_URL: "https://partner.example/quo?ref=3b" })).toEqual({ url: "https://partner.example/quo?ref=3b", affiliate: true });
  });

  it("unknown ids don't resolve, so /go can't be used as an open redirect", () => {
    expect(resolveOffer("https://evil.example", {})).toBeNull();
    expect(resolveOffer("nope", {})).toBeNull();
  });

  it("every offer has a unique id and an https official URL, and every gap has a free or paid option", () => {
    expect(new Set(OFFERS.map((o) => o.id)).size).toBe(OFFERS.length);
    expect(OFFERS.every((o) => o.officialUrl.startsWith("https://"))).toBe(true);
    for (const g of ["business_email", "business_phone", "listed_411", "google_business_profile", "business_credit", "personal_credit"] as const) {
      expect(offersFor(g).length).toBeGreaterThan(0);
    }
  });

  it("offers never influence the readiness score or roadmap (no offer data is an input)", () => {
    const s = completeState();
    const a = evaluateReadiness(s, PRESENCE_RULES, NOW);
    const b = evaluateReadiness(s, PRESENCE_RULES, NOW);
    expect(a).toEqual(b);
    expect(buildRoadmap(s, a).some((p) => p.action_url?.startsWith("/go/"))).toBe(false);
  });
});
