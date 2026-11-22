"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Compass, Sun, Moon } from "lucide-react";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 sm:p-8 font-sans transition-colors duration-300 ${isDark ? 'bg-[#1e242b] text-[#eceff4]' : 'bg-[#eef2f6] text-[#2e3440]'}`}>

      {/* Floating Theme Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-6 right-6 z-50 p-2.5 rounded-2xl border transition-colors ${isDark ? 'border-[#3b4252] bg-[#2e3440] text-[#88c0d0] hover:bg-[#3b4252]' : 'border-[#d8dee9] bg-white text-[#2e3440] hover:bg-[#f8fafc]'}`}
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      {/* Nordic Frost Card */}
      <div className={`w-full max-w-md rounded-3xl border p-7 sm:p-10 transition-all duration-300 ${isDark ? 'border-[#3b4252] bg-[#242933] shadow-[0_20px_50px_rgba(0,0,0,0.4)]' : 'border-[#d8dee9] bg-white shadow-[0_20px_50px_rgba(46,52,64,0.08)]'}`}>
        <div className="mb-8">
          <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium mb-4 ${isDark ? 'bg-[#2e3440] text-[#88c0d0]' : 'bg-[#e5e9f0] text-[#434c5e]'}`}>
            <Compass size={13} />
            Nordic Studio
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
          <p className={`mt-1.5 text-sm ${isDark ? 'text-[#a3be8c]/80' : 'text-[#4c566a]'}`}>
            Calm, uncluttered sign-in for focused daily work.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${isDark ? 'text-[#d8dee9]' : 'text-[#434c5e]'}`}>
              Email
            </label>
            <input
              type="email"
              required
              placeholder="soren@nordic.io"
              className={`w-full rounded-2xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${isDark ? 'border-[#3b4252] bg-[#1e242b] text-[#eceff4] placeholder-[#616e88] focus:border-[#88c0d0] focus:ring-[#88c0d0]/20' : 'border-[#d8dee9] bg-[#f8fafc] text-[#2e3440] placeholder-[#9aa5b4] focus:border-[#5e81ac] focus:ring-[#5e81ac]/20'}`}
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className={`block text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-[#d8dee9]' : 'text-[#434c5e]'}`}>
                Password
              </label>
              <a href="#" className={`text-xs font-medium transition-colors ${isDark ? 'text-[#88c0d0] hover:text-[#8fbcbb]' : 'text-[#5e81ac] hover:text-[#4c566a]'}`}>
                Forgot?
              </a>
            </div>
            <input
              type="password"
              required
              placeholder="••••••••"
              className={`w-full rounded-2xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${isDark ? 'border-[#3b4252] bg-[#1e242b] text-[#eceff4] placeholder-[#616e88] focus:border-[#88c0d0] focus:ring-[#88c0d0]/20' : 'border-[#d8dee9] bg-[#f8fafc] text-[#2e3440] placeholder-[#9aa5b4] focus:border-[#5e81ac] focus:ring-[#5e81ac]/20'}`}
            />
          </div>

          <div className="flex items-center gap-2.5">
            <input
              type="checkbox"
              id="nordic-remember"
              className="h-4 w-4 rounded accent-[#5e81ac]"
            />
            <label htmlFor="nordic-remember" className={`text-xs ${isDark ? 'text-[#d8dee9]' : 'text-[#4c566a]'}`}>
              Keep me signed in
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full rounded-2xl py-3 px-4 text-sm font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-60 ${isDark ? 'bg-[#88c0d0] text-[#1e242b] hover:bg-[#8fbcbb]' : 'bg-[#2e3440] text-[#eceff4] hover:bg-[#3b4252]'}`}
          >
            <span>{isLoading ? "Signing in..." : "Sign in"}</span>
            {!isLoading && <ArrowRight size={16} />}
          </button>
        </form>

        <p className={`mt-8 text-center text-sm ${isDark ? 'text-[#9aa5b4]' : 'text-[#4c566a]'}`}>
          Don&apos;t have an account?{" "}
          <Link href="/signup/template-13" className={`font-semibold underline underline-offset-4 ${isDark ? 'text-[#eceff4] hover:text-[#88c0d0]' : 'text-[#2e3440] hover:text-[#5e81ac]'}`}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}