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
    page: `min-h-screen flex items-center justify-center p-6 font-serif transition-colors duration-300 ${isDark ? "bg-[#141210] text-[#f3efe8]" : "bg-[#fbf8f3] text-[#1c1917]"}`,
    toggle: `fixed top-6 right-6 z-50 px-3.5 py-2 text-xs tracking-wide border transition-colors ${isDark ? "bg-[#1e1b18] text-[#e7e0d5] border-[#3a342e] hover:bg-[#292521]" : "bg-white text-[#292524] border-[#d6cfc2] hover:bg-[#f4efe6]"}`,
    column: "w-full max-w-md",
    headerBorder: `pb-6 mb-8 border-b ${isDark ? "border-[#2e2924]" : "border-[#e2dad0]"}`,
    kicker: `text-[11px] uppercase tracking-[0.2em] mb-3 ${isDark ? "text-[var(--brand-soft)]" : "text-[var(--brand)]"}`,
    heading: "text-4xl font-normal tracking-tight leading-tight mb-3",
    subtitle: `text-base leading-relaxed ${isDark ? "text-[#b8b0a4]" : "text-[#57534e]"}`,
    fieldLabel: `block text-xs uppercase tracking-[0.14em] mb-2 ${isDark ? "text-[#d6cfc2]" : "text-[#44403c]"}`,
    input: `w-full px-0 py-2.5 text-base bg-transparent border-b focus:outline-none transition-colors ${isDark ? "border-[#443d36] text-[#f5f0e8] placeholder-[#6e665c] focus:border-[var(--brand-soft)]" : "border-[#c8bfb2] text-[#1c1917] placeholder-[#a8a29e] focus:border-[var(--brand)]"}`,
    checkbox: "w-4 h-4 rounded-none accent-[var(--brand)] cursor-pointer",
    checkboxLabel: `flex items-center gap-2.5 cursor-pointer text-sm ${isDark ? "text-[#c7bfb2]" : "text-[#57534e]"}`,
    link: `text-sm underline underline-offset-4 transition-colors ${isDark ? "text-[var(--brand-soft)] hover:text-white" : "text-[var(--brand)] hover:text-[var(--brand-strong)]"}`,
    submit: "w-full py-3.5 px-6 text-base tracking-wide text-white bg-[var(--brand)] hover:bg-[var(--brand-strong)] transition-colors disabled:opacity-60",
    footer: `mt-8 pt-6 border-t text-center text-sm ${isDark ? "border-[#2e2924] text-[#a8a095]" : "border-[#e2dad0] text-[#78716c]"}`,
    footerLink: `underline underline-offset-4 font-medium ${isDark ? "text-[#f5f0e8]" : "text-[#1c1917]"}`,
  };
}
