"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sun, Moon } from "lucide-react";
import { brand as defaultBrand, type Brand } from "./brand";
import BrandMark from "./brand-mark";
import { brandVars, themeClasses } from "./theme";

interface LoginProps {
  brand?: Brand;
}

export default function Login({ brand = defaultBrand }: LoginProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const theme = themeClasses(isDark);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className={theme.page} style={brandVars(brand.accent)}>

      {/* Floating Theme Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className={theme.toggle}
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <div className={theme.grid}>

        {/* Left Card (Branding) */}
        <div className={theme.leftLoginCard}>
          <div>
            <BrandMark brand={brand} isDark={isDark} />
            <h1 className={`${theme.leftHeading} whitespace-pre-line`}>
              {brand.headline}
            </h1>
            <p className={theme.leftSubheadline}>
              {brand.subheadline}
            </p>
          </div>
          {brand.trustText && (
            <div className="flex items-center gap-3 mt-8">
              <div className="flex -space-x-3">
                <div className={`w-8 h-8 rounded-full bg-blue-500 border-2 ${theme.avatarBorder}`} />
                <div className={`w-8 h-8 rounded-full bg-green-500 border-2 ${theme.avatarBorder}`} />
                <div className={`w-8 h-8 rounded-full bg-purple-500 border-2 ${theme.avatarBorder}`} />
              </div>
              <p className={theme.trustText}>{brand.trustText}</p>
            </div>
          )}
        </div>

        {/* Right Card (Form) */}
        <div className={theme.formCard}>
          <h2 className={theme.heading}>{brand.loginTitle}</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className={theme.fieldLabel}>Email</label>
              <input
                type="email"
                required
                className={theme.input}
                placeholder="name@example.com"
              />
            </div>

            <div>
              <label className={theme.fieldLabel}>Password</label>
              <input
                type="password"
                required
                className={theme.input}
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              {brand.showRemember ? (
                <label className={theme.checkboxLabel}>
                  <input type="checkbox" className={theme.checkbox} />
                  Remember me
                </label>
              ) : (
                <span />
              )}
              <a href="#" className={theme.forgotLink}>Forgot password?</a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`${theme.submit} mt-4`}
            >
              {isLoading ? "Signing in..." : brand.loginSubmit}
              {!isLoading && <ArrowRight size={18} />}
            </button>
          </form>

          <p className={theme.footer}>
            {brand.signupPrompt}{" "}
            <Link href="/signup/template-6" className={theme.footerLink}>
              {brand.signupLink}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
