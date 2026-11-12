import { describe, expect, it } from "vitest";
import { checkAlignment } from "../alignment";
import { mediaGroupBaseUrl, mediaGroupLink, mediaNeeds } from "../media-group";

const biz = {
  legal_name: "Acme Hauling LLC",
  entity_type: "LLC",
  formation_state: "NV",
  address_line1: "100 Main St",
  address_line2: null,
  state: "NV",
  business_email: "ops@acmehauling.com",
  business_phone: "7755550100",
  website_url: "https://acmehauling.com",
};

describe("3B Media Group hand-off", () => {
  it("hides the offer unless a valid https URL is configured", () => {
    expect(mediaGroupBaseUrl(undefined)).toBeNull();
    expect(mediaGroupBaseUrl("")).toBeNull();
    expect(mediaGroupBaseUrl("http://3bmedia.example")).toBeNull();
    expect(mediaGroupBaseUrl("not a url")).toBeNull();
    expect(mediaGroupBaseUrl("https://3bmedia.example/start")).toBe("https://3bmedia.example/start");
  });

  it("link carries only a source tag and services — no customer data", () => {
    const link = new URL(mediaGroupLink("https://3bmedia.example/start?ref=x", ["domain", "website"]));
    expect(link.searchParams.get("source")).toBe("funding-machine");
    expect(link.searchParams.get("services")).toBe("domain,website");
    expect(link.searchParams.get("ref")).toBe("x");
    expect([...link.searchParams.keys()].sort()).toEqual(["ref", "services", "source"]);
  });

  it("no website → domain, website, email and logo", () => {
    expect(mediaNeeds(checkAlignment({ ...biz, website_url: null, business_email: "acme@gmail.com" }))).toEqual(["domain", "website", "email", "logo"]);
  });

  it("website but gmail → email + logo", () => {
    expect(mediaNeeds(checkAlignment({ ...biz, business_email: "acme@gmail.com" }))).toEqual(["email", "logo"]);
  });

  it("everything in place → logo only", () => {
    expect(mediaNeeds(checkAlignment(biz))).toEqual(["logo"]);
  });
});

import { domainHint, serviceWhy } from "../media-group";

describe("domain hint", () => {
  it("uses the existing website domain", () => {
    expect(domainHint({ legal_name: "Acme Hauling LLC", website_url: "https://www.acmehauling.com" })).toEqual({ domain: "acmehauling.com", existing: true });
  });
  it("builds an example from the legal name, dropping the entity suffix", () => {
    expect(domainHint({ legal_name: "Acme Hauling LLC", website_url: null })).toEqual({ domain: "acmehauling.com", existing: false });
    expect(domainHint({ legal_name: "B & B Trucking, Inc.", website_url: null })?.domain).toBe("bandbtrucking.com");
  });
  it("copy shows a matching email on that domain", () => {
    expect(serviceWhy("email", "acmehauling.com")).toContain("you@acmehauling.com");
    expect(serviceWhy("email", null)).toContain("you@yourbusiness.com");
  });
});
