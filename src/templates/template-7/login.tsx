"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sun, Moon } from "lucide-react";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 font-sans transition-colors duration-300 ${isDark ? 'bg-[#2a1b38]' : 'bg-[#f4d0d0]'}`}>
      
      {/* Floating Theme Toggle */}
      <button 
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-6 right-6 z-50 p-2.5 border-4 border-black transition-all duration-300 active:translate-x-1 active:translate-y-1 active:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${isDark ? 'bg-[#ffeb3b] text-black hover:bg-[#fbc02d]' : 'bg-white text-black hover:bg-gray-100'}`}
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={24} strokeWidth={3} /> : <Moon size={24} strokeWidth={3} />}
      </button>

      <div className={`w-full max-w-md p-8 border-4 border-black transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${isDark ? 'bg-[#1f1428]' : 'bg-white'}`}>
        
        <div className="mb-8">
          <h1 className={`text-4xl font-black tracking-tight mb-2 ${isDark ? 'text-white' : 'text-black'}`}>Hey there.</h1>
          <p className={`font-bold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Log in to your account.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className={`block text-sm font-black uppercase mb-2 ${isDark ? 'text-white' : 'text-black'}`}>Email</label>
            <input 
              type="email" 
              required 
              className={`w-full border-4 border-black px-4 py-3 font-bold focus:outline-none transition-all placeholder-gray-400 ${isDark ? 'bg-[#2a1b38] text-white focus:bg-[#3a284a] focus:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]' : 'bg-[#f4f4f0] text-black focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}`}
              placeholder="HELLO@EXAMPLE.COM" 
            />
          </div>

          <div>
            <label className={`block text-sm font-black uppercase mb-2 ${isDark ? 'text-white' : 'text-black'}`}>Password</label>
            <input 
              type="password" 
              required 
              className={`w-full border-4 border-black px-4 py-3 font-bold focus:outline-none transition-all placeholder-gray-400 ${isDark ? 'bg-[#2a1b38] text-white focus:bg-[#3a284a] focus:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]' : 'bg-[#f4f4f0] text-black focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}`}
              placeholder="********" 
            />
          </div>

          <div className="flex items-center justify-between">
            <label className={`flex items-center gap-2 cursor-pointer text-sm font-bold ${isDark ? 'text-white' : 'text-black'}`}>
              <input type="checkbox" className="w-5 h-5 border-4 border-black rounded-none accent-black" />
              Remember me
            </label>
            <a href="#" className={`text-sm font-bold underline decoration-2 underline-offset-4 ${isDark ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'}`}>Forgot password?</a>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className={`w-full font-black text-xl uppercase py-4 border-4 border-black transition-all active:translate-x-1 active:translate-y-1 active:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50 mt-4 flex justify-center items-center gap-2 ${isDark ? 'bg-white text-black hover:bg-[#ffeb3b]' : 'bg-black text-white hover:bg-[#a0e0a0] hover:text-black'}`}
          >
            {isLoading ? "Signing In..." : "Sign In"}
            {!isLoading && <ArrowRight size={24} strokeWidth={3} />}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t-4 border-black text-center">
          <Link href="/signup/template-7" className={`font-black underline decoration-4 underline-offset-4 px-2 py-1 transition-colors ${isDark ? 'text-white hover:bg-white hover:text-black' : 'text-black hover:bg-black hover:text-white'}`}>
            Don&apos;t have an account? Sign up.
          </Link>
        </div>
      </div>
    </div>
  );
}
