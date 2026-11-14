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
