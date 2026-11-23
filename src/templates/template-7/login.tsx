"use client";
import { useState } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { brand as defaultBrand, type Brand } from "./brand";
import BrandMark from "./brand-mark";
import FontLoader from "./font-loader";
import { brandVars, themeClasses } from "./theme";

interface LoginProps {
  brand?: Brand;
}

export default function Login({ brand = defaultBrand }: LoginProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [themeOverride, setThemeOverride] = useState<boolean | null>(null);
  const effectiveDark = themeOverride ?? brand.startDark ?? isDark;
  const theme = themeClasses(effectiveDark);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className={theme.page} style={brandVars(brand, effectiveDark)}>
      <FontLoader family={brand.fontFamily} />

      {/* Theme Toggle */}
      <button
        onClick={() => {
          const next = !effectiveDark;
          setIsDark(next);
          setThemeOverride(next);
        }}
        className={theme.toggle}
        aria-label="Toggle theme"
      >
        {effectiveDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <div className={theme.card}>
        <BrandMark brand={brand} isDark={effectiveDark} />

        <div className="mb-8">
          <span className={theme.badge}>
            {brand.name || "SYSTEM ACCESS"}
          </span>
          <h1 className={theme.heading}>{brand.loginTitle}</h1>
          <p className={theme.subtitle}>{brand.loginSubtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className={theme.fieldLabel}>Email Address</label>
            <input
              type="email"
              required
              className={theme.input}
              placeholder="you@domain.com"
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
                Remember me
              </label>
            ) : (
              <span />
            )}
            <a href="#" className={theme.link}>Forgot password?</a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={theme.submit}
          >
            {isLoading ? "AUTHENTICATING..." : brand.loginSubmit}
          </button>
        </form>

        <p className={theme.footer}>
          {brand.signupPrompt}{" "}
          <Link href="/signup/template-7" className={theme.footerLink}>
            {brand.signupLink}
          </Link>
        </p>
      </div>
    </div>
  );
}
