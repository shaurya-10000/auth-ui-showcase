import type { BrandValue, BrandValues } from "./types";

const MAX_PARAM_LENGTH = 8000;

function toBase64Url(text: string): string {
  const bytes = new TextEncoder().encode(text);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromBase64Url(value: string): string {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/") + "=".repeat((4 - (value.length % 4)) % 4);
  const binary = atob(padded);
  return new TextDecoder().decode(Uint8Array.from(binary, (char) => char.charCodeAt(0)));
}

/** Encodes only the values that differ from the defaults. Returns "" when nothing changed. */
export function encodeBrand(defaults: BrandValues, values: BrandValues): string {
  const changed: Record<string, BrandValue> = {};

  for (const [key, fallback] of Object.entries(defaults)) {
    const value = values[key];
    if (value !== undefined && value !== fallback) changed[key] = value;
  }

  return Object.keys(changed).length === 0 ? "" : toBase64Url(JSON.stringify(changed));
}

/** Decodes a ?brand= parameter. Always returns an object, never throws. */
export function decodeBrand(param: string | null | undefined): Record<string, unknown> {
  if (!param || param.length > MAX_PARAM_LENGTH) return {};

  try {
    const parsed: unknown = JSON.parse(fromBase64Url(param));
    return typeof parsed === "object" && parsed !== null && !Array.isArray(parsed)
      ? (parsed as Record<string, unknown>)
      : {};
  } catch {
    return {};
  }
}
