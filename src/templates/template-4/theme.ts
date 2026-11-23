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
  const { accent, accentLight } = brand;
  const font = customFont(brand.fontFamily);
  const defaultStack = 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

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

    "--page-bg": isDark ? brand.darkBg : brand.lightBg,
    "--heading-color": isDark ? brand.darkHeading : brand.lightHeading,
    "--body-color": isDark ? brand.darkText : brand.lightText,
    "--field-border": isDark ? brand.darkFieldBorder : brand.lightFieldBorder,
    "--field-text": isDark ? brand.darkFieldText : brand.lightFieldText,

    "--text-size": toPx(brand.textSize, 12, 18, 12),
    "--heading-size": toPx(brand.headingSize, 20, 48, 24),
    "--radius-button": toPx(brand.buttonRadius, 0, 32, 0),
    "--radius-input": toPx(brand.inputRadius, 0, 32, 0),
    "--heading-weight": HEADING_WEIGHTS.includes(brand.headingWeight) ? brand.headingWeight : "700",

    fontFamily: font ? `"${font}", ${defaultStack}` : defaultStack,
  } as CSSProperties;
}

/** Class names shared by the login and sign-up pages. */
export function themeClasses(isDark: boolean) {
  return {
    page: `bg-[color:var(--page-bg)] ${isDark ? "text-[var(--brand)]" : "text-[var(--ink)]"}`,
    toggle: `fixed top-6 right-6 z-50 p-2.5 rounded-sm border transition-all duration-300 ${isDark ? "bg-black border-[var(--brand-a50)] text-[var(--brand)] hover:bg-[var(--brand-a10)]" : "bg-[#e8e4d8] border-[var(--ink-a50)] text-[var(--ink)] hover:bg-[var(--ink-a10)]"}`,
    card: `w-full border relative transition-colors duration-300 ${isDark ? "border-[var(--brand-a30)] bg-black" : "border-[var(--ink-a30)] bg-[#f4f1e8]"}`,
    cardGlow: isDark ? "shadow-[0_0_30px_var(--brand-a10)]" : "shadow-[0_0_30px_var(--ink-a10)]",
    titleBar: `flex items-center justify-between border-b px-4 py-2 transition-colors ${isDark ? "border-[var(--brand-a30)] bg-[var(--brand-a10)]" : "border-[var(--ink-a30)] bg-[var(--ink-a10)]"}`,
    dotDim: `w-2 h-2 rounded-full ${isDark ? "bg-[var(--brand-a50)]" : "bg-[var(--ink-a50)]"}`,
    dotBright: `w-2 h-2 rounded-full ${isDark ? "bg-[var(--brand)]" : "bg-[var(--ink)]"}`,
    heading: "text-[length:var(--heading-size)] font-[weight:var(--heading-weight)] uppercase tracking-widest text-[color:var(--heading-color)]",
    subtitle: `text-[length:var(--text-size)] mt-1 ${isDark ? "text-[var(--brand-a70)]" : "text-[var(--ink-a70)]"}`,
    fieldLabel: "block text-[length:var(--text-size)] uppercase tracking-widest mb-2 opacity-80 text-[color:var(--body-color)]",
    input: `w-full border-[color:var(--field-border)] border rounded-[var(--radius-input)] px-4 py-3 text-[length:var(--text-size)] focus:outline-none focus:ring-1 transition-all ${isDark ? "bg-black text-[color:var(--field-text)] focus:border-[var(--brand)] focus:ring-[var(--brand)] placeholder:text-[var(--brand-a30)]" : "bg-[#e8e4d8] text-[color:var(--field-text)] focus:border-[var(--ink)] focus:ring-[var(--ink)] placeholder:text-[var(--ink-a30)]"}`,
    submit: `w-full font-bold text-[length:var(--text-size)] uppercase tracking-widest py-3 border rounded-[var(--radius-button)] transition-all disabled:opacity-50 ${isDark ? "bg-[var(--brand-a10)] border-[var(--brand)] text-[var(--brand)] hover:bg-[var(--brand)] hover:text-black" : "bg-[var(--ink-a10)] border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[#e8e4d8]"}`,
    rule: isDark ? "border-[var(--brand-a30)]" : "border-[var(--ink-a30)]",
    link: `text-[length:var(--text-size)] hover:underline underline-offset-4 ${isDark ? "hover:text-[var(--brand-soft)] decoration-[var(--brand-a50)]" : "hover:text-[var(--ink-a70)] decoration-[var(--ink-a50)]"}`,
  };
}
