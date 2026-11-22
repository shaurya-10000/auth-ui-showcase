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

/** Shared styles and modern motion primitives for login and sign-up pages. */
export function themeClasses(isDark: boolean) {
  return {
    page: `relative min-h-screen overflow-hidden flex items-center justify-center p-4 font-sans transition-colors duration-500 ${isDark ? "bg-[#090c16] text-slate-100" : "bg-[#f6f8fc] text-slate-900"}`,
    toggle: `fixed top-6 right-6 z-50 p-2.5 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 ${isDark ? "bg-slate-900/90 text-amber-300 border border-slate-800 hover:bg-slate-800" : "bg-white/90 text-slate-700 border border-slate-200/80 shadow-sm hover:bg-white"}`,
    auraTop: `pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 h-80 w-[34rem] rounded-full blur-3xl animate-[pulse_7s_ease-in-out_infinite] ${isDark ? "bg-[var(--brand)]/20" : "bg-[var(--brand)]/15"}`,
    auraBottom: `pointer-events-none absolute -bottom-32 right-1/4 h-72 w-72 rounded-full blur-3xl animate-[pulse_9s_ease-in-out_infinite] ${isDark ? "bg-violet-500/15" : "bg-sky-400/20"}`,
    card: `relative z-10 w-full max-w-md rounded-3xl p-8 backdrop-blur-xl transition-all duration-300 animate-[t17Enter_0.55s_cubic-bezier(0.16,1,0.3,1)_both] ${isDark ? "bg-slate-900/75 border border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.6)]" : "bg-white/85 border border-slate-200/80 shadow-[0_24px_64px_rgba(15,23,42,0.08)]"}`,
    stagger1: "animate-[t17Rise_0.5s_cubic-bezier(0.16,1,0.3,1)_0.06s_both]",
    stagger2: "animate-[t17Rise_0.5s_cubic-bezier(0.16,1,0.3,1)_0.12s_both]",
    stagger3: "animate-[t17Rise_0.5s_cubic-bezier(0.16,1,0.3,1)_0.18s_both]",
    stagger4: "animate-[t17Rise_0.5s_cubic-bezier(0.16,1,0.3,1)_0.24s_both]",
    heading: "text-3xl font-bold tracking-tight mb-1.5",
    subtitle: `text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`,
    fieldLabel: `block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? "text-slate-300" : "text-slate-700"}`,
    input: `w-full rounded-2xl px-4 py-3 text-sm outline-none transition-all duration-200 focus:-translate-y-[1px] focus:ring-4 ${isDark ? "bg-slate-950/80 text-white placeholder-slate-500 border border-slate-800 focus:border-[var(--brand-soft)] focus:ring-[var(--brand)]/25" : "bg-white text-slate-900 placeholder-slate-400 border border-slate-200 focus:border-[var(--brand)] focus:ring-[var(--brand)]/15"}`,
    checkbox: "w-4 h-4 rounded accent-[var(--brand)] cursor-pointer transition-transform active:scale-90",
    checkboxLabel: `flex items-center gap-2 cursor-pointer text-xs ${isDark ? "text-slate-300" : "text-slate-600"}`,
    link: `text-xs font-semibold transition-colors hover:underline ${isDark ? "text-[var(--brand-soft)]" : "text-[var(--brand)]"}`,
    submit: "group w-full py-3 px-5 rounded-2xl font-semibold text-sm text-white bg-[var(--brand)] hover:bg-[var(--brand-strong)] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all duration-200 disabled:opacity-60 disabled:translate-y-0",
    footer: `mt-7 pt-5 border-t text-center text-xs ${isDark ? "border-slate-800/80 text-slate-400" : "border-slate-200/80 text-slate-600"}`,
    footerLink: `font-semibold hover:underline ${isDark ? "text-[var(--brand-soft)]" : "text-[var(--brand)]"}`,
  };
}

export const motionKeyframes = `
@keyframes t17Enter {
  0% {
    opacity: 0;
    transform: translateY(18px) scale(0.985);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes t17Rise {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
`;
