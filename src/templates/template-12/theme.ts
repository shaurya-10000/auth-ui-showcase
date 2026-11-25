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
const HEX_COLOR = /^#[0-9a-fA-F]{6}$/;

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
  const from = HEX_COLOR.test(brand.panelFrom) ? brand.panelFrom : "#06080d";
  const via = HEX_COLOR.test(brand.panelVia) ? brand.panelVia : "#0e1324";
  const to = HEX_COLOR.test(brand.panelTo) ? brand.panelTo : "#171c36";

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

    "--panel-from": from,
    "--panel-via": via,
    "--panel-to": to,
    "--panel-text": brand.panelText,
    "--panel-muted": brand.panelMuted,

    "--text-size": toPx(brand.textSize, 12, 18, 14),
    "--heading-size": toPx(brand.headingSize, 20, 48, 30),
    "--hero-size": toPx(brand.heroSize, 32, 72, 36),
    "--hero-text-size": toPx(brand.heroTextSize, 14, 28, 16),
    "--radius-button": toPx(brand.buttonRadius, 0, 32, 12),
    "--radius-input": toPx(brand.inputRadius, 0, 32, 12),
    "--heading-weight": HEADING_WEIGHTS.includes(brand.headingWeight) ? brand.headingWeight : "700",

    ...(font ? { fontFamily: `"${font}", ui-sans-serif, system-ui, sans-serif` } : {}),
  } as CSSProperties;
}

/** Class names shared by the login and sign-up pages. */
export function themeClasses(isDark: boolean) {
  return {
    page: `min-h-screen grid grid-cols-1 lg:grid-cols-2 font-sans transition-colors duration-300 bg-[color:var(--page-bg)] ${isDark ? "text-slate-100" : "text-slate-900"}`,
    toggle: `fixed top-6 right-6 z-50 p-2.5 rounded-xl transition-all ${isDark ? "bg-slate-900 text-amber-300 border border-slate-800 hover:bg-slate-800" : "bg-white text-slate-700 border border-slate-200 shadow-sm hover:bg-slate-100"}`,
    leftPanel: "hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-[color:var(--panel-from)] via-[color:var(--panel-via)] to-[color:var(--panel-to)] text-[color:var(--panel-text)] border-r border-white/10",
    pill: "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-[var(--brand-soft)] border border-white/10 w-fit",
    heroTitle: "text-[length:var(--hero-size)] font-[weight:var(--heading-weight)] tracking-tight leading-tight mt-6 mb-4 text-[color:var(--panel-text)]",
    heroCopy: "text-[length:var(--hero-text-size)] text-[color:var(--panel-muted)] max-w-md leading-relaxed",
    heroFooter: "text-[length:var(--text-size)] text-[color:var(--panel-muted)]",
    rightPanel: "flex items-center justify-center p-6 sm:p-10",
    formCard: "w-full max-w-md",
    heading: "text-[length:var(--heading-size)] font-[weight:var(--heading-weight)] tracking-tight mb-1.5 text-[color:var(--heading-color)]",
    subtitle: "text-[length:var(--text-size)] text-[color:var(--body-color)]",
    fieldLabel: `block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? "text-slate-300" : "text-slate-700"}`,
    input: `w-full rounded-[var(--radius-input)] px-4 py-3 text-[length:var(--text-size)] border border-[color:var(--field-border)] text-[color:var(--field-text)] focus:outline-none focus:ring-2 transition-all ${isDark ? "bg-slate-900 placeholder-slate-500 focus:ring-[var(--brand)]/50 focus:border-[var(--brand)]" : "bg-white placeholder-slate-400 focus:ring-[var(--brand)]/30 focus:border-[var(--brand)]"}`,
    checkbox: "w-4 h-4 rounded accent-[var(--brand)] cursor-pointer",
    checkboxLabel: `flex items-center gap-2 cursor-pointer text-[length:var(--text-size)] ${isDark ? "text-slate-300" : "text-slate-600"}`,
    link: `text-[length:var(--text-size)] font-semibold hover:underline ${isDark ? "text-[var(--brand-soft)]" : "text-[var(--brand-strong)]"}`,
    submit: "w-full py-3 rounded-[var(--radius-button)] font-semibold text-[length:var(--text-size)] text-[color:var(--btn-text)] bg-[var(--brand)] hover:bg-[var(--brand-soft)] transition-colors disabled:opacity-60",
    footer: `mt-7 pt-5 border-t text-center text-[length:var(--text-size)] ${isDark ? "border-slate-800 text-slate-400" : "border-slate-200 text-slate-600"}`,
    footerLink: `font-semibold hover:underline ${isDark ? "text-[var(--brand-soft)]" : "text-[var(--brand-strong)]"}`,
  };
}
