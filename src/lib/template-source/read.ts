import { promises as fs } from "node:fs";
import path from "node:path";
import { templates } from "@/config/templates";
import type { TemplateFile } from "./types";

const TEMPLATES_ROOT = path.join(process.cwd(), "src", "templates");
const TEXT_EXTENSIONS = new Set([".ts", ".tsx", ".js", ".jsx", ".css", ".json", ".md"]);

export function getTemplateIds(): string[] {
  return templates.map((template) => template.id);
}

export function isTemplateId(value: string): boolean {
  return getTemplateIds().includes(value);
}

async function readDirectory(directory: string, prefix = ""): Promise<TemplateFile[]> {
  const entries = await fs.readdir(directory, { withFileTypes: true });

  const nested = await Promise.all(
    entries.map(async (entry): Promise<TemplateFile[]> => {
      const relativePath = prefix ? `${prefix}/${entry.name}` : entry.name;
      const absolutePath = path.join(directory, entry.name);

      if (entry.isDirectory()) return readDirectory(absolutePath, relativePath);
      if (!TEXT_EXTENSIONS.has(path.extname(entry.name))) return [];

      const raw = await fs.readFile(absolutePath, "utf8");
      const content = raw.replace(/^\uFEFF/, "").replace(/\r\n/g, "\n");
      return [{ path: relativePath, content }];
    }),
  );

  return nested.flat();
}

/** Reads every text file of a template. Only known template ids are accepted. */
export async function getTemplateFiles(id: string): Promise<TemplateFile[]> {
  if (!isTemplateId(id)) throw new Error(`Unknown template: ${id}`);

  const files = await readDirectory(path.join(TEMPLATES_ROOT, id));
  return files.sort((a, b) => a.path.localeCompare(b.path));
}
