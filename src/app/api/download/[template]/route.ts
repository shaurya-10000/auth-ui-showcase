import JSZip from "jszip";
import { applyBrandToFiles } from "@/lib/brand/apply";
import { getTemplateFiles, isTemplateId } from "@/lib/template-source";

export const dynamic = "force-dynamic";

type RouteContext = { params: Promise<{ template: string }> };

export async function GET(request: Request, { params }: RouteContext) {
  const { template: templateId } = await params;

  if (!isTemplateId(templateId)) {
    return new Response("Invalid template ID", { status: 400 });
  }

  try {
    const brandParam = new URL(request.url).searchParams.get("brand");
    const files = applyBrandToFiles(templateId, await getTemplateFiles(templateId), brandParam);

    const zip = new JSZip();
    const folder = zip.folder(templateId);
    if (!folder) throw new Error("Could not create zip folder");

    for (const file of files) folder.file(file.path, file.content);

    const archive = await zip.generateAsync({ type: "arraybuffer", compression: "DEFLATE" });
    const suffix = brandParam ? "-custom" : "";

    return new Response(archive, {
      status: 200,
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="${templateId}${suffix}-ui.zip"`,
      },
    });
  } catch (error) {
    console.error("Error generating zip:", error);
    return new Response("Template code not found", { status: 404 });
  }
}
