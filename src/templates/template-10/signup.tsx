"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Sun, Moon } from "lucide-react";

export default function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className={`min-h-screen relative flex items-center justify-center p-4 sm:p-8 overflow-hidden font-sans transition-colors duration-500 ${isDark ? 'bg-[#070812] text-white' : 'bg-[#f4f7ff] text-slate-900'}`}>

      {/* Aurora Mesh Gradient Layer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className={`absolute -top-28 right-1/4 h-[28rem] w-[28rem] rounded-full blur-[120px] transition-opacity duration-500 ${isDark ? 'bg-fuchsia-500/35 opacity-90' : 'bg-fuchsia-300/60 opacity-80'}`}
        />
        <div
          className={`absolute bottom-0 -left-20 h-[30rem] w-[30rem] rounded-full blur-[130px] transition-opacity duration-500 ${isDark ? 'bg-cyan-500/30 opacity-90' : 'bg-cyan-300/55 opacity-80'}`}
        />
        <div
          className={`absolute -bottom-24 right-1/4 h-[26rem] w-[32rem] rounded-full blur-[130px] transition-opacity duration-500 ${isDark ? 'bg-indigo-500/35 opacity-85' : 'bg-indigo-300/55 opacity-75'}`}
        />
      </div>

      {/* Floating Theme Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-6 right-6 z-50 p-2.5 rounded-full border backdrop-blur-md transition-all duration-300 ${isDark ? 'border-white/15 bg-white/10 text-amber-300 hover:bg-white/15' : 'border-slate-900/10 bg-white/80 text-slate-800 hover:bg-white'}`}
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      {/* Main Card */}
      <div className={`relative z-10 w-full max-w-md rounded-3xl border p-7 sm:p-9 backdrop-blur-2xl transition-all duration-500 ${isDark ? 'border-white/15 bg-white/[0.06] shadow-[0_24px_80px_rgba(0,0,0,0.65)]' : 'border-white/80 bg-white/75 shadow-[0_24px_70px_rgba(79,70,229,0.12)]'}`}>
        <div className="mb-7">
          <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium mb-4 ${isDark ? 'border-fuchsia-400/30 bg-fuchsia-400/10 text-fuchsia-300' : 'border-indigo-500/20 bg-indigo-500/10 text-indigo-700'}`}>
            <Sparkles size={13} />
            Join Aurora
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Create account</h1>
          <p className={`mt-1.5 text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Start building with luminous gradients and clean UI.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Full Name
            </label>
            <input
              type="text"
              required
              placeholder="Alex Rivera"
              className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${isDark ? 'border-white/15 bg-black/30 text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-cyan-400/25' : 'border-slate-200 bg-white/90 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:ring-indigo-500/20'}`}
            />
          </div>

          <div>
            <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Email
            </label>
            <input
              type="email"
              required
              placeholder="alex@aurora.studio"
              className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${isDark ? 'border-white/15 bg-black/30 text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-cyan-400/25' : 'border-slate-200 bg-white/90 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:ring-indigo-500/20'}`}
            />
          </div>

          <div>
            <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Password
            </label>
            <input
              type="password"
              required
              placeholder="Create a password"
              className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${isDark ? 'border-white/15 bg-black/30 text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-cyan-400/25' : 'border-slate-200 bg-white/90 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:ring-indigo-500/20'}`}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-500 py-3 px-4 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 hover:brightness-110 transition-all flex items-center justify-center gap-2 disabled:opacity-60 mt-2"
          >
            {isLoading ? "Creating account..." : "Create account"}
            {!isLoading && <ArrowRight size={16} />}
          </button>
        </form>

        <p className={`mt-7 text-center text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Already have an account?{" "}
          <Link href="/login/template-10" className={`font-semibold underline underline-offset-4 ${isDark ? 'text-white hover:text-cyan-300' : 'text-slate-900 hover:text-indigo-600'}`}>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}