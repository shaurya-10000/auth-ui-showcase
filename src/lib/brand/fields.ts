import { FONT_FAMILIES } from "./fonts";
import type { BrandValue } from "./types";

export const BRAND_GROUPS = [
  "Identity",
  "Colors",
  "Typography",
  "Light theme",
  "Dark theme",
  "Buttons & inputs",
  "Panel design",
  "Login page",
  "Sign-up page",
  "Side panel",
  "Options",
  "Links",
] as const;

export type BrandGroup = (typeof BRAND_GROUPS)[number];
export type BrandFieldType = "text" | "textarea" | "url" | "color" | "toggle" | "select" | "range";

export interface BrandOption {
  value: string;
  label: string;
}

export interface BrandFieldMeta {
  label: string;
  type: BrandFieldType;
  group: BrandGroup;
  hint?: string;
  /** select: the allowed values. */
  options?: readonly BrandOption[];
  /** range: bounds, step and the unit shown next to the value. Values are stored as strings. */
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  /** color: an empty value is allowed and means "derive it automatically". */
  optional?: boolean;
}

const FONT_OPTIONS: BrandOption[] = FONT_FAMILIES.map((family) => ({
  value: family,
  label: family === "Default" ? "Default (system font)" : family,
}));

const WEIGHT_OPTIONS: BrandOption[] = [
  { value: "500", label: "Medium" },
  { value: "600", label: "Semibold" },
  { value: "700", label: "Bold" },
  { value: "800", label: "Extra bold" },
];

const color = (label: string, group: BrandGroup, hint?: string, optional = false): BrandFieldMeta => ({
  label,
  type: "color",
  group,
  hint,
  optional,
});

const range = (
  label: string,
  group: BrandGroup,
  min: number,
  max: number,
  step = 1,
  unit = "px",
): BrandFieldMeta => ({ label, type: "range", group, min, max, step, unit });

/** Labels and input types for every brand key a template may expose. */
export const BRAND_FIELDS: Record<string, BrandFieldMeta> = {
  name: { label: "Brand name", type: "text", group: "Identity", hint: "Shown above the form. Leave empty to hide it." },
  logoUrl: { label: "Logo image URL", type: "url", group: "Identity", hint: "A link to a PNG, SVG or JPG. Replaces the letter badge." },

  accent: color("Accent color", "Colors"),
  accent2: color("Sign-up page color", "Colors"),
  accentLight: color("Light theme accent", "Colors"),

  fontFamily: { label: "Font family", type: "select", group: "Typography", options: FONT_OPTIONS, hint: "Loaded from Google Fonts." },
  headingWeight: { label: "Heading weight", type: "select", group: "Typography", options: WEIGHT_OPTIONS },
  textSize: range("Body text size", "Typography", 12, 18),
  headingSize: range("Form title size", "Typography", 20, 48),
  heroSize: range("Side panel headline size", "Typography", 32, 72),
  heroTextSize: range("Side panel text size", "Typography", 14, 28),

  lightBg: color("Form background", "Light theme"),
  lightHeading: color("Heading color", "Light theme"),
  lightText: color("Text color", "Light theme"),
  lightFieldBorder: color("Input border", "Light theme"),
  lightFieldText: color("Input text", "Light theme"),

  startDark: { label: "Start in dark mode", type: "toggle", group: "Dark theme", hint: "Also lets you preview the dark colors below." },
  darkBg: color("Form background", "Dark theme"),
  darkHeading: color("Heading color", "Dark theme"),
  darkText: color("Text color", "Dark theme"),
  darkFieldBorder: color("Input border", "Dark theme"),
  darkFieldText: color("Input text", "Dark theme"),

  buttonText: color("Button text color", "Buttons & inputs"),
  buttonRadius: range("Button corner radius", "Buttons & inputs", 0, 32),
  inputRadius: range("Input corner radius", "Buttons & inputs", 0, 32),

  panelFrom: color("Gradient start", "Panel design", "Auto follows the accent color.", true),
  panelVia: color("Gradient middle", "Panel design", "Auto uses dark slate.", true),
  panelTo: color("Gradient end", "Panel design", "Auto follows the accent color.", true),
  panelText: color("Headline color", "Panel design"),
  panelMuted: color("Text color", "Panel design"),

  loginTitle: { label: "Title", type: "text", group: "Login page" },
  loginSubtitle: { label: "Subtitle", type: "text", group: "Login page" },
  loginFile: { label: "Terminal title", type: "text", group: "Login page" },
  loginSubmit: { label: "Button label", type: "text", group: "Login page" },
  forgotText: { label: "Reset link text", type: "text", group: "Login page" },
  signupPrompt: { label: "Sign-up prompt", type: "text", group: "Login page" },
  signupLink: { label: "Sign-up link text", type: "text", group: "Login page" },

  signupTitle: { label: "Title", type: "text", group: "Sign-up page" },
  signupSubtitle: { label: "Subtitle", type: "text", group: "Sign-up page" },
  signupFile: { label: "Terminal title", type: "text", group: "Sign-up page" },
  signupSubmit: { label: "Button label", type: "text", group: "Sign-up page" },
  signinPrompt: { label: "Sign-in prompt", type: "text", group: "Sign-up page" },
  signinLink: { label: "Sign-in link text", type: "text", group: "Sign-up page" },

  headline: { label: "Login headline", type: "textarea", group: "Side panel" },
  subheadline: { label: "Login text", type: "textarea", group: "Side panel" },
  signupHeadline: { label: "Sign-up headline", type: "textarea", group: "Side panel" },
  signupSubheadline: { label: "Sign-up text", type: "textarea", group: "Side panel" },
  trustText: { label: "Trust line", type: "text", group: "Side panel", hint: "Leave empty to hide the avatars and trust line." },

  showSocial: { label: "Google and GitHub buttons", type: "toggle", group: "Options" },
  showRemember: { label: "Remember me checkbox", type: "toggle", group: "Options" },

  termsUrl: { label: "Terms link", type: "url", group: "Links" },
  privacyUrl: { label: "Privacy link", type: "url", group: "Links" },
};

export function getFieldMeta(key: string, defaultValue: BrandValue): BrandFieldMeta {
  return (
    BRAND_FIELDS[key] ?? {
      label: key,
      type: typeof defaultValue === "boolean" ? "toggle" : "text",
      group: "Options",
    }
  );
}
