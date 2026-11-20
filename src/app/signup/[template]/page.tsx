import { Signup as Template1Signup } from '@/templates/template-1';
import { Signup as Template2Signup } from '@/templates/template-2';
import { Signup as Template3Signup } from '@/templates/template-3';
import { Signup as Template4Signup } from '@/templates/template-4';
import { Signup as Template5Signup } from '@/templates/template-5';
import { notFound } from 'next/navigation';

const templateMap = {
  'template-1': Template1Signup,
  'template-2': Template2Signup,
  'template-3': Template3Signup,
  'template-4': Template4Signup,
  'template-5': Template5Signup,
};

export function generateStaticParams() {
  return [
    { template: 'template-1' },
    { template: 'template-2' },
    { template: 'template-3' },
    { template: 'template-4' },
    { template: 'template-5' },
  ];
}

export default async function SignupPage({ params }: { params: Promise<{ template: string }> }) {
  const resolvedParams = await params;
  const TemplateComponent = templateMap[resolvedParams.template as keyof typeof templateMap];
  
  if (!TemplateComponent) return notFound();
  
  return <TemplateComponent />;
}
