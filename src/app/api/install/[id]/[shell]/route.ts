import { applyBrandToFiles } from "@/lib/brand/apply";
import { buildInstallPlan, renderPowerShellScript, renderShellScript } from "@/lib/install-script";
import { getTemplateFiles, isTemplateId } from "@/lib/template-source";

export const dynamic = "force-dynamic";

const SHELLS = ["ps1", "sh"] as const;
type Shell = (typeof SHELLS)[number];

type RouteContext = { params: Promise<{ id: string; shell: string }> };

function isShell(value: string): value is Shell {
  return (SHELLS as readonly string[]).includes(value);
}

export async function GET(request: Request, { params }: RouteContext) {
  const { id, shell } = await params;

  if (!isTemplateId(id) || !isShell(shell)) {
    return new Response("Not found", { status: 404 });
  }

  try {
    const brandParam = new URL(request.url).searchParams.get("brand");
    const files = applyBrandToFiles(id, await getTemplateFiles(id), brandParam);
    const plan = buildInstallPlan(id, files);
    const script = shell === "ps1" ? renderPowerShellScript(plan) : renderShellScript(plan);

    return new Response(script, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch {
    return new Response("Could not generate installer", { status: 500 });
  }
}
