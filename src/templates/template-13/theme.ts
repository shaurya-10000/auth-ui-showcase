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
    page: `min-h-screen flex items-center justify-center p-4 font-sans transition-colors duration-300 ${isDark ? "bg-[#0b131e] text-slate-100" : "bg-gradient-to-b from-[#edf4f8] via-[#f6f9fb] to-[#e6eff5] text-slate-900"}`,
    toggle: `fixed top-6 right-6 z-50 p-2.5 rounded-2xl transition-all ${isDark ? "bg-[#122031] text-sky-300 border border-sky-900/60 hover:bg-[#182a40]" : "bg-white/90 text-slate-700 border border-sky-200/80 shadow-sm hover:bg-white"}`,
    card: `w-full max-w-md rounded-3xl p-8 transition-all duration-300 ${isDark ? "bg-[#101c2b]/90 border border-sky-900/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" : "bg-white/85 backdrop-blur-md border border-sky-200/70 shadow-[0_20px_50px_rgba(14,116,144,0.08)]"}`,
    heading: "text-3xl font-semibold tracking-tight mb-1.5",
    subtitle: `text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`,
    fieldLabel: `block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? "text-slate-300" : "text-slate-700"}`,
    input: `w-full rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${isDark ? "bg-[#0b131e] text-white placeholder-slate-500 border border-sky-900/60 focus:ring-[var(--brand)]/40 focus:border-[var(--brand-soft)]" : "bg-[#f8fbfd] text-slate-900 placeholder-slate-400 border border-sky-200/90 focus:ring-[var(--brand)]/30 focus:border-[var(--brand)]"}`,
    checkbox: "w-4 h-4 rounded accent-[var(--brand)] cursor-pointer",
    checkboxLabel: `flex items-center gap-2 cursor-pointer text-xs ${isDark ? "text-slate-300" : "text-slate-600"}`,
    link: `text-xs font-semibold hover:underline ${isDark ? "text-[var(--brand-soft)]" : "text-[var(--brand)]"}`,
    submit: "w-full py-3 rounded-2xl font-semibold text-sm text-white bg-[var(--brand)] hover:bg-[var(--brand-strong)] shadow-sm transition-colors disabled:opacity-60",
    footer: `mt-7 pt-5 border-t text-center text-xs ${isDark ? "border-sky-900/50 text-slate-400" : "border-sky-100 text-slate-600"}`,
    footerLink: `font-semibold hover:underline ${isDark ? "text-[var(--brand-soft)]" : "text-[var(--brand)]"}`,
  };
}
