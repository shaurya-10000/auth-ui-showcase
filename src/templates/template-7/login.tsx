"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4d0d0] p-4 font-sans">
      <div className="w-full max-w-md bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        
        <div className="mb-8">
          <h1 className="text-4xl font-black tracking-tight text-black mb-2">Hey there.</h1>
          <p className="font-bold text-gray-600">Log in to your account.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-black uppercase mb-2 text-black">Email</label>
            <input 
              type="email" 
              required 
              className="w-full bg-[#f4f4f0] border-4 border-black px-4 py-3 font-bold text-black focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all placeholder-gray-400" 
              placeholder="HELLO@EXAMPLE.COM" 
            />
          </div>

          <div>
            <label className="block text-sm font-black uppercase mb-2 text-black">Password</label>
            <input 
              type="password" 
              required 
              className="w-full bg-[#f4f4f0] border-4 border-black px-4 py-3 font-bold text-black focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all placeholder-gray-400" 
              placeholder="********" 
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer text-sm font-bold text-black">
              <input type="checkbox" className="w-5 h-5 border-4 border-black rounded-none accent-black" />
              Remember me
            </label>
            <a href="#" className="text-sm font-bold underline decoration-2 underline-offset-4 hover:text-gray-600">Forgot password?</a>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-black text-white font-black text-xl uppercase py-4 border-4 border-black hover:bg-[#a0e0a0] hover:text-black transition-all active:translate-x-1 active:translate-y-1 active:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50 mt-4 flex justify-center items-center gap-2"
          >
            {isLoading ? "Signing In..." : "Sign In"}
            {!isLoading && <ArrowRight size={24} strokeWidth={3} />}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t-4 border-black text-center">
          <Link href="/signup/template-7" className="font-black underline decoration-4 underline-offset-4 hover:bg-black hover:text-white px-2 py-1 transition-colors">
            Don&apos;t have an account? Sign up.
          </Link>
        </div>
      </div>
    </div>
  );
}
