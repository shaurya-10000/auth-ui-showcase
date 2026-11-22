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
    page: `min-h-screen flex items-center justify-center p-4 md:p-8 font-sans transition-colors duration-500 ${isDark ? "bg-[#0f0f11]" : "bg-[#f5f5f7]"}`,
    toggle: `fixed top-6 right-6 z-50 p-2.5 rounded-full transition-all duration-300 ${isDark ? "bg-[#1c1c1e] text-yellow-400 hover:bg-[#2c2c2e]" : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm border border-black/5"}`,
    grid: "w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6",
    leftLoginCard: `rounded-[2rem] p-10 flex flex-col justify-between transition-colors duration-500 min-h-[400px] ${isDark ? "bg-[#1c1c1e] border border-white/5" : "bg-white border border-black/5 shadow-sm"}`,
    leftSignupCard: `rounded-[2rem] p-10 flex flex-col justify-between transition-colors duration-500 min-h-[400px] ${isDark ? "bg-black border border-white/5" : "bg-black shadow-sm"}`,
    formCard: `rounded-[2rem] p-10 flex flex-col justify-center transition-colors duration-500 ${isDark ? "bg-[#1c1c1e] border border-white/5" : "bg-white border border-black/5 shadow-sm"}`,
    leftHeading: `text-4xl font-semibold tracking-tight mb-4 leading-tight transition-colors ${isDark ? "text-white" : "text-gray-900"}`,
    leftSubheadline: `text-lg max-w-sm transition-colors ${isDark ? "text-gray-400" : "text-gray-500"}`,
    trustText: `text-sm font-medium transition-colors ${isDark ? "text-gray-300" : "text-gray-600"}`,
    avatarBorder: isDark ? "border-[#1c1c1e]" : "border-white",
    heading: `text-2xl font-semibold mb-8 transition-colors ${isDark ? "text-white" : "text-gray-900"}`,
    fieldLabel: `block text-sm font-medium mb-1.5 transition-colors ${isDark ? "text-gray-300" : "text-gray-700"}`,
    input: `w-full rounded-xl px-4 py-3 focus:outline-none focus:ring-2 transition-all placeholder-gray-400 ${isDark ? "bg-[#2c2c2e] text-white focus:ring-[var(--brand-soft)]/30" : "bg-[#f5f5f7] text-gray-900 focus:ring-[var(--brand)]/20"}`,
    checkbox: `rounded focus:ring-0 ${isDark ? "border-gray-600 bg-[#2c2c2e] text-[var(--brand-soft)]" : "border-gray-300 text-[var(--brand)]"}`,
    checkboxLabel: `flex items-center gap-2 cursor-pointer text-sm transition-colors ${isDark ? "text-gray-400" : "text-gray-600"}`,
    forgotLink: `text-sm font-medium hover:underline transition-colors ${isDark ? "text-white" : "text-gray-900"}`,
    submit: "w-full font-medium rounded-xl py-3 transition-all flex items-center justify-center gap-2 disabled:opacity-70 bg-[var(--brand)] text-white hover:bg-[var(--brand-soft)] hover:text-slate-950",
    footer: `mt-8 text-center text-sm transition-colors ${isDark ? "text-gray-400" : "text-gray-500"}`,
    footerLink: `font-medium hover:underline transition-colors ${isDark ? "text-white" : "text-black"}`,
  };
}
