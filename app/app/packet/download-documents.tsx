"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { renderPacketSummary, type BankablePacket } from "@/lib/funding/packet";

export function DownloadDocuments({ packet }: { packet: BankablePacket }) {
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");

  function save(bytes: Uint8Array<ArrayBufferLike>, type: string, filename: string) {
    const url = URL.createObjectURL(new Blob([Uint8Array.from(bytes)], { type }));
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 30_000);
  }

  async function download(format: "pdf" | "zip") {
    setBusy(true);
    setStatus("");
    try {
      const supabase = createClient();
      const loadFile = async (path: string) => {
        const { data, error } = await supabase.storage.from("funding-documents").download(path);
        if (error || !data) throw new Error("File unavailable");
        return data;
      };
      if (format === "pdf") {
        const { buildPacketPdf } = await import("@/lib/funding/packet-pdf");
        const { bytes, unavailable } = await buildPacketPdf(packet, loadFile, async (photo) => {
          const image = await createImageBitmap(photo);
          try {
            const canvas = document.createElement("canvas");
            const scale = Math.min(1, 2200 / Math.max(image.width, image.height));
            canvas.width = Math.max(1, Math.round(image.width * scale));
            canvas.height = Math.max(1, Math.round(image.height * scale));
            const context = canvas.getContext("2d");
            if (!context) throw new Error("Could not prepare image");
            context.fillStyle = "#fff";
            context.fillRect(0, 0, canvas.width, canvas.height);
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
            const jpg = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.88));
            if (!jpg) throw new Error("Could not convert photo");
            return new Uint8Array(await jpg.arrayBuffer());
          } finally {
            image.close();
          }
        });
        save(bytes, "application/pdf", "3B-Bankable-Readiness-Packet.pdf");
        if (unavailable.length) setStatus(`Replace these files before sharing the PDF: ${unavailable.join(", ")}.`);
        return;
      }
      const { strToU8, zipSync } = await import("fflate");
      const files: Record<string, Uint8Array> = {};
      const evidence: string[] = [];
      let missing = 0;

      for (const doc of packet.documents) {
        if (!doc.path) continue;
        try {
          files[doc.archiveName] = new Uint8Array(await (await loadFile(doc.path)).arrayBuffer());
          evidence.push(`${doc.label} — ${doc.archiveName}`);
        } catch {
          missing++;
          evidence.push(`${doc.label} — file unavailable. Re-upload it before sharing this packet.`);
        }
      }

      files["3B-Bankable-Readiness-Packet.txt"] = strToU8(renderPacketSummary(packet, evidence));
      save(zipSync(files, { level: 0 }), "application/zip", "3B-Bankable-Readiness-Packet.zip");
      if (missing) setStatus(`${missing} supporting file(s) could not be retrieved. The summary identifies them.`);
    } catch {
      setStatus("Could not download the packet. Try again or download the summary by itself.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="fm-stack">
      <button type="button" className="fm-btn fm-btn-primary" disabled={busy} onClick={() => download("pdf")}>
        {busy ? "Preparing download…" : "Download full PDF packet"}
      </button>
      {packet.documents.some((doc) => doc.path) && (
        <button type="button" className="fm-btn fm-btn-ghost" disabled={busy} onClick={() => download("zip")}>
          Download original files as ZIP
        </button>
      )}
      <p className="fm-small" role="status">{status}</p>
    </div>
  );
}
