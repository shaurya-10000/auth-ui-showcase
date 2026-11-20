import { Login as Template1Login } from '@/templates/template-1';
import { Login as Template2Login } from '@/templates/template-2';
import { notFound } from 'next/navigation';

const templateMap = {
  'template-1': Template1Login,
  'template-2': Template2Login,
};

export default function LoginPage({ params }: { params: { template: string } }) {
  const TemplateComponent = templateMap[params.template as keyof typeof templateMap];
  
  if (!TemplateComponent) return notFound();
  
  return <TemplateComponent />;
}
