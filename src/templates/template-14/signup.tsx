"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Flame, Sun, Moon } from "lucide-react";

export default function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 sm:p-8 font-sans transition-colors duration-300 ${isDark ? 'bg-[#1c1310] text-[#f7ede8]' : 'bg-[#fbf4f0] text-[#291914]'}`}>

      {/* Floating Theme Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-6 right-6 z-50 p-2.5 rounded-full border transition-colors ${isDark ? 'border-[#3b2822] bg-[#2a1c18] text-[#f4a285] hover:bg-[#3b2822]' : 'border-[#ead7ce] bg-white text-[#291914] hover:bg-[#fffaf7]'}`}
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      {/* Warm Terracotta Card */}
      <div className={`w-full max-w-md rounded-3xl border p-7 sm:p-10 transition-all duration-300 ${isDark ? 'border-[#3b2822] bg-[#241814] shadow-[0_24px_60px_rgba(0,0,0,0.45)]' : 'border-[#ead7ce] bg-white shadow-[0_24px_60px_rgba(194,89,52,0.09)]'}`}>
        <div className="mb-8">
          <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium mb-4 ${isDark ? 'bg-[#c25934]/20 text-[#f4a285]' : 'bg-[#c25934]/10 text-[#a84320]'}`}>
            <Flame size={13} />
            Atelier Clay
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Create account</h1>
          <p className={`mt-1.5 text-sm ${isDark ? 'text-[#c9b2aa]' : 'text-[#6e544b]'}`}>
            Join a warm, focused space for creative work.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? 'text-[#e3cfc8]' : 'text-[#4a352e]'}`}>
              Full Name
            </label>
            <input
              type="text"
              required
              placeholder="Maya Nair"
              className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${isDark ? 'border-[#3b2822] bg-[#1c1310] text-[#f7ede8] placeholder-[#7d635b] focus:border-[#e0724c] focus:ring-[#e0724c]/20' : 'border-[#e2cdc3] bg-[#fdf9f7] text-[#291914] placeholder-[#ab9289] focus:border-[#c25934] focus:ring-[#c25934]/20'}`}
            />
          </div>

          <div>
            <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? 'text-[#e3cfc8]' : 'text-[#4a352e]'}`}>
              Email
            </label>
            <input
              type="email"
              required
              placeholder="maya@atelier.co"
              className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${isDark ? 'border-[#3b2822] bg-[#1c1310] text-[#f7ede8] placeholder-[#7d635b] focus:border-[#e0724c] focus:ring-[#e0724c]/20' : 'border-[#e2cdc3] bg-[#fdf9f7] text-[#291914] placeholder-[#ab9289] focus:border-[#c25934] focus:ring-[#c25934]/20'}`}
            />
          </div>

          <div>
            <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? 'text-[#e3cfc8]' : 'text-[#4a352e]'}`}>
              Password
            </label>
            <input
              type="password"
              required
              placeholder="Create a password"
              className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${isDark ? 'border-[#3b2822] bg-[#1c1310] text-[#f7ede8] placeholder-[#7d635b] focus:border-[#e0724c] focus:ring-[#e0724c]/20' : 'border-[#e2cdc3] bg-[#fdf9f7] text-[#291914] placeholder-[#ab9289] focus:border-[#c25934] focus:ring-[#c25934]/20'}`}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-xl bg-[#c25934] hover:bg-[#ad4b29] text-white font-semibold text-sm py-3 px-4 flex items-center justify-center gap-2 transition-colors disabled:opacity-60 mt-2"
          >
            <span>{isLoading ? "Creating account..." : "Create account"}</span>
            {!isLoading && <ArrowRight size={16} />}
          </button>
        </form>

        <p className={`mt-8 text-center text-sm ${isDark ? 'text-[#b59c93]' : 'text-[#6e544b]'}`}>
          Already have an account?{" "}
          <Link href="/login/template-14" className={`font-semibold underline underline-offset-4 ${isDark ? 'text-[#f7ede8] hover:text-[#f4a285]' : 'text-[#291914] hover:text-[#c25934]'}`}>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}