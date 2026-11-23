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
    "--brand-soft": mix(accent, 78, "white"),
    "--brand-softer": mix(accent, 60, "white"),

    "--panel-from": brand.panelFrom || mix(accent, 38, "#0f172a"),
    "--panel-via": brand.panelVia || "#0f172a",
    "--panel-to": brand.panelTo || mix(accent, 30, "#3b0764"),
    "--panel-text": brand.panelText,
    "--panel-muted": brand.panelMuted,

    "--page-bg": isDark ? brand.darkBg : brand.lightBg,
    "--heading-color": isDark ? brand.darkHeading : brand.lightHeading,
    "--body-color": isDark ? brand.darkText : brand.lightText,
    "--field-border": isDark ? brand.darkFieldBorder : brand.lightFieldBorder,
    "--field-text": isDark ? brand.darkFieldText : brand.lightFieldText,
    "--btn-text": brand.buttonText,

    "--text-size": toPx(brand.textSize, 12, 18, 14),
    "--heading-size": toPx(brand.headingSize, 20, 48, 30),
    "--hero-size": toPx(brand.heroSize, 32, 72, 48),
    "--hero-text-size": toPx(brand.heroTextSize, 14, 28, 18),
    "--radius-button": toPx(brand.buttonRadius, 0, 32, 8),
    "--radius-input": toPx(brand.inputRadius, 0, 32, 8),
    "--heading-weight": HEADING_WEIGHTS.includes(brand.headingWeight) ? brand.headingWeight : "700",

    ...(font ? { fontFamily: `"${font}", ui-sans-serif, system-ui, sans-serif` } : {}),
  } as CSSProperties;
}

/** Class names shared by the login and sign-up pages. */
export function themeClasses(isDark: boolean) {
  return {
    toggle: `fixed top-6 right-6 z-50 p-2.5 rounded-full shadow-lg transition-all duration-300 ${isDark ? "bg-slate-800 hover:bg-slate-700 text-yellow-400" : "bg-white hover:bg-slate-100 text-slate-800"}`,
    panel: "bg-[color:var(--page-bg)]",
    title: "text-[length:var(--heading-size)] font-[weight:var(--heading-weight)] leading-[1.2] tracking-tight text-[color:var(--heading-color)]",
    text: "text-[length:var(--text-size)]",
    muted: "text-[color:var(--body-color)]",
    link: "text-[var(--brand-soft)] hover:text-[var(--brand-softer)] transition-colors",
    input: `peer block w-full appearance-none rounded-[var(--radius-input)] border px-3 pt-5 pb-2 focus:outline-none focus:ring-0 bg-transparent text-[color:var(--field-text)] border-[color:var(--field-border)] ${isDark ? "focus:border-[color:var(--brand-soft)]" : "focus:border-[color:var(--brand)]"}`,
    label: `absolute left-3 top-4 z-10 origin-[0] -translate-y-3 scale-75 transform text-[length:var(--text-size)] duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 font-medium text-[color:var(--body-color)] ${isDark ? "peer-focus:text-[color:var(--brand-softer)]" : "peer-focus:text-[color:var(--brand)]"}`,
    eye: `absolute right-3 top-1/2 -translate-y-1/2 transition-colors focus:outline-none ${isDark ? "text-slate-500 hover:text-slate-300" : "text-slate-400 hover:text-slate-600"}`,
    checkbox: `h-4 w-4 rounded border ${isDark ? "border-slate-700 bg-slate-800 text-[var(--brand-soft)] focus:ring-[var(--brand-soft)]" : "border-slate-300 text-[var(--brand)] focus:ring-[var(--brand)]"}`,
    checkboxLabel: isDark ? "text-slate-300" : "text-slate-600",
    divider: isDark ? "border-slate-700" : "border-slate-200",
    dividerText: "bg-[color:var(--page-bg)] text-[color:var(--body-color)]",
    social: `flex w-full items-center justify-center gap-3 rounded-[var(--radius-button)] px-3 py-2 text-[length:var(--text-size)] font-semibold shadow-sm ring-1 ring-inset ring-[color:var(--field-border)] text-[color:var(--heading-color)] transition-colors ${isDark ? "bg-slate-800 hover:bg-slate-700" : "bg-white hover:bg-slate-50"}`,
    submit:
      "group relative flex w-full justify-center rounded-[var(--radius-button)] bg-[var(--brand)] px-3 py-2.5 text-[length:var(--text-size)] font-semibold text-[color:var(--btn-text)] hover:bg-[var(--brand-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)] transition-all disabled:opacity-70 disabled:cursor-not-allowed",
    visual: isDark ? "bg-slate-950" : "bg-slate-900",
    gradientOpacity: isDark ? "opacity-60" : "opacity-80",
  };
}
