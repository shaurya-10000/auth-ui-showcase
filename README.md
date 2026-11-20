<div align="center">

# 🎨 Auth UI Showcase

**A collection of production-ready, fully responsive authentication UI templates. Download the code and drop it straight into your Next.js project.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit-success?style=for-the-badge&logo=vercel&logoColor=white)](https://auth-ui-showcase-rho.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](./LICENSE)

[![Next.js](https://img.shields.io/badge/Next.js-16+-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

<img src="https://via.placeholder.com/880x400/0a0a0a/ffffff?text=Auth+UI+Showcase+Preview" alt="Carousel Preview" width="880" />

[**Live demo**](https://auth-ui-showcase-rho.vercel.app) · [**Quick start**](#quick-start) · [**Architecture**](#architecture) · [**Templates**](#available-templates)

</div>

---

## Overview

|  |  |
| :--- | :--- |
| **What** | A frontend showcase featuring 8 distinct authentication designs, complete with a dynamic carousel preview and a one-click code download feature. |
| **Why it's interesting** | Every template is a self-contained React component. A dynamic API route reads the filesystem, zips the selected template, and streams it to the client—all without a database or external storage. |
| **Stack** | Next.js (App Router, Turbopack) · TypeScript (strict) · Tailwind CSS v4 · Lucide Icons · JSZip |

## Contents

- [Demo](#demo)
- [Highlights](#highlights)
- [Architecture](#architecture)
- [Available Templates](#available-templates)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [How the Code Download Works](#how-the-code-download-works)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [License](#license)

---

## Demo

|  |  |
| :--- | :--- |
| **Live app** | [auth-ui-showcase-rho.vercel.app](https://auth-ui-showcase-rho.vercel.app) |

<!-- TODO: Add real screenshots to docs/assets/ and update these paths -->
| Home Carousel | Live Preview | Download Feature |
| :---: | :---: | :---: |
| <img src="https://via.placeholder.com/400x250/0a0a0a/ffffff?text=Carousel" alt="Carousel" width="280" /> | <img src="https://via.placeholder.com/400x250/0a0a0a/ffffff?text=Live+Preview" alt="Live Preview" width="280" /> | <img src="https://via.placeholder.com/400x250/0a0a0a/ffffff?text=Download+Button" alt="Download" width="280" /> |

---

## Highlights

- **8 Unique Designs:** From clean B2B SaaS to wild Neo-Brutalism and Cyberpunk terminals.
- **Live Scaled Previews:** The home page renders the actual React components at `scale: 0.4` inside a browser-like frame, giving an accurate representation of the UI.
- **One-Click Download:** Clicking the "Code" button on any template zips its `login.tsx`, `signup.tsx`, and `index.ts` files and downloads them instantly.
- **Zero Backend Dependency:** The download feature uses a Next.js API route and in-memory zipping. No S3 buckets or databases required.
- **Interactive States:** Every template includes loading spinners, password visibility toggles, hover effects, and form validation.
- **Accessible by Default:** Focus rings, ARIA labels, and keyboard-navigable carousels are built-in.

---

## Architecture

The application is split into three core concepts:

```text
┌────────────────────────────────────────────────────────┐
│                      Home Page (/)                     │
│  ┌─────────────────┐  ┌───────────────┐  ┌──────────┐  │
│  │ Template Config │->│ Live Preview  │  │ Download │  │
│  │  (templates.ts) │  │ (Page Render) │  │  Button  │  │
│  └─────────────────┘  └───────────────┘  └────┬─────┘  │
└───────────────────────────────────────────────│────────┘
                                                │
┌───────────────────────────────────────────────▼────────┐
│                    API Route (/api)                    │
│  1. Reads filesystem (src/templates/template-X)        │
│  2. Zips files using JSZip                             │
│  3. Streams as application/zip                         │
└────────────────────────────────────────────────────────┘
```

### Design Principles

1. **Self-Contained Templates:** Each template folder (`src/templates/template-X`) holds its own `login.tsx`, `signup.tsx`, and `index.ts`. It knows nothing about the rest of the app, making it trivially easy to copy and paste into another project.
2. **Config-Driven Routing:** Adding a new template requires exactly two steps: create the folder, and add one object to `src/config/templates.ts`.
3. **No Database:** The app is entirely stateless. The download API reads directly from the filesystem at runtime.

---

## Available Templates

| ID | Name | Description |
| :--- | :--- | :--- |
| `template-1` | **Minimal SaaS** | Clean, split-screen B2B layout with social auth buttons and floating labels. |
| `template-2` | **Glassmorphism** | Frosted glass cards, animated background orbs, and neon accents. |
| `template-3` | **Neo-Brutalist** | Thick black borders, hard drop shadows, and aggressive yellow/cyan color palettes. |
| `template-4` | **Cyberpunk Terminal** | Pitch-black background, neon green monospace text, and terminal-style UI elements. |
| `template-5` | **Neumorphism** | Soft UI with extruded/inset shadows and a tactile, pastel aesthetic. |
| `template-6` | **Bento Grid** | Modern Apple-style cards with oversized rounded corners and generous whitespace. |
| `template-7` | **Brutalist Pastel** | Playful pastel colors mixed with heavy black borders and retro typography. |
| `template-8` | **Skeuomorphism** | Realistic 3D elements, glossy buttons, and inset metallic shadows. |

---

## Quick Start

**Prerequisites:** Node.js 20.19+ and npm.

```bash
git clone https://github.com/shaurya-10000/auth-ui-showcase.git
cd auth-ui-showcase
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the carousel and download any template.

---

## Project Structure

```text
.
├── src/
│   ├── app/
│   │   ├── api/download/[template]/route.ts  # Zip generation API
│   │   ├── login/[template]/page.tsx         # Dynamic login route
│   │   ├── signup/[template]/page.tsx        # Dynamic signup route
│   │   ├── page.tsx                          # Main carousel page
│   │   └── layout.tsx                        # Root layout
│   ├── components/
│   │   └── Header.tsx                        # Global navigation
│   ├── config/
│   │   └── templates.ts                      # Master registry of all templates
│   └── templates/
│       ├── template-1/
│       │   ├── login.tsx
│       │   ├── signup.tsx
│       │   └── index.ts
│       ├── template-2/
│       └── ... (template-3 through template-8)
├── public/
├── package.json
└── next.config.ts
```

---

## How the Code Download Works

The `Code` button on the home page triggers a `GET` request to `/api/download/[template]`.

1. **Validation:** The API route checks that the requested template ID matches the regex `^template-\d+$` to prevent directory traversal attacks.
2. **File Reading:** It uses `fs.readFile` to grab the `login.tsx`, `signup.tsx`, and `index.ts` files from `src/templates/`.
3. **Zipping:** It uses `JSZip` to create a virtual folder containing the files and generate a compressed buffer.
4. **Streaming:** The buffer is cast to a `Blob` and returned with the `Content-Disposition: attachment` header, forcing the browser to download the `.zip`.

This approach requires zero database tables, zero external API calls, and works on any Node.js host (including Vercel).

---

## Scripts

| Command | Purpose |
| :--- | :--- |
| `npm run dev` | Start the development server with Turbopack |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

Pre-flight check before pushing:
```bash
npm run lint && npm run build
```

---

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com).

1. Push the repository to GitHub.
2. Import the project into Vercel.
3. The default settings (Next.js framework preset, `npm run build` command) will work out of the box.
4. No environment variables are required.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fshaurya-10000%2Fauth-ui-showcase)

---

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.

<div align="center">

**Auth UI Showcase** · built by [@shaurya-10000](https://github.com/shaurya-10000)

</div>
