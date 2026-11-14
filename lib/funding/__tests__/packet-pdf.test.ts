import { PDFDocument } from "pdf-lib";
import { expect, it } from "vitest";
import { buildPacket } from "../packet";
import { buildPacketPdf } from "../packet-pdf";
import { evaluateReadiness } from "../readiness";
import { completeState, LIVE_RULES, NOW } from "./fixtures";

it("generates a readable packet and includes only available supporting pages", async () => {
  const state = completeState();
  const packet = buildPacket(state, evaluateReadiness(state, LIVE_RULES, NOW), NOW);
  packet.documents[0].path = "formation.pdf";
  packet.documents[1].path = "unavailable.pdf";
  const source = await PDFDocument.create();
  source.addPage([300, 400]).drawText("Supporting evidence", { x: 30, y: 350 });
  const baseline = await buildPacketPdf(packet, async () => { throw new Error("Unavailable"); }, async () => new Uint8Array());
  const result = await buildPacketPdf(packet, async (path) => {
    if (path !== "formation.pdf") throw new Error("Unavailable");
    return new Blob([Uint8Array.from(await source.save())], { type: "application/pdf" });
  }, async () => new Uint8Array());

  const merged = await PDFDocument.load(result.bytes);
  expect(merged.getPageCount()).toBe((await PDFDocument.load(baseline.bytes)).getPageCount() + 1);
  expect(merged.getPage(merged.getPageCount() - 1).getSize()).toEqual({ width: 300, height: 400 });
  expect(result.unavailable).toEqual([packet.documents[1].label]);
  expect(packet.signatures).toHaveLength(4);
});
