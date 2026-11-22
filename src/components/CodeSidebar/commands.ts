export interface InstallCommands {
  windows: string;
  unix: string;
}

export function buildInstallCommands(origin: string, templateId: string, brandParam = ""): InstallCommands {
  const base = `${origin}/api/install/${encodeURIComponent(templateId)}`;
  const query = brandParam ? `?brand=${encodeURIComponent(brandParam)}` : "";

  return {
    windows: `irm "${base}/ps1${query}" | iex`,
    unix: `bash <(curl -fsSL "${base}/sh${query}")`,
  };
}
