# AuthShowcase

Premium authentication UI templates for Next.js. Browse 8 distinct login and sign-up designs in a live carousel, inspect the source in the browser, then grab the code as a zip or with a single terminal command.

## Features

- **Live carousel** - each template is previewed as a real, scaled-down login page, not a screenshot.
- **Swipe and arrows** - navigate with touch swipe on mobile or the arrow buttons on desktop.
- **Login and sign-up pages** - every template ships with both, plus a back button to return to the carousel.
- **Grid view** - see all templates at once at `/grid`, each card with Preview, Code and View Code buttons.
- **View Code sidebar** - browse every file of a template with line numbers and copy buttons, without leaving the page. Available from both the carousel and the grid view.
- **Run without a zip** - one PowerShell or Terminal command creates a fresh Next.js app with the template installed and running.
- **Zip download** - the full template as a downloadable archive.

## Templates

| ID | Name | Style |
| --- | --- | --- |
| `template-1` | Minimal SaaS | Clean, light mode, B2B |
| `template-2` | Glassmorphism | Frosted glass, dark mode |
| `template-3` | Neo-Brutalist | High contrast, thick borders |
| `template-4` | Cyberpunk Terminal | Neon terminal interface |
| `template-5` | Neumorphism | Soft extruded UI, tactile |
| `template-6` | Bento Grid | Card-based, rounded, minimal |
| `template-7` | Brutalist Pastel | Pastel colors, chunky borders |
| `template-8` | Skeuomorphism | Realistic gradients and shadows |

## Tech Stack

- [Next.js](https://nextjs.org) (App Router) and React
- TypeScript
- Tailwind CSS
- [lucide-react](https://lucide.dev) icons

## Getting Started

Requires Node.js 20 or newer.

```bash
git clone <repo-url>
cd <repo-folder>
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build |
| `npm run lint` | Lint the project |

## Using a Template

### Option 1: Run it without downloading the zip

Open a terminal in the folder where you want the new project, then run the command for your system. Open **View Code > Run locally** on the site to copy the exact command for the template you are viewing.

**Windows (PowerShell)**

```powershell
irm "https://<your-domain>/api/install/template-1/ps1" | iex
```

**macOS / Linux (Terminal)**

```bash
bash <(curl -fsSL "https://<your-domain>/api/install/template-1/sh")
```

The script creates a new Next.js app (TypeScript, Tailwind, App Router), adds the template and its login and sign-up routes, installs any extra packages the template imports, and starts the dev server at `http://localhost:3000/login/<template-id>`.

### Option 2: Download the zip

Click **Code** on any template in the carousel.

### Option 3: Copy files manually

Click **View Code**, pick a file, and use the copy button.

## Project Structure

```text
src/
  app/
    page.tsx                      Carousel home page
    layout.tsx                    Root layout (includes the back button)
    login/[id]/                   Login route per template
    signup/[id]/                  Sign-up route per template
    api/
      download/[id]/              Zip download
      code/[id]/                  Template source as JSON (View Code sidebar)
      install/[id]/[shell]/       Installer scripts (ps1 and sh)
  components/
    Header/                       Site header
    BackButton/                   Back button on login and sign-up pages
    CodeSidebar/                  View Code drawer (files, viewer, run commands)
  config/
    templates.ts                  Template metadata
  hooks/
    useSwipe.ts                   Touch swipe handling
  lib/
    template-source/              Reads template files and detects dependencies
    install-script/               Generates the PowerShell and shell installers
  templates/
    template-1 ... template-8/    index.ts, login.tsx, signup.tsx per template
```

## Adding a New Template

1. Create `src/templates/template-9/` with `login.tsx`, `signup.tsx` and an `index.ts`:

   ```ts
   export { default as Login } from "./login";
   export { default as Signup } from "./signup";
   ```

2. Add an entry to `src/config/templates.ts` (`id`, `name`, `description`, `tags`, `previewColor`).
3. Import its `Login` in `src/app/page.tsx` and add it to `previewComponents`.
4. If the login and sign-up routes map template ids explicitly, register the new id there too.

The View Code sidebar, the installer scripts and the `/api/code` route read straight from the template folder, so they pick the new template up automatically.

## API Routes

| Route | Description |
| --- | --- |
| `GET /api/download/[id]` | Download the template as a zip |
| `GET /api/code/[id]` | JSON list of the template's files and contents |
| `GET /api/install/[id]/ps1` | PowerShell installer for the template |
| `GET /api/install/[id]/sh` | Bash/zsh installer for the template |

Only ids listed in `src/config/templates.ts` are accepted; anything else returns a 404.

## Notes

- Template previews on the home page are rendered live at 1440x810 and scaled to fit the preview box.
- Installer scripts include only the files inside the template's own folder. If a template depends on shared components or global CSS, copy those as well.