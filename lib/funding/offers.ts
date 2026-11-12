/**
 * Partner offers: the providers we point people to for each bankability gap.
 *
 * Rules:
 * - An offer is shown only where it fixes a gap the business actually has.
 * - Offers never feed the readiness score or roadmap order (borrower need only).
 * - If an affiliate URL is configured (env var, https only) the /go link uses it
 *   and the card shows a commission disclosure; otherwise it links to the
 *   provider's official page with no disclosure needed.
 * - Free options are listed alongside paid ones.
 */
export type OfferGap = "business_email" | "business_phone" | "listed_411" | "google_business_profile" | "business_credit" | "personal_credit";

export interface Offer {
  id: string;
  name: string;
  gap: OfferGap;
  blurb: string;
  price: "free" | "paid";
  officialUrl: string;
  /** Env var holding the affiliate/referral link, if a program exists. */
  affiliateEnv?: string;
}

export const OFFERS: Offer[] = [
  {
    id: "google-workspace",
    name: "Google Workspace",
    gap: "business_email",
    blurb: "Business email on your own domain (you@yourbusiness.com), plus calendar and drive.",
    price: "paid",
    officialUrl: "https://workspace.google.com/",
    affiliateEnv: "AFF_GOOGLE_WORKSPACE_URL",
  },
  {
    id: "microsoft-365",
    name: "Microsoft 365 Business",
    gap: "business_email",
    blurb: "Outlook email on your own domain with Word, Excel and Teams.",
    price: "paid",
    officialUrl: "https://www.microsoft.com/microsoft-365/business",
    affiliateEnv: "AFF_MICROSOFT_365_URL",
  },
  {
    id: "quo",
    name: "Quo (formerly OpenPhone)",
    gap: "business_phone",
    blurb: "A dedicated business number that rings on your cell and computer, with shared lines for a team.",
    price: "paid",
    officialUrl: "https://www.quo.com/",
    affiliateEnv: "AFF_QUO_URL",
  },
  {
    id: "grasshopper",
    name: "Grasshopper",
    gap: "business_phone",
    blurb: "A virtual business phone number built for small businesses and owner-operators.",
    price: "paid",
    officialUrl: "https://grasshopper.com/",
    affiliateEnv: "AFF_GRASSHOPPER_URL",
  },
  {
    id: "listyourself",
    name: "ListYourself",
    gap: "listed_411",
    blurb: "Free service to submit your business number to 411 directory assistance.",
    price: "free",
    officialUrl: "https://www.listyourself.net/",
  },
  {
    id: "google-business-profile",
    name: "Google Business Profile",
    gap: "google_business_profile",
    blurb: "Free. Claim your listing and make the name, address and phone match your filing exactly.",
    price: "free",
    officialUrl: "https://www.google.com/business/",
  },
  {
    id: "nav",
    name: "Nav",
    gap: "business_credit",
    blurb: "See your business and personal credit in one place, with plans that report a business tradeline.",
    price: "paid",
    officialUrl: "https://www.nav.com/",
    affiliateEnv: "AFF_NAV_URL",
  },
  {
    id: "myfreescorenow",
    name: "MyFreeScoreNow",
    gap: "personal_credit",
    blurb: "Pull your personal credit report and VantageScore 4.0 so you know what a lender will see.",
    price: "paid",
    officialUrl: "https://www.myfreescorenow.com/",
    affiliateEnv: "AFF_MYFREESCORENOW_URL",
  },
];

function httpsOrNull(raw: string | undefined): string | null {
  if (!raw?.trim()) return null;
  try {
    const u = new URL(raw.trim());
    return u.protocol === "https:" ? u.toString() : null;
  } catch {
    return null;
  }
}

/** Where /go/[id] sends the user, and whether it's an affiliate link. */
export function resolveOffer(id: string, env: Record<string, string | undefined> = process.env): { url: string; affiliate: boolean } | null {
  const offer = OFFERS.find((o) => o.id === id);
  if (!offer) return null;
  const aff = offer.affiliateEnv ? httpsOrNull(env[offer.affiliateEnv]) : null;
  return aff ? { url: aff, affiliate: true } : { url: offer.officialUrl, affiliate: false };
}

export function offersFor(gap: OfferGap): Offer[] {
  return OFFERS.filter((o) => o.gap === gap);
}
