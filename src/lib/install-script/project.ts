import { getPackageDependencies, getRemoteImageHosts } from "@/lib/template-source";
import type { TemplateFile } from "@/lib/template-source";

export interface ScriptFile {
  path: string;
  content: string;
}

export interface InstallPlan {
  templateId: string;
  projectName: string;
  files: ScriptFile[];
  dependencies: string[];
}

function renderNextConfig(hosts: string[]): string {
  const patterns = hosts.map((host) => `      { protocol: "https", hostname: "${host}" },`);

  return [
    'import type { NextConfig } from "next";',
    "",
    "const nextConfig: NextConfig = {",
    "  images: {",
    "    remotePatterns: [",
    ...patterns,
    "    ],",
    "  },",
    "};",
    "",
    "export default nextConfig;",
    "",
  ].join("\n");
}

function renderHomePage(templateId: string): string {
  return [
    'import { redirect } from "next/navigation";',
    "",
    "export default function Home() {",
    `  redirect("/login/${templateId}");`,
    "}",
    "",
  ].join("\n");
}

function renderRoutePage(templateId: string, component: "Login" | "Signup"): string {
  return [
    `import { ${component} } from "@/templates/${templateId}";`,
    "",
    "export default function Page() {",
    `  return <${component} />;`,
    "}",
    "",
  ].join("\n");
}

/** Everything the installer scripts need: files to write and packages to install. */
export function buildInstallPlan(templateId: string, templateFiles: TemplateFile[]): InstallPlan {
  return {
    templateId,
    projectName: `authshowcase-${templateId}`,
    dependencies: getPackageDependencies(templateFiles),
    files: [
      ...templateFiles.map((file) => ({
        path: `src/templates/${templateId}/${file.path}`,
        content: file.content,
      })),
      { path: "next.config.ts", content: renderNextConfig(getRemoteImageHosts(templateFiles)) },
      { path: "src/app/page.tsx", content: renderHomePage(templateId) },
      { path: `src/app/login/${templateId}/page.tsx`, content: renderRoutePage(templateId, "Login") },
      { path: `src/app/signup/${templateId}/page.tsx`, content: renderRoutePage(templateId, "Signup") },
    ],
  };
}
