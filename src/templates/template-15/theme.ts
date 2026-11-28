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
    page: `min-h-screen flex items-center justify-center p-4 font-sans transition-colors duration-300 bg-[color:var(--page-bg)] ${isDark ? "text-[#eef3e8]" : "text-[#1d2616]"}`,
    toggle: `fixed top-6 right-6 z-50 p-2.5 rounded-2xl transition-all ${isDark ? "bg-[#1a2414] text-lime-300 border border-[#2f3e24] hover:bg-[#22301a]" : "bg-white text-[#365314] border border-[#d6e0c8] shadow-sm hover:bg-[#f9fbf6]"}`,
    card: `w-full max-w-md rounded-3xl p-8 transition-all duration-300 ${isDark ? "bg-[#161f11] border border-[#2d3c23] shadow-[0_20px_50px_rgba(0,0,0,0.5)]" : "bg-white border border-[#d7e1c9] shadow-[0_20px_50px_rgba(63,98,18,0.08)]"}`,
    heading: "text-[length:var(--heading-size)] font-[weight:var(--heading-weight)] tracking-tight mb-1.5 text-[color:var(--heading-color)]",
    subtitle: "text-[length:var(--text-size)] text-[color:var(--body-color)]",
    fieldLabel: `block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? "text-[#cdd9c1]" : "text-[#365314]"}`,
    input: `w-full rounded-[var(--radius-input)] px-4 py-3 text-[length:var(--text-size)] border border-[color:var(--field-border)] text-[color:var(--field-text)] focus:outline-none focus:ring-2 transition-all ${isDark ? "bg-[#10160c] placeholder-[#6f805f] focus:ring-[var(--brand)]/50 focus:border-[var(--brand-soft)]" : "bg-[#f8faf4] placeholder-[#899c75] focus:ring-[var(--brand)]/30 focus:border-[var(--brand)]"}`,
    checkbox: "w-4 h-4 rounded accent-[var(--brand)] cursor-pointer",
    checkboxLabel: `flex items-center gap-2 cursor-pointer text-[length:var(--text-size)] ${isDark ? "text-[#b6c4a8]" : "text-[#4e6138]"}`,
    link: `text-[length:var(--text-size)] font-semibold hover:underline ${isDark ? "text-[var(--brand-soft)]" : "text-[var(--brand)]"}`,
    submit: "w-full py-3 rounded-[var(--radius-button)] font-semibold text-[length:var(--text-size)] text-[color:var(--btn-text)] bg-[var(--brand)] hover:bg-[var(--brand-strong)] shadow-sm transition-colors disabled:opacity-60",
    footer: `mt-7 pt-5 border-t text-center text-[length:var(--text-size)] ${isDark ? "border-[#27341e] text-[#94a684]" : "border-[#e6ede0] text-[#5e7346]"}`,
    footerLink: `font-semibold hover:underline ${isDark ? "text-[var(--brand-soft)]" : "text-[var(--brand)]"}`,
  };
}
