import { CopyButton } from "./CopyButton";

interface CommandBlockProps {
  title: string;
  shell: string;
  command: string;
}

export function CommandBlock({ title, shell, command }: CommandBlockProps) {
  return (
    <section>
      <div className="mb-2 flex items-center justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-white">{title}</h3>
          <p className="text-xs text-neutral-500">{shell}</p>
        </div>
        <CopyButton text={command} label="Copy command" />
      </div>
      <pre className="overflow-x-auto rounded-xl border border-neutral-800 bg-black p-4 font-mono text-[13px] text-neutral-200">
        <code className="select-all">{command}</code>
      </pre>
    </section>
  );
}
