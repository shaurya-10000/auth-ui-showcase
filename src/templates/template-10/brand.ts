// Brand settings. Edit these values to change the text, links and colors of this template.
export const brand = {
  name: "",
  logoUrl: "",
  accent: "#38bdf8",

  // Typography. Sizes are in px. fontFamily is a Google Font name, or "Default" for the system font.
  fontFamily: "Default",
  headingWeight: "700",
  textSize: "14",
  headingSize: "30",

  // Light theme colors
  lightBg: "#f4f7fb",
  lightHeading: "#0f172a",
  lightText: "#475569",
  lightFieldText: "#0f172a",

  // Dark theme colors
  startDark: true,
  darkBg: "#070b14",
  darkHeading: "#ffffff",
  darkText: "#cbd5e1",
  darkFieldText: "#ffffff",

  // Buttons and inputs
  buttonText: "#020617",
  buttonRadius: "12",
  inputRadius: "12",

  loginTitle: "Welcome back",
  loginSubtitle: "Step into your workspace across the aurora mesh.",
  loginSubmit: "Sign in",
  signupPrompt: "Don't have an account?",
  signupLink: "Create one",
  signupTitle: "Start your space",
  signupSubtitle: "Create an account to unlock your workspace.",
  signupSubmit: "Create account",
  signinPrompt: "Already have an account?",
  signinLink: "Sign in",
  showRemember: true,
};

export type Brand = typeof brand;
