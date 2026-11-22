import type { CSSProperties } from "react";

const mix = (color: string, percent: number, base: string): string =>
  `color-mix(in srgb, ${color} ${percent}%, ${base})`;

/** CSS variables derived from the accent color. The classes below read these. */
export function brandVars(accent: string): CSSProperties {
  return {
    "--brand": accent,
    "--brand-soft": mix(accent, 78, "white"),
    "--brand-softer": mix(accent, 60, "white"),
    "--brand-deep": mix(accent, 38, "#0f172a"),
    "--brand-deep-alt": mix(accent, 30, "#3b0764"),
  } as CSSProperties;
}

/** Class names shared by the login and sign-up pages. */
export function themeClasses(isDark: boolean) {
  return {
    toggle: `fixed top-6 right-6 z-50 p-2.5 rounded-full shadow-lg transition-all duration-300 ${isDark ? "bg-slate-800 hover:bg-slate-700 text-yellow-400" : "bg-white hover:bg-slate-100 text-slate-800"}`,
    panel: isDark ? "bg-slate-900" : "bg-white",
    heading: isDark ? "text-white" : "text-slate-900",
    muted: isDark ? "text-slate-400" : "text-slate-500",
    link: "text-[var(--brand-soft)] hover:text-[var(--brand-softer)] transition-colors",
    input: `peer block w-full appearance-none rounded-lg border px-3 pt-5 pb-2 focus:outline-none focus:ring-0 bg-transparent ${isDark ? "border-slate-700 text-white focus:border-[var(--brand-soft)]" : "border-slate-300 text-slate-900 focus:border-[var(--brand)]"}`,
    label: `absolute left-3 top-4 z-10 origin-[0] -translate-y-3 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 font-medium ${isDark ? "text-slate-400 peer-focus:text-[var(--brand-softer)]" : "text-slate-500 peer-focus:text-[var(--brand)]"}`,
    eye: `absolute right-3 top-1/2 -translate-y-1/2 transition-colors focus:outline-none ${isDark ? "text-slate-500 hover:text-slate-300" : "text-slate-400 hover:text-slate-600"}`,
    checkbox: `h-4 w-4 rounded border ${isDark ? "border-slate-700 bg-slate-800 text-[var(--brand-soft)] focus:ring-[var(--brand-soft)]" : "border-slate-300 text-[var(--brand)] focus:ring-[var(--brand)]"}`,
    checkboxLabel: isDark ? "text-slate-300" : "text-slate-600",
    divider: isDark ? "border-slate-700" : "border-slate-200",
    dividerText: isDark ? "bg-slate-900 text-slate-400" : "bg-white text-slate-500",
    social: `flex w-full items-center justify-center gap-3 rounded-lg px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset transition-colors ${isDark ? "bg-slate-800 text-white ring-slate-700 hover:bg-slate-700" : "bg-white text-slate-900 ring-slate-300 hover:bg-slate-50"}`,
    submit:
      "group relative flex w-full justify-center rounded-lg bg-[var(--brand)] px-3 py-2.5 text-sm font-semibold text-white hover:bg-[var(--brand-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)] transition-all disabled:opacity-70 disabled:cursor-not-allowed",
    visual: isDark ? "bg-slate-950" : "bg-slate-900",
    gradientOpacity: isDark ? "opacity-60" : "opacity-80",
  };
}
