export const instant = false;

import { Signup as Template1Signup } from '@/templates/template-1';
import { Signup as Template2Signup } from '@/templates/template-2';
import { notFound } from 'next/navigation';

const templateMap = {
  'template-1': Template1Signup,
  'template-2': Template2Signup,
};

export default async function SignupPage({ params }: { params: Promise<{ template: string }> }) {
  const resolvedParams = await params;
  const TemplateComponent = templateMap[resolvedParams.template as keyof typeof templateMap];
  
  if (!TemplateComponent) return notFound();
  
  return <TemplateComponent />;
}
