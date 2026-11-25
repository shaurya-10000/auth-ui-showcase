// Brand settings. Edit these values to change the text, links and colors of this template.
export const brand = {
  name: "",
  logoUrl: "",
  accent: "#818cf8",

  // Typography. Sizes are in px. fontFamily is a Google Font name, or "Default" for the system font.
  fontFamily: "Default",
  headingWeight: "700",
  textSize: "14",
  headingSize: "30",
  heroSize: "36",
  heroTextSize: "16",

  // Light theme colors
  lightBg: "#f8fafc",
  lightHeading: "#0f172a",
  lightText: "#475569",
  lightFieldBorder: "#cbd5e1",
  lightFieldText: "#0f172a",

  // Dark theme colors
  startDark: true,
  darkBg: "#090b10",
  darkHeading: "#f1f5f9",
  darkText: "#94a3b8",
  darkFieldBorder: "#1e293b",
  darkFieldText: "#ffffff",

  // Buttons and inputs
  buttonText: "#020617",
  buttonRadius: "12",
  inputRadius: "12",

  // Left panel design
  panelFrom: "",
  panelVia: "",
  panelTo: "",
  panelText: "#ffffff",
  panelMuted: "#cbd5e1",

  loginTitle: "Welcome back",
  loginSubtitle: "Enter your credentials to access the midnight console.",
  loginSubmit: "Sign in",
  signupPrompt: "Don't have an account?",
  signupLink: "Sign up",
  signupTitle: "Create account",
  signupSubtitle: "Provision your workspace credentials in seconds.",
  signupSubmit: "Create account",
  signinPrompt: "Already have an account?",
  signinLink: "Sign in",
  showRemember: true,
};

export type Brand = typeof brand;
