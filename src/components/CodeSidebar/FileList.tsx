import { FileCode2 } from "lucide-react";
import type { TemplateFile } from "@/lib/template-source/types";

interface FileListProps {
  files: TemplateFile[];
  activePath: string | undefined;
  onSelect: (path: string) => void;
}

export function FileList({ files, activePath, onSelect }: FileListProps) {
  return (
    <nav
      aria-label="Template files"
      className="flex shrink-0 gap-1 overflow-x-auto border-b border-neutral-800 p-2 sm:w-52 sm:flex-col sm:overflow-y-auto sm:border-b-0 sm:border-r"
    >
      {files.map((file) => {
        const isActive = file.path === activePath;

        return (
          <button
            key={file.path}
            type="button"
            title={file.path}
            aria-current={isActive ? "true" : undefined}
            onClick={() => onSelect(file.path)}
            className={`flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
              isActive
                ? "bg-neutral-800 text-white"
                : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
            }`}
          >
            <FileCode2 size={16} className="shrink-0" />
            <span className="truncate">{file.path}</span>
          </button>
        );
      })}
    </nav>
  );
}
