"use client";
import { useState } from "react";
import Link from "next/link";

export default function Signup() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4 font-mono text-green-500">
      <div className="w-full max-w-lg border border-green-500/30 bg-black relative shadow-[0_0_30px_rgba(34,197,94,0.1)]">
        <div className="flex items-center justify-between border-b border-green-500/30 px-4 py-2 bg-green-500/10">
          <span className="text-xs uppercase tracking-widest">sys.register.sh</span>
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-green-500/50" />
            <div className="w-2 h-2 rounded-full bg-green-500/50" />
            <div className="w-2 h-2 rounded-full bg-green-500" />
          </div>
        </div>

        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold uppercase tracking-widest text-glow">New Identity</h1>
            <p className="text-xs text-green-500/70 mt-1">Generating new user profile...</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2 opacity-80">Alias</label>
              <input type="text" required className="w-full bg-black border border-green-500/50 px-4 py-3 text-green-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder-green-900" placeholder="neo" />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest mb-2 opacity-80">Comm-Link (Email)</label>
              <input type="email" required className="w-full bg-black border border-green-500/50 px-4 py-3 text-green-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder-green-900" placeholder="neo@matrix.net" />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest mb-2 opacity-80">Passphrase</label>
              <input type="password" required className="w-full bg-black border border-green-500/50 px-4 py-3 text-green-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder-green-900" placeholder="********" />
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-green-500/10 border border-green-500 text-green-500 font-bold uppercase tracking-widest py-3 hover:bg-green-500 hover:text-black transition-all disabled:opacity-50 mt-4"
            >
              {isLoading ? "[ GENERATING... ]" : "[ INITIALIZE REGISTRATION ]"}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-green-500/30 text-center text-xs">
            <Link href="/login/template-4" className="hover:text-green-300 underline underline-offset-4 decoration-green-500/50">
              Identity already exists? Login here.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
