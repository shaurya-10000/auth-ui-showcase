"use client";

import { useMemo } from "react";
import { ChevronDown } from "lucide-react";
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

/** Groups that start closed so the long styling form stays easy to scan. */
const COLLAPSED_BY_DEFAULT: readonly BrandGroup[] = [
  "Light theme",
  "Dark theme",
  "Buttons & inputs",
  "Panel design",
];

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
    <div className="space-y-3">
      {sections.map(({ group, fields }) => (
        <details
          key={group}
          open={!COLLAPSED_BY_DEFAULT.includes(group)}
          className="group rounded-xl border border-neutral-800 bg-neutral-900/40"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-400 transition-colors hover:text-white [&::-webkit-details-marker]:hidden">
            {group}
            <ChevronDown
              size={16}
              aria-hidden="true"
              className="transition-transform group-open:rotate-180"
            />
          </summary>
          <div className="space-y-4 border-t border-neutral-800 p-4">
            {fields.map(({ key, meta }) => (
              <Field
                key={key}
                meta={meta}
                value={draft[key]}
                defaultValue={defaults[key]}
                onChange={(value) => onChange(key, value)}
              />
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}
