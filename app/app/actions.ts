"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  ACTIVE_BUSINESS_COOKIE,
  getActiveBusiness,
  getFundingState,
  getReadinessRules,
  getUserBusinesses,
  verifySession,
} from "@/lib/dal";
import { DISCLOSURES } from "@/lib/funding/disclosures";
import { ALLOWED_UPLOAD_TYPES, DOCUMENT_REQUIREMENTS, MAX_UPLOAD_BYTES } from "@/lib/funding/documents";
import { getOrCreateFundingProfile, runReadinessAndRoadmap } from "@/lib/funding/persist";
import { nextStepKey } from "@/lib/funding/sequence";
import {
  BANK_ACCOUNT_STATUSES,
  ENTITY_TYPES,
  EQUIPMENT_CATEGORIES,
  FUNDING_GOAL_TYPES,
} from "@/lib/funding/types";
import type { SetupStepKey } from "@/lib/funding/readiness";
import type { Database } from "@/lib/supabase/database.types";

export type ActionState = { ok: boolean; message?: string; fieldErrors?: Record<string, string> } | null;

// ── form helpers ────────────────────────────────────────────────────────────
const str = (fd: FormData, k: string) => {
  const v = fd.get(k);
  return typeof v === "string" && v.trim() ? v.trim() : null;
};
const num = (fd: FormData, k: string): number | null | "invalid" => {
  const s = str(fd, k);
  if (s == null) return null;
  const n = Number(s.replace(/[$,\s]/g, ""));
  return Number.isFinite(n) && n >= 0 ? n : "invalid";
};
const oneOf = <T extends string>(v: string | null, allowed: readonly T[]): T | null =>
  v != null && (allowed as readonly string[]).includes(v) ? (v as T) : null;

function fail(message: string, fieldErrors?: Record<string, string>): ActionState {
  return { ok: false, message, fieldErrors };
}

function goNext(step: SetupStepKey): never {
  revalidatePath("/app", "layout");
  const next = nextStepKey(step);
  redirect(next ? `/app/setup/${next}` : "/app/setup/review");
}

/** The business every mutation targets: the user's own active selection, never a form field. */
async function requireActiveBusiness() {
  const session = await verifySession();
  const business = await getActiveBusiness();
  if (!business) redirect("/app/setup/business");
  return { ...session, business };
}

async function setActiveBusinessCookie(id: string) {
  (await cookies()).set(ACTIVE_BUSINESS_COOKIE, id, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });
}

// ── Step 1: business foundation ─────────────────────────────────────────────
const EIN_RE = /^\d{2}-?\d{7}$/;
const BUSINESS_TYPES = ["owner_op", "carrier", "brokerage", "fleet_management", "service", "other"] as const;

export async function saveBusiness(_prev: ActionState, fd: FormData): Promise<ActionState> {
  const { user, supabase } = await verifySession();

  const legalName = str(fd, "legal_name");
  const entityType = oneOf(str(fd, "entity_type"), ENTITY_TYPES);
  const formationState = str(fd, "formation_state")?.toUpperCase() ?? null;
  const einRaw = str(fd, "ein");
  const fieldErrors: Record<string, string> = {};
  if (!legalName) fieldErrors.legal_name = "Enter your legal business name.";
  if (!entityType) fieldErrors.entity_type = "Choose your entity type.";
  if (!formationState || !/^[A-Z]{2}$/.test(formationState)) fieldErrors.formation_state = "Use the 2-letter state code, e.g. CA.";
  if (einRaw && !EIN_RE.test(einRaw)) fieldErrors.ein = "EIN format is 12-3456789.";
  if (Object.keys(fieldErrors).length) return fail("Please fix the highlighted fields.", fieldErrors);

  const ein = einRaw ? `${einRaw.replace("-", "").slice(0, 2)}-${einRaw.replace("-", "").slice(2)}` : null;
  const einStatus = ein ? "approved" : oneOf(str(fd, "ein_status"), ["pending", "not_applied"] as const) ?? "not_applied";

  // "create_new" lets someone who already has a 3B business start a separate one.
  let businessId = fd.get("create_new") === "1" ? null : ((await getActiveBusiness())?.id ?? null);

  if (!businessId) {
    // Canonical ecosystem path: creates businesses + owner business_members atomically.
    const created = await supabase.rpc("create_3b_business_for_current_user", {
      p_company_name: legalName!,
      p_business_type: oneOf(str(fd, "business_type"), BUSINESS_TYPES) ?? "other",
      p_entity_type: entityType!,
    });
    if (created.error || !created.data) return fail(`Could not create your business: ${created.error?.message ?? "unknown error"}`);
    businessId = created.data.id;
    await setActiveBusinessCookie(businessId);
  }

  const upd = await supabase
    .from("businesses")
    .update({
      legal_name: legalName!,
      dba_name: str(fd, "dba_name"),
      entity_type: entityType,
      formation_state: formationState,
      formation_date: str(fd, "formation_date"),
      naics_code: str(fd, "naics_code"),
      ...(ein ? { ein } : {}),
      ein_status: einStatus,
    })
    .eq("id", businessId);
  if (upd.error) {
    if (upd.error.code === "23505") return fail("That EIN is already registered to another business in 3B. Contact support if this is your business.", { ein: "EIN already in use." });
    return fail(`Could not save your business: ${upd.error.message}`);
  }

  try {
    await getOrCreateFundingProfile(supabase, businessId, user.id);
  } catch (e) {
    return fail(`Saved your business, but could not start your funding profile: ${(e as Error).message}`);
  }
  goNext("business");
}

