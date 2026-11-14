import { redirect } from "next/navigation";
import { ActionForm, Field, SubmitButton } from "@/components/form";
import { getActiveBusiness, verifySession } from "@/lib/dal";
import { AFFILIATE_DISCLOSURE, fundingToday, invoiceStatus, PRINTING_VENDORS } from "@/lib/funding/net30";
import { addInvoice, recordPayment } from "./actions";

const dollars = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

export default async function Net30Page() {
  const { supabase } = await verifySession();
  const business = await getActiveBusiness();
  if (!business) redirect("/app/setup/contact");

  const { data: invoices, error } = await supabase.from("funding_net30_invoices")
    .select("id, vendor, invoice_number, issued_on, due_on, amount_cents, paid_on")
    .eq("business_id", business.id)
    .order("due_on");
  const today = fundingToday();

  return (
    <div className="fm-stack">
      <header>
        <h1 className="fm-h1">Net 30 payments</h1>
        <p className="fm-muted">{business.legal_name} · Pay the vendor directly, then record when the invoice was paid in full.</p>
      </header>
      <section className="fm-card fm-stack">
        <h2 className="fm-h2">Add an invoice</h2>
        <ActionForm action={addInvoice} resetOnSuccess>
          <div className="fm-grid-2">
            <Field name="vendor" label="Vendor" maxLength={120} required />
            <Field name="invoice_number" label="Invoice number" maxLength={100} required />
            <Field name="issued_on" label="Invoice date" type="date" required />
            <Field name="due_on" label="Due date on invoice" type="date" required />
          </div>
          <Field name="amount" label="Invoice total in dollars" inputMode="decimal" required />
          <SubmitButton>Save invoice</SubmitButton>
        </ActionForm>
      </section>
      <section className="fm-card fm-stack">
        <h2 className="fm-h2">Invoices</h2>
        {error && <p role="alert">Invoices could not be loaded. Refresh to try again.</p>}
        {invoices?.length === 0 && <p className="fm-muted">Your saved invoices will appear here.</p>}
        <ul className="fm-docs">
          {invoices?.map((invoice) => (
            <li key={invoice.id} className="fm-doc">
              <strong>{invoice.vendor} · {invoice.invoice_number}</strong>
              <p>{dollars.format(invoice.amount_cents / 100)} · Due {invoice.due_on} · {invoiceStatus(invoice.due_on, invoice.paid_on, today)}</p>
              <ActionForm action={recordPayment}>
                <input type="hidden" name="invoice_id" value={invoice.id} />
                <Field name="paid_on" label="Paid in full on" type="date" defaultValue={invoice.paid_on} required />
                <SubmitButton>{invoice.paid_on ? "Update payment date" : "Record payment"}</SubmitButton>
              </ActionForm>
            </li>
          ))}
        </ul>
      </section>
      <section className="fm-card fm-stack">
        <h2 className="fm-h2">Build reporting history</h2>
        <p>Use vendor terms for purchases the business already needs. Ask which business bureaus receive positive payments and check the reports after the vendor’s reporting cycle. Keep the invoice and proof of payment. Use genuine accounts in the company’s name. A payment recorded here is the company’s own record, and the vendor controls bureau reporting.</p>
        <ul className="fm-mini">
          {PRINTING_VENDORS.map(({ name, use, url, affiliate }) => (
            <li key={name}>
              <a href={url} rel={affiliate ? "sponsored" : undefined}>{name}</a> · {use}
              {affiliate && <span className="fm-muted"> {AFFILIATE_DISCLOSURE}</span>}
            </li>
          ))}
          <li><a href="https://business.walmart.com/cp/pay-by-invoice/7252775">Walmart Business Pay By Invoice</a> offers Net 30 through TreviPay. Verify guarantee and business credit reporting on the written offer.</li>
          <li><a href="https://www.uline.com/CustomerService/ULINE_FAQ_Ans?FAQ_ID=104">Uline</a> and <a href="https://www.grainger.com/content/mc/policies/terms-of-sale">Grainger</a> offer Net 30 to qualifying accounts. Check the account’s actual terms and reporting.</li>
        </ul>
      </section>
      <section className="fm-card fm-stack">
        <h2 className="fm-h2">Review unsecured business credit</h2>
        <p>Review one offer at a time. Check the named borrower, personal guarantee, business collateral, credit reporting, fees, and payment schedule. Look for accounts the business can repay from operating cash. List any pending applications and existing card balances before adding another card. Compare the proposed payments against operating cash. A card limit is a spending limit.</p>
        <p><a href="https://mercury.com/credit">Mercury IO</a> is a reporting charge card for eligible companies. It advertises no personal guarantee and bases spending limits on available cash.</p>
        <p><a href="https://www.synchrony.com/partner/sams-club">Sam’s Club Business Mastercard</a> is a lead to verify with Synchrony. Ask for the current business-only agreement before counting it as no-PG.</p>
        <p><a href="https://squareup.com/help/us/en/article/8543-apply-for-a-loan">Square Loans</a> is a cash funding lead for existing Square merchants with an invitation. Review the actual offer before counting it as unsecured and no-PG.</p>
      </section>
    </div>
  );
}
