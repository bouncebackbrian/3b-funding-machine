import Link from "next/link";
import { DocumentUpload } from "@/components/document-upload";
import { StepHeader } from "@/components/step-header";
import { requireFundingContext } from "@/lib/dal";
import { isProvided, requirementsForFunding } from "@/lib/funding/documents";
import { sequenceProgress } from "@/lib/funding/sequence";
import { markDocumentNotApplicable, restoreDocumentApplicability } from "../../actions";

const CLASS_LABEL = { required: "Required", conditionally_required: "If it applies", optional: "Helpful" } as const;

export default async function DocumentsStep() {
  const { business, state } = await requireFundingContext();
  const reqs = requirementsForFunding(state);
  const { blockingDone } = sequenceProgress(state);

  return (
    <>
      <StepHeader
        step="documents"
        intro="Upload files once and update them here as needed. Your readiness review uses this checklist, and the packet uses these same private files. Upload PDFs or clear photos up to 10 MB each."
      />
      <ul className="fm-docs">
        {reqs.map((r) => {
          const doc = state.documents.find((d) => d.document_type === r.documentType);
          const provided = isProvided(doc);
          const na = doc?.requirement_classification === "not_applicable";
          return (
            <li key={r.documentType} id={r.documentType} className="fm-doc">
              <div className="fm-doc-head">
                <div>
                  <strong>{r.label}</strong> <span className={`fm-tag fm-tag-${r.classification}`}>{CLASS_LABEL[r.classification]}</span>
                  <p className="fm-muted fm-small">{r.help}</p>
                </div>
                <span className={`fm-status ${provided ? "fm-status-ok" : na ? "fm-status-na" : "fm-status-missing"}`}>
                  {provided ? "Uploaded" : na ? "Doesn't apply" : "Missing"}
                </span>
              </div>
              {provided && doc?.file_name && <p className="fm-small fm-muted">File: {doc.file_name}</p>}
              {na ? (
                <form action={restoreDocumentApplicability}>
                  <input type="hidden" name="document_type" value={r.documentType} />
                  <button type="submit" className="fm-link-btn fm-small">
                    Actually, this applies — let me upload it
                  </button>
                </form>
              ) : (
                <DocumentUpload businessId={business.id} documentType={r.documentType} label={r.label} replacing={provided} />
              )}
              {r.classification !== "required" && !provided && !na && (
                <form action={markDocumentNotApplicable}>
                  <input type="hidden" name="document_type" value={r.documentType} />
                  <button type="submit" className="fm-link-btn fm-small">
                    This doesn&apos;t apply to my business
                  </button>
                </form>
              )}
            </li>
          );
        })}
      </ul>
      <div className="fm-continue">
        {blockingDone ? (
          <Link href="/app/setup/review" className="fm-btn fm-btn-primary">
            Continue to readiness review
          </Link>
        ) : (
          <p className="fm-muted fm-small">Finish the earlier steps to unlock your readiness review.</p>
        )}
      </div>
    </>
  );
}
