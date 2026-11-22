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
    page: `relative min-h-screen overflow-hidden flex items-center justify-center p-4 font-sans transition-colors duration-500 ${isDark ? "bg-[#070b14] text-white" : "bg-[#f4f7fb] text-slate-900"}`,
    toggle: `fixed top-6 right-6 z-50 p-2.5 rounded-full backdrop-blur-md transition-all ${isDark ? "bg-white/10 text-amber-300 border border-white/15 hover:bg-white/15" : "bg-white/80 text-slate-700 border border-slate-200/80 shadow-sm hover:bg-white"}`,
    orbPrimary: isDark ? "bg-[var(--brand)]/25" : "bg-[var(--brand)]/30",
    orbSecondary: isDark ? "bg-fuchsia-500/20" : "bg-fuchsia-400/25",
    orbTertiary: isDark ? "bg-emerald-400/15" : "bg-emerald-300/25",
    card: `relative z-10 w-full max-w-md rounded-3xl p-8 backdrop-blur-xl transition-all duration-300 ${isDark ? "bg-slate-900/65 border border-white/12 shadow-[0_25px_70px_rgba(0,0,0,0.65)]" : "bg-white/75 border border-white/80 shadow-[0_25px_70px_rgba(15,23,42,0.12)]"}`,
    heading: "text-3xl font-bold tracking-tight mb-1.5",
    subtitle: `text-sm ${isDark ? "text-slate-300/80" : "text-slate-600"}`,
    fieldLabel: `block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? "text-slate-300" : "text-slate-700"}`,
    input: `w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${isDark ? "bg-white/5 text-white placeholder-slate-400 border border-white/10 focus:ring-[var(--brand)]/50 focus:border-[var(--brand-soft)]" : "bg-white/80 text-slate-900 placeholder-slate-400 border border-slate-200/90 focus:ring-[var(--brand)]/40 focus:border-[var(--brand)]"}`,
    checkbox: "w-4 h-4 rounded accent-[var(--brand)] cursor-pointer",
    checkboxLabel: `flex items-center gap-2 cursor-pointer text-xs ${isDark ? "text-slate-300" : "text-slate-600"}`,
    link: `text-xs font-semibold hover:underline ${isDark ? "text-[var(--brand-soft)]" : "text-[var(--brand-strong)]"}`,
    submit: "w-full py-3 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-[var(--brand-soft)] via-[var(--brand)] to-fuchsia-300 shadow-lg hover:brightness-105 active:scale-[0.99] transition-all disabled:opacity-60",
    footer: `mt-7 pt-5 border-t text-center text-xs ${isDark ? "border-white/10 text-slate-400" : "border-slate-200/80 text-slate-600"}`,
    footerLink: `font-semibold hover:underline ${isDark ? "text-[var(--brand-soft)]" : "text-[var(--brand-strong)]"}`,
  };
}
