// Brand settings. Edit these values to change the text, links and colors of this template.
export const brand = {
  name: "",
  logoUrl: "",
  accent: "#22c55e",
  accentLight: "#1a472a",

  // Typography. Sizes are in px. fontFamily is a Google Font name, or "Default" for the system font.
  fontFamily: "Default",
  headingWeight: "700",
  textSize: "12",
  headingSize: "24",

  // Light theme colors
  lightBg: "#e8e4d8",
  lightHeading: "#1a472a",
  lightText: "#1a472a",
  lightFieldBorder: "#1a472a",
  lightFieldText: "#1a472a",

  // Dark theme colors
  startDark: true,
  darkBg: "#000000",
  darkHeading: "#22c55e",
  darkText: "#22c55e",
  darkFieldBorder: "#22c55e",
  darkFieldText: "#22c55e",

  // Buttons and inputs
  buttonRadius: "0",
  inputRadius: "0",

  loginTitle: "System Access",
  loginSubtitle: "Awaiting credentials...",
  loginFile: "sys.login.sh",
  loginSubmit: "[ INITIALIZE LOGIN ]",
  signupLink: "Create Identity",
  forgotText: "Reset Passphrase",
  signupTitle: "New Identity",
  signupSubtitle: "Generating new user profile...",
  signupFile: "sys.register.sh",
  signupSubmit: "[ INITIALIZE REGISTRATION ]",
  signinLink: "Identity already exists? Login here.",
};

export type Brand = typeof brand;
