import type { TemplateFile } from "@/lib/template-source/types";
import { decodeBrand } from "./codec";
import { getBrandDefaults } from "./defaults";
import { mergeBrand } from "./merge";
import { renderBrandFile } from "./serialize";

const BRAND_FILE = "brand.ts";

/** Swaps a template's brand.ts for one built from the ?brand= parameter. Other files are untouched. */
export function applyBrandToFiles(
  templateId: string,
  files: TemplateFile[],
  brandParam: string | null,
): TemplateFile[] {
  const defaults = getBrandDefaults(templateId);
  if (!defaults || !brandParam) return files;

  const content = renderBrandFile(mergeBrand(defaults, decodeBrand(brandParam)));
  return files.map((file) => (file.path === BRAND_FILE ? { ...file, content } : file));
}
