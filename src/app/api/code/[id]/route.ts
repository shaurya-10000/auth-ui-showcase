import { NextResponse } from "next/server";
import { getTemplateFiles, getTemplateIds, isTemplateId } from "@/lib/template-source";

type RouteContext = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return getTemplateIds().map((id) => ({ id }));
}

export async function GET(_request: Request, { params }: RouteContext) {
  const { id } = await params;

  if (!isTemplateId(id)) {
    return NextResponse.json({ error: "Template not found" }, { status: 404 });
  }

  try {
    const files = await getTemplateFiles(id);
    return NextResponse.json({ id, files });
  } catch {
    return NextResponse.json({ error: "Could not read template source" }, { status: 500 });
  }
}
