import { describe, expect, it } from "vitest";
import { checkAlignment, isIdentityAligned, sameSite, websiteHost, type AlignmentInput } from "../alignment";
import { evaluateReadiness } from "../readiness";
import { buildRoadmap } from "../roadmap";
import { completeState, LIVE_RULES, NOW } from "./fixtures";

const base: AlignmentInput = {
  legal_name: "Acme Hauling LLC",
  entity_type: "LLC",
  formation_state: "NV",
  address_line1: "100 Main St",
  address_line2: null,
  state: "NV",
  business_email: "ops@acmehauling.com",
  business_phone: "(775) 555-0100",
  website_url: "https://www.acmehauling.com",
};
const status = (input: AlignmentInput, key: string) => checkAlignment(input).find((c) => c.key === key)?.status;

describe("checkAlignment", () => {
  it("a consistent business has no mismatches or warnings", () => {
    const checks = checkAlignment(base);
    expect(checks.every((c) => c.status === "ok")).toBe(true);
    expect(isIdentityAligned(checks)).toBe(true);
  });

  it("flags an LLC whose legal name has no LLC suffix", () => {
    expect(status({ ...base, legal_name: "Acme Hauling" }, "name_matches_entity")).toBe("mismatch");
    expect(status({ ...base, legal_name: "Acme Hauling L.L.C." }, "name_matches_entity")).toBe("ok");
  });

  it("warns on free email providers but does not count them as a mismatch", () => {
    const input = { ...base, business_email: "acmehauling@gmail.com" };
    expect(status(input, "email_on_domain")).toBe("warning");
    expect(status(input, "email_matches_website")).toBe("warning");
    expect(isIdentityAligned(checkAlignment(input))).toBe(true);
  });

  it("flags email and website on different business domains", () => {
    expect(status({ ...base, business_email: "ops@acme-trucking.net" }, "email_matches_website")).toBe("mismatch");
  });

  it("treats subdomains and www as the same site", () => {
    expect(websiteHost("acmehauling.com/about")).toBe("acmehauling.com");
    expect(sameSite("mail.acmehauling.com", "acmehauling.com")).toBe(true);
    expect(status({ ...base, business_email: "ops@mail.acmehauling.com" }, "email_matches_website")).toBe("ok");
  });

  it("warns on PO boxes and mailbox addresses", () => {
    expect(status({ ...base, address_line1: "P.O. Box 44" }, "physical_address")).toBe("warning");
    expect(status({ ...base, address_line2: "PMB 12" }, "physical_address")).toBe("warning");
  });

  it("flags an invalid phone and accepts a leading country code", () => {
    expect(status({ ...base, business_phone: "555-0100" }, "business_phone")).toBe("mismatch");
    expect(status({ ...base, business_phone: "+1 775 555 0100" }, "business_phone")).toBe("ok");
  });

  it("warns when formed in one state but located in another", () => {
    expect(status({ ...base, formation_state: "WY" }, "operating_state")).toBe("warning");
    expect(status(base, "operating_state")).toBeUndefined();
  });

  it("only checks D-U-N-S once the column exists", () => {
    expect(status(base, "duns_on_file")).toBeUndefined();
    expect(status({ ...base, duns_number: null }, "duns_on_file")).toBe("missing");
    expect(status({ ...base, duns_number: "123456789" }, "duns_on_file")).toBe("ok");
  });

  it("reports missing fields as missing, never as passing", () => {
    const empty = checkAlignment({ ...base, business_email: null, website_url: null, address_line1: null, business_phone: null });
    for (const k of ["email_on_domain", "email_matches_website", "physical_address", "business_phone"]) {
      expect(empty.find((c) => c.key === k)?.status).toBe("missing");
    }
  });
});

const FOUNDATION_RULES = [
  ...LIVE_RULES,
  ...(["business_email_on_domain", "identity_aligned", "duns_on_file"] as const).map((rule_key, i) => ({
    ...LIVE_RULES[0],
    id: rule_key,
    rule_key,
    category: "foundation",
    label: rule_key,
    required: false,
    sort_order: 200 + i,
  })),
];

describe("foundation readiness rules", () => {
  it("fail for a gmail address, a mismatched identity, and no D-U-N-S", () => {
    const s = completeState();
    s.business = { ...s.business, business_email: "x@gmail.com", legal_name: "Acme Hauling", entity_type: "LLC", duns_number: null };
    const r = evaluateReadiness(s, FOUNDATION_RULES, NOW);
    const out = (k: string) => r.rule_results.find((x) => x.rule_key === k)?.outcome;
    expect(out("business_email_on_domain")).toBe("fail");
    expect(out("identity_aligned")).toBe("fail");
    expect(out("duns_on_file")).toBe("fail");
    // not required → cannot by themselves block package_ready
    expect(r.rule_results.filter((x) => x.required && x.outcome === "fail")).toHaveLength(0);
  });

  it("roadmap shows D-U-N-S exactly once — as a gap when the rule is live, as a standing step otherwise", () => {
    const s = completeState();
    s.business = { ...s.business, duns_number: null };
    const count = (rules: typeof LIVE_RULES) =>
      buildRoadmap(s, evaluateReadiness(s, rules, NOW)).filter((x) => x.title.includes("D-U-N-S")).length;
    expect(count(FOUNDATION_RULES)).toBe(1);
    expect(count(LIVE_RULES)).toBe(1);
    s.business = { ...s.business, duns_number: "123456789" };
    expect(count(FOUNDATION_RULES)).toBe(0);
    expect(count(LIVE_RULES)).toBe(0);
  });
});
