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
    page: `min-h-screen flex items-center justify-center p-4 font-sans transition-colors duration-300 ${isDark ? "bg-[#10160c] text-[#eef3e8]" : "bg-[#f3f6ee] text-[#1d2616]"}`,
    toggle: `fixed top-6 right-6 z-50 p-2.5 rounded-2xl transition-all ${isDark ? "bg-[#1a2414] text-lime-300 border border-[#2f3e24] hover:bg-[#22301a]" : "bg-white text-[#365314] border border-[#d6e0c8] shadow-sm hover:bg-[#f9fbf6]"}`,
    card: `w-full max-w-md rounded-3xl p-8 transition-all duration-300 ${isDark ? "bg-[#161f11] border border-[#2d3c23] shadow-[0_20px_50px_rgba(0,0,0,0.5)]" : "bg-white border border-[#d7e1c9] shadow-[0_20px_50px_rgba(63,98,18,0.08)]"}`,
    heading: "text-3xl font-bold tracking-tight mb-1.5",
    subtitle: `text-sm ${isDark ? "text-[#b6c4a8]" : "text-[#4e6138]"}`,
    fieldLabel: `block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? "text-[#cdd9c1]" : "text-[#365314]"}`,
    input: `w-full rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${isDark ? "bg-[#10160c] text-white placeholder-[#6f805f] border border-[#2d3c23] focus:ring-[var(--brand)]/50 focus:border-[var(--brand-soft)]" : "bg-[#f8faf4] text-[#1d2616] placeholder-[#899c75] border border-[#ced9bf] focus:ring-[var(--brand)]/30 focus:border-[var(--brand)]"}`,
    checkbox: "w-4 h-4 rounded accent-[var(--brand)] cursor-pointer",
    checkboxLabel: `flex items-center gap-2 cursor-pointer text-xs ${isDark ? "text-[#b6c4a8]" : "text-[#4e6138]"}`,
    link: `text-xs font-semibold hover:underline ${isDark ? "text-[var(--brand-soft)]" : "text-[var(--brand)]"}`,
    submit: "w-full py-3 rounded-2xl font-semibold text-sm text-white bg-[var(--brand)] hover:bg-[var(--brand-strong)] shadow-sm transition-colors disabled:opacity-60",
    footer: `mt-7 pt-5 border-t text-center text-xs ${isDark ? "border-[#27341e] text-[#94a684]" : "border-[#e6ede0] text-[#5e7346]"}`,
    footerLink: `font-semibold hover:underline ${isDark ? "text-[var(--brand-soft)]" : "text-[var(--brand)]"}`,
  };
}
