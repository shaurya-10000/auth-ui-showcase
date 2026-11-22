"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Leaf, Sun, Moon } from "lucide-react";

export default function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 sm:p-8 font-sans transition-colors duration-300 ${isDark ? 'bg-[#121713] text-[#eef2ec]' : 'bg-[#f3f6f1] text-[#1a241c]'}`}>

      {/* Floating Theme Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-6 right-6 z-50 p-2.5 rounded-full border transition-colors ${isDark ? 'border-[#273329] bg-[#1a221c] text-[#a3c49a] hover:bg-[#273329]' : 'border-[#d7e0d3] bg-white text-[#1a241c] hover:bg-[#f8faf7]'}`}
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      {/* Botanical Olive Card */}
      <div className={`w-full max-w-md rounded-3xl border p-7 sm:p-10 transition-all duration-300 ${isDark ? 'border-[#273329] bg-[#182019] shadow-[0_24px_60px_rgba(0,0,0,0.45)]' : 'border-[#d7e0d3] bg-white shadow-[0_24px_60px_rgba(45,90,54,0.08)]'}`}>
        <div className="mb-8">
          <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium mb-4 ${isDark ? 'bg-[#3f6b47]/25 text-[#a3c49a]' : 'bg-[#3f6b47]/10 text-[#2f5436]'}`}>
            <Leaf size={13} />
            Verdant Field
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Create account</h1>
          <p className={`mt-1.5 text-sm ${isDark ? 'text-[#a6b5a8]' : 'text-[#526355]'}`}>
            Set up your workspace in a serene, natural palette.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? 'text-[#ced9cf]' : 'text-[#334236]'}`}>
              Full Name
            </label>
            <input
              type="text"
              required
              placeholder="Arjun Mehta"
              className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${isDark ? 'border-[#273329] bg-[#121713] text-[#eef2ec] placeholder-[#607063] focus:border-[#6fa378] focus:ring-[#6fa378]/20' : 'border-[#d2ddd0] bg-[#f8faf7] text-[#1a241c] placeholder-[#94a396] focus:border-[#3f6b47] focus:ring-[#3f6b47]/20'}`}
            />
          </div>

          <div>
            <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? 'text-[#ced9cf]' : 'text-[#334236]'}`}>
              Email
            </label>
            <input
              type="email"
              required
              placeholder="arjun@verdant.eco"
              className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${isDark ? 'border-[#273329] bg-[#121713] text-[#eef2ec] placeholder-[#607063] focus:border-[#6fa378] focus:ring-[#6fa378]/20' : 'border-[#d2ddd0] bg-[#f8faf7] text-[#1a241c] placeholder-[#94a396] focus:border-[#3f6b47] focus:ring-[#3f6b47]/20'}`}
            />
          </div>

          <div>
            <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? 'text-[#ced9cf]' : 'text-[#334236]'}`}>
              Password
            </label>
            <input
              type="password"
              required
              placeholder="Create a password"
              className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${isDark ? 'border-[#273329] bg-[#121713] text-[#eef2ec] placeholder-[#607063] focus:border-[#6fa378] focus:ring-[#6fa378]/20' : 'border-[#d2ddd0] bg-[#f8faf7] text-[#1a241c] placeholder-[#94a396] focus:border-[#3f6b47] focus:ring-[#3f6b47]/20'}`}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-xl bg-[#3f6b47] hover:bg-[#33583a] text-white font-semibold text-sm py-3 px-4 flex items-center justify-center gap-2 transition-colors disabled:opacity-60 mt-2"
          >
            <span>{isLoading ? "Creating account..." : "Create account"}</span>
            {!isLoading && <ArrowRight size={16} />}
          </button>
        </form>

        <p className={`mt-8 text-center text-sm ${isDark ? 'text-[#96a698]' : 'text-[#526355]'}`}>
          Already have an account?{" "}
          <Link href="/login/template-15" className={`font-semibold underline underline-offset-4 ${isDark ? 'text-[#eef2ec] hover:text-[#a3c49a]' : 'text-[#1a241c] hover:text-[#3f6b47]'}`}>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}