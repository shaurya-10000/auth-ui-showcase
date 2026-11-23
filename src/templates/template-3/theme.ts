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
  return `https://fonts.googleapis.com/css2?family=${name.replace(/ /g, "+")}:wght@400;500;600;700;800;900&display=swap`;
}

/** CSS variables derived from the brand values. The classes below read these. */
export function brandVars(brand: Brand, isDark: boolean, activeAccent: string): CSSProperties {
  const font = customFont(brand.fontFamily);
  const defaultStack = 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

  return {
    "--brand": activeAccent,
    "--brand-tint": mix(activeAccent, 20, "white"),

    "--page-bg": isDark ? brand.darkBg : activeAccent,
    "--heading-color": isDark ? brand.darkHeading : brand.lightHeading,
    "--body-color": isDark ? brand.darkText : brand.lightText,
    "--field-border": isDark ? brand.darkFieldBorder : brand.lightFieldBorder,
    "--field-text": isDark ? brand.darkFieldText : brand.lightFieldText,

    "--text-size": toPx(brand.textSize, 12, 18, 14),
    "--heading-size": toPx(brand.headingSize, 20, 48, 36),
    "--radius-button": toPx(brand.buttonRadius, 0, 32, 0),
    "--radius-input": toPx(brand.inputRadius, 0, 32, 0),
    "--heading-weight": HEADING_WEIGHTS.includes(brand.headingWeight) ? brand.headingWeight : "800",

    fontFamily: font ? `"${font}", ${defaultStack}` : defaultStack,
  } as CSSProperties;
}

/** Class names shared by the login and sign-up pages. */
export function themeClasses(isDark: boolean) {
  return {
    page: isDark ? "bg-[color:var(--page-bg)]" : "bg-[color:var(--page-bg)]",
    toggle: `fixed top-6 right-6 z-50 p-2.5 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 active:translate-x-1 active:translate-y-1 active:shadow-none ${isDark ? "bg-white text-black hover:bg-gray-200" : "bg-white text-black hover:bg-gray-100"}`,
    card: `w-full p-8 border-4 transition-all duration-300 ${isDark ? "bg-neutral-900 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] text-white" : "bg-white border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black"}`,
    heading: "text-[length:var(--heading-size)] font-[weight:var(--heading-weight)] uppercase tracking-tighter text-[color:var(--heading-color)]",
    subtitle: "font-bold mt-2 text-[length:var(--text-size)] text-[color:var(--body-color)]",
    fieldLabel: "block text-[length:var(--text-size)] font-black uppercase mb-2 text-[color:var(--body-color)]",
    rule: isDark ? "border-white" : "border-black",
    input: `w-full px-4 py-3 font-bold text-[length:var(--text-size)] focus:outline-none border-4 rounded-[var(--radius-input)] transition-colors placeholder-neutral-400 ${isDark ? "bg-black border-[color:var(--field-border)] text-[color:var(--field-text)] focus:bg-neutral-800" : "bg-white border-[color:var(--field-border)] text-[color:var(--field-text)] focus:bg-[var(--brand-tint)]"}`,
    checkbox: `w-6 h-6 border-4 rounded-[var(--radius-input)] transition-colors accent-black ${isDark ? "border-white" : "border-black"}`,
    checkboxLabel: "font-bold text-[length:var(--text-size)] uppercase text-[color:var(--body-color)]",
    submitBase: "w-full font-black text-xl uppercase py-4 border-4 rounded-[var(--radius-button)] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none disabled:opacity-50",
    submitLogin: isDark
      ? "bg-white text-black border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:bg-neutral-200"
      : "bg-black text-white border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[var(--brand)] hover:text-black",
    submitSignup: isDark
      ? "bg-white text-black border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:bg-[var(--brand)]"
      : "bg-black text-white border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[var(--brand)] hover:text-black",
    linkButton: `font-black text-[length:var(--text-size)] underline decoration-4 underline-offset-4 px-2 py-1 transition-colors ${isDark ? "hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"}`,
    forgotLink: "font-black text-[length:var(--text-size)] uppercase hover:underline decoration-4 underline-offset-4",
    termsLabel: "font-bold text-[length:var(--text-size)] uppercase leading-tight text-[color:var(--body-color)]",
    termsLink: `underline decoration-4 underline-offset-2 transition-colors ${isDark ? "text-cyan-400" : "text-blue-700"}`,
  };
}
