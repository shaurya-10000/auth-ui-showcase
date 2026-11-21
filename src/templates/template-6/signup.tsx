"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sun, Moon } from "lucide-react";

export default function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 md:p-8 font-sans transition-colors duration-500 ${isDark ? 'bg-[#0f0f11]' : 'bg-[#f5f5f7]'}`}>
      
      {/* Floating Theme Toggle */}
      <button 
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-6 right-6 z-50 p-2.5 rounded-full transition-all duration-300 ${isDark ? 'bg-[#1c1c1e] text-yellow-400 hover:bg-[#2c2c2e]' : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm border border-black/5'}`}
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        
        {/* Left Card (Branding) */}
        <div className={`rounded-[2rem] p-10 flex flex-col justify-between transition-colors duration-500 min-h-[400px] ${isDark ? 'bg-black border border-white/5' : 'bg-black shadow-sm'}`}>
          <div>
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-8">
              <span className="text-black font-bold text-xl">B</span>
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-white mb-4 leading-tight">
              Start your <br /> journey today.
            </h1>
            <p className="text-gray-400 text-lg max-w-sm">
              Create an account and get access to a suite of tools designed to make your life easier.
            </p>
          </div>
        </div>

        {/* Right Card (Form) */}
        <div className={`rounded-[2rem] p-10 flex flex-col justify-center transition-colors duration-500 ${isDark ? 'bg-[#1c1c1e] border border-white/5' : 'bg-white border border-black/5 shadow-sm'}`}>
          <h2 className={`text-2xl font-semibold mb-8 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>Create account</h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className={`block text-sm font-medium mb-1.5 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Full Name</label>
              <input 
                type="text" 
                required 
                className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:ring-2 transition-all placeholder-gray-400 ${isDark ? 'bg-[#2c2c2e] text-white focus:ring-white/20' : 'bg-[#f5f5f7] text-gray-900 focus:ring-black/10'}`}
                placeholder="John Doe" 
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-1.5 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
              <input 
                type="email" 
                required 
                className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:ring-2 transition-all placeholder-gray-400 ${isDark ? 'bg-[#2c2c2e] text-white focus:ring-white/20' : 'bg-[#f5f5f7] text-gray-900 focus:ring-black/10'}`}
                placeholder="name@example.com" 
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-1.5 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Password</label>
              <input 
                type="password" 
                required 
                className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:ring-2 transition-all placeholder-gray-400 ${isDark ? 'bg-[#2c2c2e] text-white focus:ring-white/20' : 'bg-[#f5f5f7] text-gray-900 focus:ring-black/10'}`}
                placeholder="••••••••" 
              />
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className={`w-full font-medium rounded-xl py-3 transition-all flex items-center justify-center gap-2 disabled:opacity-70 mt-4 ${isDark ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}
            >
              {isLoading ? "Creating account..." : "Sign Up"}
              {!isLoading && <ArrowRight size={18} />}
            </button>
          </form>

          <p className={`mt-8 text-center text-sm transition-colors ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            Already have an account?{" "}
            <Link href="/login/template-6" className={`font-medium hover:underline transition-colors ${isDark ? 'text-white' : 'text-black'}`}>
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
