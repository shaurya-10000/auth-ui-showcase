"use client";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowRight, Sun, Moon } from "lucide-react";
import { brand as defaultBrand, type Brand } from "./brand";
import BrandMark from "./brand-mark";
import FontLoader from "./font-loader";
import { brandVars, themeClasses } from "./theme";

interface SignupProps {
  brand?: Brand;
}

export default function Signup({ brand = defaultBrand }: SignupProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [themeOverride, setThemeOverride] = useState<boolean | null>(null);
  const isDark = themeOverride ?? brand.startDark;
  const theme = themeClasses(isDark);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className={`min-h-screen relative flex items-center justify-center overflow-hidden font-sans py-12 transition-colors duration-500 ${theme.page}`} style={brandVars(brand, isDark)}>
      <FontLoader family={brand.fontFamily} />

      {/* Floating Theme Toggle - Extreme Right */}
      <button onClick={() => setThemeOverride(!isDark)} className={theme.toggle} aria-label="Toggle theme">
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Animated Background Orbs */}
      {isDark ? (
        <>
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-[var(--brand)] rounded-full mix-blend-screen filter blur-[150px] opacity-30" />
        </>
      ) : (
        <>
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-[var(--brand-softer)] rounded-full mix-blend-multiply filter blur-[150px] opacity-30" />
        </>
      )}

      {/* Glassmorphism Card */}
      <div className={`${theme.card} my-8`}>
        <BrandMark brand={brand} isDark={isDark} />

        <div className="text-center mb-8">
          <h2 className={theme.heading}>{brand.signupTitle}</h2>
          <p className={theme.subtitle}>{brand.signupSubtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className={theme.fieldLabel}>Full Name</label>
            <input type="text" required className={theme.input} placeholder="John Doe" />
          </div>

          <div>
            <label className={theme.fieldLabel}>Email address</label>
            <input type="email" required className={theme.input} placeholder="you@example.com" />
          </div>

          <div>
            <label className={theme.fieldLabel}>Password</label>
            <div className="relative">
              <input type={showPassword ? "text" : "password"} required className={`${theme.input} pr-12`} placeholder="••••••••" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className={theme.eye} aria-label={showPassword ? "Hide password" : "Show password"}>
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button type="submit" disabled={isLoading} className={`${theme.submitBase} ${theme.submitSignup} mt-2`}>
            {isLoading ? (
              <>
                <div className={`h-5 w-5 animate-spin rounded-full border-2 border-t-transparent ${isDark ? "border-black" : "border-white"}`} />
                Creating account...
              </>
            ) : (
              <>
                {brand.signupSubmit}
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>

        <p className={theme.footer}>
          {brand.signinPrompt}{" "}
          <Link href="/login/template-2" className={`font-semibold ${theme.link}`}>
            {brand.signinLink}
          </Link>
        </p>
      </div>
    </div>
  );
}