/** Switch the active business (any business the user already belongs to across 3B). */
export async function switchBusiness(fd: FormData) {
  const id = str(fd, "business_id");
  const mine = await getUserBusinesses();
  if (id && mine.some((b) => b.id === id)) await setActiveBusinessCookie(id);
  revalidatePath("/app", "layout");
  const back = str(fd, "return_to");
  redirect(back === "/app/setup/business" ? back : "/app/dashboard");
}

// ── Step 2: contact & location ──────────────────────────────────────────────
export async function saveContact(_prev: ActionState, fd: FormData): Promise<ActionState> {
  const { supabase, business } = await requireActiveBusiness();
  const fieldErrors: Record<string, string> = {};
  const email = str(fd, "business_email");
  const website = str(fd, "website_url");
  const zip = str(fd, "zip_code");
  const state = str(fd, "state")?.toUpperCase() ?? null;
  for (const k of ["address_line1", "city", "business_phone"]) if (!str(fd, k)) fieldErrors[k] = "Required.";
  if (!state || !/^[A-Z]{2}$/.test(state)) fieldErrors.state = "2-letter state code.";
  if (!zip || !/^\d{5}(-\d{4})?$/.test(zip)) fieldErrors.zip_code = "5-digit ZIP.";
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fieldErrors.business_email = "Enter a valid email.";
  if (website && !/^https?:\/\/\S+\.\S+/.test(website)) fieldErrors.website_url = "Start with https://";
  if (Object.keys(fieldErrors).length) return fail("Please fix the highlighted fields.", fieldErrors);

  const upd = await supabase
    .from("businesses")
    .update({
      address_line1: str(fd, "address_line1"),
      address_line2: str(fd, "address_line2"),
      city: str(fd, "city"),
      state,
      zip_code: zip,
      business_phone: str(fd, "business_phone"),
      business_email: email,
      website_url: website,
      website_status: website ? "live" : business.website_status,
    })
    .eq("id", business.id);
  if (upd.error) return fail(`Could not save: ${upd.error.message}`);
  goNext("contact");
}

// ── Step 3: owners ──────────────────────────────────────────────────────────
export async function addOwner(_prev: ActionState, fd: FormData): Promise<ActionState> {
  const { user, supabase, business } = await requireActiveBusiness();
  const fullName = str(fd, "full_name");
  const pct = num(fd, "ownership_percent");
  const fieldErrors: Record<string, string> = {};
  if (!fullName) fieldErrors.full_name = "Enter the owner's full legal name.";
  if (pct === "invalid" || pct == null || pct <= 0 || pct > 100) fieldErrors.ownership_percent = "Enter a percentage from 1 to 100.";
  if (Object.keys(fieldErrors).length) return fail("Please fix the highlighted fields.", fieldErrors);

  const state = await getFundingState(business);
  const currentTotal = state.owners.reduce((s, o) => s + Number(o.ownership_percent ?? 0), 0);
  if (currentTotal + (pct as number) > 100.0001) {
    return fail(`Ownership would total ${currentTotal + (pct as number)}%. It can't exceed 100%.`, { ownership_percent: "Too high." });
  }

  const profile = await getOrCreateFundingProfile(supabase, business.id, user.id);
  const exp = num(fd, "transportation_experience_years");
  const ins = await supabase.from("funding_owners").insert({
    business_id: business.id,
    funding_profile_id: profile.id,
    full_name: fullName!,
    role: str(fd, "role"),
    ownership_percent: pct as number,
    transportation_experience_years: exp === "invalid" ? null : exp,
    has_cdl: str(fd, "has_cdl") === "yes" ? true : str(fd, "has_cdl") === "no" ? false : null,
    created_by: user.id,
  });
  if (ins.error) return fail(`Could not add owner: ${ins.error.message}`);
  revalidatePath("/app", "layout");
  return { ok: true, message: `${fullName} added.` };
}

