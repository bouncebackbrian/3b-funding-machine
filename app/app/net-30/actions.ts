"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import type { ActionState } from "@/app/app/actions";
import { getActiveBusiness, verifySession } from "@/lib/dal";
import { invoiceDate, invoiceCents, fundingToday } from "@/lib/funding/net30";

async function invoiceContext() {
  const session = await verifySession();
  const business = await getActiveBusiness();
  if (!business) redirect("/app/setup/contact");
  return { ...session, business };
}

export async function addInvoice(_previous: ActionState, data: FormData): Promise<ActionState> {
  const { supabase, business } = await invoiceContext();
  const vendor = String(data.get("vendor") ?? "").trim();
  const invoiceNumber = String(data.get("invoice_number") ?? "").trim();
  const issuedOn = invoiceDate(data.get("issued_on"));
  const dueOn = invoiceDate(data.get("due_on"));
  const amount = invoiceCents(data.get("amount"));
  if (!vendor || vendor.length > 120 || !invoiceNumber || invoiceNumber.length > 100) {
    return { ok: false, message: "Enter the vendor and invoice number." };
  }
  if (!issuedOn || !dueOn || issuedOn > fundingToday() || dueOn < issuedOn || !amount) {
    return { ok: false, message: "Enter the invoice amount and valid dates from the vendor’s invoice." };
  }
  const { error } = await supabase.from("funding_net30_invoices").insert({
    business_id: business.id,
    vendor,
    invoice_number: invoiceNumber,
    issued_on: issuedOn,
    due_on: dueOn,
    amount_cents: amount,
  });
  if (error) {
    return { ok: false, message: error.code === "23505" ? "This vendor invoice is already listed." : "Could not save the invoice. Try again." };
  }
  revalidatePath("/app/net-30");
  return { ok: true, message: "Invoice saved." };
}

export async function recordPayment(_previous: ActionState, data: FormData): Promise<ActionState> {
  const { supabase, business } = await invoiceContext();
  const id = String(data.get("invoice_id") ?? "");
  const paidOn = invoiceDate(data.get("paid_on"));
  if (!paidOn || paidOn > fundingToday()) return { ok: false, message: "Enter the date the invoice was paid in full." };
  const { error } = await supabase.from("funding_net30_invoices")
    .update({ paid_on: paidOn })
    .eq("id", id)
    .eq("business_id", business.id)
    .select("id")
    .single();
  if (error) return { ok: false, message: "Could not record the payment. Check the date and try again." };
  revalidatePath("/app/net-30");
  return { ok: true, message: "Payment date saved." };
}
