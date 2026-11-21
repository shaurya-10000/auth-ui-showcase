"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { templates } from "@/config/templates";
import Header from "@/components/Header";
import CodeSidebar from "@/components/CodeSidebar";
import { Download, Code as CodeIcon } from "lucide-react";

import { Login as T1 } from "@/templates/template-1";
import { Login as T2 } from "@/templates/template-2";
import { Login as T3 } from "@/templates/template-3";
import { Login as T4 } from "@/templates/template-4";
import { Login as T5 } from "@/templates/template-5";
import { Login as T6 } from "@/templates/template-6";
import { Login as T7 } from "@/templates/template-7";
import { Login as T8 } from "@/templates/template-8";
import { Login as T9 } from "@/templates/template-9";

const previewMap = {
  'template-1': T1,
  'template-2': T2,
  'template-3': T3,
  'template-4': T4,
  'template-5': T5,
  'template-6': T6,
  'template-7': T7,
  'template-8': T8,
  'template-9': T9,
};

interface GridCardProps {
  template: { id: string; name: string; description: string; tags: string[] };
  onViewCode: (templateId: string) => void;
}

function GridCard({ template, onViewCode }: GridCardProps) {
  const [scale, setScale] = useState(0.3);
  const boxRef = useRef<HTMLDivElement>(null);
  const PreviewComponent = previewMap[template.id as keyof typeof previewMap];

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / 1440);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="flex flex-col bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden group">
      
      <div 
        ref={boxRef}
        className="relative w-full aspect-video bg-[#0a0a0a] overflow-hidden border-b border-neutral-800"
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div 
            className="absolute top-0 left-0 w-[1440px] h-[810px] bg-[#0a0a0a]"
            style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}
          >
            <PreviewComponent />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-neutral-900 to-transparent z-10" />
        
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
          <Link 
            href={`/login/${template.id}`}
            className="bg-white text-black font-semibold py-2.5 px-5 rounded-lg shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-sm"
          >
            Open Preview
          </Link>
        </div>
      </div>

      <div className="p-4 sm:p-6 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-4">
          {template.tags.map((tag: string) => (
            <span key={tag} className="px-2.5 py-1 text-xs font-medium bg-neutral-800 text-neutral-300 rounded-md">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-lg sm:text-xl font-bold mb-2">{template.name}</h3>
        <p className="text-neutral-400 text-sm mb-6 flex-1">{template.description}</p>
        
        <div className="flex items-center gap-3">
          <Link href={`/login/${template.id}`} className="flex-1 text-center bg-white text-black text-sm font-semibold py-2.5 rounded-lg hover:bg-neutral-200 transition-colors">
            Preview
          </Link>
          <a href={`/api/download/${template.id}`} download className="flex items-center justify-center gap-2 flex-1 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold py-2.5 rounded-lg transition-colors">
            <Download size={16} /> Code
          </a>
        </div>

        <button
          type="button"
          onClick={() => onViewCode(template.id)}
          aria-haspopup="dialog"
          className="mt-3 w-full flex items-center justify-center gap-2 bg-neutral-800 border border-neutral-700 text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-neutral-700 transition-colors"
        >
          <CodeIcon size={16} /> View Code
        </button>
      </div>
    </div>
  );
}

export default function GridView() {
  const [activeTemplateId, setActiveTemplateId] = useState(templates[0].id);
  const [isCodeOpen, setIsCodeOpen] = useState(false);

  const openCode = useCallback((templateId: string) => {
    setActiveTemplateId(templateId);
    setIsCodeOpen(true);
  }, []);

  const closeCode = useCallback(() => setIsCodeOpen(false), []);

  const activeTemplate = templates.find((template) => template.id === activeTemplateId) ?? templates[0];

  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col">
      <Header />

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-24">
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">All Templates</h1>
          <p className="text-neutral-400 text-base sm:text-lg">Browse, preview, and download the raw React code for every design.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {templates.map((template) => (
            <GridCard key={template.id} template={template} onViewCode={openCode} />
          ))}
        </div>
      </div>

      <CodeSidebar
        open={isCodeOpen}
        templateId={activeTemplate.id}
        templateName={activeTemplate.name}
        onClose={closeCode}
      />
    </main>
  );
}
