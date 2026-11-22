import { Login as Template1Login } from '@/templates/template-1';
import { Login as Template2Login } from '@/templates/template-2';
import { Login as Template3Login } from '@/templates/template-3';
import { Login as Template4Login } from '@/templates/template-4';
import { Login as Template5Login } from '@/templates/template-5';
import { Login as Template6Login } from '@/templates/template-6';
import { Login as Template7Login } from '@/templates/template-7';
import { Login as Template8Login } from '@/templates/template-8';
import { Login as Template9Login } from '@/templates/template-9';
import { Login as Template10Login } from '@/templates/template-10';
import { Login as Template11Login } from '@/templates/template-11';
import { Login as Template12Login } from '@/templates/template-12';
import { Login as Template13Login } from '@/templates/template-13';
import { Login as Template14Login } from '@/templates/template-14';
import { Login as Template15Login } from '@/templates/template-15';
import { notFound } from 'next/navigation';

const templateMap = {
  'template-1': Template1Login,
  'template-2': Template2Login,
  'template-3': Template3Login,
  'template-4': Template4Login,
  'template-5': Template5Login,
  'template-6': Template6Login,
  'template-7': Template7Login,
  'template-8': Template8Login,
  'template-9': Template9Login,
  'template-10': Template10Login,
  'template-11': Template11Login,
  'template-12': Template12Login,
  'template-13': Template13Login,
  'template-14': Template14Login,
  'template-15': Template15Login,
};

export function generateStaticParams() {
  return [
    { template: 'template-1' },
    { template: 'template-2' },
    { template: 'template-3' },
    { template: 'template-4' },
    { template: 'template-5' },
    { template: 'template-6' },
    { template: 'template-7' },
    { template: 'template-8' },
    { template: 'template-9' },
    { template: 'template-10' },
    { template: 'template-11' },
    { template: 'template-12' },
    { template: 'template-13' },
    { template: 'template-14' },
    { template: 'template-15' },
  ];
}

export default async function LoginPage({ params }: { params: Promise<{ template: string }> }) {
  const resolvedParams = await params;
  const TemplateComponent = templateMap[resolvedParams.template as keyof typeof templateMap];
  
  if (!TemplateComponent) return notFound();
  
  return <TemplateComponent />;
}