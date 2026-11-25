// Brand settings. Edit these values to change the text, links and colors of this template.
export const brand = {
  name: "",
  logoUrl: "",
  accent: "#dc2626",

  // Typography. Sizes are in px. fontFamily is a Google Font name, or "Default" for the system font.
  fontFamily: "Default",
  headingWeight: "700",
  textSize: "14",
  headingSize: "36",

  // Light theme colors
  lightBg: "#f2f2f0",
  lightHeading: "#0a0a0a",
  lightText: "#525252",
  lightFieldBorder: "#0a0a0a",
  lightFieldText: "#0a0a0a",

  // Dark theme colors
  startDark: false,
  darkBg: "#0d0d0d",
  darkHeading: "#ffffff",
  darkText: "#a3a3a3",
  darkFieldBorder: "#404040",
  darkFieldText: "#ffffff",

  // Buttons and inputs
  buttonText: "#ffffff",
  buttonRadius: "0",
  inputRadius: "0",

  loginTitle: "Sign in",
  loginSubtitle: "Structured access across the Swiss grid system.",
  loginSubmit: "Sign in",
  signupPrompt: "Need an account?",
  signupLink: "Register",
  signupTitle: "Create account",
  signupSubtitle: "Set up your structured workspace profile.",
  signupSubmit: "Create account",
  signinPrompt: "Already registered?",
  signinLink: "Sign in",
  showRemember: true,
};

export type Brand = typeof brand;
