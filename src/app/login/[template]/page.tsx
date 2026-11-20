import { Login as Template1Login } from '@/templates/template-1';
import { Login as Template2Login } from '@/templates/template-2';
import { Login as Template3Login } from '@/templates/template-3';
import { Login as Template4Login } from '@/templates/template-4';
import { notFound } from 'next/navigation';

const templateMap = {
  'template-1': Template1Login,
  'template-2': Template2Login,
  'template-3': Template3Login,
  'template-4': Template4Login,
};

export function generateStaticParams() {
  return [
    { template: 'template-1' },
    { template: 'template-2' },
    { template: 'template-3' },
    { template: 'template-4' },
  ];
}

export default async function LoginPage({ params }: { params: Promise<{ template: string }> }) {
  const resolvedParams = await params;
  const TemplateComponent = templateMap[resolvedParams.template as keyof typeof templateMap];
  
  if (!TemplateComponent) return notFound();
  
  return <TemplateComponent />;
}
