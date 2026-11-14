import { expect, it } from "vitest";
import { FUNDING_UNLOCK_BUREAUS, hasFundingUnlock } from "../credit-unlock";

it("requires an eligible staff record from each distinct bureau", () => {
  const eligible = FUNDING_UNLOCK_BUREAUS.map((bureau) => ({ bureau }));

  expect(hasFundingUnlock(eligible, true)).toBe(true);
  expect(hasFundingUnlock(eligible, false)).toBe(false);
  expect(hasFundingUnlock(eligible.slice(0, 2), true)).toBe(false);
  expect(hasFundingUnlock([...eligible.slice(0, 2), eligible[0]], true)).toBe(false);
  expect(hasFundingUnlock([], true)).toBe(false);
});
