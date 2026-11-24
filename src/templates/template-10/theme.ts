import type { CSSProperties } from "react";
import type { Brand } from "./brand";

const mix = (color: string, percent: number, base: string): string =>
  `color-mix(in srgb, ${color} ${percent}%, ${base})`;

/** Parses a numeric brand value, clamps it and returns it as a CSS pixel length. */
const toPx = (value: string, min: number, max: number, fallback: number): string => {
  const parsed = Number(value);
  const safe = Number.isFinite(parsed) ? Math.min(max, Math.max(min, parsed)) : fallback;
  return `${safe}px`;
};

const FONT_NAME = /^[A-Za-z0-9 ]+$/;
const HEADING_WEIGHTS = ["500", "600", "700", "800"];

/** Returns the Google Font name to use, or null for the default system font. */
function customFont(family: string): string | null {
  const name = family.trim();
  return name !== "" && name !== "Default" && FONT_NAME.test(name) ? name : null;
}

/** Google Fonts stylesheet URL for the chosen family, or null when no custom font is set. */
export function fontImportUrl(family: string): string | null {
  const name = customFont(family);
  if (!name) return null;
  return `https://fonts.googleapis.com/css2?family=${name.replace(/ /g, "+")}:wght@400;500;600;700;800&display=swap`;
}

/** CSS variables derived from the brand values and dark/light theme colors. */
export function brandVars(brand: Brand, isDark: boolean): CSSProperties {
  const { accent } = brand;
  const font = customFont(brand.fontFamily);

  return {
    "--brand": accent,
    "--brand-soft": mix(accent, 75, "white"),
    "--brand-strong": mix(accent, 85, "black"),

    "--page-bg": isDark ? brand.darkBg : brand.lightBg,
    "--heading-color": isDark ? brand.darkHeading : brand.lightHeading,
    "--body-color": isDark ? brand.darkText : brand.lightText,
    "--field-text": isDark ? brand.darkFieldText : brand.lightFieldText,
    "--btn-text": brand.buttonText,

    "--text-size": toPx(brand.textSize, 12, 18, 14),
    "--heading-size": toPx(brand.headingSize, 20, 48, 30),
    "--radius-button": toPx(brand.buttonRadius, 0, 32, 12),
    "--radius-input": toPx(brand.inputRadius, 0, 32, 12),
    "--heading-weight": HEADING_WEIGHTS.includes(brand.headingWeight) ? brand.headingWeight : "700",

    ...(font ? { fontFamily: `"${font}", ui-sans-serif, system-ui, sans-serif` } : {}),
  } as CSSProperties;
}

/** Class names shared by the login and sign-up pages. */
export function themeClasses(isDark: boolean) {
  return {
    page: `relative min-h-screen overflow-hidden flex items-center justify-center p-4 font-sans transition-colors duration-500 bg-[color:var(--page-bg)] ${isDark ? "text-white" : "text-slate-900"}`,
    toggle: `fixed top-6 right-6 z-50 p-2.5 rounded-full backdrop-blur-md transition-all ${isDark ? "bg-white/10 text-amber-300 border border-white/15 hover:bg-white/15" : "bg-white/80 text-slate-700 border border-slate-200/80 shadow-sm hover:bg-white"}`,
    orbPrimary: isDark ? "bg-[var(--brand)]/25" : "bg-[var(--brand)]/30",
    orbSecondary: isDark ? "bg-fuchsia-500/20" : "bg-fuchsia-400/25",
    orbTertiary: isDark ? "bg-emerald-400/15" : "bg-emerald-300/25",
    card: `relative z-10 w-full max-w-md rounded-3xl p-8 backdrop-blur-xl transition-all duration-300 ${isDark ? "bg-slate-900/65 border border-white/12 shadow-[0_25px_70px_rgba(0,0,0,0.65)]" : "bg-white/75 border border-white/80 shadow-[0_25px_70px_rgba(15,23,42,0.12)]"}`,
    heading: "text-[length:var(--heading-size)] font-[weight:var(--heading-weight)] tracking-tight mb-1.5 text-[color:var(--heading-color)]",
    subtitle: "text-[length:var(--text-size)] text-[color:var(--body-color)]",
    fieldLabel: `block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? "text-slate-300" : "text-slate-700"}`,
    input: `w-full rounded-[var(--radius-input)] px-4 py-3 text-[length:var(--text-size)] focus:outline-none focus:ring-2 transition-all text-[color:var(--field-text)] ${isDark ? "bg-white/5 placeholder-slate-400 border border-white/10 focus:ring-[var(--brand)]/50 focus:border-[var(--brand-soft)]" : "bg-white/80 placeholder-slate-400 border border-slate-200/90 focus:ring-[var(--brand)]/40 focus:border-[var(--brand)]"}`,
    checkbox: "w-4 h-4 rounded accent-[var(--brand)] cursor-pointer",
    checkboxLabel: `flex items-center gap-2 cursor-pointer text-[length:var(--text-size)] ${isDark ? "text-slate-300" : "text-slate-600"}`,
    link: `text-[length:var(--text-size)] font-semibold hover:underline ${isDark ? "text-[var(--brand-soft)]" : "text-[var(--brand-strong)]"}`,
    submit: "w-full py-3 rounded-[var(--radius-button)] font-semibold text-[length:var(--text-size)] text-[color:var(--btn-text)] bg-gradient-to-r from-[var(--brand-soft)] via-[var(--brand)] to-fuchsia-300 shadow-lg hover:brightness-105 active:scale-[0.99] transition-all disabled:opacity-60",
    footer: `mt-7 pt-5 border-t text-center text-[length:var(--text-size)] ${isDark ? "border-white/10 text-slate-400" : "border-slate-200/80 text-slate-600"}`,
    footerLink: `font-semibold hover:underline ${isDark ? "text-[var(--brand-soft)]" : "text-[var(--brand-strong)]"}`,
  };
}
