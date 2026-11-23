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
    <div className={`min-h-screen flex items-center justify-center p-4 py-12 transition-colors duration-300 ${theme.page}`} style={brandVars(brand, isDark, brand.accent2)}>
      <FontLoader family={brand.fontFamily} />

      {/* Floating Theme Toggle */}
      <button onClick={() => setThemeOverride(!isDark)} className={theme.toggle} aria-label="Toggle theme">
        {isDark ? <Sun size={24} strokeWidth={3} /> : <Moon size={24} strokeWidth={3} />}
      </button>

      <div className={`max-w-lg ${theme.card}`}>
        <BrandMark brand={brand} isDark={isDark} />

        <div className={`mb-8 border-b-4 pb-4 transition-colors ${theme.rule}`}>
          <h1 className={theme.heading}>{brand.signupTitle}</h1>
          <p className={theme.subtitle}>{brand.signupSubtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className={theme.fieldLabel}>Full Name</label>
            <input type="text" required className={theme.input} placeholder="JOHN DOE" />
          </div>

          <div>
            <label className={theme.fieldLabel}>Email</label>
            <input type="email" required className={theme.input} placeholder="USER@EXAMPLE.COM" />
          </div>

          <div>
            <label className={theme.fieldLabel}>Password</label>
            <input type="password" required className={theme.input} placeholder="********" />
          </div>

          <div className="flex items-start gap-3">
            <input type="checkbox" required id="terms" className={`${theme.checkbox} mt-1 shrink-0`} />
            <label htmlFor="terms" className={theme.termsLabel}>
              I agree to the <a href={brand.termsUrl || "#"} className={theme.termsLink}>Terms</a> and <a href={brand.privacyUrl || "#"} className={theme.termsLink}>Conditions</a>.
            </label>
          </div>

          <button type="submit" disabled={isLoading} className={`${theme.submitBase} ${theme.submitSignup} mt-4`}>
            {isLoading ? "Registering..." : brand.signupSubmit}
          </button>
        </form>

        <div className={`mt-8 pt-4 border-t-4 text-center transition-colors ${theme.rule}`}>
          <Link href="/login/template-3" className={theme.linkButton}>
            {brand.signinLink}
          </Link>
        </div>
      </div>
    </div>
  );
}
