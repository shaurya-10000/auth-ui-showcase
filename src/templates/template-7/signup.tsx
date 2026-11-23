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
    <div className={`${theme.page} py-12`} style={brandVars(brand, effectiveDark)}>
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

        <div className="mb-6">
          <span
            className="inline-block border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-wider mb-3 shadow-[3px_3px_0px_#000000]"
            style={{ backgroundColor: "#a8dadc", color: "#000000" }}
          >
            NEW MEMBER
          </span>
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
              placeholder="Alex Rivera"
            />
          </div>

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

          <button
            type="submit"
            disabled={isLoading}
            className={`${theme.submit} mt-2`}
          >
            {isLoading ? "CREATING..." : brand.signupSubmit}
          </button>
        </form>

        <p className={theme.footer}>
          {brand.signinPrompt}{" "}
          <Link href="/login/template-7" className={theme.footerLink}>
            {brand.signinLink}
          </Link>
        </p>
      </div>
    </div>
  );
}
