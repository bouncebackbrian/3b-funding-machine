export type BusinessCreditVendor = {
  name: string;
  use: string;
  url: string;
  affiliate?: boolean;
};

export const AFFILIATE_DISCLOSURE = "3B may earn a commission if you sign up or buy through this link.";

export const PRINTING_VENDORS: BusinessCreditVendor[] = [
  {
    name: "Shirtsy",
    use: "Custom work shirts, hoodies, business cards, and promotional products. The vendor advertises no personal guarantee and monthly business-credit reporting. Membership costs $99 per 360-day term. Confirm which bureaus receive payments before enrolling.",
    url: "https://shirtsy.com/frequently-asked-questions/",
  },
  {
    name: "The CEO Creative",
    use: "Office supplies, printing, and branded apparel. The vendor advertises EIN-only Net 30 with no personal guarantee. Activation requires a paid membership, and eligible orders have a $60 minimum and an upfront deposit. Confirm reporting requirements before enrolling.",
    url: "https://theceocreative.com/business-net-30-account/#Bouncebackbrian",
    affiliate: true,
  },
];

export function invoiceDate(value: FormDataEntryValue | null): string | null {
  if (typeof value !== "string" || !/^[1-9]\d{3}-\d{2}-\d{2}$/.test(value)) return null;
  const date = new Date(value);
  return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value ? value : null;
}

export function invoiceCents(value: FormDataEntryValue | null): number | null {
  if (typeof value !== "string" || !/^\d{1,8}(?:\.\d{1,2})?$/.test(value.trim())) return null;
  const [whole, fraction = ""] = value.trim().split(".");
  const cents = Number(whole) * 100 + Number(fraction.padEnd(2, "0"));
  return cents > 0 && cents <= 2147483647 ? cents : null;
}

export function fundingToday(date = new Date()): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles", year: "numeric", month: "2-digit", day: "2-digit",
  }).formatToParts(date);
  return ["year", "month", "day"].map((part) => parts.find((value) => value.type === part)?.value).join("-");
}

export function invoiceStatus(dueOn: string, paidOn: string | null, today: string): string {
  if (paidOn) return paidOn > dueOn ? "Paid late" : "Paid on time";
  if (dueOn < today) return "Overdue";
  return dueOn === today ? "Due today" : "Open";
}
