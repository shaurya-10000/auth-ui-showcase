"use client";
import { useState } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { brand as defaultBrand, type Brand } from "./brand";
import BrandMark from "./brand-mark";
import { brandVars, themeClasses } from "./theme";

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
    <div className={`min-h-screen flex items-center justify-center p-4 font-mono transition-colors duration-300 ${theme.page}`} style={brandVars(brand.accent)}>

      {/* Floating Theme Toggle */}
      <button onClick={() => setIsDark(!isDark)} className={theme.toggle} aria-label="Toggle theme">
        {isDark ? <Sun size={24} strokeWidth={3} /> : <Moon size={24} strokeWidth={3} />}
      </button>

      <div className={`max-w-md ${theme.card}`}>
        <BrandMark brand={brand} isDark={isDark} />

        <div className={`mb-8 border-b-4 pb-4 transition-colors ${theme.rule}`}>
          <h1 className="text-4xl font-black uppercase tracking-tighter">{brand.loginTitle}</h1>
          <p className="font-bold mt-2">{brand.loginSubtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-black uppercase mb-2">Email</label>
            <input type="email" required className={theme.input} placeholder="USER@EXAMPLE.COM" />
          </div>

          <div>
            <label className="block text-sm font-black uppercase mb-2">Password</label>
            <input type="password" required className={theme.input} placeholder="********" />
          </div>

          {brand.showRemember && (
            <div className="flex items-center gap-3">
              <input type="checkbox" id="remember" className={theme.checkbox} />
              <label htmlFor="remember" className="font-bold text-sm uppercase">Remember me</label>
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
          <a href="#" className="font-black text-sm uppercase hover:underline decoration-4 underline-offset-4">
            {brand.forgotText}
          </a>
        </div>
      </div>
    </div>
  );
}
