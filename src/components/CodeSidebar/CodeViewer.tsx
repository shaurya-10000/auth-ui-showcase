import { useMemo } from "react";
import type { TemplateFile } from "@/lib/template-source/types";
import { CopyButton } from "./CopyButton";

interface CodeViewerProps {
  file: TemplateFile;
}

export function CodeViewer({ file }: CodeViewerProps) {
  const lines = useMemo(() => file.content.split("\n"), [file.content]);

  return (
    <section aria-label={file.path} className="flex min-h-0 min-w-0 flex-1 flex-col">
      <div className="flex items-center justify-between gap-3 border-b border-neutral-800 px-4 py-2">
        <div className="min-w-0">
          <p className="truncate font-mono text-xs text-neutral-300">{file.path}</p>
          <p className="text-[11px] text-neutral-500">{lines.length} lines</p>
        </div>
        <CopyButton text={file.content} label="Copy file" />
      </div>

      <div
        tabIndex={0}
        className="min-h-0 flex-1 overflow-auto bg-neutral-950 py-3 font-mono text-[13px] leading-6"
      >
        <pre className="w-max min-w-full">
          <code>
            {lines.map((line, index) => (
              <span key={index} className="flex">
                <span
                  aria-hidden="true"
                  className="sticky left-0 w-12 shrink-0 select-none bg-neutral-950 pr-4 text-right text-neutral-600"
                >
                  {index + 1}
                </span>
                <span className="whitespace-pre pr-6 text-neutral-200">{line || " "}</span>
              </span>
            ))}
          </code>
        </pre>
      </div>
    </section>
  );
}
