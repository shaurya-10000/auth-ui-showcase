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
    page: `min-h-screen grid grid-cols-1 lg:grid-cols-2 font-sans transition-colors duration-300 ${isDark ? "bg-[#090b10] text-slate-100" : "bg-slate-50 text-slate-900"}`,
    toggle: `fixed top-6 right-6 z-50 p-2.5 rounded-xl transition-all ${isDark ? "bg-slate-900 text-amber-300 border border-slate-800 hover:bg-slate-800" : "bg-white text-slate-700 border border-slate-200 shadow-sm hover:bg-slate-100"}`,
    leftPanel: "hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-[#06080d] via-[#0e1324] to-[#171c36] text-white border-r border-white/10",
    pill: "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-[var(--brand-soft)] border border-white/10 w-fit",
    heroTitle: "text-4xl font-bold tracking-tight leading-tight mt-6 mb-4",
    heroCopy: "text-slate-300 text-base max-w-md leading-relaxed",
    heroFooter: "text-xs text-slate-400",
    rightPanel: "flex items-center justify-center p-6 sm:p-10",
    formCard: "w-full max-w-md",
    heading: "text-3xl font-bold tracking-tight mb-1.5",
    subtitle: `text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`,
    fieldLabel: `block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? "text-slate-300" : "text-slate-700"}`,
    input: `w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${isDark ? "bg-slate-900 text-white placeholder-slate-500 border border-slate-800 focus:ring-[var(--brand)]/50 focus:border-[var(--brand)]" : "bg-white text-slate-900 placeholder-slate-400 border border-slate-300 focus:ring-[var(--brand)]/30 focus:border-[var(--brand)]"}`,
    checkbox: "w-4 h-4 rounded accent-[var(--brand)] cursor-pointer",
    checkboxLabel: `flex items-center gap-2 cursor-pointer text-xs ${isDark ? "text-slate-300" : "text-slate-600"}`,
    link: `text-xs font-semibold hover:underline ${isDark ? "text-[var(--brand-soft)]" : "text-[var(--brand-strong)]"}`,
    submit: "w-full py-3 rounded-xl font-semibold text-sm text-slate-950 bg-[var(--brand)] hover:bg-[var(--brand-soft)] transition-colors disabled:opacity-60",
    footer: `mt-7 pt-5 border-t text-center text-xs ${isDark ? "border-slate-800 text-slate-400" : "border-slate-200 text-slate-600"}`,
    footerLink: `font-semibold hover:underline ${isDark ? "text-[var(--brand-soft)]" : "text-[var(--brand-strong)]"}`,
  };
}
