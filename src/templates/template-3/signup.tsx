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
    <div className={`min-h-screen flex items-center justify-center p-4 font-mono py-12 transition-colors duration-300 ${theme.page}`} style={brandVars(brand.accent2)}>

      {/* Floating Theme Toggle */}
      <button onClick={() => setIsDark(!isDark)} className={theme.toggle} aria-label="Toggle theme">
        {isDark ? <Sun size={24} strokeWidth={3} /> : <Moon size={24} strokeWidth={3} />}
      </button>

      <div className={`max-w-lg ${theme.card}`}>
        <BrandMark brand={brand} isDark={isDark} />

        <div className={`mb-8 border-b-4 pb-4 transition-colors ${theme.rule}`}>
          <h1 className="text-4xl font-black uppercase tracking-tighter">{brand.signupTitle}</h1>
          <p className="font-bold mt-2">{brand.signupSubtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-black uppercase mb-2">Full Name</label>
            <input type="text" required className={theme.input} placeholder="JOHN DOE" />
          </div>

          <div>
            <label className="block text-sm font-black uppercase mb-2">Email</label>
            <input type="email" required className={theme.input} placeholder="USER@EXAMPLE.COM" />
          </div>

          <div>
            <label className="block text-sm font-black uppercase mb-2">Password</label>
            <input type="password" required className={theme.input} placeholder="********" />
          </div>

          <div className="flex items-start gap-3">
            <input type="checkbox" required id="terms" className={`${theme.checkbox} mt-1 shrink-0`} />
            <label htmlFor="terms" className="font-bold text-sm uppercase leading-tight">
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
