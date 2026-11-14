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
