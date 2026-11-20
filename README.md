# Auth UI Showcase

A curated gallery of distinct, fully responsive login and signup UI templates. Built to showcase modern frontend architecture, accessible design, and interactive states.

## 🚀 Live Demo
[https://auth-ui-showcase-rho.vercel.app](https://auth-ui-showcase-rho.vercel.app)

## ✨ Features
- **Multiple Templates:** A variety of distinct authentication designs (Minimal, Glassmorphism, Neo-Brutalist, etc.).
- **Interactive Gallery:** A carousel and grid view to browse all available templates.
- **Real Interactions:** Fully functional UI states including form validation, password strength meters, loading states, and success/error handling.
- **Accessibility First:** Keyboard navigation, ARIA labels, and proper focus states.
- **Modern Stack:** Built with Next.js (App Router), React, TypeScript, and Tailwind CSS.

## 🛠️ Tech Stack
- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **CI/CD:** GitHub Actions (Linting & Build checking)
- **Deployment:** Vercel

## 📂 Project Structure
```text
src/
├── app/               # Next.js App Router pages and layouts
├── components/        # Shared UI components (Buttons, Inputs, etc.)
├── templates/         # Self-contained template folders
│   ├── minimal/       # Each folder contains its own Login, Signup, and styles
│   ├── glassmorphism/
│   └── neo-brutalist/
└── config/            # Template registry for the gallery
```

## 🏃‍♂️ Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shaurya-10000/auth-ui-showcase.git
   ```
2. **Navigate to the directory:**
   ```bash
   cd auth-ui-showcase
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Run the development server:**
   ```bash
   npm run dev
   ```
5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the gallery.

## 📝 License
This project is licensed under the MIT License.
