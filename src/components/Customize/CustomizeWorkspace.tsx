"use client";

import { useCallback, useState } from "react";
import CodeSidebar from "@/components/CodeSidebar";
import Header from "@/components/Header";
import { brandablePages } from "@/lib/brand/registry";
import type { BrandValues } from "@/lib/brand/types";
import { BrandForm } from "./BrandForm";
import { PreviewStage } from "./PreviewStage";
import { Toolbar } from "./Toolbar";
import type { PreviewView } from "./Toolbar";
import { useBrandState } from "./useBrandState";

interface CustomizeWorkspaceProps {
  templateId: string;
  templateName: string;
  defaults: BrandValues;
  initialValues: BrandValues;
}

export function CustomizeWorkspace({
  templateId,
  templateName,
  defaults,
  initialValues,
}: CustomizeWorkspaceProps) {
  const [view, setView] = useState<PreviewView>("login");
  const [isCodeOpen, setIsCodeOpen] = useState(false);
  const { draft, values, brandParam, setField, reset, isModified } = useBrandState(
    templateId,
    defaults,
    initialValues,
  );
  const closeCode = useCallback(() => setIsCodeOpen(false), []);

  const pages = brandablePages[templateId];
  if (!pages) return null;

  const Page = view === "login" ? pages.Login : pages.Signup;
  const query = brandParam ? `?brand=${encodeURIComponent(brandParam)}` : "";
  const shareUrl =
    typeof window === "undefined" ? "" : `${window.location.origin}/customize/${templateId}${query}`;

  return (
    <main className="flex min-h-screen flex-col bg-neutral-950 pt-16 text-white lg:h-screen">
      <Header />

      <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
        <section className="order-1 flex min-w-0 flex-1 flex-col gap-4 p-4 sm:p-6 lg:order-2 lg:overflow-y-auto">
          <Toolbar
            view={view}
            onViewChange={setView}
            isModified={isModified}
            onReset={reset}
            shareUrl={shareUrl}
            downloadHref={`/api/download/${templateId}${query}`}
            onViewCode={() => setIsCodeOpen(true)}
          />
          <PreviewStage Page={Page} brand={values} />
        </section>

        <aside className="order-2 border-t border-neutral-800 lg:order-1 lg:w-[380px] lg:shrink-0 lg:overflow-y-auto lg:border-r lg:border-t-0">
          <div className="space-y-6 p-5">
            <div>
              <h1 className="text-lg font-semibold">Customize {templateName}</h1>
              <p className="mt-1 text-sm text-neutral-400">
                Edit the text, fonts, colors and links. The preview, download, code and install commands
                all follow your changes.
              </p>
              <p className="mt-2 text-xs text-neutral-500">
                Your latest design is saved in this browser, so it is still here next time.
              </p>
            </div>
            <BrandForm defaults={defaults} draft={draft} onChange={setField} />
          </div>
        </aside>
      </div>

      <CodeSidebar
        open={isCodeOpen}
        templateId={templateId}
        templateName={templateName}
        brandParam={brandParam}
        onClose={closeCode}
      />
    </main>
  );
}
