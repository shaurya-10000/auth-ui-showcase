"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sun, Moon } from "lucide-react";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 sm:p-8 font-sans transition-colors duration-300 ${isDark ? 'bg-neutral-950 text-white' : 'bg-[#f2f2f0] text-[#111111]'}`}>

      {/* Floating Theme Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-6 right-6 z-50 h-10 w-10 flex items-center justify-center border transition-colors ${isDark ? 'border-neutral-700 bg-neutral-900 text-amber-300 hover:bg-neutral-800' : 'border-[#111111] bg-white text-[#111111] hover:bg-neutral-100'}`}
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      {/* Swiss Modular Grid Frame */}
      <div className={`w-full max-w-4xl border grid grid-cols-1 md:grid-cols-12 transition-colors ${isDark ? 'border-neutral-800 bg-neutral-900' : 'border-[#111111] bg-white'}`}>

        {/* Left Index & Brand Column */}
        <div className={`md:col-span-5 flex flex-col justify-between border-b md:border-b-0 md:border-r ${isDark ? 'border-neutral-800' : 'border-[#111111]'}`}>
          <div className={`p-6 border-b flex items-center justify-between text-xs font-bold tracking-widest uppercase ${isDark ? 'border-neutral-800 text-neutral-400' : 'border-[#111111] text-[#111111]'}`}>
            <span>SYS / 11</span>
            <span>ZURICH GRID</span>
          </div>

          <div className="p-6 sm:p-8 my-auto">
            <div className="h-3 w-12 bg-[#e11d48] mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.02] mb-4">
              Sign in.
            </h1>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
              Strict typographic hierarchy, sharp geometry, and zero visual noise.
            </p>
          </div>

          <div className={`p-6 border-t grid grid-cols-2 text-xs font-medium ${isDark ? 'border-neutral-800 text-neutral-400' : 'border-[#111111] text-neutral-600'}`}>
            <div>RATIO: 1:1.618</div>
            <div className="text-right">V.2026</div>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="md:col-span-7 flex flex-col justify-between">
          <div className={`p-6 border-b text-xs font-bold tracking-widest uppercase ${isDark ? 'border-neutral-800 text-neutral-400' : 'border-[#111111] text-[#111111]'}`}>
            AUTHENTICATION
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5 my-auto">
            <div>
              <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-neutral-300' : 'text-[#111111]'}`}>
                01 / Email Address
              </label>
              <input
                type="email"
                required
                placeholder="name@studio.ch"
                className={`w-full border px-3.5 py-2.5 text-sm focus:outline-none transition-colors ${isDark ? 'border-neutral-700 bg-neutral-950 text-white placeholder-neutral-600 focus:border-[#e11d48]' : 'border-[#111111] bg-[#fafaf9] text-[#111111] placeholder-neutral-400 focus:border-[#e11d48]'}`}
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className={`block text-xs font-bold uppercase tracking-wider ${isDark ? 'text-neutral-300' : 'text-[#111111]'}`}>
                  02 / Password
                </label>
                <a href="#" className="text-xs font-bold uppercase tracking-wider text-[#e11d48] hover:underline">
                  Reset
                </a>
              </div>
              <input
                type="password"
                required
                placeholder="••••••••"
                className={`w-full border px-3.5 py-2.5 text-sm focus:outline-none transition-colors ${isDark ? 'border-neutral-700 bg-neutral-950 text-white placeholder-neutral-600 focus:border-[#e11d48]' : 'border-[#111111] bg-[#fafaf9] text-[#111111] placeholder-neutral-400 focus:border-[#e11d48]'}`}
              />
            </div>

            <div className="flex items-center gap-2.5 pt-1">
              <input
                type="checkbox"
                id="swiss-remember"
                className="h-4 w-4 accent-[#e11d48]"
              />
              <label htmlFor="swiss-remember" className={`text-xs font-medium ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                Keep session active
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#e11d48] hover:bg-[#be123c] text-white font-bold text-xs uppercase tracking-widest py-3.5 px-5 flex items-center justify-between transition-colors disabled:opacity-60"
            >
              <span>{isLoading ? "Authenticating..." : "Continue"}</span>
              <ArrowRight size={16} />
            </button>
          </form>

          <div className={`p-6 border-t flex items-center justify-between text-xs ${isDark ? 'border-neutral-800 text-neutral-400' : 'border-[#111111] text-neutral-600'}`}>
            <span>NO ACCOUNT?</span>
            <Link href="/signup/template-11" className={`font-bold uppercase tracking-wider underline underline-offset-4 ${isDark ? 'text-white hover:text-[#e11d48]' : 'text-[#111111] hover:text-[#e11d48]'}`}>
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}