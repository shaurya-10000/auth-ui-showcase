// Brand settings. Edit these values to change the text, links and colors of this template.
export const brand = {
  name: "",
  logoUrl: "",
  accent: "#4338ca",

  // Typography. Sizes are in px. fontFamily is a Google Font name, or "Default" for the system font.
  fontFamily: "Default",
  headingWeight: "700",
  textSize: "14",
  headingSize: "30",

  // Light theme colors
  lightHeading: "#020617",
  lightText: "#475569",
  lightFieldBorder: "#c7d2fe",
  lightFieldText: "#020617",

  // Dark theme colors
  startDark: false,
  darkBg: "#090b1a",
  darkHeading: "#eef2ff",
  darkText: "#c7d2fe",
  darkFieldBorder: "#3730a3",
  darkFieldText: "#ffffff",

  // Buttons and inputs
  buttonText: "#ffffff",
  buttonRadius: "16",
  inputRadius: "16",

  loginTitle: "Welcome back",
  loginSubtitle: "Sign in to your Royal Indigo workspace.",
  loginSubmit: "Sign in",
  signupPrompt: "Don't have an account?",
  signupLink: "Create account",
  signupTitle: "Create account",
  signupSubtitle: "Join with deep indigo precision and clarity.",
  signupSubmit: "Create account",
  signinPrompt: "Already have an account?",
  signinLink: "Sign in",
  showRemember: true,
};

export type Brand = typeof brand;
