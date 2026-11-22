"use client";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowRight, Sun, Moon } from "lucide-react";
import { brand as defaultBrand, type Brand } from "./brand";
import BrandMark from "./brand-mark";
import { brandVars, themeClasses } from "./theme";

interface LoginProps {
  brand?: Brand;
}

export default function Login({ brand = defaultBrand }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDark, setIsDark] = useState(true); // Defaults to dark for Glassmorphism
  const theme = themeClasses(isDark);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className={`min-h-screen relative flex items-center justify-center overflow-hidden font-sans transition-colors duration-500 ${theme.page}`} style={brandVars(brand.accent)}>

      {/* Floating Theme Toggle - Extreme Right */}
      <button onClick={() => setIsDark(!isDark)} className={theme.toggle} aria-label="Toggle theme">
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Animated Background Orbs */}
      {isDark ? (
        <>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--brand)] rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-pink-500 rounded-full mix-blend-screen filter blur-[120px] opacity-30" />
        </>
      ) : (
        <>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-purple-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-30" />
        </>
      )}

      {/* Glassmorphism Card */}
      <div className={theme.card}>
        <BrandMark brand={brand} isDark={isDark} />

        <div className="text-center mb-10">
          <h2 className={theme.heading}>{brand.loginTitle}</h2>
          <p className={theme.subtitle}>{brand.loginSubtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
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

          <div className="flex items-center justify-between text-sm">
            {brand.showRemember ? (
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className={theme.checkbox} />
                <span className={theme.checkboxLabel}>Remember me</span>
              </label>
            ) : (
              <span />
            )}
            <a href="#" className={theme.link}>Forgot password?</a>
          </div>

          <button type="submit" disabled={isLoading} className={`${theme.submitBase} ${theme.submitLogin}`}>
            {isLoading ? (
              <>
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Signing in...
              </>
            ) : (
              <>
                {brand.loginSubmit}
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>

        <p className={theme.footer}>
          {brand.signupPrompt}{" "}
          <Link href="/signup/template-2" className={`font-semibold ${theme.link}`}>
            {brand.signupLink}
          </Link>
        </p>
      </div>
    </div>
  );
}
