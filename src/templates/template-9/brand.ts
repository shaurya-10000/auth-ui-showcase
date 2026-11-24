// Brand settings. Edit these values to change the text, links and colors of this template.
export const brand = {
  name: "",
  logoUrl: "",
  accent: "#9a3412",

  // Typography. Sizes are in px. fontFamily is a Google Font name, or "Default" for the system font.
  fontFamily: "Default",
  headingWeight: "500",
  textSize: "16",
  headingSize: "36",

  // Light theme colors
  lightBg: "#fbf8f3",
  lightHeading: "#1c1917",
  lightText: "#57534e",
  lightFieldBorder: "#c8bfb2",
  lightFieldText: "#1c1917",

  // Dark theme colors
  startDark: false,
  darkBg: "#141210",
  darkHeading: "#f3efe8",
  darkText: "#b8b0a4",
  darkFieldBorder: "#443d36",
  darkFieldText: "#f5f0e8",

  // Buttons and inputs
  buttonText: "#ffffff",
  buttonRadius: "0",
  inputRadius: "0",

  loginTitle: "Sign in to the journal.",
  loginSubtitle: "A quiet corner for essays, dispatches, and field notes.",
  loginSubmit: "Continue reading",
  signupPrompt: "New to the edition?",
  signupLink: "Subscribe",
  signupTitle: "Request membership.",
  signupSubtitle: "Receive weekly dispatches and subscriber-only archives.",
  signupSubmit: "Create account",
  signinPrompt: "Already a subscriber?",
  signinLink: "Sign in",
  showRemember: true,
};

export type Brand = typeof brand;
