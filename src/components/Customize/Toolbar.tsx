"use client";

import { Code as CodeIcon, Download, RotateCcw } from "lucide-react";
import { CopyButton } from "@/components/CodeSidebar/CopyButton";

export type PreviewView = "login" | "signup";

interface ToolbarProps {
  view: PreviewView;
  onViewChange: (view: PreviewView) => void;
  isModified: boolean;
  onReset: () => void;
  shareUrl: string;
  downloadHref: string;
  onViewCode: () => void;
}

const VIEWS: { id: PreviewView; label: string }[] = [
  { id: "login", label: "Login" },
  { id: "signup", label: "Sign up" },
];

const ACTION_CLASS =
  "flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-xs font-medium text-neutral-200 transition-colors hover:bg-neutral-800 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-neutral-900";

export function Toolbar({
  view,
  onViewChange,
  isModified,
  onReset,
  shareUrl,
  downloadHref,
  onViewCode,
}: ToolbarProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div
        role="group"
        aria-label="Preview page"
        className="inline-flex rounded-xl border border-neutral-800 bg-neutral-900 p-1"
      >
        {VIEWS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            aria-pressed={view === id}
            onClick={() => onViewChange(id)}
            className={`rounded-lg px-4 py-1.5 text-sm font-medium transition-colors ${
              view === id ? "bg-neutral-700 text-white" : "text-neutral-400 hover:text-white"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button type="button" onClick={onReset} disabled={!isModified} className={ACTION_CLASS}>
          <RotateCcw size={14} />
          Reset
        </button>
        <CopyButton text={shareUrl} label="Copy link" />
        <button type="button" onClick={onViewCode} aria-haspopup="dialog" className={ACTION_CLASS}>
          <CodeIcon size={14} />
          View Code
        </button>
        <a
          href={downloadHref}
          download
          className="flex items-center gap-2 rounded-lg border border-indigo-500 bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-indigo-500"
        >
          <Download size={14} />
          Download
        </a>
      </div>
    </div>
  );
}
