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
    page: `min-h-screen flex items-center justify-center p-4 font-sans transition-colors duration-300 ${isDark ? "bg-[#1a1a24]" : "bg-[#fff5f5]"}`,
    toggle: `fixed top-6 right-6 z-50 p-3 border-2 border-black font-bold transition-transform hover:-translate-y-0.5 active:translate-y-0 ${isDark ? "bg-[#2a2a38] text-[#ffd166] shadow-[4px_4px_0px_#000000]" : "bg-[#a8dadc] text-black shadow-[4px_4px_0px_#000000]"}`,
    card: `w-full max-w-md border-4 border-black p-8 transition-colors duration-300 ${isDark ? "bg-[#23232f] text-white shadow-[10px_10px_0px_#000000]" : "bg-white text-black shadow-[10px_10px_0px_#000000]"}`,
    badge: "inline-block border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-wider mb-3 shadow-[3px_3px_0px_#000000] bg-[var(--brand)] text-black",
    heading: "text-4xl font-black tracking-tight mb-1",
    subtitle: `text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`,
    fieldLabel: "block text-xs font-black uppercase tracking-wider mb-2",
    input: `w-full border-2 border-black px-4 py-3 font-medium focus:outline-none focus:ring-0 transition-shadow ${isDark ? "bg-[#1a1a24] text-white placeholder-gray-500 focus:shadow-[4px_4px_0px_var(--brand)]" : "bg-[#fdf0d5] text-black placeholder-gray-500 focus:shadow-[4px_4px_0px_#000000]"}`,
    checkbox: "w-4 h-4 border-2 border-black rounded-none focus:ring-0 accent-black",
    checkboxLabel: "flex items-center gap-2 cursor-pointer text-xs font-bold uppercase",
    link: `text-xs font-black uppercase underline underline-offset-4 transition-colors ${isDark ? "text-[var(--brand)] hover:text-white" : "text-black hover:text-[#e63946]"}`,
    submit: "w-full border-2 border-black py-3.5 font-black uppercase tracking-wider text-sm shadow-[5px_5px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[4px_4px_0px_#000000] active:translate-x-[3px] active:translate-y-[3px] active:shadow-[2px_2px_0px_#000000] transition-all disabled:opacity-60 bg-[var(--brand)] text-black",
    footer: "mt-8 pt-6 border-t-2 border-black text-center text-xs font-bold uppercase",
    footerLink: `underline underline-offset-4 ${isDark ? "text-[#a8dadc]" : "text-[#e63946]"}`,
  };
}
