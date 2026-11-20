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
    <div className="min-h-screen flex items-center justify-center bg-cyan-400 p-4 font-mono">
      <div className="w-full max-w-lg bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="mb-8 border-b-4 border-black pb-4">
          <h1 className="text-4xl font-black uppercase tracking-tighter">Register.</h1>
          <p className="font-bold mt-2">Create a new system identity.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-black uppercase mb-2">Full Name</label>
            <input type="text" required className="w-full bg-white border-4 border-black px-4 py-3 font-bold focus:outline-none focus:bg-cyan-100 transition-colors placeholder-neutral-400" placeholder="JOHN DOE" />
          </div>

          <div>
            <label className="block text-sm font-black uppercase mb-2">Email</label>
            <input type="email" required className="w-full bg-white border-4 border-black px-4 py-3 font-bold focus:outline-none focus:bg-cyan-100 transition-colors placeholder-neutral-400" placeholder="USER@EXAMPLE.COM" />
          </div>

          <div>
            <label className="block text-sm font-black uppercase mb-2">Password</label>
            <input type="password" required className="w-full bg-white border-4 border-black px-4 py-3 font-bold focus:outline-none focus:bg-cyan-100 transition-colors placeholder-neutral-400" placeholder="********" />
          </div>

          <div className="flex items-start gap-3">
            <input type="checkbox" required id="terms" className="w-6 h-6 mt-1 border-4 border-black rounded-none accent-black shrink-0" />
            <label htmlFor="terms" className="font-bold text-sm uppercase leading-tight">
              I agree to the <a href="#" className="underline decoration-4 underline-offset-2">Terms</a> and <a href="#" className="underline decoration-4 underline-offset-2">Conditions</a>.
            </label>
          </div>

          <button type="submit" disabled={isLoading} className="w-full bg-black text-white font-black text-xl uppercase py-4 border-4 border-black hover:bg-cyan-400 hover:text-black transition-all active:translate-x-1 active:translate-y-1 active:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50 mt-4">
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="mt-8 pt-4 border-t-4 border-black text-center">
          <Link href="/login/template-3" className="font-black underline decoration-4 underline-offset-4 hover:bg-black hover:text-white px-2 py-1 transition-colors">
            Already registered? Login here.
          </Link>
        </div>
      </div>
    </div>
  );
}
