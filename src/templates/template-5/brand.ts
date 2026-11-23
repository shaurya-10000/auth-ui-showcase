// Brand settings. Edit these values to change the text, links and colors of this template.
export const brand = {
  name: "",
  logoUrl: "",
  accent: "#3b82f6",

  // Typography. Sizes are in px. fontFamily is a Google Font name, or "Default" for the system font.
  fontFamily: "Default",
  headingWeight: "700",
  textSize: "14",
  headingSize: "30",

  // Light theme colors
  lightBg: "#e0e5ec",
  lightHeading: "#334155",
  lightText: "#64748b",
  lightFieldText: "#334155",

  // Dark theme colors
  startDark: false,
  darkBg: "#2d3748",
  darkHeading: "#e2e8f0",
  darkText: "#94a3b8",
  darkFieldText: "#e2e8f0",

  // Buttons and inputs
  buttonRadius: "12",
  inputRadius: "12",

  loginTitle: "Welcome Back",
  loginSubtitle: "Please sign in to continue",
  loginSubmit: "Sign In",
  signupPrompt: "Don't have an account?",
  signupLink: "Sign up",
  signupTitle: "Create Account",
  signupSubtitle: "Join us today",
  signupSubmit: "Sign Up",
  signinPrompt: "Already have an account?",
  signinLink: "Sign in",
  showRemember: true,
};

export type Brand = typeof brand;
