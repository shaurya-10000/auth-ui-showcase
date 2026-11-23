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
    "--brand-ring": mix(accent, 45, "transparent"),

    "--page-bg": isDark ? brand.darkBg : brand.lightBg,
    "--heading-color": isDark ? brand.darkHeading : brand.lightHeading,
    "--body-color": isDark ? brand.darkText : brand.lightText,
    "--field-text": isDark ? brand.darkFieldText : brand.lightFieldText,

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
    page: `min-h-screen flex items-center justify-center p-4 font-sans transition-colors duration-500 bg-[color:var(--page-bg)] ${isDark ? "text-slate-200" : "text-slate-700"}`,
    toggle: `fixed top-6 right-6 z-50 p-2.5 rounded-full transition-all duration-300 ${isDark ? "bg-[#2d3748] text-[var(--brand-soft)] shadow-[4px_4px_8px_#1a202c,-4px_-4px_8px_#4a5568]" : "bg-[#e0e5ec] text-[var(--brand)] shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff]"}`,
    card: `w-full max-w-md rounded-3xl p-8 transition-all duration-500 ${isDark ? "bg-[#2d3748] shadow-[8px_8px_16px_#1a202c,-8px_-8px_16px_#4a5568]" : "bg-[#e0e5ec] shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff]"}`,
    heading: `text-[length:var(--heading-size)] font-[weight:var(--heading-weight)] mb-2 transition-colors text-[color:var(--heading-color)]`,
    subtitle: `text-[length:var(--text-size)] transition-colors text-[color:var(--body-color)]`,
    fieldLabel: `block text-[length:var(--text-size)] font-semibold mb-2 ml-1 transition-colors ${isDark ? "text-slate-300" : "text-slate-600"}`,
    input: `w-full rounded-[var(--radius-input)] px-4 py-3 text-[length:var(--text-size)] focus:outline-none transition-colors placeholder-slate-400 text-[color:var(--field-text)] ${isDark ? "bg-[#2d3748] shadow-[inset_4px_4px_8px_#1a202c,inset_-4px_-4px_8px_#4a5568]" : "bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff]"}`,
    checkbox: `rounded focus:ring-0 ${isDark ? "bg-[#2d3748] shadow-[inset_2px_2px_4px_#1a202c,inset_-2px_-2px_4px_#4a5568] text-[var(--brand-soft)]" : "bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff] text-[var(--brand)]"}`,
    checkboxLabel: `flex items-center gap-2 cursor-pointer text-[length:var(--text-size)] transition-colors ${isDark ? "text-slate-300" : "text-slate-600"}`,
    link: `font-semibold transition-colors ${isDark ? "text-[var(--brand-soft)] hover:brightness-110" : "text-[var(--brand)] hover:text-[var(--brand-strong)]"}`,
    submit: `w-full font-bold text-lg rounded-[var(--radius-button)] py-3 transition-all disabled:opacity-70 ${isDark ? "bg-[#2d3748] text-[var(--brand-soft)] shadow-[6px_6px_12px_#1a202c,-6px_-6px_12px_#4a5568] active:shadow-[inset_4px_4px_8px_#1a202c,inset_-4px_-4px_8px_#4a5568]" : "bg-[#e0e5ec] text-[var(--brand)] shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff]"}`,
    footer: `mt-8 text-center text-[length:var(--text-size)] transition-colors text-[color:var(--body-color)]`,
  };
}
