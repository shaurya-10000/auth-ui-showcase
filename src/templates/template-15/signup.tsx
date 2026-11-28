"use client";
import { useState } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { brand as defaultBrand, type Brand } from "./brand";
import BrandMark from "./brand-mark";
import FontLoader from "./font-loader";
import { brandVars, themeClasses } from "./theme";

interface SignupProps {
  brand?: Brand;
}

export default function Signup({ brand = defaultBrand }: SignupProps) {
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
    <div className={`${theme.page} py-12`} style={brandVars(brand, isDark)}>
      <FontLoader family={brand.fontFamily} />

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
          <h1 className={theme.heading}>{brand.signupTitle}</h1>
          <p className={theme.subtitle}>{brand.signupSubtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className={theme.fieldLabel}>Full Name</label>
            <input
              type="text"
              required
              className={theme.input}
              placeholder="Hazel Green"
            />
          </div>

          <div>
            <label className={theme.fieldLabel}>Email Address</label>
            <input
              type="email"
              required
              className={theme.input}
              placeholder="hello@botanical.org"
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
            className={`${theme.submit} mt-2`}
          >
            {isLoading ? "Creating account..." : brand.signupSubmit}
          </button>
        </form>

        <p className={theme.footer}>
          {brand.signinPrompt}{" "}
          <Link href="/login/template-15" className={theme.footerLink}>
            {brand.signinLink}
          </Link>
        </p>
      </div>
    </div>
  );
}
