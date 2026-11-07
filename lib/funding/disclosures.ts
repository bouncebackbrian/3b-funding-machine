/**
 * Versioned disclosures. Accepting one inserts a funding_consents row
 * (business_id, user_id, disclosure_type, disclosure_version) — an immutable
 * record. Changing any text below REQUIRES bumping its version so prior
 * acceptances remain tied to the exact wording the user saw.
 */
export const DISCLOSURES = [
  {
    type: "funding_disclaimer",
    version: "v1",
    title: "3B is not a lender",
    text:
      "3B Funding Machine provides funding-readiness guidance and organization tools. 3B is not a lender or broker, does not make credit decisions, and nothing in this app is an approval, pre-approval, offer of credit, or guarantee of funding, amount, rate, or terms. Every lender makes its own decision.",
  },
  {
    type: "business_purpose_certification",
    version: "v1",
    title: "Business purpose",
    text:
      "I certify that any funding I pursue through this process is for business purposes only, not for personal, family, or household use.",
  },
  {
    type: "application_accuracy_certification",
    version: "v1",
    title: "Accurate information",
    text:
      "I certify that information I provide to 3B and to any financial institution will be complete and accurate to the best of my knowledge. I understand 3B will never advise me to misstate income, revenue, ownership, relationships, membership eligibility, or any other fact on an application.",
  },
  {
    type: "electronic_communications",
    version: "v1",
    title: "Electronic communications",
    text:
      "I agree to receive notices and records related to my funding profile electronically, by email and in this app.",
  },
] as const;

export type DisclosureType = (typeof DISCLOSURES)[number]["type"];

export function acceptedDisclosureTypes(
  consents: { disclosure_type: string; disclosure_version: string; accepted: boolean }[],
): Set<DisclosureType> {
  const accepted = new Set<DisclosureType>();
  for (const d of DISCLOSURES) {
    if (consents.some((c) => c.accepted && c.disclosure_type === d.type && c.disclosure_version === d.version)) {
      accepted.add(d.type);
    }
  }
  return accepted;
}

export function allDisclosuresAccepted(
  consents: { disclosure_type: string; disclosure_version: string; accepted: boolean }[],
): boolean {
  return acceptedDisclosureTypes(consents).size === DISCLOSURES.length;
}
