"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sun, Moon } from "lucide-react";

export default function Signup() {
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
          <h1 className="text-3xl font-bold tracking-tight">Create account</h1>
          <p className={`mt-1.5 text-sm ${isDark ? 'text-indigo-200/75' : 'text-indigo-900/70'}`}>
            Start with crisp indigo contrast and streamlined onboarding.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? 'text-indigo-200' : 'text-indigo-950'}`}>
              Full Name
            </label>
            <input
              type="text"
              required
              placeholder="Priya Sharma"
              className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${isDark ? 'border-indigo-800/80 bg-[#0b0d1e] text-white placeholder-indigo-400/50 focus:border-indigo-400 focus:ring-indigo-400/25' : 'border-indigo-200 bg-[#f8f9ff] text-indigo-950 placeholder-indigo-400 focus:border-indigo-600 focus:ring-indigo-600/20'}`}
            />
          </div>

          <div>
            <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? 'text-indigo-200' : 'text-indigo-950'}`}>
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
            <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? 'text-indigo-200' : 'text-indigo-950'}`}>
              Password
            </label>
            <input
              type="password"
              required
              placeholder="Create a password"
              className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${isDark ? 'border-indigo-800/80 bg-[#0b0d1e] text-white placeholder-indigo-400/50 focus:border-indigo-400 focus:ring-indigo-400/25' : 'border-indigo-200 bg-[#f8f9ff] text-indigo-950 placeholder-indigo-400 focus:border-indigo-600 focus:ring-indigo-600/20'}`}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm py-3 px-4 flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/25 transition-colors disabled:opacity-60 mt-2"
          >
            <span>{isLoading ? "Creating account..." : "Create account"}</span>
            {!isLoading && <ArrowRight size={16} />}
          </button>
        </form>

        <p className={`mt-8 text-center text-sm ${isDark ? 'text-indigo-200/70' : 'text-indigo-900/70'}`}>
          Already have an account?{" "}
          <Link href="/login/template-16" className={`font-semibold underline underline-offset-4 ${isDark ? 'text-white hover:text-indigo-300' : 'text-indigo-950 hover:text-indigo-600'}`}>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}