import { Signup as Template1Signup } from '@/templates/template-1';
import { Signup as Template2Signup } from '@/templates/template-2';
import { notFound } from 'next/navigation';

const templateMap = {
  'template-1': Template1Signup,
  'template-2': Template2Signup,
};

export default function SignupPage({ params }: { params: { template: string } }) {
  const TemplateComponent = templateMap[params.template as keyof typeof templateMap];
  
  if (!TemplateComponent) return notFound();
  
  return <TemplateComponent />;
}
