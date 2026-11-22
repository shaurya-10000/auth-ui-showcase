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
    page: `min-h-screen flex items-center justify-center p-4 md:p-8 font-sans transition-colors duration-300 ${isDark ? "bg-[#0d0d0d] text-white" : "bg-[#f2f2f0] text-neutral-950"}`,
    toggle: `fixed top-6 right-6 z-50 px-3 py-2 text-xs font-bold uppercase tracking-widest border transition-colors ${isDark ? "bg-[#171717] text-white border-neutral-700 hover:border-white" : "bg-white text-neutral-950 border-neutral-950 hover:bg-neutral-100"}`,
    frame: `w-full max-w-4xl border transition-colors duration-300 ${isDark ? "bg-[#141414] border-neutral-800" : "bg-white border-neutral-950"}`,
    grid: `grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x ${isDark ? "divide-neutral-800" : "divide-neutral-950"}`,
    metaCol: "md:col-span-5 p-6 md:p-8 flex flex-col justify-between",
    formCol: "md:col-span-7 p-6 md:p-8",
    indexTag: "text-xs font-mono uppercase tracking-[0.2em] text-[var(--brand)]",
    heading: "text-3xl md:text-4xl font-bold tracking-tight mt-3 mb-2",
    subtitle: `text-sm leading-relaxed ${isDark ? "text-neutral-400" : "text-neutral-600"}`,
    fieldIndex: `text-xs font-mono ${isDark ? "text-neutral-500" : "text-neutral-500"}`,
    fieldLabel: "block text-xs font-bold uppercase tracking-wider mb-1.5",
    input: `w-full px-3.5 py-2.5 text-sm border focus:outline-none transition-colors ${isDark ? "bg-[#0d0d0d] text-white placeholder-neutral-600 border-neutral-700 focus:border-[var(--brand-soft)]" : "bg-[#fafaf9] text-neutral-950 placeholder-neutral-400 border-neutral-950 focus:border-[var(--brand)]"}`,
    checkbox: "w-4 h-4 accent-[var(--brand)] cursor-pointer",
    checkboxLabel: `flex items-center gap-2 cursor-pointer text-xs font-medium ${isDark ? "text-neutral-300" : "text-neutral-700"}`,
    link: "text-xs font-bold uppercase tracking-wider underline underline-offset-4 text-[var(--brand)]",
    submit: "w-full py-3 px-5 text-xs font-bold uppercase tracking-[0.18em] text-white bg-[var(--brand)] hover:bg-[var(--brand-strong)] transition-colors disabled:opacity-60",
    footer: `mt-6 pt-5 border-t flex items-center justify-between text-xs ${isDark ? "border-neutral-800 text-neutral-400" : "border-neutral-200 text-neutral-600"}`,
    footerLink: "font-bold uppercase tracking-wider underline underline-offset-4 text-[var(--brand)]",
  };
}
