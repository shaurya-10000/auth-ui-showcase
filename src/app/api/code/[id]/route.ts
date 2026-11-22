import { NextResponse } from "next/server";
import { applyBrandToFiles } from "@/lib/brand/apply";
import { getTemplateFiles, isTemplateId } from "@/lib/template-source";

export const dynamic = "force-dynamic";

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(request: Request, { params }: RouteContext) {
  const { id } = await params;

  if (!isTemplateId(id)) {
    return NextResponse.json({ error: "Template not found" }, { status: 404 });
  }

  try {
    const brandParam = new URL(request.url).searchParams.get("brand");
    const files = applyBrandToFiles(id, await getTemplateFiles(id), brandParam);
    return NextResponse.json({ id, files });
  } catch {
    return NextResponse.json({ error: "Could not read template source" }, { status: 500 });
  }
}
