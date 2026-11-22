"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sun, Moon } from "lucide-react";
import { brand as defaultBrand, type Brand } from "./brand";
import BrandMark from "./brand-mark";
import { brandVars, themeClasses } from "./theme";

interface SignupProps {
  brand?: Brand;
}

export default function Signup({ brand = defaultBrand }: SignupProps) {
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
        <div className={theme.leftSignupCard}>
          <div>
            <BrandMark brand={brand} isDark={isDark} forceLight />
            <h1 className="text-4xl font-semibold tracking-tight text-white mb-4 leading-tight whitespace-pre-line">
              {brand.signupHeadline}
            </h1>
            <p className="text-gray-400 text-lg max-w-sm">
              {brand.signupSubheadline}
            </p>
          </div>
        </div>

        {/* Right Card (Form) */}
        <div className={theme.formCard}>
          <h2 className={theme.heading}>{brand.signupTitle}</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className={theme.fieldLabel}>Full Name</label>
              <input
                type="text"
                required
                className={theme.input}
                placeholder="John Doe"
              />
            </div>

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

            <button
              type="submit"
              disabled={isLoading}
              className={`${theme.submit} mt-4`}
            >
              {isLoading ? "Creating account..." : brand.signupSubmit}
              {!isLoading && <ArrowRight size={18} />}
            </button>
          </form>

          <p className={theme.footer}>
            {brand.signinPrompt}{" "}
            <Link href="/login/template-6" className={theme.footerLink}>
              {brand.signinLink}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
