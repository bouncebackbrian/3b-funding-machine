export const FUNDING_UNLOCK_FICO = 680;
export const FUNDING_UNLOCK_BUREAUS = ["experian", "equifax", "transunion"] as const;
export const MFSN_VIP_ENTITLEMENT = "MFSN_VIP";

export function hasFundingUnlock(eligibleBureaus: readonly { bureau: string }[], activeVip: boolean) {
  const verified = new Set(eligibleBureaus.map(({ bureau }) => bureau));
  return activeVip && FUNDING_UNLOCK_BUREAUS.every((bureau) => verified.has(bureau));
}