export async function removeOwner(fd: FormData) {
  const { supabase, business } = await requireActiveBusiness();
  const id = str(fd, "owner_id");
  if (id) await supabase.from("funding_owners").delete().eq("id", id).eq("business_id", business.id);
  revalidatePath("/app", "layout");
}

export async function continueFromOwners() {
  const { business } = await requireActiveBusiness();
  const state = await getFundingState(business);
  if (!state.owners.length) redirect("/app/setup/owners?error=owner_required");
  goNext("owners");
}

// ── Step 4: banking & revenue ───────────────────────────────────────────────
export async function saveBanking(_prev: ActionState, fd: FormData): Promise<ActionState> {
  const { user, supabase, business } = await requireActiveBusiness();
  const bankStatus = oneOf(str(fd, "bank_account_status"), BANK_ACCOUNT_STATUSES.map((b) => b.value));
  const preRevenue = fd.get("pre_revenue") === "on";
  const fields = ["monthly_revenue", "annual_revenue", "checking_balance", "average_daily_balance", "existing_business_debt", "nsf_count_90d"] as const;
  const values: Record<string, number | null> = {};
  const fieldErrors: Record<string, string> = {};
  for (const f of fields) {
    const v = num(fd, f);
    if (v === "invalid") fieldErrors[f] = "Enter a number (no negatives).";
    else values[f] = v;
  }
  if (!bankStatus) fieldErrors.bank_account_status = "Choose one.";
  if (!preRevenue && values.monthly_revenue == null && values.annual_revenue == null) {
    fieldErrors.monthly_revenue = "Enter revenue, or check “no revenue yet”.";
  }
  if (Object.keys(fieldErrors).length) return fail("Please fix the highlighted fields.", fieldErrors);

  const upd = await supabase.from("businesses").update({ bank_account_status: bankStatus! }).eq("id", business.id);
  if (upd.error) return fail(`Could not save bank status: ${upd.error.message}`);

  const profile = await getOrCreateFundingProfile(supabase, business.id, user.id);
  // Append-only: each save is a dated snapshot, so lenders can see history.
  const ins = await supabase.from("funding_financial_snapshots").insert({
    business_id: business.id,
    funding_profile_id: profile.id,
    monthly_revenue: preRevenue ? 0 : values.monthly_revenue,
    annual_revenue: preRevenue ? 0 : values.annual_revenue,
    checking_balance: values.checking_balance,
    average_daily_balance: values.average_daily_balance,
    existing_business_debt: values.existing_business_debt,
    nsf_count_90d: values.nsf_count_90d != null ? Math.round(values.nsf_count_90d) : null,
    notes: preRevenue ? "Self-reported: no revenue yet." : "Self-reported during funding setup.",
    created_by: user.id,
  });
  if (ins.error) return fail(`Could not save your numbers: ${ins.error.message}`);
  goNext("banking");
}

