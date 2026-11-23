// Brand settings. Edit these values to change the text, links and colors of this template.
export const brand = {
  name: "",
  logoUrl: "",
  accent: "#ffd166",

  // Typography. Sizes are in px. fontFamily is a Google Font name, or "Default" for the system font.
  fontFamily: "Default",
  headingWeight: "800",
  textSize: "14",
  headingSize: "36",

  // Light theme colors
  lightBg: "#fff5f5",
  lightHeading: "#000000",
  lightText: "#374151",
  lightFieldText: "#000000",

  // Dark theme colors
  startDark: false,
  darkBg: "#1a1a24",
  darkHeading: "#ffffff",
  darkText: "#d1d5db",
  darkFieldText: "#ffffff",

  // Buttons and inputs
  buttonRadius: "0",
  inputRadius: "0",

  loginTitle: "SIGN IN",
  loginSubtitle: "Welcome back to the pastel brutalist zone.",
  loginSubmit: "LET ME IN →",
  signupPrompt: "NO ACCOUNT YET?",
  signupLink: "CREATE ONE",
  signupTitle: "JOIN US",
  signupSubtitle: "Create your account and get started.",
  signupSubmit: "CREATE ACCOUNT →",
  signinPrompt: "ALREADY HAVE AN ACCOUNT?",
  signinLink: "SIGN IN",
  showRemember: true,
};

export type Brand = typeof brand;
