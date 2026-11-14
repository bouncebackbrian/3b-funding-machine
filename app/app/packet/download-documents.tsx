"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { renderPacketSummary, type BankablePacket } from "@/lib/funding/packet";

export function DownloadDocuments({ packet }: { packet: BankablePacket }) {
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");

  async function download() {
    setBusy(true);
    setStatus("");
    try {
      const { strToU8, zipSync } = await import("fflate");
      const supabase = createClient();
      const files: Record<string, Uint8Array> = {};
      const evidence: string[] = [];
      let missing = 0;

      for (const doc of packet.documents) {
        if (!doc.path) continue;
        const result = await supabase.storage.from("funding-documents").download(doc.path);
        if (result.error || !result.data) {
          missing++;
          evidence.push(`${doc.label} — file unavailable. Re-upload it before sharing this packet.`);
          continue;
        }
        files[doc.archiveName] = new Uint8Array(await result.data.arrayBuffer());
        evidence.push(`${doc.label} — ${doc.archiveName}`);
      }

      files["3B-Bankable-Readiness-Packet.txt"] = strToU8(renderPacketSummary(packet, evidence));
      const archive = Uint8Array.from(zipSync(files, { level: 0 }));
      const url = URL.createObjectURL(new Blob([archive], { type: "application/zip" }));
      const link = document.createElement("a");
      link.href = url;
      link.download = "3B-Bankable-Readiness-Packet.zip";
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 30_000);
      if (missing) setStatus(`${missing} supporting file(s) could not be retrieved. The summary identifies them.`);
    } catch {
      setStatus("Could not download the packet. Try again or download the summary by itself.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div>
      <button type="button" className="fm-btn fm-btn-ghost" disabled={busy} onClick={download}>
        {busy ? "Preparing download…" : "Download with private documents"}
      </button>
      <p className="fm-small" role="status">{status}</p>
    </div>
  );
}
