// Brand settings. Edit these values to change the text, links and colors of this template.
export const brand = {
  name: "",
  logoUrl: "",
  accent: "#111827",

  // Typography. Sizes are in px. fontFamily is a Google Font name, or "Default" for the system font.
  fontFamily: "Default",
  headingWeight: "600",
  textSize: "14",
  headingSize: "24",
  heroSize: "36",
  heroTextSize: "18",

  // Light theme colors
  lightBg: "#f5f5f7",
  lightHeading: "#111827",
  lightText: "#6b7280",
  lightFieldText: "#111827",

  // Dark theme colors
  startDark: false,
  darkBg: "#0f0f11",
  darkHeading: "#ffffff",
  darkText: "#9ca3af",
  darkFieldText: "#ffffff",

  // Buttons and inputs
  buttonText: "#ffffff",
  buttonRadius: "12",
  inputRadius: "12",

  // Bento left card design
  panelText: "#ffffff",
  panelMuted: "#9ca3af",

  loginTitle: "Sign in",
  loginSubmit: "Sign In",
  signupPrompt: "Don't have an account?",
  signupLink: "Sign up",
  signupTitle: "Create account",
  signupSubmit: "Sign Up",
  signinPrompt: "Already have an account?",
  signinLink: "Sign in",
  headline: "Welcome to the\nBento Experience.",
  subheadline: "A clean, minimal approach to secure authentication. Built for modern web apps.",
  trustText: "Trusted by thousands",
  signupHeadline: "Start your\njourney today.",
  signupSubheadline: "Create an account and get access to a suite of tools designed to make your life easier.",
  showRemember: true,
};

export type Brand = typeof brand;
