// Brand settings. Edit these values to change the text, links and colors of this template.
export const brand = {
  name: "",
  logoUrl: "",
  accent: "#6366f1",

  // Typography. Sizes are in px. fontFamily is a Google Font name, or "Default" for the system font.
  fontFamily: "Default",
  headingWeight: "700",
  textSize: "14",
  headingSize: "30",

  // Light theme colors
  lightBg: "#f8fafc",
  lightHeading: "#1e293b",
  lightText: "#475569",
  lightFieldBorder: "#cbd5e1",
  lightFieldText: "#0f172a",

  // Dark theme colors
  startDark: true,
  darkBg: "#0a0a0a",
  darkHeading: "#ffffff",
  darkText: "#d4d4d4",
  darkFieldBorder: "#262626",
  darkFieldText: "#ffffff",

  // Buttons and inputs
  buttonText: "#ffffff",
  buttonRadius: "12",
  inputRadius: "12",

  loginTitle: "Welcome back",
  loginSubtitle: "Enter your details to access your account.",
  loginSubmit: "Sign in",
  signupPrompt: "Don't have an account?",
  signupLink: "Sign up",
  signupTitle: "Create an account",
  signupSubtitle: "Join us to start building today.",
  signupSubmit: "Create account",
  signinPrompt: "Already have an account?",
  signinLink: "Sign in",
  showRemember: true,
};

export type Brand = typeof brand;
