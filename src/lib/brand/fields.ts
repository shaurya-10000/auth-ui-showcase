import type { BrandValue } from "./types";

export const BRAND_GROUPS = [
  "Identity",
  "Colors",
  "Login page",
  "Sign-up page",
  "Side panel",
  "Options",
  "Links",
] as const;

export type BrandGroup = (typeof BRAND_GROUPS)[number];
export type BrandFieldType = "text" | "textarea" | "url" | "color" | "toggle";

export interface BrandFieldMeta {
  label: string;
  type: BrandFieldType;
  group: BrandGroup;
  hint?: string;
}

/** Labels and input types for every brand key a template may expose. */
export const BRAND_FIELDS: Record<string, BrandFieldMeta> = {
  name: { label: "Brand name", type: "text", group: "Identity", hint: "Shown above the form. Leave empty to hide it." },
  logoUrl: { label: "Logo image URL", type: "url", group: "Identity", hint: "A link to a PNG, SVG or JPG. Replaces the letter badge." },

  accent: { label: "Accent color", type: "color", group: "Colors" },
  accent2: { label: "Sign-up page color", type: "color", group: "Colors" },
  accentLight: { label: "Light theme accent", type: "color", group: "Colors" },

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
