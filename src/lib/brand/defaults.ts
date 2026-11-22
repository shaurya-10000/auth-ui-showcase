import { brand as template1 } from "@/templates/template-1/brand";
import { brand as template2 } from "@/templates/template-2/brand";
import { brand as template3 } from "@/templates/template-3/brand";
import { brand as template4 } from "@/templates/template-4/brand";
import { brand as template5 } from "@/templates/template-5/brand";
import type { BrandValues } from "./types";

/** Templates that support customization. Add a line here when a template gets a brand.ts. */
const DEFAULTS: Record<string, BrandValues> = {
  "template-1": template1,
  "template-2": template2,
  "template-3": template3,
  "template-4": template4,
  "template-5": template5,
};

export function isBrandable(templateId: string): boolean {
  return Object.prototype.hasOwnProperty.call(DEFAULTS, templateId);
}

export function getBrandDefaults(templateId: string): BrandValues | null {
  return isBrandable(templateId) ? DEFAULTS[templateId] : null;
}
