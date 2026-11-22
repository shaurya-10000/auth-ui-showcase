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
  const [isDark, setIsDark] = useState(true);
  const theme = themeClasses(isDark);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 font-mono transition-colors duration-300 ${theme.page}`} style={brandVars(brand.accent, brand.accentLight)}>

      {/* Floating Theme Toggle */}
      <button onClick={() => setIsDark(!isDark)} className={theme.toggle} aria-label="Toggle theme">
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <div className={`max-w-lg ${theme.card} ${theme.cardGlow}`}>

        <div className={theme.titleBar}>
          <span className="text-xs uppercase tracking-widest">{brand.signupFile}</span>
          <div className="flex gap-1.5">
            <div className={theme.dotDim} />
            <div className={theme.dotDim} />
            <div className={theme.dotBright} />
          </div>
        </div>

        <div className="p-8">
          <BrandMark brand={brand} isDark={isDark} />

          <div className="mb-8">
            <h1 className="text-2xl font-bold uppercase tracking-widest">{brand.signupTitle}</h1>
            <p className={theme.subtitle}>{brand.signupSubtitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2 opacity-80">Alias</label>
              <input type="text" required className={theme.input} placeholder="neo" />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest mb-2 opacity-80">Comm-Link (Email)</label>
              <input type="email" required className={theme.input} placeholder="neo@matrix.net" />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest mb-2 opacity-80">Passphrase</label>
              <input type="password" required className={theme.input} placeholder="********" />
            </div>

            <button type="submit" disabled={isLoading} className={`${theme.submit} mt-4`}>
              {isLoading ? "[ GENERATING... ]" : brand.signupSubmit}
            </button>
          </form>

          <div className={`mt-8 pt-6 border-t text-center text-xs transition-colors ${theme.rule}`}>
            <Link href="/login/template-4" className={theme.link}>
              {brand.signinLink}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
