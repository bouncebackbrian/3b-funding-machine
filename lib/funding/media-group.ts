import type { AlignmentCheck } from "./alignment";

/**
 * Hand-off to 3B Media Group for domain, website and logo work.
 * Only a source tag and the requested service go in the link — never the
 * customer's name, email or any other profile data.
 */
export type MediaService = "domain" | "website" | "logo" | "email";

export const MEDIA_SERVICE_COPY: Record<MediaService, { title: string; why: string }> = {
  domain: { title: "Domain name", why: "Your own .com is what your website and business email run on." },
  website: { title: "Business website", why: "Lenders and vendors look you up. A real site with your name, address and phone builds trust." },
  email: { title: "Email on your domain", why: "you@yourbusiness.com instead of a Gmail or Yahoo address." },
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
