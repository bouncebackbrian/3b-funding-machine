import { expect, it } from "vitest";
import { completeState, LIVE_RULES } from "./fixtures";
import { buildPacket, renderPacketSummary } from "../packet";
import { evaluateReadiness } from "../readiness";

it("does not treat a document marked verified as evidence without a file in its business folder", () => {
  const now = new Date("2026-11-14T12:00:00Z");
  const state = completeState();
  const formation = state.documents.find((doc) => doc.document_type === "formation_documents")!;
  formation.status = "verified";
  formation.storage_path = "another-business/formation_documents/formation.pdf";

  const packet = buildPacket(state, evaluateReadiness(state, LIVE_RULES, now), now);
  expect(packet.documents.find((doc) => doc.archiveName.includes("formation_documents"))).toMatchObject({
    path: null,
    status: "Missing",
  });
  expect(renderPacketSummary(packet)).toContain("3B Funding Desk eligibility requires a separate evidence review.");
});

it("includes the business contact details and NAICS code in the exported packet", () => {
  const now = new Date("2026-11-14T12:00:00Z");
  const state = completeState();
  Object.assign(state.business, {
    address_line1: "22 Sample Street",
    address_line2: "Suite 5",
    city: "Reno",
    state: "NV",
    zip_code: "89501",
    business_phone: "775-555-0100",
    business_email: "hello@example.com",
    website_url: "https://example.com",
    naics_code: "492110",
  });
  const summary = renderPacketSummary(buildPacket(state, evaluateReadiness(state, LIVE_RULES, now), now));
  expect(summary).toContain("22 Sample Street\nSuite 5\nReno, NV 89501");
  expect(summary).toContain("775-555-0100");
  expect(summary).toContain("hello@example.com");
  expect(summary).toContain("https://example.com");
  expect(summary).toContain("492110");
});

it("exports trucking guidance for a trucking business and keeps the asset guidance general", () => {
  const now = new Date("2026-11-14T12:00:00Z");
  const state = completeState();
  Object.assign(state.business, { business_type: "other", naics_code: "722515" });
  state.equipment = null;
  const packetForState = () => renderPacketSummary(buildPacket(state, evaluateReadiness(state, LIVE_RULES, now), now));
  expect(packetForState()).toContain("ASSETS AND REPAYMENT CAPACITY");
  expect(packetForState()).not.toContain("TRUCKING OPERATING CHECKLIST");
  state.business.naics_code = "484121";
  expect(packetForState()).toContain("TRUCKING OPERATING CHECKLIST");
  expect(packetForState()).toContain("available loan value");
});
