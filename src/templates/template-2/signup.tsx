"use client";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowRight, Sun, Moon } from "lucide-react";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDark, setIsDark] = useState(true); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className={`min-h-screen relative flex items-center justify-center overflow-hidden font-sans py-12 transition-colors duration-500 ${isDark ? 'bg-neutral-950' : 'bg-slate-50'}`}>
      
      {/* Floating Theme Toggle - Extreme Right */}
      <button 
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-6 right-6 z-50 p-2.5 rounded-full shadow-lg transition-all duration-300 ${isDark ? 'bg-white/10 hover:bg-white/20 text-yellow-400 border border-white/10' : 'bg-white hover:bg-slate-100 text-slate-800 border border-slate-200'}`}
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Animated Background Orbs */}
      {isDark ? (
        <>
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-indigo-600 rounded-full mix-blend-screen filter blur-[150px] opacity-30" />
        </>
      ) : (
        <>
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-indigo-300 rounded-full mix-blend-multiply filter blur-[150px] opacity-30" />
        </>
      )}

      {/* Glassmorphism Card */}
      <div className={`relative z-10 w-full max-w-md p-8 sm:p-10 backdrop-blur-2xl rounded-3xl my-8 transition-all duration-500 ${isDark ? 'bg-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]' : 'bg-white/40 border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]'}`}>
        
        <div className="text-center mb-8">
          <h2 className={`text-3xl font-bold tracking-tight mb-2 transition-colors ${isDark ? 'text-white' : 'text-slate-800'}`}>Create an account</h2>
          <p className={`text-sm transition-colors ${isDark ? 'text-neutral-300' : 'text-slate-600'}`}>
            Join us to start building today.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className={`block text-sm font-medium mb-2 transition-colors ${isDark ? 'text-neutral-200' : 'text-slate-700'}`}>Full Name</label>
            <input 
              type="text" 
              required 
              className={`w-full border rounded-xl px-4 py-3 placeholder-neutral-500 focus:outline-none focus:ring-2 transition-all ${isDark ? 'bg-white/5 border-white/10 text-white focus:ring-indigo-500/50' : 'bg-white/50 border-slate-300 text-slate-900 focus:ring-indigo-600/50'}`}
              placeholder="John Doe" 
            />
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 transition-colors ${isDark ? 'text-neutral-200' : 'text-slate-700'}`}>Email address</label>
            <input 
              type="email" 
              required 
              className={`w-full border rounded-xl px-4 py-3 placeholder-neutral-500 focus:outline-none focus:ring-2 transition-all ${isDark ? 'bg-white/5 border-white/10 text-white focus:ring-indigo-500/50' : 'bg-white/50 border-slate-300 text-slate-900 focus:ring-indigo-600/50'}`}
              placeholder="you@example.com" 
            />
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 transition-colors ${isDark ? 'text-neutral-200' : 'text-slate-700'}`}>Password</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                required 
                className={`w-full border rounded-xl px-4 py-3 pr-12 placeholder-neutral-500 focus:outline-none focus:ring-2 transition-all ${isDark ? 'bg-white/5 border-white/10 text-white focus:ring-indigo-500/50' : 'bg-white/50 border-slate-300 text-slate-900 focus:ring-indigo-600/50'}`}
                placeholder="••••••••" 
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute right-4 top-1/2 -translate-y-1/2 transition-colors focus:outline-none ${isDark ? 'text-neutral-400 hover:text-white' : 'text-slate-500 hover:text-slate-800'}`}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className={`w-full flex justify-center items-center gap-2 font-semibold py-3 rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-2 ${isDark ? 'bg-white hover:bg-neutral-200 text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]' : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-[0_4px_14px_0_rgba(79,70,229,0.39)]'}`}
          >
            {isLoading ? (
              <>
                <div className={`h-5 w-5 animate-spin rounded-full border-2 border-t-transparent ${isDark ? 'border-black' : 'border-white'}`} />
                Creating account...
              </>
            ) : (
              <>
                Create account
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>

        <p className={`mt-8 text-center text-sm transition-colors ${isDark ? 'text-neutral-400' : 'text-slate-500'}`}>
          Already have an account?{" "}
          <Link href="/login/template-2" className={`font-semibold transition-colors ${isDark ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'}`}>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
