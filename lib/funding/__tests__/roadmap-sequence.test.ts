import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { evaluateReadiness } from "../readiness";
import { buildRoadmap } from "../roadmap";
import { sequenceProgress } from "../sequence";
import { completeState, emptyState, LIVE_RULES, NOW } from "./fixtures";

const OFFICIAL_HOSTS = new Set(["www.irs.gov", "www.dnb.com", "www.annualcreditreport.com"]);

describe("buildRoadmap", () => {
  it("puts readiness gaps first, in rule order, before goal steps", () => {
    const s = emptyState();
    const plan = buildRoadmap(s, evaluateReadiness(s, LIVE_RULES, NOW));
    expect(plan[0].title).toBe("Confirm your entity type");
    expect(plan.at(-1)!.title).toBe("Funding options review");
    expect(plan.map((p) => p.sequence)).toEqual(plan.map((_, i) => i + 1));
  });

  it("has no gap steps for a complete profile and adds equipment-specific prep", () => {
    const s = completeState();
    const plan = buildRoadmap(s, evaluateReadiness(s, LIVE_RULES, NOW));
    expect(plan[0].category).toBe("credit");
    expect(plan.some((p) => p.title === "Get a written equipment quote")).toBe(true);
  });

  it("flags exactly the currently-failing readiness fixes as gaps, so their old 'complete' never carries over", () => {
    const empty = emptyState();
    const r = evaluateReadiness(empty, LIVE_RULES, NOW);
    const plan = buildRoadmap(empty, r);
    const gaps = plan.filter((p) => p.readiness_gap);
    expect(gaps.length).toBeGreaterThan(0);
    // Gaps come first and stop at the first prep step.
    expect(plan.slice(0, gaps.length).every((p) => p.readiness_gap)).toBe(true);
    expect(plan.slice(gaps.length).some((p) => p.readiness_gap)).toBe(false);

    const full = completeState();
    expect(buildRoadmap(full, evaluateReadiness(full, LIVE_RULES, NOW)).some((p) => p.readiness_gap)).toBe(false);
  });

  it("final funding review always depends on the document-package step", () => {
    const s = completeState();
    const plan = buildRoadmap(s, evaluateReadiness(s, LIVE_RULES, NOW));
    expect(plan.at(-1)!.dependency_sequence).toBe(plan.at(-2)!.sequence);
    expect(plan.at(-2)!.title).toBe("Finish your document package");
  });

  it("only links to internal setup pages or official government/bureau sources", () => {
    for (const s of [emptyState(), completeState()]) {
      for (const p of buildRoadmap(s, evaluateReadiness(s, LIVE_RULES, NOW))) {
        if (!p.action_url) continue;
        if (p.action_url.startsWith("/app/")) continue;
        expect(OFFICIAL_HOSTS.has(new URL(p.action_url).host), p.action_url).toBe(true);
      }
    }
  });

  it("never promises approval in step copy", () => {
    const s = emptyState();
    const text = buildRoadmap(s, evaluateReadiness(s, LIVE_RULES, NOW))
      .map((p) => `${p.title} ${p.description}`)
      .join(" ")
      .toLowerCase();
    expect(text).not.toMatch(/\b(pre-?approved|guaranteed|you will be approved|you'll be approved)\b/);
  });

  it("roadmap engine takes no lender/partner/payout input (affiliate isolation)", () => {
    const src = readFileSync(path.join(__dirname, "..", "roadmap.ts"), "utf8")
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/\/\/.*$/gm, "");
    expect(src).not.toMatch(/partner_programs|product_partner_links|payout|commission|funding_lenders|funding_products/);
  });
});

describe("sequenceProgress", () => {
  it("sends a brand-new business to contact details after the business step", () => {
    const s = emptyState({ entity_type: "LLC", formation_state: "CA" });
    const p = sequenceProgress(s);
    expect(p.statuses[0].status).toBe("complete");
    expect(p.nextStep?.key).toBe("contact");
    expect(p.blockingDone).toBe(false);
  });

  it("unlocks the review when blocking steps are done even if documents trail", () => {
    const s = completeState();
    s.documents = [];
    const p = sequenceProgress(s);
    expect(p.blockingDone).toBe(true);
    expect(p.nextStep?.key).toBe("documents");
  });
});
