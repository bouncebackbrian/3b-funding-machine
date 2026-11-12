import type { FundingState } from "./types";

/**
 * "Lender-ready presence": the checks a bank or equipment lender runs on a
 * business before (or while) it reads the application. We can't verify these
 * from outside, so the owner attests to each one; every answer is stored with
 * the time it was given and is labeled self-reported everywhere it shows.
 *
 * Stored in funding_profiles.bankability_attestations (jsonb):
 *   { [key]: { value: string, at: ISO timestamp } }
 */
export const PRESENCE_ITEMS = [
  {
    key: "phone_line_type",
    label: "What kind of number is your business phone?",
    why: "Lenders call the business line and look it up in directory assistance. A personal cell phone reads as a side job, not a business.",
    options: [
      { value: "business_voip", label: "A dedicated business number (VoIP, e.g. Quo, Grasshopper, RingCentral)" },
      { value: "business_landline", label: "A business landline in the company's name" },
      { value: "personal_cell", label: "My personal cell phone" },
      { value: "not_sure", label: "Not sure" },
    ],
    pass: ["business_voip", "business_landline"],
  },
  {
    key: "listed_411",
    label: "Is the business phone listed in 411 directory assistance under the exact legal name?",
    why: "Underwriters often call 411 to confirm a business is real. VoIP and cell numbers usually aren't listed until you submit them.",
    options: [
      { value: "yes", label: "Yes, I've checked it's listed" },
      { value: "no", label: "No" },
      { value: "not_sure", label: "Not sure" },
    ],
    pass: ["yes"],
  },
  {
    key: "google_business_profile",
    label: "Do you have a claimed Google Business Profile with the same name, address and phone?",
    why: "It's one of the first things anyone sees when they search your business. It should match your filing exactly.",
    options: [
      { value: "yes", label: "Yes, claimed and matching" },
      { value: "no", label: "No" },
      { value: "not_sure", label: "Not sure" },
    ],
    pass: ["yes"],
  },
  {
    key: "bank_account_legal_name",
    label: "Is your business checking account opened in the business's exact legal name and EIN?",
    why: "Lenders underwrite from these statements. An account in your personal name or a different name breaks the paper trail.",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No / personal account" },
      { value: "not_sure", label: "Not sure" },
    ],
    pass: ["yes"],
  },
  {
    key: "state_good_standing",
    label: "Is the business in good standing with your Secretary of State (annual report and fees current)?",
    why: "Banks pull a good-standing certificate. A lapsed or forfeited entity stops a loan cold.",
    options: [
      { value: "yes", label: "Yes, I've checked recently" },
      { value: "no", label: "No / it lapsed" },
      { value: "not_sure", label: "Not sure" },
    ],
    pass: ["yes"],
  },
  {
    key: "licenses_current",
    label: "Do you hold the business licenses and permits your industry requires (e.g. city license, USDOT/MC for trucking)?",
    why: "Lenders ask for them, and SBA lenders confirm the business operates legally.",
    options: [
      { value: "yes", label: "Yes, all current" },
      { value: "no", label: "No / some are missing" },
      { value: "not_applicable", label: "None are required for my business" },
    ],
    pass: ["yes", "not_applicable"],
  },
] as const;

export type PresenceKey = (typeof PRESENCE_ITEMS)[number]["key"];
export type Attestations = Partial<Record<PresenceKey, { value: string; at: string }>>;

/** Undefined when the column doesn't exist yet (migration not applied). */
export function attestationsOf(state: Pick<FundingState, "profile">): Attestations | undefined {
  const p = state.profile as (FundingState["profile"] & { bankability_attestations?: unknown }) | null;
  if (!p || !("bankability_attestations" in p)) return undefined;
  const raw = p.bankability_attestations;
  return raw && typeof raw === "object" && !Array.isArray(raw) ? (raw as Attestations) : {};
}

export function presenceItem(key: PresenceKey) {
  return PRESENCE_ITEMS.find((i) => i.key === key)!;
}

/** pass / fail / unanswered for one item. */
export function presenceOutcome(a: Attestations | undefined, key: PresenceKey): "pass" | "fail" | "unanswered" {
  const v = a?.[key]?.value;
  if (!v) return "unanswered";
  return (presenceItem(key).pass as readonly string[]).includes(v) ? "pass" : "fail";
}

export function presenceComplete(a: Attestations | undefined): boolean {
  return !!a && PRESENCE_ITEMS.every((i) => !!a[i.key]?.value);
}
