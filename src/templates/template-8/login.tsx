"use client";
import { useState } from "react";
import Link from "next/link";
import { Sun, Moon, Lock } from "lucide-react";
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
        {isDark ? <Sun size={15} /> : <Moon size={15} />}
        <span>{isDark ? "Light" : "Dark"}</span>
      </button>

      <div className={theme.bezel}>
        <div className={theme.plate}>
          <BrandMark brand={brand} isDark={isDark} />

          <div className="mb-6">
            <h1 className={theme.heading}>{brand.loginTitle}</h1>
            <p className={theme.subtitle}>{brand.loginSubtitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className={theme.fieldLabel}>Email Address</label>
              <input
                type="email"
                required
                className={theme.input}
                placeholder="operator@domain.com"
              />
            </div>

            <div>
              <label className={theme.fieldLabel}>Passkey</label>
              <input
                type="password"
                required
                className={theme.input}
                placeholder="••••••••••••"
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
              <a href="#" className={theme.link}>Reset passkey</a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`${theme.submit} mt-2 flex items-center justify-center gap-2`}
            >
              <Lock size={15} />
              <span>{isLoading ? "Verifying..." : brand.loginSubmit}</span>
            </button>
          </form>

          <p className={theme.footer}>
            {brand.signupPrompt}{" "}
            <Link href="/signup/template-8" className={theme.footerLink}>
              {brand.signupLink}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
