// Brand settings. Edit these values to change the text, links and colors of this template.
export const brand = {
  name: "",
  logoUrl: "",
  accent: "#0284c7",

  // Typography. Sizes are in px. fontFamily is a Google Font name, or "Default" for the system font.
  fontFamily: "Default",
  headingWeight: "600",
  textSize: "14",
  headingSize: "30",

  // Light theme colors
  lightHeading: "#0f172a",
  lightText: "#475569",
  lightFieldBorder: "#bae6fd",
  lightFieldText: "#0f172a",

  // Dark theme colors
  startDark: false,
  darkBg: "#0b131e",
  darkHeading: "#f1f5f9",
  darkText: "#94a3b8",
  darkFieldBorder: "#0c4a6e",
  darkFieldText: "#ffffff",

  // Buttons and inputs
  buttonText: "#ffffff",
  buttonRadius: "16",
  inputRadius: "16",

  loginTitle: "Welcome back",
  loginSubtitle: "Calm, clear sign-in for your Nordic Frost workspace.",
  loginSubmit: "Sign in",
  signupPrompt: "New here?",
  signupLink: "Create account",
  signupTitle: "Create account",
  signupSubtitle: "Start with a crisp, distraction-free workspace.",
  signupSubmit: "Create account",
  signinPrompt: "Already have an account?",
  signinLink: "Sign in",
  showRemember: true,
};

export type Brand = typeof brand;
