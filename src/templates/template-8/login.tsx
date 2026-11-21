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
    <div className={`min-h-screen flex items-center justify-center p-4 font-sans transition-colors duration-500 ${isDark ? 'bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]' : 'bg-gradient-to-b from-[#4a5568] to-[#2d3748]'}`}>
      
      {/* Floating Theme Toggle */}
      <button 
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-6 right-6 z-50 p-2.5 rounded-full transition-all duration-300 border ${isDark ? 'bg-[#2d2d2d] border-[#444] text-yellow-400 shadow-[0_4px_6px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'bg-[#e2e8f0] border-[#cbd5e0] text-slate-800 shadow-[0_4px_6px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.8)]'}`}
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <div className={`w-full max-w-md rounded-2xl p-8 border transition-all duration-500 ${isDark ? 'bg-[#222222] border-[#333] shadow-[0_10px_30px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,255,255,0.1)]' : 'bg-[#e2e8f0] border-[#cbd5e0] shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.8)]'}`}>
        
        <div className="text-center mb-8">
          <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 transition-colors ${isDark ? 'bg-[#111] shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),0_1px_1px_rgba(255,255,255,0.1)]' : 'bg-[#cbd5e0] shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),0_1px_1px_rgba(255,255,255,0.8)]'}`}>
            <div className={`w-8 h-8 rounded-full transition-colors ${isDark ? 'bg-[#333] shadow-[0_2px_4px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'bg-[#4a5568] shadow-[0_2px_4px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.3)]'}`} />
          </div>
          <h1 className={`text-3xl font-bold drop-shadow-sm mb-1 transition-colors ${isDark ? 'text-gray-200' : 'text-[#2d3748]'}`}>System Login</h1>
          <p className={`text-sm transition-colors ${isDark ? 'text-gray-500' : 'text-[#718096]'}`}>Please authenticate to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className={`block text-sm font-bold mb-2 transition-colors ${isDark ? 'text-gray-300' : 'text-[#4a5568]'}`}>Username</label>
            <input 
              type="email" 
              required 
              className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition-all placeholder-gray-400 ${isDark ? 'bg-[#111] border-[#333] text-gray-200 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] focus:ring-[#3182ce]' : 'bg-[#edf2f7] border-[#a0aec0] text-[#2d3748] shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:ring-[#4299e1]'}`}
              placeholder="Enter your username" 
            />
          </div>

          <div>
            <label className={`block text-sm font-bold mb-2 transition-colors ${isDark ? 'text-gray-300' : 'text-[#4a5568]'}`}>Password</label>
            <input 
              type="password" 
              required 
              className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition-all placeholder-gray-400 ${isDark ? 'bg-[#111] border-[#333] text-gray-200 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] focus:ring-[#3182ce]' : 'bg-[#edf2f7] border-[#a0aec0] text-[#2d3748] shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:ring-[#4299e1]'}`}
              placeholder="Enter your password" 
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className={`flex items-center gap-2 cursor-pointer font-medium transition-colors ${isDark ? 'text-gray-400' : 'text-[#4a5568]'}`}>
              <input type="checkbox" className={`rounded border shadow-inner ${isDark ? 'border-[#333] bg-[#111] text-[#3182ce] focus:ring-[#3182ce]' : 'border-[#a0aec0] text-[#4299e1] focus:ring-[#4299e1]'}`} />
              Remember me
            </label>
            <a href="#" className={`font-bold transition-colors ${isDark ? 'text-[#63b3ed] hover:text-[#90cdf4]' : 'text-[#3182ce] hover:text-[#2b6cb0]'}`}>Forgot password?</a>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className={`w-full font-bold text-lg rounded-lg py-3 border transition-all disabled:opacity-70 ${isDark ? 'bg-gradient-to-b from-[#3182ce] to-[#2b6cb0] text-white border-[#2c5282] shadow-[0_4px_6px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:brightness-110 active:brightness-95 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]' : 'bg-gradient-to-b from-[#4299e1] to-[#3182ce] text-white border-[#2b6cb0] shadow-[0_4px_6px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:brightness-110 active:brightness-95 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]'}`}
          >
            {isLoading ? "Authenticating..." : "Log In"}
          </button>
        </form>

        <p className={`mt-8 text-center text-sm transition-colors ${isDark ? 'text-gray-500' : 'text-[#718096]'}`}>
          Don&apos;t have an account?{" "}
          <Link href="/signup/template-8" className={`font-bold transition-colors ${isDark ? 'text-[#63b3ed] hover:text-[#90cdf4]' : 'text-[#3182ce] hover:text-[#2b6cb0]'}`}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
