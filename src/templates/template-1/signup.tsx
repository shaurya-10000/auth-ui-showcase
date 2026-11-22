"use client";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowRight, Sun, Moon } from "lucide-react";
import { brand as defaultBrand, type Brand } from "./brand";
import BrandMark from "./brand-mark";
import { brandVars, themeClasses } from "./theme";

interface SignupProps {
  brand?: Brand;
}

export default function Signup({ brand = defaultBrand }: SignupProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const theme = themeClasses(isDark);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="min-h-screen flex font-sans transition-colors duration-300" style={brandVars(brand.accent)}>

      {/* Floating Theme Toggle - Extreme Right */}
      <button onClick={() => setIsDark(!isDark)} className={theme.toggle} aria-label="Toggle theme">
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Left Side - Form */}
      <div className={`flex-1 flex flex-col justify-center px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 w-full lg:w-1/2 transition-colors duration-300 ${theme.panel}`}>
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <BrandMark brand={brand} isDark={isDark} />

          <div className="mb-10">
            <h2 className={`text-3xl font-bold tracking-tight ${theme.heading}`}>{brand.signupTitle}</h2>
            <p className={`mt-2 text-sm ${theme.muted}`}>
              {brand.signinPrompt}{" "}
              <Link href="/login/template-1" className={`font-semibold ${theme.link}`}>
                {brand.signinLink}
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <input type="text" id="name" required className={theme.input} placeholder=" " />
              <label htmlFor="name" className={theme.label}>Full Name</label>
            </div>

            <div className="relative">
              <input type="email" id="email" required className={theme.input} placeholder=" " />
              <label htmlFor="email" className={theme.label}>Email address</label>
            </div>

            <div className="relative">
              <input type={showPassword ? "text" : "password"} id="password" required className={`${theme.input} pr-10`} placeholder=" " />
              <label htmlFor="password" className={theme.label}>Password</label>
              <button type="button" onClick={() => setShowPassword(!showPassword)} className={theme.eye} aria-label={showPassword ? "Hide password" : "Show password"}>
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="flex items-start">
              <div className="flex h-6 items-center">
                <input id="terms" name="terms" type="checkbox" required className={theme.checkbox} />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label htmlFor="terms" className={`font-medium ${theme.checkboxLabel}`}>
                  I agree to the <a href={brand.termsUrl || "#"} className={theme.link}>Terms</a> and <a href={brand.privacyUrl || "#"} className={theme.link}>Privacy Policy</a>
                </label>
              </div>
            </div>

            <button type="submit" disabled={isLoading} className={`${theme.submit} mt-2`}>
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Creating account...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  {brand.signupSubmit}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="relative hidden w-0 flex-1 lg:block">
        <div className={`absolute inset-0 h-full w-full overflow-hidden ${theme.visual}`}>
          <div className={`absolute inset-0 bg-gradient-to-tr from-[var(--brand-deep)] via-slate-900 to-[var(--brand-deep-alt)] opacity-80 transition-opacity duration-300 ${theme.gradientOpacity}`} />
          <div className="absolute inset-0 flex flex-col justify-center px-16 text-white z-10">
            <h1 className="text-5xl font-extrabold tracking-tight mb-6 leading-tight whitespace-pre-line">{brand.signupHeadline}</h1>
            <p className="text-lg text-slate-300 max-w-md">{brand.signupSubheadline}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
