import { describe, expect, it } from "vitest";
import { evaluateReadiness } from "../readiness";
import { completeState, emptyState, LIVE_RULES, NOW } from "./fixtures";

const outcome = (r: ReturnType<typeof evaluateReadiness>, key: string) => r.rule_results.find((x) => x.rule_key === key)?.outcome;

describe("evaluateReadiness", () => {
  it("scores a fully set-up business as package_ready at 100", () => {
    const r = evaluateReadiness(completeState(), LIVE_RULES, NOW);
    expect(r.overall_score).toBe(100);
    expect(r.status).toBe("package_ready");
    expect(r.next_best_action).toBeNull();
  });

  it("a brand-new business is not_ready and points to the first required gap in rule order", () => {
    const r = evaluateReadiness(emptyState(), LIVE_RULES, NOW);
    expect(r.status).toBe("not_ready");
    expect(outcome(r, "legal_name_present")).toBe("pass");
    expect(r.next_best_action).toEqual({ rule_key: "entity_type_present", label: "entity type present", fix_step: "business" });
  });

  it("excludes not-yet-integrated rules from the denominator instead of failing them", () => {
    const r = evaluateReadiness(completeState(), LIVE_RULES, NOW);
    expect(outcome(r, "credit_qualification_tracked")).toBe("not_applicable");
    expect(outcome(r, "application_velocity_tracked")).toBe("not_applicable");
    expect(r.overall_score).toBe(100);
  });

  it("treats an unknown rule_key as unverified — never as passing", () => {
    const rules = [...LIVE_RULES, { ...LIVE_RULES[0], id: "x", rule_key: "brand_new_rule", required: true, sort_order: 999 }];
    const r = evaluateReadiness(completeState(), rules, NOW);
    expect(outcome(r, "brand_new_rule")).toBe("unverified");
    expect(r.overall_score).toBe(100);
  });

  it("fails revenue data older than 120 days", () => {
    const s = completeState();
    s.snapshot = { ...s.snapshot!, as_of_date: "2026-05-01" };
    const r = evaluateReadiness(s, LIVE_RULES, NOW);
    expect(outcome(r, "revenue_data_present")).toBe("fail");
    expect(r.status).not.toBe("package_ready");
  });

  it("counts a declared pre-revenue business (0 revenue) as having revenue data on file", () => {
    const s = completeState();
    s.snapshot = { ...s.snapshot!, monthly_revenue: 0, annual_revenue: 0 };
    expect(outcome(evaluateReadiness(s, LIVE_RULES, NOW), "revenue_data_present")).toBe("pass");
  });

  it("requires the current disclosure version — an old version does not count", () => {
    const s = completeState();
    s.consents = s.consents.map((c) => ({ ...c, disclosure_version: "v0" }));
    expect(outcome(evaluateReadiness(s, LIVE_RULES, NOW), "compliance_certifications_accepted")).toBe("fail");
  });

  it("does not count a missing (not uploaded) entity document", () => {
    const s = completeState();
    s.documents = [{ ...s.documents[0], status: "missing" }, s.documents[1]];
    expect(outcome(evaluateReadiness(s, LIVE_RULES, NOW), "entity_documents_complete")).toBe("fail");
  });

  it("cannot be package_ready while a required rule fails, even with a high score", () => {
    const s = completeState();
    s.business = { ...s.business, business_phone: null }; // 3-point required rule
    const r = evaluateReadiness(s, LIVE_RULES, NOW);
    expect(r.overall_score).toBeGreaterThanOrEqual(80);
    expect(r.status).toBe("building");
  });

  it("is deterministic for the same input", () => {
    const a = evaluateReadiness(completeState(), LIVE_RULES, NOW);
    const b = evaluateReadiness(completeState(), LIVE_RULES, NOW);
    expect(a).toEqual(b);
  });
});
