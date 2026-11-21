import type { InstallPlan, ScriptFile } from "./project";

function pickDelimiter(body: string): string {
  const lines = new Set(body.split("\n"));
  let delimiter = "AUTHSHOWCASE_EOF";
  while (lines.has(delimiter)) delimiter += "_X";
  return delimiter;
}

/** Renders one file as a quoted heredoc (no variable expansion). */
function renderFile(file: ScriptFile): string {
  const body = file.content.replace(/\n+$/, "");
  const delimiter = pickDelimiter(body);
  return `write_file "${file.path}" <<'${delimiter}'\n${body}\n${delimiter}`;
}

export function renderShellScript(plan: InstallPlan): string {
  const installDependencies =
    plan.dependencies.length > 0
      ? ['echo "Installing dependencies..."', `npm install ${plan.dependencies.join(" ")}`, ""]
      : [];

  const lines = [
    "#!/usr/bin/env bash",
    `# AuthShowcase installer - ${plan.templateId}`,
    "# Creates a new Next.js app, adds this template, installs dependencies and starts the dev server.",
    "set -euo pipefail",
    "",
    `PROJECT_NAME="${plan.projectName}"`,
    "",
    "if ! command -v node >/dev/null 2>&1; then",
    '  echo "Node.js 20 or newer is required. Install it from https://nodejs.org and try again." >&2',
    "  exit 1",
    "fi",
    `NODE_MAJOR="$(node -p "process.versions.node.split('.')[0]")"`,
    'if [ "$NODE_MAJOR" -lt 20 ]; then',
    '  echo "Node.js 20 or newer is required (found $(node -v))." >&2',
    "  exit 1",
    "fi",
    'if [ -e "$PROJECT_NAME" ]; then',
    `  echo "Folder '$PROJECT_NAME' already exists. Remove it or run this from another directory." >&2`,
    "  exit 1",
    "fi",
    "",
    'echo "Creating Next.js app..."',
    'npx --yes create-next-app@latest "$PROJECT_NAME" --ts --tailwind --app --src-dir --import-alias "@/*" --use-npm --yes',
    'cd "$PROJECT_NAME"',
    "",
    "write_file() {",
    '  mkdir -p "$(dirname "$1")"',
    '  cat > "$1"',
    "}",
    "",
    'echo "Adding template files..."',
    ...plan.files.map(renderFile),
    "",
    ...installDependencies,
    `echo "Starting dev server: http://localhost:3000/login/${plan.templateId}"`,
    "npm run dev",
  ];

  return `${lines.join("\n")}\n`;
}