// ── Step 5: funding goal ────────────────────────────────────────────────────
export async function saveGoal(_prev: ActionState, fd: FormData): Promise<ActionState> {
  const { user, supabase, business } = await requireActiveBusiness();
  const goal = oneOf(str(fd, "funding_goal_type"), FUNDING_GOAL_TYPES.map((g) => g.value));
  const amount = num(fd, "target_amount");
  const purpose = str(fd, "funding_purpose");
  const fieldErrors: Record<string, string> = {};
  if (!goal) fieldErrors.funding_goal_type = "Choose what you need funding for.";
  if (amount === "invalid" || amount == null || amount <= 0) fieldErrors.target_amount = "Enter the amount you need.";
  if (!purpose || purpose.length < 10) fieldErrors.funding_purpose = "Describe the business use in a sentence or two.";

  let equipment: (Database["public"]["Tables"]["funding_equipment_requests"]["Update"] & {
    equipment_category: string;
    equipment_subtype: string;
  }) | null = null;
  if (goal === "equipment") {
    const cat = oneOf(str(fd, "equipment_category"), EQUIPMENT_CATEGORIES.map((c) => c.value));
    const price = num(fd, "estimated_purchase_price");
    const year = num(fd, "equipment_year");
    const miles = num(fd, "equipment_mileage");
    const hours = num(fd, "equipment_hours");
    if (!cat) fieldErrors.equipment_category = "Choose the equipment type.";
    if (price === "invalid") fieldErrors.estimated_purchase_price = "Enter a number.";
    if (year === "invalid" || (year != null && (year < 1970 || year > 2100))) fieldErrors.equipment_year = "Enter a 4-digit year.";
    if (miles === "invalid") fieldErrors.equipment_mileage = "Enter a number.";
    if (hours === "invalid") fieldErrors.equipment_hours = "Enter a number.";
    equipment = {
      equipment_category: cat ?? "other",
      equipment_subtype: str(fd, "equipment_subtype") ?? "unspecified",
      new_or_used: oneOf(str(fd, "new_or_used"), ["new", "used"] as const),
      estimated_purchase_price: price === "invalid" ? null : price,
      requested_loan_amount: amount === "invalid" ? null : amount,
      equipment_year: year === "invalid" || year == null ? null : Math.round(year),
      equipment_mileage: miles === "invalid" || miles == null ? null : Math.round(miles),
      equipment_hours: hours === "invalid" || hours == null ? null : Math.round(hours),
      business_purpose: purpose,
    };
  }
  if (Object.keys(fieldErrors).length) return fail("Please fix the highlighted fields.", fieldErrors);

  const profile = await getOrCreateFundingProfile(supabase, business.id, user.id);
  const upd = await supabase
    .from("funding_profiles")
    .update({
      funding_goal_type: goal,
      target_amount: amount as number,
      funding_purpose: purpose,
      desired_timeline: str(fd, "desired_timeline"),
    })
    .eq("id", profile.id);
  if (upd.error) return fail(`Could not save your goal: ${upd.error.message}`);

  if (equipment) {
    const state = await getFundingState(business);
    const open = state.equipment && ["intake", "building"].includes(state.equipment.status) ? state.equipment : null;
    const res = open
      ? await supabase.from("funding_equipment_requests").update(equipment).eq("id", open.id)
      : await supabase.from("funding_equipment_requests").insert({
          ...equipment,
          business_id: business.id,
          funding_profile_id: profile.id,
          status: "intake",
          created_by: user.id,
        });
    if (res.error) return fail(`Saved your goal, but not the equipment details: ${res.error.message}`);
  }
  goNext("goal");
}

// ── Step 6: disclosures ─────────────────────────────────────────────────────
export async function acceptDisclosures(_prev: ActionState, fd: FormData): Promise<ActionState> {
  const { user, supabase, business } = await requireActiveBusiness();
  const missing = DISCLOSURES.filter((d) => fd.get(`accept_${d.type}`) !== "on");
  if (missing.length) {
    return fail("All certifications are required to continue.", Object.fromEntries(missing.map((d) => [`accept_${d.type}`, "Required."])));
  }
  const res = await supabase.from("funding_consents").upsert(
    DISCLOSURES.map((d) => ({
      business_id: business.id,
      user_id: user.id,
      disclosure_type: d.type,
      disclosure_version: d.version,
      accepted: true,
    })),
    { onConflict: "business_id,disclosure_type,disclosure_version", ignoreDuplicates: true },
  );
  if (res.error) return fail(`Could not record your acceptance: ${res.error.message}`);
  goNext("disclosures");
}

// ── Step 7: documents ───────────────────────────────────────────────────────
/**
 * Records a document the browser already uploaded to Storage. Never trusts the
 * client: the path must sit in this business's own folder for this document
 * type, and the object must actually exist.
 */
