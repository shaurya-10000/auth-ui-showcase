import type { CSSProperties } from "react";

const mix = (color: string, percent: number, base: string): string =>
  `color-mix(in srgb, ${color} ${percent}%, ${base})`;

/** CSS variables derived from the accent color. The classes below read these. */
export function brandVars(accent: string): CSSProperties {
  return {
    "--brand": accent,
    "--brand-soft": mix(accent, 75, "white"),
    "--brand-strong": mix(accent, 85, "black"),
    "--brand-ring": mix(accent, 45, "transparent"),
  } as CSSProperties;
}

/** Class names shared by the login and sign-up pages. */
export function themeClasses(isDark: boolean) {
  return {
    page: `min-h-screen flex items-center justify-center p-4 font-sans transition-colors duration-500 ${isDark ? "bg-[#2d3748]" : "bg-[#e0e5ec]"}`,
    toggle: `fixed top-6 right-6 z-50 p-2.5 rounded-full transition-all duration-300 ${isDark ? "bg-[#2d3748] text-[var(--brand-soft)] shadow-[4px_4px_8px_#1a202c,-4px_-4px_8px_#4a5568]" : "bg-[#e0e5ec] text-[var(--brand)] shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff]"}`,
    card: `w-full max-w-md rounded-3xl p-8 transition-all duration-500 ${isDark ? "bg-[#2d3748] shadow-[8px_8px_16px_#1a202c,-8px_-8px_16px_#4a5568]" : "bg-[#e0e5ec] shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff]"}`,
    heading: `text-3xl font-bold mb-2 transition-colors ${isDark ? "text-slate-200" : "text-slate-700"}`,
    subtitle: `text-sm transition-colors ${isDark ? "text-slate-400" : "text-slate-500"}`,
    fieldLabel: `block text-sm font-semibold mb-2 ml-1 transition-colors ${isDark ? "text-slate-300" : "text-slate-600"}`,
    input: `w-full rounded-xl px-4 py-3 focus:outline-none transition-colors placeholder-slate-400 ${isDark ? "bg-[#2d3748] text-slate-200 shadow-[inset_4px_4px_8px_#1a202c,inset_-4px_-4px_8px_#4a5568]" : "bg-[#e0e5ec] text-slate-700 shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff]"}`,
    checkbox: `rounded focus:ring-0 ${isDark ? "bg-[#2d3748] shadow-[inset_2px_2px_4px_#1a202c,inset_-2px_-2px_4px_#4a5568] text-[var(--brand-soft)]" : "bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff] text-[var(--brand)]"}`,
    checkboxLabel: `flex items-center gap-2 cursor-pointer text-sm transition-colors ${isDark ? "text-slate-300" : "text-slate-600"}`,
    link: `font-semibold transition-colors ${isDark ? "text-[var(--brand-soft)] hover:brightness-110" : "text-[var(--brand)] hover:text-[var(--brand-strong)]"}`,
    submit: `w-full font-bold text-lg rounded-xl py-3 transition-all disabled:opacity-70 ${isDark ? "bg-[#2d3748] text-[var(--brand-soft)] shadow-[6px_6px_12px_#1a202c,-6px_-6px_12px_#4a5568] active:shadow-[inset_4px_4px_8px_#1a202c,inset_-4px_-4px_8px_#4a5568]" : "bg-[#e0e5ec] text-[var(--brand)] shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff]"}`,
    footer: `mt-8 text-center text-sm transition-colors ${isDark ? "text-slate-400" : "text-slate-500"}`,
  };
}
