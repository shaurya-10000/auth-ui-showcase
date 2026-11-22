import type { CSSProperties } from "react";

const mix = (color: string, percent: number, base: string): string =>
  `color-mix(in srgb, ${color} ${percent}%, ${base})`;

/** CSS variables derived from the accent color. The classes below read these. */
export function brandVars(accent: string): CSSProperties {
  return {
    "--brand": accent,
    "--brand-soft": mix(accent, 75, "white"),
    "--brand-softer": mix(accent, 55, "white"),
    "--brand-strong": mix(accent, 85, "black"),
    "--brand-stronger": mix(accent, 70, "black"),
    "--brand-ring": mix(accent, 50, "transparent"),
    "--brand-glow": mix(accent, 40, "transparent"),
  } as CSSProperties;
}

/** Class names shared by the login and sign-up pages. */
export function themeClasses(isDark: boolean) {
  return {
    page: isDark ? "bg-neutral-950" : "bg-slate-50",
    toggle: `fixed top-6 right-6 z-50 p-2.5 rounded-full shadow-lg transition-all duration-300 ${isDark ? "bg-white/10 hover:bg-white/20 text-yellow-400 border border-white/10" : "bg-white hover:bg-slate-100 text-slate-800 border border-slate-200"}`,
    card: `relative z-10 w-full max-w-md p-8 sm:p-10 backdrop-blur-2xl rounded-3xl transition-all duration-500 ${isDark ? "bg-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]" : "bg-white/40 border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]"}`,
    heading: `text-3xl font-bold tracking-tight mb-2 transition-colors ${isDark ? "text-white" : "text-slate-800"}`,
    subtitle: `text-sm transition-colors ${isDark ? "text-neutral-300" : "text-slate-600"}`,
    fieldLabel: `block text-sm font-medium mb-2 transition-colors ${isDark ? "text-neutral-200" : "text-slate-700"}`,
    input: `w-full border rounded-xl px-4 py-3 placeholder-neutral-500 focus:outline-none focus:ring-2 transition-all ${isDark ? "bg-white/5 border-white/10 text-white focus:ring-[var(--brand-ring)]" : "bg-white/50 border-slate-300 text-slate-900 focus:ring-[var(--brand-ring)]"}`,
    eye: `absolute right-4 top-1/2 -translate-y-1/2 transition-colors focus:outline-none ${isDark ? "text-neutral-400 hover:text-white" : "text-slate-500 hover:text-slate-800"}`,
    checkbox: `rounded focus:ring-offset-0 ${isDark ? "border-white/10 bg-white/5 text-[var(--brand)]" : "border-slate-300 bg-white text-[var(--brand-strong)]"}`,
    checkboxLabel: `transition-colors ${isDark ? "text-neutral-300" : "text-slate-600"}`,
    link: `font-medium transition-colors ${isDark ? "text-[var(--brand-soft)] hover:text-[var(--brand-softer)]" : "text-[var(--brand-strong)] hover:text-[var(--brand-stronger)]"}`,
    submitBase: "w-full flex justify-center items-center gap-2 font-semibold py-3 rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed",
    submitLogin: isDark
      ? "bg-[var(--brand)] hover:bg-[var(--brand-soft)] text-white shadow-[0_0_20px_var(--brand-glow)]"
      : "bg-[var(--brand-strong)] hover:bg-[var(--brand-stronger)] text-white shadow-[0_4px_14px_0_var(--brand-glow)]",
    submitSignup: isDark
      ? "bg-white hover:bg-neutral-200 text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]"
      : "bg-[var(--brand-strong)] hover:bg-[var(--brand-stronger)] text-white shadow-[0_4px_14px_0_var(--brand-glow)]",
    footer: `mt-8 text-center text-sm transition-colors ${isDark ? "text-neutral-400" : "text-slate-500"}`,
  };
}
