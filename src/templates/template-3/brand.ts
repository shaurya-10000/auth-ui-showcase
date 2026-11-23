// Brand settings. Edit these values to change the text, links and colors of this template.
export const brand = {
  name: "",
  logoUrl: "",
  accent: "#facc15",
  accent2: "#22d3ee",

  // Typography. Sizes are in px. fontFamily is a Google Font name, or "Default" for the system font.
  fontFamily: "Default",
  headingWeight: "800",
  textSize: "14",
  headingSize: "36",

  // Light theme colors
  lightHeading: "#000000",
  lightText: "#000000",
  lightFieldBorder: "#000000",
  lightFieldText: "#000000",

  // Dark theme colors
  startDark: false,
  darkBg: "#0a0a0a",
  darkHeading: "#ffffff",
  darkText: "#ffffff",
  darkFieldBorder: "#ffffff",
  darkFieldText: "#ffffff",

  // Buttons and inputs
  buttonRadius: "0",
  inputRadius: "0",

  loginTitle: "Access.",
  loginSubtitle: "Enter credentials to proceed.",
  loginSubmit: "Login",
  signupLink: "Create Account",
  forgotText: "Reset",
  signupTitle: "Register.",
  signupSubtitle: "Create a new system identity.",
  signupSubmit: "Register",
  signinLink: "Already registered? Login here.",
  showRemember: true,
  termsUrl: "#",
  privacyUrl: "#",
};

export type Brand = typeof brand;
