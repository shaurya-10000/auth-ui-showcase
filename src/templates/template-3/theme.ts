import type { CSSProperties } from "react";

const mix = (color: string, percent: number, base: string): string =>
  `color-mix(in srgb, ${color} ${percent}%, ${base})`;

/** CSS variables derived from the page color. The classes below read these. */
export function brandVars(accent: string): CSSProperties {
  return {
    "--brand": accent,
    "--brand-tint": mix(accent, 20, "white"),
  } as CSSProperties;
}

/** Class names shared by the login and sign-up pages. */
export function themeClasses(isDark: boolean) {
  return {
    page: isDark ? "bg-neutral-950" : "bg-[var(--brand)]",
    toggle: `fixed top-6 right-6 z-50 p-2.5 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 active:translate-x-1 active:translate-y-1 active:shadow-none ${isDark ? "bg-white text-black hover:bg-gray-200" : "bg-white text-black hover:bg-gray-100"}`,
    card: `w-full p-8 border-4 transition-all duration-300 ${isDark ? "bg-neutral-900 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] text-white" : "bg-white border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black"}`,
    rule: isDark ? "border-white" : "border-black",
    input: `w-full px-4 py-3 font-bold focus:outline-none border-4 transition-colors placeholder-neutral-400 ${isDark ? "bg-black border-white text-white focus:bg-neutral-800" : "bg-white border-black text-black focus:bg-[var(--brand-tint)]"}`,
    checkbox: `w-6 h-6 border-4 rounded-none transition-colors accent-black ${isDark ? "border-white" : "border-black"}`,
    submitBase: "w-full font-black text-xl uppercase py-4 border-4 transition-all active:translate-x-1 active:translate-y-1 active:shadow-none disabled:opacity-50",
    submitLogin: isDark
      ? "bg-white text-black border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:bg-neutral-200"
      : "bg-black text-white border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[var(--brand)] hover:text-black",
    submitSignup: isDark
      ? "bg-white text-black border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:bg-[var(--brand)]"
      : "bg-black text-white border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[var(--brand)] hover:text-black",
    linkButton: `font-black underline decoration-4 underline-offset-4 px-2 py-1 transition-colors ${isDark ? "hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"}`,
    termsLink: `underline decoration-4 underline-offset-2 transition-colors ${isDark ? "text-cyan-400" : "text-blue-700"}`,
  };
}
