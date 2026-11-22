// Brand settings. Edit these values to change the text, links and colors of this template.
export const brand = {
  name: "",
  logoUrl: "",
  accent: "#22c55e",
  accentLight: "#1a472a",
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
