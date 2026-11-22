"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Compass, Sun, Moon } from "lucide-react";

export default function Signup() {
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
          <h1 className="text-3xl font-bold tracking-tight">Create account</h1>
          <p className={`mt-1.5 text-sm ${isDark ? 'text-[#a3be8c]/80' : 'text-[#4c566a]'}`}>
            Start with a clean, balanced workspace setup.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? 'text-[#d8dee9]' : 'text-[#434c5e]'}`}>
              Full Name
            </label>
            <input
              type="text"
              required
              placeholder="Freja Lind"
              className={`w-full rounded-2xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${isDark ? 'border-[#3b4252] bg-[#1e242b] text-[#eceff4] placeholder-[#616e88] focus:border-[#88c0d0] focus:ring-[#88c0d0]/20' : 'border-[#d8dee9] bg-[#f8fafc] text-[#2e3440] placeholder-[#9aa5b4] focus:border-[#5e81ac] focus:ring-[#5e81ac]/20'}`}
            />
          </div>

          <div>
            <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? 'text-[#d8dee9]' : 'text-[#434c5e]'}`}>
              Email
            </label>
            <input
              type="email"
              required
              placeholder="freja@nordic.io"
              className={`w-full rounded-2xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${isDark ? 'border-[#3b4252] bg-[#1e242b] text-[#eceff4] placeholder-[#616e88] focus:border-[#88c0d0] focus:ring-[#88c0d0]/20' : 'border-[#d8dee9] bg-[#f8fafc] text-[#2e3440] placeholder-[#9aa5b4] focus:border-[#5e81ac] focus:ring-[#5e81ac]/20'}`}
            />
          </div>

          <div>
            <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? 'text-[#d8dee9]' : 'text-[#434c5e]'}`}>
              Password
            </label>
            <input
              type="password"
              required
              placeholder="Create a password"
              className={`w-full rounded-2xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${isDark ? 'border-[#3b4252] bg-[#1e242b] text-[#eceff4] placeholder-[#616e88] focus:border-[#88c0d0] focus:ring-[#88c0d0]/20' : 'border-[#d8dee9] bg-[#f8fafc] text-[#2e3440] placeholder-[#9aa5b4] focus:border-[#5e81ac] focus:ring-[#5e81ac]/20'}`}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full rounded-2xl py-3 px-4 text-sm font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-60 mt-2 ${isDark ? 'bg-[#88c0d0] text-[#1e242b] hover:bg-[#8fbcbb]' : 'bg-[#2e3440] text-[#eceff4] hover:bg-[#3b4252]'}`}
          >
            <span>{isLoading ? "Creating account..." : "Create account"}</span>
            {!isLoading && <ArrowRight size={16} />}
          </button>
        </form>

        <p className={`mt-8 text-center text-sm ${isDark ? 'text-[#9aa5b4]' : 'text-[#4c566a]'}`}>
          Already have an account?{" "}
          <Link href="/login/template-13" className={`font-semibold underline underline-offset-4 ${isDark ? 'text-[#eceff4] hover:text-[#88c0d0]' : 'text-[#2e3440] hover:text-[#5e81ac]'}`}>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}