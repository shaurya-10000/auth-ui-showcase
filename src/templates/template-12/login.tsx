"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, KeyRound, Sun, Moon } from "lucide-react";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className={`min-h-screen flex flex-col lg:flex-row font-sans transition-colors duration-300 ${isDark ? 'bg-[#09090b] text-zinc-100' : 'bg-zinc-50 text-zinc-900'}`}>

      {/* Floating Theme Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-6 right-6 z-50 p-2.5 rounded-full border transition-colors ${isDark ? 'border-zinc-800 bg-zinc-900 text-amber-300 hover:bg-zinc-800' : 'border-zinc-200 bg-white text-zinc-800 hover:bg-zinc-100'}`}
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      {/* Left Showcase Panel */}
      <div className={`lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r ${isDark ? 'border-zinc-800/80 bg-[#0d0d10]' : 'border-zinc-200 bg-zinc-900 text-white'}`}>
        <div className="flex items-center gap-2.5 text-sm font-semibold tracking-wide">
          <span className="h-8 w-8 rounded-lg bg-amber-400 text-zinc-950 flex items-center justify-center">
            <KeyRound size={16} />
          </span>
          <span>VaultLine</span>
        </div>

        <div className="my-12 lg:my-0 max-w-md">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold mb-4">
            Zero-Trust Access
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.08] mb-5 text-white">
            Precision auth for modern teams.
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Clean split-screen ergonomics with high-contrast controls, keyboard-first inputs, and calm dark surfaces.
          </p>
        </div>

        <div className="text-xs text-zinc-500 flex items-center justify-between">
          <span>256-bit session isolation</span>
          <span>SOC2 Ready UI</span>
        </div>
      </div>

      {/* Right Auth Form Panel */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-sm">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Welcome back</h2>
            <p className={`mt-2 text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Sign in with your work credentials.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                Work Email
              </label>
              <input
                type="email"
                required
                placeholder="you@company.com"
                className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${isDark ? 'border-zinc-800 bg-zinc-900/90 text-white placeholder-zinc-500 focus:border-amber-400 focus:ring-amber-400/20' : 'border-zinc-300 bg-white text-zinc-900 placeholder-zinc-400 focus:border-zinc-900 focus:ring-zinc-900/10'}`}
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className={`block text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  Password
                </label>
                <a href="#" className="text-xs font-medium text-amber-400 hover:text-amber-300">
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                required
                placeholder="••••••••"
                className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${isDark ? 'border-zinc-800 bg-zinc-900/90 text-white placeholder-zinc-500 focus:border-amber-400 focus:ring-amber-400/20' : 'border-zinc-300 bg-white text-zinc-900 placeholder-zinc-400 focus:border-zinc-900 focus:ring-zinc-900/10'}`}
              />
            </div>

            <div className="flex items-center gap-2.5">
              <input
                type="checkbox"
                id="vault-remember"
                className="h-4 w-4 rounded accent-amber-400"
              />
              <label htmlFor="vault-remember" className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Trust this browser for 30 days
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold text-sm py-3 px-4 flex items-center justify-center gap-2 transition-colors disabled:opacity-60"
            >
              <span>{isLoading ? "Signing in..." : "Sign in"}</span>
              {!isLoading && <ArrowRight size={16} />}
            </button>
          </form>

          <p className={`mt-8 text-center text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Need an account?{" "}
            <Link href="/signup/template-12" className="font-semibold text-amber-400 hover:text-amber-300 underline underline-offset-4">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}