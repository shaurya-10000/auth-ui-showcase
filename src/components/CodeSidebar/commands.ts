export interface InstallCommands {
  windows: string;
  unix: string;
}

export function buildInstallCommands(origin: string, templateId: string): InstallCommands {
  const base = `${origin}/api/install/${encodeURIComponent(templateId)}`;

  return {
    windows: `irm "${base}/ps1" | iex`,
    unix: `bash <(curl -fsSL "${base}/sh")`,
  };
}
