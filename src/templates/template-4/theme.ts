import type { CSSProperties } from "react";

const mix = (color: string, percent: number, base: string): string =>
  `color-mix(in srgb, ${color} ${percent}%, ${base})`;

/** CSS variables derived from the dark and light theme colors. The classes below read these. */
export function brandVars(accent: string, accentLight: string): CSSProperties {
  return {
    "--brand": accent,
    "--brand-soft": mix(accent, 60, "white"),
    "--brand-a10": mix(accent, 10, "transparent"),
    "--brand-a30": mix(accent, 30, "transparent"),
    "--brand-a50": mix(accent, 50, "transparent"),
    "--brand-a70": mix(accent, 70, "transparent"),
    "--ink": accentLight,
    "--ink-a10": mix(accentLight, 10, "transparent"),
    "--ink-a30": mix(accentLight, 30, "transparent"),
    "--ink-a50": mix(accentLight, 50, "transparent"),
    "--ink-a70": mix(accentLight, 70, "transparent"),
  } as CSSProperties;
}

/** Class names shared by the login and sign-up pages. */
export function themeClasses(isDark: boolean) {
  return {
    page: isDark ? "bg-black text-[var(--brand)]" : "bg-[#e8e4d8] text-[var(--ink)]",
    toggle: `fixed top-6 right-6 z-50 p-2.5 rounded-sm border transition-all duration-300 ${isDark ? "bg-black border-[var(--brand-a50)] text-[var(--brand)] hover:bg-[var(--brand-a10)]" : "bg-[#e8e4d8] border-[var(--ink-a50)] text-[var(--ink)] hover:bg-[var(--ink-a10)]"}`,
    card: `w-full border relative transition-colors duration-300 ${isDark ? "border-[var(--brand-a30)] bg-black" : "border-[var(--ink-a30)] bg-[#f4f1e8]"}`,
    cardGlow: isDark ? "shadow-[0_0_30px_var(--brand-a10)]" : "shadow-[0_0_30px_var(--ink-a10)]",
    titleBar: `flex items-center justify-between border-b px-4 py-2 transition-colors ${isDark ? "border-[var(--brand-a30)] bg-[var(--brand-a10)]" : "border-[var(--ink-a30)] bg-[var(--ink-a10)]"}`,
    dotDim: `w-2 h-2 rounded-full ${isDark ? "bg-[var(--brand-a50)]" : "bg-[var(--ink-a50)]"}`,
    dotBright: `w-2 h-2 rounded-full ${isDark ? "bg-[var(--brand)]" : "bg-[var(--ink)]"}`,
    subtitle: `text-xs mt-1 ${isDark ? "text-[var(--brand-a70)]" : "text-[var(--ink-a70)]"}`,
    input: `w-full border px-4 py-3 focus:outline-none focus:ring-1 transition-all ${isDark ? "bg-black border-[var(--brand-a50)] text-[var(--brand)] focus:border-[var(--brand)] focus:ring-[var(--brand)] placeholder:text-[var(--brand-a30)]" : "bg-[#e8e4d8] border-[var(--ink-a50)] text-[var(--ink)] focus:border-[var(--ink)] focus:ring-[var(--ink)] placeholder:text-[var(--ink-a30)]"}`,
    submit: `w-full font-bold uppercase tracking-widest py-3 border transition-all disabled:opacity-50 ${isDark ? "bg-[var(--brand-a10)] border-[var(--brand)] text-[var(--brand)] hover:bg-[var(--brand)] hover:text-black" : "bg-[var(--ink-a10)] border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[#e8e4d8]"}`,
    rule: isDark ? "border-[var(--brand-a30)]" : "border-[var(--ink-a30)]",
    link: `hover:underline underline-offset-4 ${isDark ? "hover:text-[var(--brand-soft)] decoration-[var(--brand-a50)]" : "hover:text-[var(--ink-a70)] decoration-[var(--ink-a50)]"}`,
  };
}
