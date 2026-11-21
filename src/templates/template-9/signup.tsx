"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Sun, Moon } from "lucide-react";

export default function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-6 sm:p-10 font-serif transition-colors duration-500 ${isDark ? 'bg-[#121110] text-[#f3efe8]' : 'bg-[#faf8f5] text-[#181615]'}`}>
      
      {/* Floating Theme Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-6 right-6 z-50 p-2.5 rounded-full border transition-all duration-300 ${isDark ? 'border-[#2e2b28] bg-[#1a1816] text-[#d6c7b2] hover:border-[#524c46]' : 'border-[#e2dcd3] bg-white text-[#181615] hover:border-[#b8afa2]'}`}
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      <div className={`w-full max-w-4xl grid grid-cols-1 md:grid-cols-12 border transition-colors duration-500 ${isDark ? 'border-[#2e2b28] bg-[#161513]' : 'border-[#e2dcd3] bg-white'}`}>
        
        {/* Left Editorial Column */}
        <div className={`md:col-span-5 p-8 sm:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r transition-colors ${isDark ? 'border-[#2e2b28] bg-[#1a1816]' : 'border-[#e2dcd3] bg-[#f4f0e8]'}`}>
          <div>
            <p className={`font-sans text-[11px] uppercase tracking-[0.25em] mb-6 ${isDark ? 'text-[#9e9589]' : 'text-[#787168]'}`}>
              Membership — 2026
            </p>
            <h1 className="text-3xl sm:text-4xl font-normal leading-[1.15] tracking-tight mb-5">
              Begin your <span className="italic">subscription.</span>
            </h1>
            <p className={`font-sans text-sm leading-relaxed ${isDark ? 'text-[#a89f93]' : 'text-[#5c564f]'}`}>
              Create a reader profile to bookmark essays, annotate long-form pieces, and receive Sunday letters.
            </p>
          </div>

          <div className={`mt-10 pt-6 border-t font-sans text-xs space-y-1.5 ${isDark ? 'border-[#2e2b28] text-[#857d72]' : 'border-[#dfd8cd] text-[#787168]'}`}>
            <p>• Ad-free reading environment</p>
            <p>• Full access to past volumes</p>
            <p>• Offline archival exports</p>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="md:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-normal tracking-tight">Create Reader Profile</h2>
            <p className={`font-sans text-xs mt-1.5 ${isDark ? 'text-[#9e9589]' : 'text-[#787168]'}`}>
              Register your details to establish an account.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 font-sans">
            <div>
              <label className={`block text-[11px] uppercase tracking-[0.18em] mb-2 ${isDark ? 'text-[#a89f93]' : 'text-[#5c564f]'}`}>
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Clara Vance"
                className={`w-full bg-transparent border-b py-2.5 text-sm focus:outline-none transition-colors ${isDark ? 'border-[#383430] text-[#f3efe8] focus:border-[#d6c7b2] placeholder-[#524c46]' : 'border-[#d4cdc2] text-[#181615] focus:border-[#181615] placeholder-[#b3aba0]'}`}
              />
            </div>

            <div>
              <label className={`block text-[11px] uppercase tracking-[0.18em] mb-2 ${isDark ? 'text-[#a89f93]' : 'text-[#5c564f]'}`}>
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="clara@journal.com"
                className={`w-full bg-transparent border-b py-2.5 text-sm focus:outline-none transition-colors ${isDark ? 'border-[#383430] text-[#f3efe8] focus:border-[#d6c7b2] placeholder-[#524c46]' : 'border-[#d4cdc2] text-[#181615] focus:border-[#181615] placeholder-[#b3aba0]'}`}
              />
            </div>

            <div>
              <label className={`block text-[11px] uppercase tracking-[0.18em] mb-2 ${isDark ? 'text-[#a89f93]' : 'text-[#5c564f]'}`}>
                Password
              </label>
              <input
                type="password"
                required
                placeholder="••••••••••••"
                className={`w-full bg-transparent border-b py-2.5 text-sm focus:outline-none transition-colors ${isDark ? 'border-[#383430] text-[#f3efe8] focus:border-[#d6c7b2] placeholder-[#524c46]' : 'border-[#d4cdc2] text-[#181615] focus:border-[#181615] placeholder-[#b3aba0]'}`}
              />
            </div>

            <div className="flex items-start gap-2.5 pt-2">
              <input
                type="checkbox"
                id="editorial-terms"
                required
                className="mt-0.5 h-3.5 w-3.5 rounded-none accent-[#181615]"
              />
              <label htmlFor="editorial-terms" className={`text-xs leading-relaxed ${isDark ? 'text-[#a89f93]' : 'text-[#5c564f]'}`}>
                I accept the <a href="#" className="underline underline-offset-4">Subscriber Charter</a> and <a href="#" className="underline underline-offset-4">Privacy Notice</a>.
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3.5 px-6 text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 transition-all disabled:opacity-60 mt-2 ${isDark ? 'bg-[#f3efe8] text-[#121110] hover:bg-[#ded7cb]' : 'bg-[#181615] text-[#faf8f5] hover:bg-[#302c2a]'}`}
            >
              {isLoading ? "Registering..." : "Create Membership"}
              {!isLoading && <ArrowUpRight size={15} />}
            </button>
          </form>

          <p className={`mt-8 pt-6 border-t font-sans text-xs text-center ${isDark ? 'border-[#2e2b28] text-[#9e9589]' : 'border-[#ece6dd] text-[#787168]'}`}>
            Already a member?{" "}
            <Link href="/login/template-9" className={`font-medium underline underline-offset-4 transition-colors ${isDark ? 'text-[#f3efe8] hover:text-[#d6c7b2]' : 'text-[#181615] hover:text-[#5c564f]'}`}>
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}