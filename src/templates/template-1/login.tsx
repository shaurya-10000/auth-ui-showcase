"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, ArrowRight, Sun, Moon } from "lucide-react";
import { brand as defaultBrand, type Brand } from "./brand";
import BrandMark from "./brand-mark";
import FontLoader from "./font-loader";
import { brandVars, themeClasses } from "./theme";

interface LoginProps {
  brand?: Brand;
}

export default function Login({ brand = defaultBrand }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
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
    <div className="min-h-screen flex font-sans transition-colors duration-300" style={brandVars(brand, isDark)}>
      <FontLoader family={brand.fontFamily} />

      {/* Floating Theme Toggle - Extreme Right */}
      <button onClick={() => setThemeOverride(!isDark)} className={theme.toggle} aria-label="Toggle theme">
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Left Side - Form */}
      <div className={`flex-1 flex flex-col justify-center px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 w-full lg:w-1/2 transition-colors duration-300 ${theme.panel}`}>
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <BrandMark brand={brand} />

          <div className="mb-10">
            <h2 className={theme.title}>{brand.loginTitle}</h2>
            <p className={`mt-2 ${theme.text} ${theme.muted}`}>
              {brand.signupPrompt}{" "}
              <Link href="/signup/template-1" className={`font-semibold ${theme.link}`}>
                {brand.signupLink}
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input type="email" id="email" required className={theme.input} placeholder=" " />
              <label htmlFor="email" className={theme.label}>Email address</label>
            </div>

            <div className="relative">
              <input type={showPassword ? "text" : "password"} id="password" required className={`${theme.input} pr-10`} placeholder=" " />
              <label htmlFor="password" className={theme.label}>Password</label>
              <button type="button" onClick={() => setShowPassword(!showPassword)} className={theme.eye} aria-label={showPassword ? "Hide password" : "Show password"}>
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="flex items-center justify-between">
              {brand.showRemember ? (
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className={theme.checkbox} />
                  <label htmlFor="remember-me" className={`ml-2 block ${theme.text} ${theme.checkboxLabel}`}>Remember me</label>
                </div>
              ) : (
                <span />
              )}
              <div className={theme.text}>
                <a href="#" className={`font-semibold ${theme.link}`}>Forgot password?</a>
              </div>
            </div>

            <button type="submit" disabled={isLoading} className={theme.submit}>
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Signing in...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  {brand.loginSubmit}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              )}
            </button>
          </form>

          {brand.showSocial && (
            <div className="mt-10">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className={`w-full border-t ${theme.divider}`} />
                </div>
                <div className={`relative flex justify-center ${theme.text} font-medium leading-6`}>
                  <span className={`px-6 ${theme.dividerText}`}>Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <button className={theme.social}>
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                  Google
                </button>
                <button className={theme.social}>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                  GitHub
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="relative hidden w-0 flex-1 lg:block">
        <div className={`absolute inset-0 h-full w-full overflow-hidden ${theme.visual}`}>
          <div className={`absolute inset-0 bg-gradient-to-tr from-[var(--panel-from)] via-[var(--panel-via)] to-[var(--panel-to)] opacity-80 transition-opacity duration-300 ${theme.gradientOpacity}`} />
          <div className="absolute inset-0 flex flex-col justify-center px-16 z-10 text-[color:var(--panel-text)]">
            <h1 className="mb-6 whitespace-pre-line font-extrabold leading-tight tracking-tight text-[length:var(--hero-size)]">{brand.headline}</h1>
            <p className="max-w-md text-[length:var(--hero-text-size)] text-[color:var(--panel-muted)]">{brand.subheadline}</p>
            {brand.trustText && (
              <div className="mt-12 flex items-center gap-4">
                <div className="flex -space-x-4">
                  <Image className="h-10 w-10 rounded-full border-2 border-slate-900 object-cover" src="https://i.pravatar.cc/100?img=1" alt="Avatar 1" width={40} height={40} />
                  <Image className="h-10 w-10 rounded-full border-2 border-slate-900 object-cover" src="https://i.pravatar.cc/100?img=2" alt="Avatar 2" width={40} height={40} />
                  <Image className="h-10 w-10 rounded-full border-2 border-slate-900 object-cover" src="https://i.pravatar.cc/100?img=3" alt="Avatar 3" width={40} height={40} />
                </div>
                <p className="text-sm font-medium text-[color:var(--panel-muted)]">{brand.trustText}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
