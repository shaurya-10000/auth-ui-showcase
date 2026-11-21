import type { InstallPlan, ScriptFile } from "./project";

/** Renders one file as a literal here-string (no variable expansion). */
function renderFile(file: ScriptFile): string {
  const body = file.content.replace(/\n+$/, "");

  // A line that starts with the here-string terminator would end the string early,
  // so that very unlikely case falls back to base64.
  if (/^'@/m.test(body)) {
    const encoded = Buffer.from(body, "utf8").toString("base64");
    return `Write-Utf8File "${file.path}" ([System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String("${encoded}")))`;
  }

  return `Write-Utf8File "${file.path}" @'\n${body}\n'@`;
}

export function renderPowerShellScript(plan: InstallPlan): string {
  const installDependencies =
    plan.dependencies.length > 0
      ? [
          'Write-Host "Installing dependencies..." -ForegroundColor Cyan',
          `npm install ${plan.dependencies.join(" ")}`,
          'Assert-Success "npm install"',
          "",
        ]
      : [];

  const lines = [
    `# AuthShowcase installer - ${plan.templateId}`,
    "# Creates a new Next.js app, adds this template, installs dependencies and starts the dev server.",
    '$ErrorActionPreference = "Stop"',
    "",
    `$ProjectName = "${plan.projectName}"`,
    "",
    "function Assert-Success([string]$Step) {",
    '  if ($LASTEXITCODE -ne 0) { throw "$Step failed (exit code $LASTEXITCODE)." }',
    "}",
    "",
    "function Write-Utf8File([string]$RelativePath, [string]$Content) {",
    "  $fullPath = Join-Path (Get-Location).Path $RelativePath",
    "  [System.IO.Directory]::CreateDirectory([System.IO.Path]::GetDirectoryName($fullPath)) | Out-Null",
    "  $encoding = New-Object System.Text.UTF8Encoding($false)",
    "  [System.IO.File]::WriteAllText($fullPath, $Content + [char]10, $encoding)",
    "}",
    "",
    "if (-not (Get-Command node -ErrorAction SilentlyContinue)) {",
    '  throw "Node.js 20 or newer is required. Install it from https://nodejs.org and try again."',
    "}",
    "$nodeMajor = [int](node -p \"process.versions.node.split('.')[0]\")",
    'if ($nodeMajor -lt 20) { throw "Node.js 20 or newer is required (found $(node -v))." }',
    "if (Test-Path -LiteralPath $ProjectName) {",
    `  throw "Folder '$ProjectName' already exists. Remove it or run this from another directory."`,
    "}",
    "",
    'Write-Host "Creating Next.js app..." -ForegroundColor Cyan',
    'npx --yes create-next-app@latest $ProjectName --ts --tailwind --app --src-dir --import-alias "@/*" --use-npm --yes',
    'Assert-Success "create-next-app"',
    "Set-Location $ProjectName",
    "",
    'Write-Host "Adding template files..." -ForegroundColor Cyan',
    ...plan.files.map(renderFile),
    "",
    ...installDependencies,
    `Write-Host "Starting dev server: http://localhost:3000/login/${plan.templateId}" -ForegroundColor Green`,
    "npm run dev",
  ];

  return `${lines.join("\n")}\n`;
}
