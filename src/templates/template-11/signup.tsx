"use client";
import { useState } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
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
    <div className={`${theme.page} py-12`} style={brandVars(brand.accent)}>
      <button
        onClick={() => setIsDark(!isDark)}
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
              <p className={theme.indexTag}>02 / REGISTRATION</p>
              <h1 className={theme.heading}>{brand.signupTitle}</h1>
              <p className={theme.subtitle}>{brand.signupSubtitle}</p>
            </div>
            <p className={`${theme.fieldIndex} mt-8`}>GRID 12-COL // 02</p>
          </div>

          <div className={theme.formCol}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className={theme.fieldLabel}>Full Name</label>
                  <span className={theme.fieldIndex}>01</span>
                </div>
                <input
                  type="text"
                  required
                  className={theme.input}
                  placeholder="Lukas Meier"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className={theme.fieldLabel}>Email Address</label>
                  <span className={theme.fieldIndex}>02</span>
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
                  <span className={theme.fieldIndex}>03</span>
                </div>
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
                {isLoading ? "Creating..." : brand.signupSubmit}
              </button>
            </form>

            <div className={theme.footer}>
              <span>{brand.signinPrompt}</span>
              <Link href="/login/template-11" className={theme.footerLink}>
                {brand.signinLink}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
