import { describe, expect, it } from "vitest";
import { fundingChecklist } from "../llc-readiness";

describe("LLC funding checklist", () => {
  it("puts formation and basic records ahead of an equipment quote", () => {
    const actions = fundingChecklist({
      stage: "planning",
      purpose: "equipment",
      hasBusinessBanking: false,
      hasRecords: false,
    });
    expect(actions).toEqual([
      expect.stringContaining("formation plan"),
      expect.stringContaining("business bank account"),
      expect.stringContaining("startup projections"),
      expect.stringContaining("written quote"),
    ]);
  });

  it("skips banking and financial-record tasks when they are already handled", () => {
    const actions = fundingChecklist({
      stage: "operating",
      purpose: "working_capital",
      hasBusinessBanking: true,
      hasRecords: true,
    });
    expect(actions).toEqual([
      expect.stringContaining("EIN confirmation"),
      expect.stringContaining("incoming sales"),
    ]);
  });
});
