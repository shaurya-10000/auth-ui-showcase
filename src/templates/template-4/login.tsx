"use client";
import { useState } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 font-mono transition-colors duration-300 ${isDark ? 'bg-black text-green-500' : 'bg-[#e8e4d8] text-[#1a472a]'}`}>
      
      {/* Floating Theme Toggle */}
      <button 
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-6 right-6 z-50 p-2.5 rounded-sm border transition-all duration-300 ${isDark ? 'bg-black border-green-500/50 text-green-500 hover:bg-green-500/10' : 'bg-[#e8e4d8] border-[#1a472a]/50 text-[#1a472a] hover:bg-[#1a472a]/10'}`}
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <div className={`w-full max-w-md border relative transition-colors duration-300 ${isDark ? 'border-green-500/30 bg-black' : 'border-[#1a472a]/30 bg-[#f4f1e8]'}`}>
        
        {/* Decorative Terminal Header */}
        <div className={`flex items-center justify-between border-b px-4 py-2 transition-colors ${isDark ? 'border-green-500/30 bg-green-500/10' : 'border-[#1a472a]/30 bg-[#1a472a]/10'}`}>
          <span className="text-xs uppercase tracking-widest">sys.login.sh</span>
          <div className="flex gap-1.5">
            <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-green-500/50' : 'bg-[#1a472a]/50'}`} />
            <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-green-500/50' : 'bg-[#1a472a]/50'}`} />
            <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-green-500' : 'bg-[#1a472a]'}`} />
          </div>
        </div>

        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold uppercase tracking-widest">System Access</h1>
            <p className={`text-xs mt-1 ${isDark ? 'text-green-500/70' : 'text-[#1a472a]/70'}`}>Awaiting credentials...</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2 opacity-80">User ID</label>
              <input 
                type="email" 
                required 
                className={`w-full border px-4 py-3 focus:outline-none focus:ring-1 transition-all ${isDark ? 'bg-black border-green-500/50 text-green-500 focus:border-green-500 focus:ring-green-500 placeholder-green-900' : 'bg-[#e8e4d8] border-[#1a472a]/50 text-[#1a472a] focus:border-[#1a472a] focus:ring-[#1a472a] placeholder-[#1a472a]/30'}`}
                placeholder="root@localhost" 
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest mb-2 opacity-80">Passphrase</label>
              <input 
                type="password" 
                required 
                className={`w-full border px-4 py-3 focus:outline-none focus:ring-1 transition-all ${isDark ? 'bg-black border-green-500/50 text-green-500 focus:border-green-500 focus:ring-green-500 placeholder-green-900' : 'bg-[#e8e4d8] border-[#1a472a]/50 text-[#1a472a] focus:border-[#1a472a] focus:ring-[#1a472a] placeholder-[#1a472a]/30'}`}
                placeholder="********" 
              />
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className={`w-full font-bold uppercase tracking-widest py-3 border transition-all disabled:opacity-50 ${isDark ? 'bg-green-500/10 border-green-500 text-green-500 hover:bg-green-500 hover:text-black' : 'bg-[#1a472a]/10 border-[#1a472a] text-[#1a472a] hover:bg-[#1a472a] hover:text-[#e8e4d8]'}`}
            >
              {isLoading ? "[ AUTHENTICATING... ]" : "[ INITIALIZE LOGIN ]"}
            </button>
          </form>

          <div className={`mt-8 pt-6 border-t flex justify-between items-center text-xs transition-colors ${isDark ? 'border-green-500/30' : 'border-[#1a472a]/30'}`}>
            <Link href="/signup/template-4" className={`hover:underline underline-offset-4 ${isDark ? 'hover:text-green-300 decoration-green-500/50' : 'hover:text-[#1a472a]/70 decoration-[#1a472a]/50'}`}>
              Create Identity
            </Link>
            <a href="#" className={`hover:underline underline-offset-4 ${isDark ? 'hover:text-green-300 decoration-green-500/50' : 'hover:text-[#1a472a]/70 decoration-[#1a472a]/50'}`}>
              Reset Passphrase
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
