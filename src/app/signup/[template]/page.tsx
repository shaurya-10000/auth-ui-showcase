import { Signup as Template1Signup } from '@/templates/template-1';
import { Signup as Template2Signup } from '@/templates/template-2';
import { Signup as Template3Signup } from '@/templates/template-3';
import { Signup as Template4Signup } from '@/templates/template-4';
import { Signup as Template5Signup } from '@/templates/template-5';
import { Signup as Template6Signup } from '@/templates/template-6';
import { Signup as Template7Signup } from '@/templates/template-7';
import { Signup as Template8Signup } from '@/templates/template-8';
import { Signup as Template9Signup } from '@/templates/template-9';
import { Signup as Template10Signup } from '@/templates/template-10';
import { Signup as Template11Signup } from '@/templates/template-11';
import { Signup as Template12Signup } from '@/templates/template-12';
import { Signup as Template13Signup } from '@/templates/template-13';
import { Signup as Template14Signup } from '@/templates/template-14';
import { Signup as Template15Signup } from '@/templates/template-15';
import { Signup as Template16Signup } from '@/templates/template-16';
import { Signup as Template17Signup } from '@/templates/template-17';
import { notFound } from 'next/navigation';

const templateMap = {
  'template-1': Template1Signup,
  'template-2': Template2Signup,
  'template-3': Template3Signup,
  'template-4': Template4Signup,
  'template-5': Template5Signup,
  'template-6': Template6Signup,
  'template-7': Template7Signup,
  'template-8': Template8Signup,
  'template-9': Template9Signup,
  'template-10': Template10Signup,
  'template-11': Template11Signup,
  'template-12': Template12Signup,
  'template-13': Template13Signup,
  'template-14': Template14Signup,
  'template-15': Template15Signup,
  'template-16': Template16Signup,
  'template-17': Template17Signup,
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
    { template: 'template-16' },
    { template: 'template-17' },
  ];
}

export default async function SignupPage({ params }: { params: Promise<{ template: string }> }) {
  const resolvedParams = await params;
  const TemplateComponent = templateMap[resolvedParams.template as keyof typeof templateMap];
  
  if (!TemplateComponent) return notFound();
  
  return <TemplateComponent />;
}
