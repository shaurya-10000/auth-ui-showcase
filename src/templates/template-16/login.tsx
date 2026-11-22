"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sun, Moon } from "lucide-react";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 sm:p-8 font-sans transition-colors duration-300 ${isDark ? 'bg-[#0b0d1e] text-indigo-50' : 'bg-[#eef0ff] text-indigo-950'}`}>

      {/* Floating Theme Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-6 right-6 z-50 p-2.5 rounded-full border transition-colors ${isDark ? 'border-indigo-800/70 bg-indigo-950/90 text-indigo-300 hover:bg-indigo-900' : 'border-indigo-200 bg-white text-indigo-900 hover:bg-indigo-50'}`}
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      {/* Royal Indigo Card */}
      <div className={`w-full max-w-md rounded-3xl border p-7 sm:p-10 transition-all duration-300 ${isDark ? 'border-indigo-800/60 bg-[#121631] shadow-[0_24px_70px_rgba(30,27,75,0.65)]' : 'border-indigo-200/90 bg-white shadow-[0_24px_70px_rgba(67,56,202,0.12)]'}`}>
        <div className="mb-8">
          <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium mb-4 ${isDark ? 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/30' : 'bg-indigo-50 text-indigo-700 border border-indigo-200'}`}>
            <ShieldCheck size={13} />
            Indigo Cloud
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
          <p className={`mt-1.5 text-sm ${isDark ? 'text-indigo-200/75' : 'text-indigo-900/70'}`}>
            Deep indigo surfaces built for focused enterprise sign-in.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${isDark ? 'text-indigo-200' : 'text-indigo-950'}`}>
              Email
            </label>
            <input
              type="email"
              required
              placeholder="priya@indigocloud.in"
              className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${isDark ? 'border-indigo-800/80 bg-[#0b0d1e] text-white placeholder-indigo-400/50 focus:border-indigo-400 focus:ring-indigo-400/25' : 'border-indigo-200 bg-[#f8f9ff] text-indigo-950 placeholder-indigo-400 focus:border-indigo-600 focus:ring-indigo-600/20'}`}
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className={`block text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-indigo-200' : 'text-indigo-950'}`}>
                Password
              </label>
              <a href="#" className={`text-xs font-medium transition-colors ${isDark ? 'text-indigo-300 hover:text-indigo-200' : 'text-indigo-600 hover:text-indigo-500'}`}>
                Forgot?
              </a>
            </div>
            <input
              type="password"
              required
              placeholder="••••••••"
              className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${isDark ? 'border-indigo-800/80 bg-[#0b0d1e] text-white placeholder-indigo-400/50 focus:border-indigo-400 focus:ring-indigo-400/25' : 'border-indigo-200 bg-[#f8f9ff] text-indigo-950 placeholder-indigo-400 focus:border-indigo-600 focus:ring-indigo-600/20'}`}
            />
          </div>

          <div className="flex items-center gap-2.5">
            <input
              type="checkbox"
              id="indigo-remember"
              className="h-4 w-4 rounded accent-indigo-500"
            />
            <label htmlFor="indigo-remember" className={`text-xs ${isDark ? 'text-indigo-200/80' : 'text-indigo-900/75'}`}>
              Keep me signed in
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm py-3 px-4 flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/25 transition-colors disabled:opacity-60"
          >
            <span>{isLoading ? "Signing in..." : "Sign in"}</span>
            {!isLoading && <ArrowRight size={16} />}
          </button>
        </form>

        <p className={`mt-8 text-center text-sm ${isDark ? 'text-indigo-200/70' : 'text-indigo-900/70'}`}>
          Don&apos;t have an account?{" "}
          <Link href="/signup/template-16" className={`font-semibold underline underline-offset-4 ${isDark ? 'text-white hover:text-indigo-300' : 'text-indigo-950 hover:text-indigo-600'}`}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}