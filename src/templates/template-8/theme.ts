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
    page: `min-h-screen flex items-center justify-center p-4 font-sans transition-colors duration-300 ${isDark ? "bg-gradient-to-b from-[#1e2229] via-[#15181e] to-[#0e1014]" : "bg-gradient-to-b from-[#d8dde6] via-[#c6cdd8] to-[#b2bac7]"}`,
    toggle: `fixed top-6 right-6 z-50 px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${isDark ? "bg-gradient-to-b from-[#323844] to-[#232730] text-amber-300 border border-white/15 shadow-[0_4px_10px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.12)] active:translate-y-0.5" : "bg-gradient-to-b from-[#ffffff] to-[#dfe4ec] text-slate-700 border border-slate-400/70 shadow-[0_4px_8px_rgba(15,23,42,0.18),inset_0_1px_0_rgba(255,255,255,0.9)] active:translate-y-0.5"}`,
    bezel: `w-full max-w-md rounded-2xl p-2 transition-all duration-300 ${isDark ? "bg-gradient-to-b from-[#363c48] to-[#1b1e25] border border-white/15 shadow-[0_24px_50px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.14)]" : "bg-gradient-to-b from-[#eef1f6] to-[#c9d0dc] border border-white/80 shadow-[0_20px_40px_rgba(15,23,42,0.25),inset_0_1px_0_rgba(255,255,255,0.95)]"}`,
    plate: `rounded-xl p-8 transition-colors duration-300 ${isDark ? "bg-gradient-to-b from-[#252932] to-[#1c1f26] border border-black/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]" : "bg-gradient-to-b from-[#f7f9fc] to-[#e7ecf3] border border-slate-300/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]"}`,
    heading: `text-2xl font-bold tracking-tight drop-shadow-[0_1px_0_rgba(255,255,255,0.7)] ${isDark ? "text-slate-100 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]" : "text-slate-800"}`,
    subtitle: `text-xs mt-1 ${isDark ? "text-slate-400" : "text-slate-500"}`,
    fieldLabel: `block text-xs font-bold uppercase tracking-wider mb-1.5 ${isDark ? "text-slate-300" : "text-slate-700"}`,
    input: `w-full rounded-lg px-3.5 py-2.5 text-sm focus:outline-none transition-all ${isDark ? "bg-[#14171d] text-slate-100 placeholder-slate-500 border border-black/80 shadow-[inset_0_2px_6px_rgba(0,0,0,0.75),0_1px_0_rgba(255,255,255,0.06)] focus:border-[var(--brand-soft)]" : "bg-white text-slate-800 placeholder-slate-400 border border-slate-400/80 shadow-[inset_0_2px_5px_rgba(15,23,42,0.14),0_1px_0_rgba(255,255,255,0.9)] focus:border-[var(--brand)]"}`,
    checkbox: "w-4 h-4 rounded accent-[var(--brand)] cursor-pointer",
    checkboxLabel: `flex items-center gap-2 cursor-pointer text-xs font-medium ${isDark ? "text-slate-300" : "text-slate-600"}`,
    link: `text-xs font-semibold hover:underline ${isDark ? "text-[var(--brand-soft)]" : "text-[var(--brand)]"}`,
    submit: "w-full py-3 rounded-lg font-bold text-sm text-white tracking-wide bg-gradient-to-b from-[var(--brand-soft)] via-[var(--brand)] to-[var(--brand-strong)] border border-black/30 shadow-[0_4px_10px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.45)] hover:brightness-105 active:translate-y-0.5 active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.45)] transition-all disabled:opacity-60",
    footer: `mt-6 pt-5 border-t text-center text-xs ${isDark ? "border-white/10 text-slate-400" : "border-slate-300/90 text-slate-600"}`,
    footerLink: `font-bold hover:underline ${isDark ? "text-[var(--brand-soft)]" : "text-[var(--brand)]"}`,
  };
}
