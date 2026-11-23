// Brand settings. Edit these values to change the text, links, fonts and colors of this template.
export const brand = {
  name: "",
  logoUrl: "",
  accent: "#4f46e5",

  // Typography. Sizes are in px. fontFamily is a Google Font name, or "Default" for the system font.
  fontFamily: "Default",
  headingWeight: "700",
  textSize: "14",
  headingSize: "30",
  heroSize: "48",
  heroTextSize: "18",

  // Light theme colors
  lightBg: "#ffffff",
  lightHeading: "#0f172a",
  lightText: "#64748b",
  lightFieldBorder: "#cbd5e1",
  lightFieldText: "#0f172a",

  // Dark theme colors
  startDark: false,
  darkBg: "#0f172a",
  darkHeading: "#ffffff",
  darkText: "#94a3b8",
  darkFieldBorder: "#334155",
  darkFieldText: "#ffffff",

  // Buttons and inputs
  buttonText: "#ffffff",
  buttonRadius: "8",
  inputRadius: "8",

  // Side panel design. Empty gradient colors are derived from the accent color.
  panelFrom: "",
  panelVia: "",
  panelTo: "",
  panelText: "#ffffff",
  panelMuted: "#cbd5e1",

  loginTitle: "Welcome back",
  loginSubmit: "Sign in",
  signupPrompt: "Don't have an account?",
  signupLink: "Sign up",
  signupTitle: "Create an account",
  signupSubmit: "Create account",
  signinPrompt: "Already have an account?",
  signinLink: "Sign in",
  headline: "Build faster with\nminimal design.",
  subheadline: "Join thousands of developers who trust our platform to power their authentication flows.",
  trustText: "Trusted by 10,000+ users",
  signupHeadline: "Start your journey\nwith us today.",
  signupSubheadline: "Get access to premium features, dedicated support, and a community of builders.",
  showSocial: true,
  showRemember: true,
  termsUrl: "#",
  privacyUrl: "#",
};

export type Brand = typeof brand;
