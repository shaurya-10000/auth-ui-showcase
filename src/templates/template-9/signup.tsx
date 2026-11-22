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
        {isDark ? <Sun size={15} className="inline mr-1.5" /> : <Moon size={15} className="inline mr-1.5" />}
        <span>{isDark ? "Daylight" : "Evening"}</span>
      </button>

      <div className={theme.column}>
        <div className={theme.headerBorder}>
          <BrandMark brand={brand} isDark={isDark} />
          <p className={theme.kicker}>{brand.name || "Subscriber Ledger"}</p>
          <h1 className={theme.heading}>{brand.signupTitle}</h1>
          <p className={theme.subtitle}>{brand.signupSubtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className={theme.fieldLabel}>Full Name</label>
            <input
              type="text"
              required
              className={theme.input}
              placeholder="Clara Vance"
            />
          </div>

          <div>
            <label className={theme.fieldLabel}>Email Address</label>
            <input
              type="email"
              required
              className={theme.input}
              placeholder="reader@publication.org"
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
          <Link href="/login/template-9" className={theme.footerLink}>
            {brand.signinLink}
          </Link>
        </p>
      </div>
    </div>
  );
}
