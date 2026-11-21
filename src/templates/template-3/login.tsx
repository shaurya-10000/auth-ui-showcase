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
    <div className={`min-h-screen flex items-center justify-center p-4 font-mono transition-colors duration-300 ${isDark ? 'bg-neutral-950' : 'bg-yellow-400'}`}>
      
      {/* Floating Theme Toggle */}
      <button 
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-6 right-6 z-50 p-2.5 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 active:translate-x-1 active:translate-y-1 active:shadow-none ${isDark ? 'bg-white text-black hover:bg-gray-200' : 'bg-white text-black hover:bg-gray-100'}`}
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={24} strokeWidth={3} /> : <Moon size={24} strokeWidth={3} />}
      </button>

      <div className={`w-full max-w-md p-8 border-4 transition-all duration-300 ${isDark ? 'bg-neutral-900 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] text-white' : 'bg-white border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black'}`}>
        
        <div className={`mb-8 border-b-4 pb-4 transition-colors ${isDark ? 'border-white' : 'border-black'}`}>
          <h1 className="text-4xl font-black uppercase tracking-tighter">Access.</h1>
          <p className="font-bold mt-2">Enter credentials to proceed.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-black uppercase mb-2">Email</label>
            <input 
              type="email" 
              required 
              className={`w-full px-4 py-3 font-bold focus:outline-none border-4 transition-colors placeholder-neutral-400 ${isDark ? 'bg-black border-white text-white focus:bg-neutral-800' : 'bg-white border-black text-black focus:bg-yellow-100'}`}
              placeholder="USER@EXAMPLE.COM" 
            />
          </div>

          <div>
            <label className="block text-sm font-black uppercase mb-2">Password</label>
            <input 
              type="password" 
              required 
              className={`w-full px-4 py-3 font-bold focus:outline-none border-4 transition-colors placeholder-neutral-400 ${isDark ? 'bg-black border-white text-white focus:bg-neutral-800' : 'bg-white border-black text-black focus:bg-yellow-100'}`}
              placeholder="********" 
            />
          </div>

          <div className="flex items-center gap-3">
            <input type="checkbox" id="remember" className={`w-6 h-6 border-4 rounded-none transition-colors accent-black ${isDark ? 'border-white' : 'border-black'}`} />
            <label htmlFor="remember" className="font-bold text-sm uppercase">Remember me</label>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className={`w-full font-black text-xl uppercase py-4 border-4 transition-all active:translate-x-1 active:translate-y-1 active:shadow-none disabled:opacity-50 ${isDark ? 'bg-white text-black border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:bg-neutral-200' : 'bg-black text-white border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-400 hover:text-black'}`}
          >
            {isLoading ? "Authenticating..." : "Login"}
          </button>
        </form>

        <div className={`mt-8 pt-4 border-t-4 flex justify-between items-center transition-colors ${isDark ? 'border-white' : 'border-black'}`}>
          <Link href="/signup/template-3" className={`font-black underline decoration-4 underline-offset-4 px-2 py-1 transition-colors ${isDark ? 'hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white'}`}>
            Create Account
          </Link>
          <a href="#" className="font-black text-sm uppercase hover:underline decoration-4 underline-offset-4">
            Reset
          </a>
        </div>
      </div>
    </div>
  );
}
