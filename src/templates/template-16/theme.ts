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
    page: `min-h-screen flex items-center justify-center p-4 font-sans transition-colors duration-300 ${isDark ? "bg-[#090b1a] text-indigo-50" : "bg-gradient-to-br from-[#eef2ff] via-[#f8faff] to-[#e0e7ff] text-slate-950"}`,
    toggle: `fixed top-6 right-6 z-50 p-2.5 rounded-2xl transition-all ${isDark ? "bg-[#121633] text-amber-300 border border-indigo-800/60 hover:bg-[#191f47]" : "bg-white text-indigo-950 border border-indigo-200/80 shadow-sm hover:bg-indigo-50"}`,
    card: `w-full max-w-md rounded-3xl p-8 transition-all duration-300 ${isDark ? "bg-[#10142e]/95 border border-indigo-800/50 shadow-[0_24px_60px_rgba(0,0,0,0.6)]" : "bg-white/95 border border-indigo-200/80 shadow-[0_24px_60px_rgba(67,56,202,0.12)]"}`,
    heading: "text-3xl font-bold tracking-tight mb-1.5",
    subtitle: `text-sm ${isDark ? "text-indigo-200/75" : "text-slate-600"}`,
    fieldLabel: `block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? "text-indigo-200" : "text-indigo-950"}`,
    input: `w-full rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${isDark ? "bg-[#090b1a] text-white placeholder-indigo-400/50 border border-indigo-800/60 focus:ring-[var(--brand)]/50 focus:border-[var(--brand-soft)]" : "bg-[#f8faff] text-slate-950 placeholder-slate-400 border border-indigo-200/90 focus:ring-[var(--brand)]/30 focus:border-[var(--brand)]"}`,
    checkbox: "w-4 h-4 rounded accent-[var(--brand)] cursor-pointer",
    checkboxLabel: `flex items-center gap-2 cursor-pointer text-xs ${isDark ? "text-indigo-200/80" : "text-slate-600"}`,
    link: `text-xs font-semibold hover:underline ${isDark ? "text-[var(--brand-soft)]" : "text-[var(--brand)]"}`,
    submit: "w-full py-3 rounded-2xl font-semibold text-sm text-white bg-[var(--brand)] hover:bg-[var(--brand-strong)] shadow-sm transition-colors disabled:opacity-60",
    footer: `mt-7 pt-5 border-t text-center text-xs ${isDark ? "border-indigo-900/60 text-indigo-300/70" : "border-indigo-100 text-slate-600"}`,
    footerLink: `font-semibold hover:underline ${isDark ? "text-[var(--brand-soft)]" : "text-[var(--brand)]"}`,
  };
}
