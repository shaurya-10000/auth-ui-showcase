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

/** CSS variables derived from the brand values. The classes below read these. */
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

    "--panel-text": brand.panelText,
    "--panel-muted": brand.panelMuted,

    "--text-size": toPx(brand.textSize, 12, 18, 14),
    "--heading-size": toPx(brand.headingSize, 20, 48, 24),
    "--hero-size": toPx(brand.heroSize, 32, 72, 36),
    "--hero-text-size": toPx(brand.heroTextSize, 14, 28, 18),
    "--radius-button": toPx(brand.buttonRadius, 0, 32, 12),
    "--radius-input": toPx(brand.inputRadius, 0, 32, 12),
    "--heading-weight": HEADING_WEIGHTS.includes(brand.headingWeight) ? brand.headingWeight : "600",

    ...(font ? { fontFamily: `"${font}", ui-sans-serif, system-ui, sans-serif` } : {}),
  } as CSSProperties;
}

/** Class names shared by the login and sign-up pages. */
export function themeClasses(isDark: boolean) {
  return {
    page: `min-h-screen flex items-center justify-center p-4 md:p-8 font-sans transition-colors duration-500 bg-[color:var(--page-bg)] ${isDark ? "text-white" : "text-gray-900"}`,
    toggle: `fixed top-6 right-6 z-50 p-2.5 rounded-full transition-all duration-300 ${isDark ? "bg-[#1c1c1e] text-yellow-400 hover:bg-[#2c2c2e]" : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm border border-black/5"}`,
    grid: "w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6",
    leftLoginCard: `rounded-[2rem] p-10 flex flex-col justify-between transition-colors duration-500 min-h-[400px] ${isDark ? "bg-[#1c1c1e] border border-white/5" : "bg-white border border-black/5 shadow-sm"}`,
    leftSignupCard: `rounded-[2rem] p-10 flex flex-col justify-between transition-colors duration-500 min-h-[400px] ${isDark ? "bg-black border border-white/5" : "bg-black shadow-sm"}`,
    formCard: `rounded-[2rem] p-10 flex flex-col justify-center transition-colors duration-500 ${isDark ? "bg-[#1c1c1e] border border-white/5" : "bg-white border border-black/5 shadow-sm"}`,
    leftHeading: `text-[length:var(--hero-size)] font-[weight:var(--heading-weight)] tracking-tight mb-4 leading-tight transition-colors ${isDark ? "text-[color:var(--heading-color)]" : "text-[color:var(--heading-color)]"}`,
    leftSubheadline: `text-[length:var(--hero-text-size)] max-w-sm transition-colors ${isDark ? "text-[color:var(--body-color)]" : "text-[color:var(--body-color)]"}`,
    signupHeroHeading: "text-[length:var(--hero-size)] font-[weight:var(--heading-weight)] tracking-tight text-[color:var(--panel-text)] mb-4 leading-tight whitespace-pre-line",
    signupHeroSubheadline: "text-[length:var(--hero-text-size)] text-[color:var(--panel-muted)] max-w-sm",
    trustText: `text-[length:var(--text-size)] font-medium transition-colors ${isDark ? "text-gray-300" : "text-gray-600"}`,
    avatarBorder: isDark ? "border-[#1c1c1e]" : "border-white",
    heading: `text-[length:var(--heading-size)] font-[weight:var(--heading-weight)] mb-8 transition-colors text-[color:var(--heading-color)]`,
    fieldLabel: `block text-[length:var(--text-size)] font-medium mb-1.5 transition-colors ${isDark ? "text-gray-300" : "text-gray-700"}`,
    input: `w-full rounded-[var(--radius-input)] px-4 py-3 text-[length:var(--text-size)] focus:outline-none focus:ring-2 transition-all placeholder-gray-400 text-[color:var(--field-text)] ${isDark ? "bg-[#2c2c2e] focus:ring-[var(--brand-soft)]/30" : "bg-[#f5f5f7] focus:ring-[var(--brand)]/20"}`,
    checkbox: `rounded focus:ring-0 ${isDark ? "border-gray-600 bg-[#2c2c2e] text-[var(--brand-soft)]" : "border-gray-300 text-[var(--brand)]"}`,
    checkboxLabel: `flex items-center gap-2 cursor-pointer text-[length:var(--text-size)] transition-colors ${isDark ? "text-gray-400" : "text-gray-600"}`,
    forgotLink: `text-[length:var(--text-size)] font-medium hover:underline transition-colors ${isDark ? "text-white" : "text-gray-900"}`,
    submit: "w-full font-medium text-[length:var(--text-size)] rounded-[var(--radius-button)] py-3 transition-all flex items-center justify-center gap-2 disabled:opacity-70 bg-[var(--brand)] text-[color:var(--btn-text)] hover:bg-[var(--brand-soft)] hover:text-slate-950",
    footer: `mt-8 text-center text-[length:var(--text-size)] transition-colors ${isDark ? "text-gray-400" : "text-gray-500"}`,
    footerLink: `font-medium hover:underline transition-colors ${isDark ? "text-white" : "text-black"}`,
  };
}
