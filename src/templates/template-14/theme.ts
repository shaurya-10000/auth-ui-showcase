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
    page: `min-h-screen flex items-center justify-center p-4 font-sans transition-colors duration-300 ${isDark ? "bg-[#1a110d] text-[#f7ede6]" : "bg-[#fbf3ec] text-[#2c1810]"}`,
    toggle: `fixed top-6 right-6 z-50 p-2.5 rounded-2xl transition-all ${isDark ? "bg-[#291b15] text-amber-300 border border-[#472e24] hover:bg-[#34221b]" : "bg-white text-[#5c2c16] border border-[#ebd3c3] shadow-sm hover:bg-[#fffaf5]"}`,
    card: `w-full max-w-md rounded-3xl p-8 transition-all duration-300 ${isDark ? "bg-[#241813] border border-[#472e24] shadow-[0_20px_50px_rgba(0,0,0,0.55)]" : "bg-white border border-[#ead0be] shadow-[0_20px_50px_rgba(154,52,18,0.08)]"}`,
    heading: "text-3xl font-bold tracking-tight mb-1.5",
    subtitle: `text-sm ${isDark ? "text-[#d4b8a8]" : "text-[#7c4d36]"}`,
    fieldLabel: `block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? "text-[#e7cfc1]" : "text-[#5c2c16]"}`,
    input: `w-full rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${isDark ? "bg-[#1a110d] text-white placeholder-[#8c6b5a] border border-[#472e24] focus:ring-[var(--brand)]/50 focus:border-[var(--brand-soft)]" : "bg-[#fdf7f2] text-[#2c1810] placeholder-[#b58d78] border border-[#e3c4ae] focus:ring-[var(--brand)]/30 focus:border-[var(--brand)]"}`,
    checkbox: "w-4 h-4 rounded accent-[var(--brand)] cursor-pointer",
    checkboxLabel: `flex items-center gap-2 cursor-pointer text-xs ${isDark ? "text-[#d4b8a8]" : "text-[#6e432e]"}`,
    link: `text-xs font-semibold hover:underline ${isDark ? "text-[var(--brand-soft)]" : "text-[var(--brand)]"}`,
    submit: "w-full py-3 rounded-2xl font-semibold text-sm text-white bg-[var(--brand)] hover:bg-[var(--brand-strong)] shadow-sm transition-colors disabled:opacity-60",
    footer: `mt-7 pt-5 border-t text-center text-xs ${isDark ? "border-[#3b261e] text-[#b89684]" : "border-[#f0dfd3] text-[#85553e]"}`,
    footerLink: `font-semibold hover:underline ${isDark ? "text-[var(--brand-soft)]" : "text-[var(--brand)]"}`,
  };
}
