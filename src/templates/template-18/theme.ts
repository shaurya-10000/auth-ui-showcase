import type { CSSProperties } from "react";

const mix = (color: string, percent: number, base: string): string =>
  `color-mix(in srgb, ${color} ${percent}%, ${base})`;

/** CSS variables derived from the accent color. The classes below read these. */
export function brandVars(accent: string): CSSProperties {
  return {
    "--brand": accent,
    "--brand-soft": mix(accent, 75, "white"),
    "--brand-strong": mix(accent, 85, "black"),
  } as CSSProperties;
}

/** Class names shared by the login and sign-up pages. */
export function themeClasses(isDark: boolean) {
  return {
    page: `min-h-screen flex items-center justify-center p-4 font-sans transition-colors duration-300 ${isDark ? "bg-zinc-950 text-zinc-50" : "bg-zinc-50 text-zinc-950"}`,
    toggle: `fixed top-6 right-6 z-50 p-2.5 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 ${isDark ? "bg-zinc-900 text-zinc-200 border border-zinc-800 hover:border-zinc-700" : "bg-white text-zinc-800 border border-zinc-200 shadow-xs hover:border-zinc-300"}`,
    card: `w-full max-w-md rounded-2xl p-8 transition-colors duration-300 ${isDark ? "bg-zinc-900/80 border border-zinc-800" : "bg-white border border-zinc-200/90 shadow-xs"}`,
    heading: "text-3xl font-semibold tracking-tight mb-1.5",
    subtitle: `text-sm ${isDark ? "text-zinc-400" : "text-zinc-600"}`,
    fieldLabel: `block text-xs font-medium uppercase tracking-wider mb-1.5 ${isDark ? "text-zinc-300" : "text-zinc-700"}`,
    input: `w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 focus:ring-2 ${isDark ? "bg-zinc-950 text-white placeholder-zinc-500 border border-zinc-800 focus:border-zinc-500 focus:ring-zinc-700/40" : "bg-zinc-50/70 text-zinc-950 placeholder-zinc-400 border border-zinc-200 focus:bg-white focus:border-[var(--brand)] focus:ring-[var(--brand)]/15"}`,
    checkbox: "w-4 h-4 rounded accent-[var(--brand)] cursor-pointer",
    checkboxLabel: `flex items-center gap-2 cursor-pointer text-xs ${isDark ? "text-zinc-300" : "text-zinc-600"}`,
    link: `text-xs font-medium hover:underline ${isDark ? "text-zinc-200" : "text-zinc-900"}`,
    submit: `w-full py-3 rounded-xl font-medium text-sm transition-all duration-200 active:scale-[0.99] disabled:opacity-60 ${isDark ? "bg-white text-zinc-950 hover:bg-zinc-200" : "bg-[var(--brand)] text-white hover:bg-[var(--brand-strong)]"}`,
    footer: `mt-7 pt-5 border-t text-center text-xs ${isDark ? "border-zinc-800 text-zinc-400" : "border-zinc-100 text-zinc-600"}`,
    footerLink: `font-medium underline underline-offset-4 ${isDark ? "text-zinc-200 hover:text-white" : "text-zinc-950 hover:text-zinc-700"}`,
  };
}
