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
  return `https://fonts.googleapis.com/css2?family=${name.replace(/ /g, "+")}:wght@400;500;600;700&display=swap`;
}

/** CSS variables derived from the brand values. The classes below read these. */
export function brandVars(brand: Brand, isDark: boolean): CSSProperties {
  const { accent } = brand;
  const font = customFont(brand.fontFamily);

  return {
    "--brand": accent,
    "--brand-soft": mix(accent, 75, "white"),
    "--brand-softer": mix(accent, 55, "white"),
    "--brand-strong": mix(accent, 85, "black"),
    "--brand-stronger": mix(accent, 70, "black"),
    "--brand-ring": mix(accent, 50, "transparent"),
    "--brand-glow": mix(accent, 40, "transparent"),

    "--page-bg": isDark ? brand.darkBg : brand.lightBg,
    "--heading-color": isDark ? brand.darkHeading : brand.lightHeading,
    "--body-color": isDark ? brand.darkText : brand.lightText,
    "--field-border": isDark ? brand.darkFieldBorder : brand.lightFieldBorder,
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
    page: `bg-[color:var(--page-bg)] ${isDark ? "text-white" : "text-slate-800"}`,
    toggle: `fixed top-6 right-6 z-50 p-2.5 rounded-full shadow-lg transition-all duration-300 ${isDark ? "bg-white/10 hover:bg-white/20 text-yellow-400 border border-white/10" : "bg-white hover:bg-slate-100 text-slate-800 border border-slate-200"}`,
    card: `relative z-10 w-full max-w-md p-8 sm:p-10 backdrop-blur-2xl rounded-3xl transition-all duration-500 ${isDark ? "bg-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]" : "bg-white/40 border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]"}`,
    heading: `text-[length:var(--heading-size)] font-[weight:var(--heading-weight)] tracking-tight mb-2 transition-colors text-[color:var(--heading-color)]`,
    subtitle: `text-[length:var(--text-size)] transition-colors text-[color:var(--body-color)]`,
    fieldLabel: `block text-[length:var(--text-size)] font-medium mb-2 transition-colors ${isDark ? "text-neutral-200" : "text-slate-700"}`,
    input: `w-full border-[color:var(--field-border)] border rounded-[var(--radius-input)] px-4 py-3 text-[length:var(--text-size)] text-[color:var(--field-text)] placeholder-neutral-500 focus:outline-none focus:ring-2 transition-all ${isDark ? "bg-white/5 focus:ring-[var(--brand-ring)]" : "bg-white/50 focus:ring-[var(--brand-ring)]"}`,
    eye: `absolute right-4 top-1/2 -translate-y-1/2 transition-colors focus:outline-none ${isDark ? "text-neutral-400 hover:text-white" : "text-slate-500 hover:text-slate-800"}`,
    checkbox: `rounded focus:ring-offset-0 ${isDark ? "border-white/10 bg-white/5 text-[var(--brand)]" : "border-slate-300 bg-white text-[var(--brand-strong)]"}`,
    checkboxLabel: `text-[length:var(--text-size)] transition-colors text-[color:var(--body-color)]`,
    link: `font-medium transition-colors ${isDark ? "text-[var(--brand-soft)] hover:text-[var(--brand-softer)]" : "text-[var(--brand-strong)] hover:text-[var(--brand-stronger)]"}`,
    submitBase: "w-full flex justify-center items-center gap-2 font-semibold py-3 text-[length:var(--text-size)] rounded-[var(--radius-button)] transition-all disabled:opacity-70 disabled:cursor-not-allowed",
    submitLogin: isDark
      ? "bg-[var(--brand)] hover:bg-[var(--brand-soft)] text-[color:var(--btn-text)] shadow-[0_0_20px_var(--brand-glow)]"
      : "bg-[var(--brand-strong)] hover:bg-[var(--brand-stronger)] text-[color:var(--btn-text)] shadow-[0_4px_14px_0_var(--brand-glow)]",
    submitSignup: isDark
      ? "bg-white hover:bg-neutral-200 text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]"
      : "bg-[var(--brand-strong)] hover:bg-[var(--brand-stronger)] text-[color:var(--btn-text)] shadow-[0_4px_14px_0_var(--brand-glow)]",
    footer: `mt-8 text-center text-[length:var(--text-size)] transition-colors text-[color:var(--body-color)]`,
  };
}
