"use client";
import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4 font-mono text-green-500">
      <div className="w-full max-w-md border border-green-500/30 bg-black relative">
        {/* Decorative Terminal Header */}
        <div className="flex items-center justify-between border-b border-green-500/30 px-4 py-2 bg-green-500/10">
          <span className="text-xs uppercase tracking-widest">sys.login.sh</span>
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-green-500/50" />
            <div className="w-2 h-2 rounded-full bg-green-500/50" />
            <div className="w-2 h-2 rounded-full bg-green-500" />
          </div>
        </div>

        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold uppercase tracking-widest text-glow">System Access</h1>
            <p className="text-xs text-green-500/70 mt-1">Awaiting credentials...</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2 opacity-80">User ID</label>
              <input 
                type="email" 
                required 
                className="w-full bg-black border border-green-500/50 px-4 py-3 text-green-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder-green-900" 
                placeholder="root@localhost" 
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest mb-2 opacity-80">Passphrase</label>
              <input 
                type="password" 
                required 
                className="w-full bg-black border border-green-500/50 px-4 py-3 text-green-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder-green-900" 
                placeholder="********" 
              />
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-green-500/10 border border-green-500 text-green-500 font-bold uppercase tracking-widest py-3 hover:bg-green-500 hover:text-black transition-all disabled:opacity-50"
            >
              {isLoading ? "[ AUTHENTICATING... ]" : "[ INITIALIZE LOGIN ]"}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-green-500/30 flex justify-between items-center text-xs">
            <Link href="/signup/template-4" className="hover:text-green-300 underline underline-offset-4 decoration-green-500/50">
              Create Identity
            </Link>
            <a href="#" className="hover:text-green-300 underline underline-offset-4 decoration-green-500/50">
              Reset Passphrase
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
