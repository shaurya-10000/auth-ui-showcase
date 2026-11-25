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
    "--heading-size": toPx(brand.headingSize, 20, 48, 36),
    "--radius-button": toPx(brand.buttonRadius, 0, 32, 0),
    "--radius-input": toPx(brand.inputRadius, 0, 32, 0),
    "--heading-weight": HEADING_WEIGHTS.includes(brand.headingWeight) ? brand.headingWeight : "700",

    ...(font ? { fontFamily: `"${font}", ui-sans-serif, system-ui, sans-serif` } : {}),
  } as CSSProperties;
}

/** Class names shared by the login and sign-up pages. */
export function themeClasses(isDark: boolean) {
  return {
    page: `min-h-screen flex items-center justify-center p-4 md:p-8 font-sans transition-colors duration-300 bg-[color:var(--page-bg)] ${isDark ? "text-white" : "text-neutral-950"}`,
    toggle: `fixed top-6 right-6 z-50 px-3 py-2 text-xs font-bold uppercase tracking-widest border transition-colors ${isDark ? "bg-[#171717] text-white border-neutral-700 hover:border-white" : "bg-white text-neutral-950 border-neutral-950 hover:bg-neutral-100"}`,
    frame: `w-full max-w-4xl border transition-colors duration-300 ${isDark ? "bg-[#141414] border-neutral-800" : "bg-white border-neutral-950"}`,
    grid: `grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x ${isDark ? "divide-neutral-800" : "divide-neutral-950"}`,
    metaCol: "md:col-span-5 p-6 md:p-8 flex flex-col justify-between",
    formCol: "md:col-span-7 p-6 md:p-8",
    indexTag: "text-xs font-mono uppercase tracking-[0.2em] text-[var(--brand)]",
    heading: "text-[length:var(--heading-size)] font-[weight:var(--heading-weight)] tracking-tight mt-3 mb-2 text-[color:var(--heading-color)]",
    subtitle: "text-[length:var(--text-size)] leading-relaxed text-[color:var(--body-color)]",
    fieldIndex: `text-xs font-mono ${isDark ? "text-neutral-500" : "text-neutral-500"}`,
    fieldLabel: "block text-xs font-bold uppercase tracking-wider mb-1.5",
    input: `w-full px-3.5 py-2.5 text-[length:var(--text-size)] rounded-[var(--radius-input)] border border-[color:var(--field-border)] text-[color:var(--field-text)] focus:outline-none transition-colors ${isDark ? "bg-[#0d0d0d] placeholder-neutral-600 focus:border-[var(--brand-soft)]" : "bg-[#fafaf9] placeholder-neutral-400 focus:border-[var(--brand)]"}`,
    checkbox: "w-4 h-4 accent-[var(--brand)] cursor-pointer",
    checkboxLabel: `flex items-center gap-2 cursor-pointer text-[length:var(--text-size)] font-medium ${isDark ? "text-neutral-300" : "text-neutral-700"}`,
    link: "text-[length:var(--text-size)] font-bold uppercase tracking-wider underline underline-offset-4 text-[var(--brand)]",
    submit: "w-full py-3 px-5 text-xs font-bold uppercase tracking-[0.18em] rounded-[var(--radius-button)] text-[color:var(--btn-text)] bg-[var(--brand)] hover:bg-[var(--brand-strong)] transition-colors disabled:opacity-60",
    footer: `mt-6 pt-5 border-t flex items-center justify-between text-[length:var(--text-size)] ${isDark ? "border-neutral-800 text-neutral-400" : "border-neutral-200 text-neutral-600"}`,
    footerLink: "font-bold uppercase tracking-wider underline underline-offset-4 text-[var(--brand)]",
  };
}
