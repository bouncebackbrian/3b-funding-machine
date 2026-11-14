"use client";

import { useState } from "react";
import { Field, Select } from "./form";
import { EQUIPMENT_CATEGORIES, FUNDING_GOAL_TYPES } from "@/lib/funding/types";

interface EquipmentDefaults {
  equipment_category?: string | null;
  equipment_subtype?: string | null;
  new_or_used?: string | null;
  estimated_purchase_price?: number | null;
  equipment_year?: number | null;
  equipment_mileage?: number | null;
  equipment_hours?: number | null;
}

/** Goal picker that reveals equipment details only when the goal is equipment. */
export function GoalFields({ goal, equipment }: { goal: string | null; equipment: EquipmentDefaults | null }) {
  const [current, setCurrent] = useState(goal ?? "");
  return (
    <>
      <div className="fm-field">
        <label htmlFor="goal">
          What do you need funding for?<span className="fm-req"> *</span>
        </label>
        <select id="goal" name="funding_goal_type" value={current} onChange={(e) => setCurrent(e.target.value)} required>
          <option value="" disabled>
            Choose…
          </option>
          {FUNDING_GOAL_TYPES.map((g) => (
            <option key={g.value} value={g.value}>
              {g.label}
            </option>
          ))}
        </select>
      </div>

      {current === "equipment" && (
        <fieldset className="fm-fieldset">
          <legend>Equipment details</legend>
          <div className="fm-grid-2">
            <Select name="equipment_category" label="Equipment type" required options={EQUIPMENT_CATEGORIES} defaultValue={equipment?.equipment_category} />
            <Select
              name="new_or_used"
              label="New or used"
              placeholder="Not sure yet"
              options={[
                { value: "new", label: "New" },
                { value: "used", label: "Used" },
              ]}
              defaultValue={equipment?.new_or_used}
            />
          </div>
          <Field
            name="equipment_subtype"
            label="Make / model / description"
            placeholder="e.g. 2019 Kenworth T880 super 10"
            defaultValue={equipment?.equipment_subtype === "unspecified" ? null : equipment?.equipment_subtype}
          />
          <div className="fm-grid-2">
            <Field name="estimated_purchase_price" label="Purchase price ($)" inputMode="decimal" defaultValue={equipment?.estimated_purchase_price} />
            <Field name="equipment_year" label="Year" inputMode="numeric" maxLength={4} defaultValue={equipment?.equipment_year} />
          </div>
          <div className="fm-grid-2">
            <Field name="equipment_mileage" label="Mileage" inputMode="numeric" defaultValue={equipment?.equipment_mileage} />
            <Field name="equipment_hours" label="Engine hours" inputMode="numeric" defaultValue={equipment?.equipment_hours} />
          </div>
        </fieldset>
      )}
    </>
  );
}
