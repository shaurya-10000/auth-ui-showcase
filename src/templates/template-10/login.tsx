"use client";
import { useState } from "react";
import Link from "next/link";
import { Sun, Moon, Sparkles } from "lucide-react";
import { brand as defaultBrand, type Brand } from "./brand";
import BrandMark from "./brand-mark";
import FontLoader from "./font-loader";
import { brandVars, themeClasses } from "./theme";

interface LoginProps {
  brand?: Brand;
}

export default function Login({ brand = defaultBrand }: LoginProps) {
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
    <div className={theme.page} style={brandVars(brand, isDark)}>
      <FontLoader family={brand.fontFamily} />

      {/* Aurora Mesh Orbs */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -top-24 -left-20 h-96 w-96 rounded-full blur-3xl ${theme.orbPrimary}`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full blur-3xl ${theme.orbSecondary}`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -bottom-28 left-1/3 h-96 w-96 rounded-full blur-3xl ${theme.orbTertiary}`}
      />

      <button
        onClick={() => setThemeOverride(!isDark)}
        className={theme.toggle}
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      <div className={theme.card}>
        <BrandMark brand={brand} isDark={isDark} />

        <div className="mb-7">
          <h1 className={theme.heading}>{brand.loginTitle}</h1>
          <p className={theme.subtitle}>{brand.loginSubtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className={theme.fieldLabel}>Email</label>
            <input
              type="email"
              required
              className={theme.input}
              placeholder="you@aurora.dev"
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

          <div className="flex items-center justify-between pt-1">
            {brand.showRemember ? (
              <label className={theme.checkboxLabel}>
                <input type="checkbox" className={theme.checkbox} />
                <span>Remember me</span>
              </label>
            ) : (
              <span />
            )}
            <a href="#" className={theme.link}>Forgot password?</a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`${theme.submit} mt-2 flex items-center justify-center gap-2`}
          >
            <Sparkles size={16} />
            <span>{isLoading ? "Signing in..." : brand.loginSubmit}</span>
          </button>
        </form>

        <p className={theme.footer}>
          {brand.signupPrompt}{" "}
          <Link href="/signup/template-10" className={theme.footerLink}>
            {brand.signupLink}
          </Link>
        </p>
      </div>
    </div>
  );
}