export async function recordDocumentUpload(input: {
  documentType: string;
  path: string;
  fileName: string;
  contentType: string;
}): Promise<{ ok: boolean; message?: string }> {
  const { user, supabase, business } = await requireActiveBusiness();
  const req = DOCUMENT_REQUIREMENTS.find((r) => r.documentType === input.documentType);
  if (!req) return { ok: false, message: "Unknown document type." };
  if (!ALLOWED_UPLOAD_TYPES.has(input.contentType)) return { ok: false, message: "Unsupported file type." };

  const folder = `${business.id}/${req.documentType}`;
  const objectName = input.path.slice(folder.length + 1);
  if (!input.path.startsWith(`${folder}/`) || !objectName || objectName.includes("/") || input.path.includes("..")) {
    return { ok: false, message: "Invalid upload location." };
  }
  const listed = await supabase.storage.from("funding-documents").list(folder, { search: objectName, limit: 1 });
  const obj = listed.data?.find((o) => o.name === objectName);
  if (listed.error || !obj) return { ok: false, message: "We couldn't find that upload. Please try again." };
  const size = (obj.metadata as { size?: number } | null)?.size;
  if (size != null && size > MAX_UPLOAD_BYTES) {
    await supabase.storage.from("funding-documents").remove([input.path]);
    return { ok: false, message: "Files must be 10 MB or smaller." };
  }

  const profile = await getOrCreateFundingProfile(supabase, business.id, user.id);
  const state = await getFundingState(business);
  const existing = state.documents.find((d) => d.document_type === req.documentType);
  const record = {
    status: "uploaded",
    file_name: input.fileName.slice(0, 255),
    storage_path: input.path,
    upload_date: new Date().toISOString(),
    source: "customer_upload",
    requirement_classification: req.classification,
  };
  const res = existing
    ? await supabase.from("funding_documents").update(record).eq("id", existing.id)
    : await supabase.from("funding_documents").insert({
        ...record,
        business_id: business.id,
        funding_profile_id: profile.id,
        category: req.category,
        document_type: req.documentType,
        created_by: user.id,
      });
  if (res.error) {
    await supabase.storage.from("funding-documents").remove([input.path]);
    return { ok: false, message: `Could not record the document: ${res.error.message}` };
  }
  revalidatePath("/app", "layout");
  return { ok: true, message: `${req.label} uploaded.` };
}

export async function markDocumentNotApplicable(fd: FormData) {
  const { user, supabase, business } = await requireActiveBusiness();
  const req = DOCUMENT_REQUIREMENTS.find((r) => r.documentType === str(fd, "document_type"));
  if (!req || req.classification === "required") return;
  const profile = await getOrCreateFundingProfile(supabase, business.id, user.id);
  const state = await getFundingState(business);
  const existing = state.documents.find((d) => d.document_type === req.documentType);
  if (existing) {
    await supabase.from("funding_documents").update({ requirement_classification: "not_applicable" }).eq("id", existing.id);
  } else {
    await supabase.from("funding_documents").insert({
      business_id: business.id,
      funding_profile_id: profile.id,
      category: req.category,
      document_type: req.documentType,
      requirement_classification: "not_applicable",
      status: "missing",
      created_by: user.id,
    });
  }
  revalidatePath("/app", "layout");
}

// ── Review: score readiness + build roadmap ─────────────────────────────────
export async function runReview(): Promise<ActionState> {
  const { user, supabase, business } = await requireActiveBusiness();
  const [state, rules] = await Promise.all([getFundingState(business), getReadinessRules()]);
  try {
    await runReadinessAndRoadmap(supabase, state, rules, user.id, new Date());
  } catch (e) {
    return fail((e as Error).message);
  }
  revalidatePath("/app", "layout");
  redirect("/app/roadmap");
}

// ── Roadmap progress ────────────────────────────────────────────────────────
export async function setStepStatus(fd: FormData) {
  const { supabase, business } = await requireActiveBusiness();
  const id = str(fd, "step_id");
  const status = oneOf(str(fd, "status"), ["pending", "in_progress", "complete", "skipped"] as const);
  if (id && status) {
    await supabase.from("funding_strategy_steps").update({ status }).eq("id", id).eq("business_id", business.id);
  }
  revalidatePath("/app", "layout");
}

// ── Auth ────────────────────────────────────────────────────────────────────
export async function signOut() {
  const { supabase } = await verifySession();
  await supabase.auth.signOut();
  (await cookies()).delete(ACTIVE_BUSINESS_COOKIE);
  redirect("/login");
}
