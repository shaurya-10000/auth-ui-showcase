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
    <div className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-300 ${theme.page}`} style={brandVars(brand, isDark, brand.accent)}>
      <FontLoader family={brand.fontFamily} />

      {/* Floating Theme Toggle */}
      <button onClick={() => setThemeOverride(!isDark)} className={theme.toggle} aria-label="Toggle theme">
        {isDark ? <Sun size={24} strokeWidth={3} /> : <Moon size={24} strokeWidth={3} />}
      </button>

      <div className={`max-w-md ${theme.card}`}>
        <BrandMark brand={brand} isDark={isDark} />

        <div className={`mb-8 border-b-4 pb-4 transition-colors ${theme.rule}`}>
          <h1 className={theme.heading}>{brand.loginTitle}</h1>
          <p className={theme.subtitle}>{brand.loginSubtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className={theme.fieldLabel}>Email</label>
            <input type="email" required className={theme.input} placeholder="USER@EXAMPLE.COM" />
          </div>

          <div>
            <label className={theme.fieldLabel}>Password</label>
            <input type="password" required className={theme.input} placeholder="********" />
          </div>

          {brand.showRemember && (
            <div className="flex items-center gap-3">
              <input type="checkbox" id="remember" className={theme.checkbox} />
              <label htmlFor="remember" className={theme.checkboxLabel}>Remember me</label>
            </div>
          )}

          <button type="submit" disabled={isLoading} className={`${theme.submitBase} ${theme.submitLogin}`}>
            {isLoading ? "Authenticating..." : brand.loginSubmit}
          </button>
        </form>

        <div className={`mt-8 pt-4 border-t-4 flex justify-between items-center transition-colors ${theme.rule}`}>
          <Link href="/signup/template-3" className={theme.linkButton}>
            {brand.signupLink}
          </Link>
          <a href="#" className={theme.forgotLink}>
            {brand.forgotText}
          </a>
        </div>
      </div>
    </div>
  );
}
