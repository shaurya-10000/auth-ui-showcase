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

    "--text-size": toPx(brand.textSize, 12, 18, 14),
    "--heading-size": toPx(brand.headingSize, 20, 48, 36),
    "--radius-button": toPx(brand.buttonRadius, 0, 32, 0),
    "--radius-input": toPx(brand.inputRadius, 0, 32, 0),
    "--heading-weight": HEADING_WEIGHTS.includes(brand.headingWeight) ? brand.headingWeight : "800",

    ...(font ? { fontFamily: `"${font}", ui-sans-serif, system-ui, sans-serif` } : {}),
  } as CSSProperties;
}

/** Class names shared by the login and sign-up pages. */
export function themeClasses(isDark: boolean) {
  return {
    page: `min-h-screen flex items-center justify-center p-4 font-sans transition-colors duration-300 bg-[color:var(--page-bg)]`,
    toggle: `fixed top-6 right-6 z-50 p-3 border-2 border-black font-bold transition-transform hover:-translate-y-0.5 active:translate-y-0 ${isDark ? "bg-[#2a2a38] text-[#ffd166] shadow-[4px_4px_0px_#000000]" : "bg-[#a8dadc] text-black shadow-[4px_4px_0px_#000000]"}`,
    card: `w-full max-w-md border-4 border-black p-8 transition-colors duration-300 ${isDark ? "bg-[#23232f] text-white shadow-[10px_10px_0px_#000000]" : "bg-white text-black shadow-[10px_10px_0px_#000000]"}`,
    badge: "inline-block border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-wider mb-3 shadow-[3px_3px_0px_#000000] bg-[var(--brand)] text-black",
    heading: "text-[length:var(--heading-size)] font-[weight:var(--heading-weight)] tracking-tight mb-1 text-[color:var(--heading-color)]",
    subtitle: "text-[length:var(--text-size)] font-medium text-[color:var(--body-color)]",
    fieldLabel: "block text-[length:var(--text-size)] font-black uppercase tracking-wider mb-2",
    input: `w-full border-2 border-black rounded-[var(--radius-input)] px-4 py-3 text-[length:var(--text-size)] font-medium focus:outline-none focus:ring-0 transition-shadow placeholder-gray-500 text-[color:var(--field-text)] ${isDark ? "bg-[#1a1a24] focus:shadow-[4px_4px_0px_var(--brand)]" : "bg-[#fdf0d5] focus:shadow-[4px_4px_0px_#000000]"}`,
    checkbox: "w-4 h-4 border-2 border-black rounded-none focus:ring-0 accent-black",
    checkboxLabel: "flex items-center gap-2 cursor-pointer text-[length:var(--text-size)] font-bold uppercase",
    link: `text-[length:var(--text-size)] font-black uppercase underline underline-offset-4 transition-colors ${isDark ? "text-[var(--brand)] hover:text-white" : "text-black hover:text-[#e63946]"}`,
    submit: "w-full border-2 border-black rounded-[var(--radius-button)] py-3.5 font-black uppercase tracking-wider text-[length:var(--text-size)] shadow-[5px_5px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[4px_4px_0px_#000000] active:translate-x-[3px] active:translate-y-[3px] active:shadow-[2px_2px_0px_#000000] transition-all disabled:opacity-60 bg-[var(--brand)] text-black",
    footer: "mt-8 pt-6 border-t-2 border-black text-center text-[length:var(--text-size)] font-bold uppercase",
    footerLink: `underline underline-offset-4 ${isDark ? "text-[#a8dadc]" : "text-[#e63946]"}`,
  };
}
