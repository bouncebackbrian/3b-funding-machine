import type { SetupStepKey } from "./readiness";
import type { Business } from "./types";

/**
 * Business identity alignment: does the business present the same, credible
 * identity everywhere a lender or bureau looks? Pure and deterministic — it
 * only compares what the user has entered; it never claims to have verified
 * anything against an outside record.
 *
 * mismatch = a lender would likely flag it; warning = worth a look, not a failure.
 */
export type AlignmentStatus = "ok" | "warning" | "mismatch" | "missing";

export interface AlignmentCheck {
  key: string;
  label: string;
  status: AlignmentStatus;
  detail: string;
  fix_step: SetupStepKey | null;
}

/** Fields the alignment check reads. Kept narrow so it also works on partial rows. */
export type AlignmentInput = Pick<
  Business,
  "legal_name" | "entity_type" | "formation_state" | "address_line1" | "address_line2" | "state" | "business_email" | "business_phone" | "website_url"
> & { duns_number?: string | null };

export const FREE_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "ymail.com",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "msn.com",
  "aol.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "proton.me",
  "protonmail.com",
  "gmx.com",
  "mail.com",
  "zoho.com",
  "yandex.com",
  "comcast.net",
  "att.net",
  "sbcglobal.net",
  "verizon.net",
  "cox.net",
  "charter.net",
]);

const blank = (v: string | null | undefined) => v == null || v.trim() === "";

export function emailDomain(email: string | null | undefined): string | null {
  if (blank(email)) return null;
  const at = email!.trim().toLowerCase().lastIndexOf("@");
  return at > 0 ? email!.trim().toLowerCase().slice(at + 1) : null;
}

