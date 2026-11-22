"use client";

import { useMemo } from "react";
import { BRAND_GROUPS, getFieldMeta } from "@/lib/brand/fields";
import type { BrandFieldMeta, BrandGroup } from "@/lib/brand/fields";
import type { BrandValue, BrandValues } from "@/lib/brand/types";
import { Field } from "./Field";

interface BrandFormProps {
  defaults: BrandValues;
  draft: BrandValues;
  onChange: (key: string, value: BrandValue) => void;
}

interface FormSection {
  group: BrandGroup;
  fields: { key: string; meta: BrandFieldMeta }[];
}

export function BrandForm({ defaults, draft, onChange }: BrandFormProps) {
  const sections = useMemo<FormSection[]>(() => {
    const byGroup = new Map<BrandGroup, FormSection["fields"]>();

    for (const [key, value] of Object.entries(defaults)) {
      const meta = getFieldMeta(key, value);
      byGroup.set(meta.group, [...(byGroup.get(meta.group) ?? []), { key, meta }]);
    }

    return BRAND_GROUPS.filter((group) => byGroup.has(group)).map((group) => ({
      group,
      fields: byGroup.get(group) ?? [],
    }));
  }, [defaults]);

  return (
    <div className="space-y-8">
      {sections.map(({ group, fields }) => (
        <fieldset key={group} className="space-y-4">
          <legend className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
            {group}
          </legend>
          {fields.map(({ key, meta }) => (
            <Field
              key={key}
              meta={meta}
              value={draft[key]}
              defaultValue={defaults[key]}
              onChange={(value) => onChange(key, value)}
            />
          ))}
        </fieldset>
      ))}
    </div>
  );
}
