import type { BrandValues } from "./types";

/** Renders the brand.ts file that ships with a template. Keys keep the template's order. */
export function renderBrandFile(values: BrandValues): string {
  const entries = Object.entries(values).map(([key, value]) => `  ${key}: ${JSON.stringify(value)},`);

  return [
    "// Brand settings. Edit these values to change the text, links and colors of this template.",
    "export const brand = {",
    ...entries,
    "};",
    "",
    "export type Brand = typeof brand;",
    "",
  ].join("\n");
}