export function websiteHost(url: string | null | undefined): string | null {
  if (blank(url)) return null;
  try {
    const raw = url!.trim();
    const host = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`).hostname.toLowerCase();
    return host.replace(/^www\./, "") || null;
  } catch {
    return null;
  }
}

/** Same site if one host equals the other or is a subdomain of it (mail.acme.com ~ acme.com). */
export function sameSite(a: string, b: string): boolean {
  return a === b || a.endsWith(`.${b}`) || b.endsWith(`.${a}`);
}

const PO_BOX_RE = /\b(p\.?\s*o\.?\s*box|post\s+office\s+box|pmb\b|box\s+\d+)/i;

const SUFFIX_RULES: Record<string, { re: RegExp; expect: string }> = {
  LLC: { re: /\b(l\.?\s?l\.?\s?c\.?|limited liability co(mpany)?)\b/i, expect: "LLC" },
  Corporation: { re: /\b(inc\.?|incorporated|corp\.?|corporation|co\.?|company|ltd\.?)\b/i, expect: "Inc. or Corp." },
  "S-Corp": { re: /\b(inc\.?|incorporated|corp\.?|corporation|co\.?|company|ltd\.?|l\.?\s?l\.?\s?c\.?)\b/i, expect: "Inc., Corp. or LLC" },
};

export function checkAlignment(b: AlignmentInput): AlignmentCheck[] {
  const checks: AlignmentCheck[] = [];

  // 1. Legal name carries the suffix its entity type requires.
  if (blank(b.legal_name) || blank(b.entity_type)) {
    checks.push({ key: "name_matches_entity", label: "Legal name matches entity type", status: "missing", detail: "Add your legal name and entity type.", fix_step: "business" });
  } else {
    const rule = SUFFIX_RULES[b.entity_type!];
    checks.push(
      !rule
        ? { key: "name_matches_entity", label: "Legal name matches entity type", status: "ok", detail: "No suffix rule for this entity type.", fix_step: "business" }
        : rule.re.test(b.legal_name)
          ? { key: "name_matches_entity", label: "Legal name matches entity type", status: "ok", detail: `Name includes ${rule.expect}.`, fix_step: "business" }
          : {
              key: "name_matches_entity",
              label: "Legal name matches entity type",
              status: "mismatch",
              detail: `An ${b.entity_type} name normally ends in ${rule.expect}. Use the exact name on your state filing, everywhere.`,
              fix_step: "business",
            },
    );
  }

  // 2. Business email on its own domain.
  const eDomain = emailDomain(b.business_email);
  if (!eDomain) {
    checks.push({ key: "email_on_domain", label: "Email on your own domain", status: "missing", detail: "Add a business email.", fix_step: "contact" });
  } else if (FREE_EMAIL_DOMAINS.has(eDomain)) {
    checks.push({
      key: "email_on_domain",
      label: "Email on your own domain",
      status: "warning",
      detail: `${eDomain} is a personal email provider. An address like you@yourbusiness.com reads as an established business.`,
      fix_step: "contact",
    });
  } else {
    checks.push({ key: "email_on_domain", label: "Email on your own domain", status: "ok", detail: `Using ${eDomain}.`, fix_step: "contact" });
  }

  // 3. Email domain and website are the same business.
  const host = websiteHost(b.website_url);
  if (!host) {
    checks.push({ key: "email_matches_website", label: "Email and website match", status: "missing", detail: "Add your website.", fix_step: "contact" });
  } else if (!eDomain || FREE_EMAIL_DOMAINS.has(eDomain)) {
    checks.push({
      key: "email_matches_website",
      label: "Email and website match",
      status: "warning",
      detail: `Your website is ${host}, but your email isn't on that domain.`,
      fix_step: "contact",
    });
  } else if (sameSite(eDomain, host)) {
    checks.push({ key: "email_matches_website", label: "Email and website match", status: "ok", detail: `Both use ${host}.`, fix_step: "contact" });
  } else {
    checks.push({
      key: "email_matches_website",
      label: "Email and website match",
      status: "mismatch",
      detail: `Email is on ${eDomain} but the website is ${host}. Lenders expect one consistent domain.`,
      fix_step: "contact",
    });
  }

  // 4. Physical address, not a mailbox.
  const addr = [b.address_line1, b.address_line2].filter(Boolean).join(" ");
  if (blank(b.address_line1)) {
    checks.push({ key: "physical_address", label: "Physical business address", status: "missing", detail: "Add your business address.", fix_step: "contact" });
  } else if (PO_BOX_RE.test(addr)) {
    checks.push({
      key: "physical_address",
      label: "Physical business address",
      status: "warning",
      detail: "This looks like a PO box or mailbox. Many lenders and bureaus want a verifiable physical address.",
      fix_step: "contact",
    });
  } else {
    checks.push({ key: "physical_address", label: "Physical business address", status: "ok", detail: "Street address on file.", fix_step: "contact" });
  }

  // 5. Usable US business phone.
  const digits = (b.business_phone ?? "").replace(/\D/g, "");
  const phone10 = digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
  if (blank(b.business_phone)) {
    checks.push({ key: "business_phone", label: "Business phone number", status: "missing", detail: "Add a business phone.", fix_step: "contact" });
  } else if (phone10.length !== 10) {
    checks.push({ key: "business_phone", label: "Business phone number", status: "mismatch", detail: "This doesn't look like a valid 10-digit US number.", fix_step: "contact" });
  } else {
    checks.push({
      key: "business_phone",
      label: "Business phone number",
      status: "ok",
      detail: "Use this exact number on your website, bank account, and D-U-N-S profile.",
      fix_step: "contact",
    });
  }

  // 6. Formed in one state, operating in another.
  if (!blank(b.formation_state) && !blank(b.state) && b.formation_state!.toUpperCase() !== b.state!.toUpperCase()) {
    checks.push({
      key: "operating_state",
      label: "Registered where you operate",
      status: "warning",
      detail: `Formed in ${b.formation_state!.toUpperCase()} but located in ${b.state!.toUpperCase()}. You may need to register as a foreign entity in ${b.state!.toUpperCase()} to stay in good standing — check with that state's Secretary of State.`,
      fix_step: "business",
    });
  }

  // 7. D-U-N-S on file (opens the business credit file).
  if (b.duns_number !== undefined) {
    checks.push(
      blank(b.duns_number)
        ? { key: "duns_on_file", label: "D-U-N-S number", status: "missing", detail: "Free from Dun & Bradstreet. Register it with the exact name, address and phone above.", fix_step: "business" }
        : { key: "duns_on_file", label: "D-U-N-S number", status: "ok", detail: "On file. Make sure your D&B profile matches the details above.", fix_step: "business" },
    );
  }

  return checks;
}

/** Aligned = nothing a lender would flag. Missing items are scored by their own rules; warnings are advisory. */
export function isIdentityAligned(checks: AlignmentCheck[]): boolean {
  return !checks.some((c) => c.status === "mismatch");
}
