"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, KeyRound, Sun, Moon } from "lucide-react";

export default function Signup() {
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
            Workspace Provisioning
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.08] mb-5 text-white">
            Set up your account in seconds.
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Start with a clean, structured onboarding flow designed for speed and clarity.
          </p>
        </div>

        <div className="text-xs text-zinc-500 flex items-center justify-between">
          <span>Role-ready permissions</span>
          <span>Instant setup</span>
        </div>
      </div>

      {/* Right Auth Form Panel */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-sm">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Create account</h2>
            <p className={`mt-2 text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Enter your details to get started.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Rohan Verma"
                className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${isDark ? 'border-zinc-800 bg-zinc-900/90 text-white placeholder-zinc-500 focus:border-amber-400 focus:ring-amber-400/20' : 'border-zinc-300 bg-white text-zinc-900 placeholder-zinc-400 focus:border-zinc-900 focus:ring-zinc-900/10'}`}
              />
            </div>

            <div>
              <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                Work Email
              </label>
              <input
                type="email"
                required
                placeholder="rohan@company.com"
                className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${isDark ? 'border-zinc-800 bg-zinc-900/90 text-white placeholder-zinc-500 focus:border-amber-400 focus:ring-amber-400/20' : 'border-zinc-300 bg-white text-zinc-900 placeholder-zinc-400 focus:border-zinc-900 focus:ring-zinc-900/10'}`}
              />
            </div>

            <div>
              <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                Password
              </label>
              <input
                type="password"
                required
                placeholder="Create a strong password"
                className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${isDark ? 'border-zinc-800 bg-zinc-900/90 text-white placeholder-zinc-500 focus:border-amber-400 focus:ring-amber-400/20' : 'border-zinc-300 bg-white text-zinc-900 placeholder-zinc-400 focus:border-zinc-900 focus:ring-zinc-900/10'}`}
              />
            </div>

            <div className="flex items-start gap-2.5 pt-1">
              <input
                type="checkbox"
                id="vault-terms"
                required
                className="mt-0.5 h-4 w-4 rounded accent-amber-400"
              />
              <label htmlFor="vault-terms" className={`text-xs leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                I agree to the <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy Policy</a>.
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold text-sm py-3 px-4 flex items-center justify-center gap-2 transition-colors disabled:opacity-60 mt-2"
            >
              <span>{isLoading ? "Creating account..." : "Create account"}</span>
              {!isLoading && <ArrowRight size={16} />}
            </button>
          </form>

          <p className={`mt-8 text-center text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Already have an account?{" "}
            <Link href="/login/template-12" className="font-semibold text-amber-400 hover:text-amber-300 underline underline-offset-4">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}