"use client";
import { useState } from "react";
import Link from "next/link";
import { Sun, Moon, ArrowRight } from "lucide-react";
import { brand as defaultBrand, type Brand } from "./brand";
import BrandMark from "./brand-mark";
import { brandVars, motionKeyframes, themeClasses } from "./theme";

interface LoginProps {
  brand?: Brand;
}

export default function Login({ brand = defaultBrand }: LoginProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const theme = themeClasses(isDark);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className={theme.page} style={brandVars(brand.accent)}>
      <style>{motionKeyframes}</style>

      <div aria-hidden="true" className={theme.auraTop} />
      <div aria-hidden="true" className={theme.auraBottom} />

      <button
        onClick={() => setIsDark(!isDark)}
        className={theme.toggle}
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      <div className={theme.card}>
        <div className={theme.stagger1}>
          <BrandMark brand={brand} isDark={isDark} />
          <div className="mb-7">
            <h1 className={theme.heading}>{brand.loginTitle}</h1>
            <p className={theme.subtitle}>{brand.loginSubtitle}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className={theme.stagger2}>
            <label className={theme.fieldLabel}>Email Address</label>
            <input
              type="email"
              required
              className={theme.input}
              placeholder="name@company.com"
            />
          </div>

          <div className={theme.stagger3}>
            <label className={theme.fieldLabel}>Password</label>
            <input
              type="password"
              required
              className={theme.input}
              placeholder="••••••••"
            />
          </div>

          <div className={`flex items-center justify-between pt-1 ${theme.stagger3}`}>
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

          <div className={theme.stagger4}>
            <button
              type="submit"
              disabled={isLoading}
              className={`${theme.submit} mt-2 flex items-center justify-center gap-2`}
            >
              <span>{isLoading ? "Signing in..." : brand.loginSubmit}</span>
              {!isLoading && (
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              )}
            </button>
          </div>
        </form>

        <p className={`${theme.footer} ${theme.stagger4}`}>
          {brand.signupPrompt}{" "}
          <Link href="/signup/template-17" className={theme.footerLink}>
            {brand.signupLink}
          </Link>
        </p>
      </div>
    </div>
  );
}
