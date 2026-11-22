import { notFound } from "next/navigation";
import { CustomizeWorkspace } from "@/components/Customize";
import { templates } from "@/config/templates";
import { decodeBrand } from "@/lib/brand/codec";
import { getBrandDefaults } from "@/lib/brand/defaults";
import { mergeBrand } from "@/lib/brand/merge";

interface CustomizePageProps {
  params: Promise<{ template: string }>;
  searchParams: Promise<{ brand?: string | string[] }>;
}

export default async function CustomizePage({ params, searchParams }: CustomizePageProps) {
  const { template: templateId } = await params;
  const { brand } = await searchParams;

  const template = templates.find((item) => item.id === templateId);
  const defaults = getBrandDefaults(templateId);
  if (!template || !defaults) notFound();

  const brandParam = Array.isArray(brand) ? brand[0] : brand;
  const initialValues = mergeBrand(defaults, decodeBrand(brandParam));

  return (
    <CustomizeWorkspace
      templateId={template.id}
      templateName={template.name}
      defaults={defaults}
      initialValues={initialValues}
    />
  );
}
