// Brand settings. Edit these values to change the text, links and colors of this template.
export const brand = {
  name: "",
  logoUrl: "",
  accent: "#3b82f6",

  // Typography. Sizes are in px. fontFamily is a Google Font name, or "Default" for the system font.
  fontFamily: "Default",
  headingWeight: "700",
  textSize: "12",
  headingSize: "24",

  // Light theme colors
  lightHeading: "#1e293b",
  lightText: "#64748b",
  lightFieldBorder: "#94a3b8",
  lightFieldText: "#1e293b",

  // Dark theme colors
  startDark: false,
  darkHeading: "#f1f5f9",
  darkText: "#94a3b8",
  darkFieldBorder: "#020617",
  darkFieldText: "#f1f5f9",

  // Buttons and inputs
  buttonText: "#ffffff",
  buttonRadius: "8",
  inputRadius: "8",

  loginTitle: "Member Access",
  loginSubtitle: "Insert credentials into the terminal below",
  loginSubmit: "Authenticate",
  signupPrompt: "New to the platform?",
  signupLink: "Register device",
  signupTitle: "Issue Credentials",
  signupSubtitle: "Register a new account profile",
  signupSubmit: "Create Profile",
  signinPrompt: "Already registered?",
  signinLink: "Sign in",
  showRemember: true,
};

export type Brand = typeof brand;
