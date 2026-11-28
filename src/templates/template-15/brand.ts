// Brand settings. Edit these values to change the text, links and colors of this template.
export const brand = {
  name: "",
  logoUrl: "",
  accent: "#4d7c0f",

  // Typography. Sizes are in px. fontFamily is a Google Font name, or "Default" for the system font.
  fontFamily: "Default",
  headingWeight: "700",
  textSize: "14",
  headingSize: "30",

  // Light theme colors
  lightBg: "#f3f6ee",
  lightHeading: "#1d2616",
  lightText: "#4e6138",
  lightFieldBorder: "#ced9bf",
  lightFieldText: "#1d2616",

  // Dark theme colors
  startDark: false,
  darkBg: "#10160c",
  darkHeading: "#eef3e8",
  darkText: "#b6c4a8",
  darkFieldBorder: "#2d3c23",
  darkFieldText: "#ffffff",

  // Buttons and inputs
  buttonText: "#ffffff",
  buttonRadius: "16",
  inputRadius: "16",

  loginTitle: "Welcome back",
  loginSubtitle: "Fresh, organic sign-in for your botanical workspace.",
  loginSubmit: "Sign in",
  signupPrompt: "New to the garden?",
  signupLink: "Grow an account",
  signupTitle: "Create account",
  signupSubtitle: "Start cultivating your workspace today.",
  signupSubmit: "Create account",
  signinPrompt: "Already have an account?",
  signinLink: "Sign in",
  showRemember: true,
};

export type Brand = typeof brand;
