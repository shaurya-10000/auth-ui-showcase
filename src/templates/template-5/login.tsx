"use client";
import { useState } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 font-sans transition-colors duration-500 ${isDark ? 'bg-[#2d3748]' : 'bg-[#e0e5ec]'}`}>
      
      {/* Floating Theme Toggle */}
      <button 
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-6 right-6 z-50 p-2.5 rounded-full transition-all duration-300 ${isDark ? 'bg-[#2d3748] text-blue-300 shadow-[4px_4px_8px_#1a202c,-4px_-4px_8px_#4a5568]' : 'bg-[#e0e5ec] text-blue-500 shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff]'}`}
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <div className={`w-full max-w-md rounded-3xl p-8 transition-all duration-500 ${isDark ? 'bg-[#2d3748] shadow-[8px_8px_16px_#1a202c,-8px_-8px_16px_#4a5568]' : 'bg-[#e0e5ec] shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff]'}`}>
        
        <div className="text-center mb-10">
          <h1 className={`text-3xl font-bold mb-2 transition-colors ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>Welcome Back</h1>
          <p className={`text-sm transition-colors ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Please sign in to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className={`block text-sm font-semibold mb-2 ml-1 transition-colors ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Email Address</label>
            <input 
              type="email" 
              required 
              className={`w-full rounded-xl px-4 py-3 focus:outline-none transition-colors placeholder-slate-400 ${isDark ? 'bg-[#2d3748] text-slate-200 shadow-[inset_4px_4px_8px_#1a202c,inset_-4px_-4px_8px_#4a5568]' : 'bg-[#e0e5ec] text-slate-700 shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff]'}`}
              placeholder="hello@example.com" 
            />
          </div>

          <div>
            <label className={`block text-sm font-semibold mb-2 ml-1 transition-colors ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Password</label>
            <input 
              type="password" 
              required 
              className={`w-full rounded-xl px-4 py-3 focus:outline-none transition-colors placeholder-slate-400 ${isDark ? 'bg-[#2d3748] text-slate-200 shadow-[inset_4px_4px_8px_#1a202c,inset_-4px_-4px_8px_#4a5568]' : 'bg-[#e0e5ec] text-slate-700 shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff]'}`}
              placeholder="********" 
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className={`flex items-center gap-2 cursor-pointer transition-colors ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              <input type="checkbox" className={`rounded focus:ring-0 ${isDark ? 'bg-[#2d3748] shadow-[inset_2px_2px_4px_#1a202c,inset_-2px_-2px_4px_#4a5568] text-blue-400' : 'bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff] text-blue-400'}`} />
              Remember me
            </label>
            <a href="#" className={`font-semibold transition-colors ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-500 hover:text-blue-600'}`}>Forgot password?</a>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className={`w-full font-bold text-lg rounded-xl py-3 transition-all disabled:opacity-70 ${isDark ? 'bg-[#2d3748] text-blue-300 shadow-[6px_6px_12px_#1a202c,-6px_-6px_12px_#4a5568] active:shadow-[inset_4px_4px_8px_#1a202c,inset_-4px_-4px_8px_#4a5568]' : 'bg-[#e0e5ec] text-blue-500 shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff]'}`}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className={`mt-8 text-center text-sm transition-colors ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          Don&apos;t have an account?{" "}
          <Link href="/signup/template-5" className={`font-semibold transition-colors ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-500 hover:text-blue-600'}`}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
