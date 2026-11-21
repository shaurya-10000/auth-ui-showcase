"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { CodeViewer } from "./CodeViewer";
import { FileList } from "./FileList";
import { RunPanel } from "./RunPanel";
import { StatusMessage } from "./StatusMessage";
import { useTemplateCode } from "./useTemplateCode";

interface CodeSidebarProps {
  open: boolean;
  templateId: string;
  templateName: string;
  onClose: () => void;
}

type Tab = "files" | "run";

const TABS: { id: Tab; label: string }[] = [
  { id: "files", label: "Source files" },
  { id: "run", label: "Run locally" },
];

export default function CodeSidebar({ open, templateId, templateName, onClose }: CodeSidebarProps) {
  const [tab, setTab] = useState<Tab>("files");
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  const { files, status, error, retry } = useTemplateCode(templateId, open);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  // Focus the close button on open, close on Escape, and restore focus on close.
  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCloseRef.current();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [open]);

  const activeFile = files.find((file) => file.path === selectedPath) ?? files[0];
  const subtitle = status === "success" ? `${files.length} files in src/templates/${templateId}` : "Source code";

  function renderSource() {
    if (status === "error") {
      return (
        <StatusMessage
          message={`Could not load the source (${error}).`}
          actionLabel="Try again"
          onAction={retry}
        />
      );
    }
    if (status !== "success") return <StatusMessage message="Loading source files..." />;
    if (!activeFile) return <StatusMessage message="No source files found for this template." />;

    return (
      <div className="flex min-h-0 flex-1 flex-col sm:flex-row">
        <FileList files={files} activePath={activeFile.path} onSelect={setSelectedPath} />
        <CodeViewer key={`${templateId}:${activeFile.path}`} file={activeFile} />
      </div>
    );
  }

  return (
    <>
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label={`${templateName} source code`}
        inert={!open}
        className={`fixed inset-y-0 right-0 z-[61] flex w-full max-w-[44rem] flex-col border-l border-neutral-800 bg-neutral-950 shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between gap-4 border-b border-neutral-800 px-5 py-4">
          <div className="min-w-0">
            <h2 className="truncate text-lg font-semibold text-white">{templateName}</h2>
            <p className="truncate text-xs text-neutral-500">{subtitle}</p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close code sidebar"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900 text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white"
          >
            <X size={18} />
          </button>
        </header>

        <div role="tablist" className="flex gap-1 border-b border-neutral-800 px-3">
          {TABS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={tab === id}
              onClick={() => setTab(id)}
              className={`-mb-px border-b-2 px-3 py-3 text-sm font-medium transition-colors ${
                tab === id
                  ? "border-indigo-500 text-white"
                  : "border-transparent text-neutral-400 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div role="tabpanel" className="flex min-h-0 flex-1 flex-col">
          {tab === "run" ? <RunPanel templateId={templateId} /> : renderSource()}
        </div>
      </aside>
    </>
  );
}
