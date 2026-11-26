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
    "--field-border": isDark ? brand.darkFieldBorder : brand.lightFieldBorder,
    "--field-text": isDark ? brand.darkFieldText : brand.lightFieldText,
    "--btn-text": brand.buttonText,

    "--text-size": toPx(brand.textSize, 12, 18, 14),
    "--heading-size": toPx(brand.headingSize, 20, 48, 30),
    "--radius-button": toPx(brand.buttonRadius, 0, 32, 16),
    "--radius-input": toPx(brand.inputRadius, 0, 32, 16),
    "--heading-weight": HEADING_WEIGHTS.includes(brand.headingWeight) ? brand.headingWeight : "700",

    ...(font ? { fontFamily: `"${font}", ui-sans-serif, system-ui, sans-serif` } : {}),
  } as CSSProperties;
}

/** Class names shared by the login and sign-up pages. */
export function themeClasses(isDark: boolean) {
  return {
    page: `min-h-screen flex items-center justify-center p-4 font-sans transition-colors duration-300 bg-[color:var(--page-bg)] ${isDark ? "text-[#f7ede6]" : "text-[#2c1810]"}`,
    toggle: `fixed top-6 right-6 z-50 p-2.5 rounded-2xl transition-all ${isDark ? "bg-[#291b15] text-amber-300 border border-[#472e24] hover:bg-[#34221b]" : "bg-white text-[#5c2c16] border border-[#ebd3c3] shadow-sm hover:bg-[#fffaf5]"}`,
    card: `w-full max-w-md rounded-3xl p-8 transition-all duration-300 ${isDark ? "bg-[#241813] border border-[#472e24] shadow-[0_20px_50px_rgba(0,0,0,0.55)]" : "bg-white border border-[#ead0be] shadow-[0_20px_50px_rgba(154,52,18,0.08)]"}`,
    heading: "text-[length:var(--heading-size)] font-[weight:var(--heading-weight)] tracking-tight mb-1.5 text-[color:var(--heading-color)]",
    subtitle: "text-[length:var(--text-size)] text-[color:var(--body-color)]",
    fieldLabel: `block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? "text-[#e7cfc1]" : "text-[#5c2c16]"}`,
    input: `w-full rounded-[var(--radius-input)] px-4 py-3 text-[length:var(--text-size)] border border-[color:var(--field-border)] text-[color:var(--field-text)] focus:outline-none focus:ring-2 transition-all ${isDark ? "bg-[#1a110d] placeholder-[#8c6b5a] focus:ring-[var(--brand)]/50 focus:border-[var(--brand-soft)]" : "bg-[#fdf7f2] placeholder-[#b58d78] focus:ring-[var(--brand)]/30 focus:border-[var(--brand)]"}`,
    checkbox: "w-4 h-4 rounded accent-[var(--brand)] cursor-pointer",
    checkboxLabel: `flex items-center gap-2 cursor-pointer text-[length:var(--text-size)] ${isDark ? "text-[#d4b8a8]" : "text-[#6e432e]"}`,
    link: `text-[length:var(--text-size)] font-semibold hover:underline ${isDark ? "text-[var(--brand-soft)]" : "text-[var(--brand)]"}`,
    submit: "w-full py-3 rounded-[var(--radius-button)] font-semibold text-[length:var(--text-size)] text-[color:var(--btn-text)] bg-[var(--brand)] hover:bg-[var(--brand-strong)] shadow-sm transition-colors disabled:opacity-60",
    footer: `mt-7 pt-5 border-t text-center text-[length:var(--text-size)] ${isDark ? "border-[#3b261e] text-[#b89684]" : "border-[#f0dfd3] text-[#85553e]"}`,
    footerLink: `font-semibold hover:underline ${isDark ? "text-[var(--brand-soft)]" : "text-[var(--brand)]"}`,
  };
}
