// Brand settings. Edit these values to change the text, links and colors of this template.
export const brand = {
  name: "",
  logoUrl: "",
  accent: "#c2410c",

  // Typography. Sizes are in px. fontFamily is a Google Font name, or "Default" for the system font.
  fontFamily: "Default",
  headingWeight: "700",
  textSize: "14",
  headingSize: "30",

  // Light theme colors
  lightBg: "#fbf3ec",
  lightHeading: "#2c1810",
  lightText: "#7c4d36",
  lightFieldBorder: "#e3c4ae",
  lightFieldText: "#2c1810",

  // Dark theme colors
  startDark: false,
  darkBg: "#1a110d",
  darkHeading: "#f7ede6",
  darkText: "#d4b8a8",
  darkFieldBorder: "#472e24",
  darkFieldText: "#ffffff",

  // Buttons and inputs
  buttonText: "#ffffff",
  buttonRadius: "16",
  inputRadius: "16",

  loginTitle: "Welcome back",
  loginSubtitle: "Warm, grounded access for your studio space.",
  loginSubmit: "Sign in",
  signupPrompt: "Don't have an account?",
  signupLink: "Join now",
  signupTitle: "Create account",
  signupSubtitle: "Set up your account in warm terracotta tones.",
  signupSubmit: "Create account",
  signinPrompt: "Already have an account?",
  signinLink: "Sign in",
  showRemember: true,
};

export type Brand = typeof brand;
