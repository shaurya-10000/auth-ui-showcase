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
  const defaultStack = 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif';

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

    "--text-size": toPx(brand.textSize, 12, 18, 16),
    "--heading-size": toPx(brand.headingSize, 20, 48, 36),
    "--radius-button": toPx(brand.buttonRadius, 0, 32, 0),
    "--radius-input": toPx(brand.inputRadius, 0, 32, 0),
    "--heading-weight": HEADING_WEIGHTS.includes(brand.headingWeight) ? brand.headingWeight : "500",

    fontFamily: font ? `"${font}", ${defaultStack}` : defaultStack,
  } as CSSProperties;
}

/** Class names shared by the login and sign-up pages. */
export function themeClasses(isDark: boolean) {
  return {
    page: `min-h-screen flex items-center justify-center p-6 transition-colors duration-300 bg-[color:var(--page-bg)] ${isDark ? "text-[#f3efe8]" : "text-[#1c1917]"}`,
    toggle: `fixed top-6 right-6 z-50 px-3.5 py-2 text-xs tracking-wide border transition-colors ${isDark ? "bg-[#1e1b18] text-[#e7e0d5] border-[#3a342e] hover:bg-[#292521]" : "bg-white text-[#292524] border-[#d6cfc2] hover:bg-[#f4efe6]"}`,
    column: "w-full max-w-md",
    headerBorder: `pb-6 mb-8 border-b ${isDark ? "border-[#2e2924]" : "border-[#e2dad0]"}`,
    kicker: `text-[11px] uppercase tracking-[0.2em] mb-3 ${isDark ? "text-[var(--brand-soft)]" : "text-[var(--brand)]"}`,
    heading: "text-[length:var(--heading-size)] font-[weight:var(--heading-weight)] tracking-tight leading-tight mb-3 text-[color:var(--heading-color)]",
    subtitle: "text-[length:var(--text-size)] leading-relaxed text-[color:var(--body-color)]",
    fieldLabel: `block text-xs uppercase tracking-[0.14em] mb-2 ${isDark ? "text-[#d6cfc2]" : "text-[#44403c]"}`,
    input: `w-full px-0 py-2.5 text-[length:var(--text-size)] bg-transparent border-b border-[color:var(--field-border)] rounded-[var(--radius-input)] text-[color:var(--field-text)] focus:outline-none transition-colors ${isDark ? "placeholder-[#6e665c] focus:border-[var(--brand-soft)]" : "placeholder-[#a8a29e] focus:border-[var(--brand)]"}`,
    checkbox: "w-4 h-4 rounded-none accent-[var(--brand)] cursor-pointer",
    checkboxLabel: `flex items-center gap-2.5 cursor-pointer text-[length:var(--text-size)] ${isDark ? "text-[#c7bfb2]" : "text-[#57534e]"}`,
    link: `text-[length:var(--text-size)] underline underline-offset-4 transition-colors ${isDark ? "text-[var(--brand-soft)] hover:text-white" : "text-[var(--brand)] hover:text-[var(--brand-strong)]"}`,
    submit: "w-full py-3.5 px-6 text-[length:var(--text-size)] rounded-[var(--radius-button)] tracking-wide text-[color:var(--btn-text)] bg-[var(--brand)] hover:bg-[var(--brand-strong)] transition-colors disabled:opacity-60",
    footer: `mt-8 pt-6 border-t text-center text-[length:var(--text-size)] ${isDark ? "border-[#2e2924] text-[#a8a095]" : "border-[#e2dad0] text-[#78716c]"}`,
    footerLink: `underline underline-offset-4 font-medium ${isDark ? "text-[#f5f0e8]" : "text-[#1c1917]"}`,
  };
}
