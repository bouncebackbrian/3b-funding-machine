import { websiteHost, type AlignmentCheck, type AlignmentInput } from "./alignment";

/**
 * Hand-off to 3B Media Group for domain, website and logo work.
 * Only a source tag and the requested service go in the link — never the
 * customer's name, email or any other profile data.
 */
export type MediaService = "domain" | "website" | "logo" | "email";

/** `{domain}` is replaced with the business's own domain, or a suggestion built from its legal name. */
export const MEDIA_SERVICE_COPY: Record<MediaService, { title: string; why: string }> = {
  domain: { title: "Custom domain", why: "Your own name, like {domain}. It's the base for your website and your business email." },
  website: { title: "Business website", why: "Include a public Company page with the legal business name, services, location, phone, and business email that a banker can review." },
  email: { title: "Matching business email", why: "An address like you@{domain}, so your email matches your website instead of Gmail or Yahoo." },
  logo: { title: "Logo & brand", why: "A consistent logo across your site, invoices and trucks makes the business look established." },
};

/** Base URL comes from THREEB_MEDIA_GROUP_URL. Unset or non-https → no link is shown anywhere. */
export function mediaGroupBaseUrl(raw: string | undefined = process.env.THREEB_MEDIA_GROUP_URL): string | null {
  if (!raw?.trim()) return null;
  try {
    const u = new URL(raw.trim());
    return u.protocol === "https:" ? u.toString() : null;
  } catch {
    return null;
  }
}

export function mediaGroupLink(base: string, services: MediaService[]): string {
  const u = new URL(base);
  u.searchParams.set("source", "funding-machine");
  if (services.length) u.searchParams.set("services", services.join(","));
  return u.toString();
}

/** Which services this business looks like it needs, from the alignment checks. Logo is always offered. */
export function mediaNeeds(checks: AlignmentCheck[]): MediaService[] {
  const by = (k: string) => checks.find((c) => c.key === k)?.status;
  const needs: MediaService[] = [];
  const noWebsite = by("email_matches_website") === "missing";
  if (noWebsite) needs.push("domain", "website");
  const email = by("email_on_domain");
  if (email === "warning" || email === "missing" || by("email_matches_website") === "mismatch") needs.push("email");
  needs.push("logo");
  return needs;
}

const ENTITY_SUFFIX_RE = /\b(l\.?\s?l\.?\s?c\.?|inc\.?|incorporated|corp\.?|corporation|co\.?|company|ltd\.?|limited|pllc|llp|lp)\b/gi;

/**
 * Domain to show in copy: the business's existing website domain when it has one,
 * otherwise an example built from its legal name ("Acme Hauling LLC" → acmehauling.com).
 * An example only — availability is checked by 3B Media Group during setup.
 */
export function domainHint(b: Pick<AlignmentInput, "legal_name" | "website_url">): { domain: string; existing: boolean } | null {
  const host = websiteHost(b.website_url);
  if (host) return { domain: host, existing: true };
  const slug = (b.legal_name ?? "").replace(ENTITY_SUFFIX_RE, "").toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]/g, "");
  return slug.length >= 2 ? { domain: `${slug}.com`, existing: false } : null;
}

export function serviceWhy(service: MediaService, domain: string | null): string {
  const text = MEDIA_SERVICE_COPY[service].why;
  return text.replace(/\{domain\}/g, domain ?? "yourbusiness.com");
}
