import { NextResponse } from 'next/server';
import JSZip from 'jszip';
import fs from 'fs/promises';
import path from 'path';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ template: string }> }
) {
  const resolvedParams = await params;
  const templateId = resolvedParams.template;

  if (!templateId.match(/^template-\d+$/)) {
    return new NextResponse('Invalid template ID', { status: 400 });
  }

  try {
    const templateDir = path.join(process.cwd(), 'src', 'templates', templateId);
    
    const loginCode = await fs.readFile(path.join(templateDir, 'login.tsx'), 'utf8');
    const signupCode = await fs.readFile(path.join(templateDir, 'signup.tsx'), 'utf8');
    const indexCode = `export { default as Login } from './login';\nexport { default as Signup } from './signup';\n`;

    const zip = new JSZip();
    const folder = zip.folder(templateId);
    
    if (!folder) throw new Error("Could not create zip folder");

    folder.file('login.tsx', loginCode);
    folder.file('signup.tsx', signupCode);
    folder.file('index.ts', indexCode);

    // Generate as base64 to bypass strict TS buffer typing
    const zipBase64 = await zip.generateAsync({ type: 'base64' });
    
    // Convert base64 back to a Node Buffer, then cast to 'any' for NextResponse
    const zipBuffer = Buffer.from(zipBase64, 'base64');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return new NextResponse(zipBuffer as any, {
      status: 200,
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': `attachment; filename="${templateId}-ui.zip"`,
      },
    });

  } catch (error) {
    console.error('Error generating zip:', error);
    return new NextResponse('Template code not found', { status: 404 });
  }
}
