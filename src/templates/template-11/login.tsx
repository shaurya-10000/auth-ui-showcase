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

      <button
        onClick={() => setThemeOverride(!isDark)}
        className={theme.toggle}
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={14} className="inline mr-1.5" /> : <Moon size={14} className="inline mr-1.5" />}
        <span>{isDark ? "Light" : "Dark"}</span>
      </button>

      <div className={theme.frame}>
        <div className={theme.grid}>
          <div className={theme.metaCol}>
            <div>
              <BrandMark brand={brand} isDark={isDark} />
              <p className={theme.indexTag}>01 / AUTHENTICATION</p>
              <h1 className={theme.heading}>{brand.loginTitle}</h1>
              <p className={theme.subtitle}>{brand.loginSubtitle}</p>
            </div>
            <p className={`${theme.fieldIndex} mt-8`}>GRID 12-COL // 01</p>
          </div>

          <div className={theme.formCol}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className={theme.fieldLabel}>Email Address</label>
                  <span className={theme.fieldIndex}>01</span>
                </div>
                <input
                  type="email"
                  required
                  className={theme.input}
                  placeholder="name@studio.ch"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className={theme.fieldLabel}>Password</label>
                  <span className={theme.fieldIndex}>02</span>
                </div>
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
                    <span>Remember session</span>
                  </label>
                ) : (
                  <span />
                )}
                <a href="#" className={theme.link}>Reset password</a>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`${theme.submit} mt-2`}
              >
                {isLoading ? "Signing in..." : brand.loginSubmit}
              </button>
            </form>

            <div className={theme.footer}>
              <span>{brand.signupPrompt}</span>
              <Link href="/signup/template-11" className={theme.footerLink}>
                {brand.signupLink}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
