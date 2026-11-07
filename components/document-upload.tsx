"use client";

import { useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { ALLOWED_UPLOAD_TYPES, MAX_UPLOAD_BYTES } from "@/lib/funding/documents";
import { recordDocumentUpload } from "@/app/app/actions";

/**
 * Uploads straight from the browser to the private `funding-documents` bucket
 * (bypasses the 4.5 MB serverless body cap), then asks the server to verify and
 * record it. The first path segment is the business id — Storage RLS only lets
 * members of that business write there.
 */
export function DocumentUpload({
  businessId,
  documentType,
  label,
  replacing,
}: {
  businessId: string;
  documentType: string;
  label: string;
  replacing: boolean;
}) {
  const input = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [, startTransition] = useTransition();
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const file = input.current?.files?.[0];
    if (!file) return setMsg({ ok: false, text: "Choose a file first." });
    if (file.size > MAX_UPLOAD_BYTES) return setMsg({ ok: false, text: "Files must be 10 MB or smaller." });
    if (!ALLOWED_UPLOAD_TYPES.has(file.type)) return setMsg({ ok: false, text: "Upload a PDF or a photo (JPG, PNG, HEIC)." });

    setBusy(true);
    setMsg(null);
    const safeName = file.name.replace(/[^\w.\-]+/g, "_").slice(-120);
    const path = `${businessId}/${documentType}/${Date.now()}-${safeName}`;
    const supabase = createClient();
    const { error } = await supabase.storage.from("funding-documents").upload(path, file, { contentType: file.type });
    if (error) {
      setBusy(false);
      return setMsg({ ok: false, text: `Upload failed: ${error.message}` });
    }
    const res = await recordDocumentUpload({ documentType, path, fileName: file.name, contentType: file.type });
    setBusy(false);
    setMsg({ ok: res.ok, text: res.message ?? "" });
    if (res.ok) {
      if (input.current) input.current.value = "";
      startTransition(() => router.refresh());
    }
  }

  return (
    <form onSubmit={onSubmit} className="fm-upload">
      <input
        ref={input}
        type="file"
        accept="application/pdf,image/jpeg,image/png,image/heic,image/heif,image/webp"
        aria-label={`Upload ${label}`}
        required
      />
      <button type="submit" className="fm-btn fm-btn-primary" disabled={busy} aria-busy={busy}>
        {busy ? "Uploading…" : replacing ? "Replace" : "Upload"}
      </button>
      {msg && (
        <p role="status" className={msg.ok ? "fm-hint" : "fm-error"}>
          {msg.text}
        </p>
      )}
    </form>
  );
}
