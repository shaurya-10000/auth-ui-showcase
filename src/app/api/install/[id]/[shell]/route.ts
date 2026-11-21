import { getTemplateFiles, getTemplateIds, isTemplateId } from "@/lib/template-source";
import { buildInstallPlan, renderPowerShellScript, renderShellScript } from "@/lib/install-script";

const SHELLS = ["ps1", "sh"] as const;
type Shell = (typeof SHELLS)[number];

type RouteContext = { params: Promise<{ id: string; shell: string }> };

function isShell(value: string): value is Shell {
  return (SHELLS as readonly string[]).includes(value);
}

export function generateStaticParams() {
  return getTemplateIds().flatMap((id) => SHELLS.map((shell) => ({ id, shell })));
}

export async function GET(_request: Request, { params }: RouteContext) {
  const { id, shell } = await params;

  if (!isTemplateId(id) || !isShell(shell)) {
    return new Response("Not found", { status: 404 });
  }

  try {
    const plan = buildInstallPlan(id, await getTemplateFiles(id));
    const script = shell === "ps1" ? renderPowerShellScript(plan) : renderShellScript(plan);

    return new Response(script, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch {
    return new Response("Could not generate installer", { status: 500 });
  }
}
