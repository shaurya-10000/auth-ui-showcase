import { BRAND_FIELDS } from "./fields";
import type { BrandFieldMeta } from "./fields";
import type { BrandValue, BrandValues } from "./types";

const MAX_TEXT_LENGTH = 120;
const MAX_TEXTAREA_LENGTH = 320;
const MAX_URL_LENGTH = 500;
const HEX_COLOR = /^#[0-9a-f]{6}$/i;

const hasOwn = (object: object, key: string): boolean =>
  Object.prototype.hasOwnProperty.call(object, key);

/** Accepts empty, "#", site-relative paths and http(s) links. Rejects everything else (javascript:, data:, ...). */
function safeUrl(value: string): string | null {
  const url = value.trim();
  if (url === "" || url === "#") return url;
  if (url.startsWith("/") && !url.startsWith("//")) return url;

  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" || parsed.protocol === "http:" ? url : null;
  } catch {
    return null;
  }
}

function cleanText(value: string, multiline: boolean, maxLength: number): string {
  const normalized = value.replace(/\r\n?/g, "\n");
  const printable = Array.from(normalized)
    .filter((char) => {
      const code = char.codePointAt(0) ?? 0;
      return code === 10 ? multiline : code >= 32 && code !== 127;
    })
    .join("");
  return printable.slice(0, maxLength);
}

/** Numbers are stored as strings. Out-of-range values are clamped and snapped to the step. */
function sanitizeRange(meta: BrandFieldMeta, fallback: string, candidate: string): string {
  const parsed = Number(candidate);
  if (candidate.trim() === "" || !Number.isFinite(parsed)) return fallback;

  const min = meta.min ?? 0;
  const max = meta.max ?? 100;
  const step = meta.step ?? 1;
  const snapped = Math.round((parsed - min) / step) * step + min;
  return String(Math.min(max, Math.max(min, Number(snapped.toFixed(2)))));
}

function sanitizeValue(key: string, fallback: BrandValue, candidate: unknown): BrandValue {
  if (typeof fallback === "boolean") {
    return typeof candidate === "boolean" ? candidate : fallback;
  }
  if (typeof candidate !== "string") return fallback;

  const meta = BRAND_FIELDS[key];

  switch (meta?.type) {
    case "color":
      if (meta.optional && candidate === "") return "";
      return HEX_COLOR.test(candidate) ? candidate.toLowerCase() : fallback;
    case "select":
      return meta.options?.some((option) => option.value === candidate) ? candidate : fallback;
    case "range":
      return sanitizeRange(meta, fallback, candidate);
    case "url":
      return safeUrl(candidate.slice(0, MAX_URL_LENGTH)) ?? fallback;
    case "textarea":
      return cleanText(candidate, true, MAX_TEXTAREA_LENGTH);
    default:
      return cleanText(candidate, false, MAX_TEXT_LENGTH);
  }
}

/**
 * Overlays user-supplied values on a template's defaults.
 * Only keys that exist in the defaults are accepted, and every value is validated.
 */
export function mergeBrand(defaults: BrandValues, overrides: Record<string, unknown>): BrandValues {
  const merged: BrandValues = {};

  for (const [key, fallback] of Object.entries(defaults)) {
    merged[key] = hasOwn(overrides, key) ? sanitizeValue(key, fallback, overrides[key]) : fallback;
  }

  return merged;
}
