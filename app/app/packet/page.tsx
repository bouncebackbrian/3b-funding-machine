import { AmountReview } from "./amount-review";
import { CREDIT_REVIEW } from "@/lib/funding/goal-fit";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getReadinessRules, requireFundingContext } from "@/lib/dal";
import { buildPacket, BUSINESS_CREDIT_EXAMPLES, BUSINESS_CREDIT_GUIDANCE, CASH_FLOW_GUIDANCE, PACKET_NOTICE, PACKET_TITLE, PUBLIC_LISTING_GUIDANCE } from "@/lib/funding/packet";
import { AFFILIATE_DISCLOSURE } from "@/lib/funding/net30";
import { DownloadDocuments } from "./download-documents";
import { evaluateReadiness } from "@/lib/funding/readiness";

export default async function BankablePacketPage() {
  const { state } = await requireFundingContext();
  if (!state.readiness) redirect("/app/setup/review");

  const now = new Date();
  const packet = buildPacket(state, evaluateReadiness(state, await getReadinessRules(), now), now);
  return (
    <article className="fm-stack" data-clarity-mask="true">
      <header>
        <h1 className="fm-h1">{PACKET_TITLE}</h1>
        <p>{packet.businessName} · {packet.date}</p>
        <p className="fm-muted">{PACKET_NOTICE}</p>
      </header>
      <section className="fm-card fm-stack">
        <h2 className="fm-h2">Business contact</h2>
        <dl>{packet.contact.map(([label, value]) => <div key={label}><dt><strong>{label}</strong></dt><dd className="whitespace-pre-wrap">{value}</dd></div>)}</dl>
        <Link href="/app/setup/contact">Update business contact</Link>
      </section>
      <section className="fm-card fm-stack">
        <h2 className="fm-h2">Funding request</h2>
        <dl>{packet.funding.map(([label, value]) => <div key={label}><dt><strong>{label}</strong></dt><dd className="whitespace-pre-wrap">{value}</dd></div>)}</dl>
        <h3 className="fm-h3">Client-reported financials</h3>
        <p className="fm-muted">{CASH_FLOW_GUIDANCE}</p>
        <dl>{packet.finances.map(([label, value]) => <div key={label}><dt><strong>{label}</strong></dt><dd>{value}</dd></div>)}</dl>
      </section>
      {packet.goalFit && (
        <section className="fm-card fm-stack" id="funding-goal-match">
          <h2 className="fm-h2">Financing options for your request</h2>
          <h3 className="fm-h3">{packet.goalFit.type}</h3>
          <p>3B readiness score {packet.goalFit.score}/100</p>
          <p>{packet.goalFit.readinessAction}</p>
          <p>{packet.goalFit.evidence}</p>
          <h3 className="fm-h3">Credit and repayment review</h3>
          <p>{CREDIT_REVIEW}</p>
          <dl>{packet.goalFit.review.map(([label, value]) => (
            <div key={label}><dt><strong>{label}</strong></dt><dd>{value}</dd></div>
          ))}</dl>
          <Link href="/app/setup/documents#business_credit_report">Add business credit report</Link>
          <h3 className="fm-h3">Compare funding paths</h3>
          <ul className="fm-mini">
            {packet.goalFit.paths.map(({ title, detail }) => (
              <li key={title}><strong>{title}</strong><p>{detail}</p></li>
            ))}
          </ul>
          <p className="fm-muted">The score measures preparation. Check for a no-personal-guarantee offer and confirm affordable payments before estimating a financeable amount.</p>
        </section>
      )}
      {packet.goalFit && <AmountReview originalAmount={packet.goalFit.amount} />}
      <section className="fm-card fm-stack">
        <h2 className="fm-h2">Bankability checklist</h2>
        <p className="fm-muted">On file means recorded in the portal. 3B Funding Desk eligibility requires a separate evidence review.</p>
        <ul className="fm-mini">
          {packet.checks.map((check) => (
            <li key={check.label}>
              {check.label} · {check.status}
              {check.fix && check.status === "Action needed" && <> · <Link href={`/app/setup/${check.fix}`}>Update</Link></>}
            </li>
          ))}
        </ul>
      </section>
      <section className="fm-card fm-stack">
        <h2 className="fm-h2">Supporting documents</h2>
        <ul className="fm-mini">{packet.documents.map((doc) => (
          <li key={doc.label}><strong>{doc.label}</strong> · {doc.status} · {doc.classification}<p className="fm-muted fm-small">{doc.help}</p></li>
        ))}</ul>
        <Link href="/app/setup/documents">Update documents</Link>
      </section>
      <section className="fm-card fm-stack">
        <h2 className="fm-h2">Final bank handoff</h2>
        <ul className="fm-mini">{packet.lenderChecklist.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>
      <section className="fm-card fm-stack" id="capital-preparation">
        <h2 className="fm-h2">Assets and repayment capacity</h2>
        <Link href="/app/setup/banking">Update money on hand</Link>
        <Link href="/app/setup/documents#business_asset_register">Upload existing asset register</Link>
        <ul className="fm-mini">{packet.capitalPreparation.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>
      {packet.truckingPreparation.length > 0 && (
        <section className="fm-card fm-stack" id="trucking-preparation">
          <h2 className="fm-h2">Trucking operating checklist</h2>
          <ul className="fm-mini">{packet.truckingPreparation.map((item) => <li key={item}>{item}</li>)}</ul>
          <Link href="/app/setup/documents#trucking_expense_summary">Upload trucking expense summary</Link>
          <a href="https://www.fmcsa.dot.gov/registration/insurance-filing-requirements">Check FMCSA insurance filing requirements</a>
        </section>
      )}
      <section className="fm-card fm-stack" id="public-listings">
        <h2 className="fm-h2">Google and 411 business listings</h2>
        <p>{PUBLIC_LISTING_GUIDANCE}</p>
        <a href="https://support.google.com/business/answer/3038177" target="_blank" rel="noreferrer">Review Google Business Profile guidelines</a>
      </section>
      <section className="fm-card fm-stack" id="business-credit">
        <h2 className="fm-h2">Build business payment history</h2>
        <Link href="/app/net-30">Track Net 30 invoices and payments</Link>
        <p>{BUSINESS_CREDIT_GUIDANCE}</p>
        <ul className="fm-mini">{BUSINESS_CREDIT_EXAMPLES.map((example) => (
          <li key={example.name}>
            <a href={example.url} rel={example.affiliate ? "sponsored" : undefined}>{example.name}</a> · {example.use}
            {example.affiliate && <span className="fm-muted"> {AFFILIATE_DISCLOSURE}</span>}
          </li>
        ))}</ul>
      </section>
      <section className="fm-card fm-stack">
        <h2 className="fm-h2">Download packet</h2>
        <p>Start with the summary. Add the supporting files the lender asks for through its secure channel.</p>
        <div className="flex flex-wrap gap-3">
          <a href="/app/packet/download" className="fm-btn fm-btn-primary">Download summary</a>
          {packet.documents.some((doc) => doc.path) && (
            <DownloadDocuments packet={packet} />
          )}
        </div>
      </section>
    </article>
  );
}
