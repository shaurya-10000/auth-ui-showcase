import { CommandBlock } from "./CommandBlock";
import { buildInstallCommands } from "./commands";

interface RunPanelProps {
  templateId: string;
}

const STEPS = [
  "Creates a new Next.js app (TypeScript, Tailwind, App Router) in the current folder.",
  "Adds this template and its login and signup routes.",
  "Installs any extra packages the template imports.",
  "Starts the dev server so you can open it on localhost:3000.",
];

export function RunPanel({ templateId }: RunPanelProps) {
  const origin = typeof window === "undefined" ? "" : window.location.origin;
  const { windows, unix } = buildInstallCommands(origin, templateId);

  return (
    <div className="flex-1 space-y-6 overflow-y-auto p-5">
      <p className="text-sm leading-relaxed text-neutral-400">
        No zip needed. Open a terminal in the folder where you want the project, paste one command,
        and this template is set up and running. Requires Node.js 20 or newer.
      </p>

      <CommandBlock title="Windows" shell="PowerShell" command={windows} />
      <CommandBlock title="macOS / Linux" shell="Terminal" command={unix} />

      <section>
        <h3 className="mb-2 text-sm font-semibold text-white">What the script does</h3>
        <ol className="list-decimal space-y-1.5 pl-5 text-sm text-neutral-400">
          {STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>
    </div>
  );
}
