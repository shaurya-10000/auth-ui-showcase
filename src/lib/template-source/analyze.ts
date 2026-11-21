import type { TemplateFile } from "./types";

const SOURCE_FILE = /\.(?:tsx?|jsx?)$/;
const IMPORT_PATTERN = /(?:from\s+|import\s*\(\s*|import\s+)["']([^"']+)["']/g;
const HTTPS_HOST_PATTERN = /https:\/\/([a-z0-9.-]+)/gi;
const PACKAGE_NAME_PATTERN = /^(?:@[a-z0-9~][a-z0-9._~-]*\/)?[a-z0-9~][a-z0-9._~-]*$/;
const PROVIDED_BY_SCAFFOLD = new Set(["react", "react-dom", "next"]);
const IGNORED_HOSTS = new Set(["www.w3.org"]);

function toPackageName(specifier: string): string | null {
  if (specifier.startsWith(".") || specifier.startsWith("@/") || specifier.startsWith("node:")) {
    return null;
  }

  const parts = specifier.split("/");
  const name = specifier.startsWith("@") ? parts.slice(0, 2).join("/") : parts[0];

  if (PROVIDED_BY_SCAFFOLD.has(name)) return null;
  return PACKAGE_NAME_PATTERN.test(name) ? name : null;
}

/** npm packages a template imports that a fresh Next.js app does not already include. */
export function getPackageDependencies(files: TemplateFile[]): string[] {
  const packages = new Set<string>();

  for (const file of files) {
    if (!SOURCE_FILE.test(file.path)) continue;

    for (const [, specifier] of file.content.matchAll(IMPORT_PATTERN)) {
      const name = toPackageName(specifier);
      if (name) packages.add(name);
    }
  }

  return [...packages].sort();
}

/** Remote hosts used by files that import next/image (they need remotePatterns). */
export function getRemoteImageHosts(files: TemplateFile[]): string[] {
  const hosts = new Set<string>();

  for (const file of files) {
    if (!file.content.includes("next/image")) continue;

    for (const [, host] of file.content.matchAll(HTTPS_HOST_PATTERN)) {
      const normalized = host.toLowerCase().replace(/\.$/, "");
      if (!IGNORED_HOSTS.has(normalized)) hosts.add(normalized);
    }
  }

  return [...hosts].sort();
}
