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
    <div className="min-h-screen flex items-center justify-center bg-[#e0e5ec] p-4 font-sans">
      <div className="w-full max-w-md bg-[#e0e5ec] rounded-3xl p-8 shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff]">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-700 mb-2">Welcome Back</h1>
          <p className="text-slate-500 text-sm">Please sign in to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-600 mb-2 ml-1">Email Address</label>
            <input 
              type="email" 
              required 
              className="w-full bg-[#e0e5ec] rounded-xl px-4 py-3 text-slate-700 focus:outline-none shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff] placeholder-slate-400" 
              placeholder="hello@example.com" 
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-600 mb-2 ml-1">Password</label>
            <input 
              type="password" 
              required 
              className="w-full bg-[#e0e5ec] rounded-xl px-4 py-3 text-slate-700 focus:outline-none shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff] placeholder-slate-400" 
              placeholder="********" 
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer text-slate-600">
              <input type="checkbox" className="rounded text-blue-400 focus:ring-0 bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff]" />
              Remember me
            </label>
            <a href="#" className="font-semibold text-blue-400 hover:text-blue-500 transition-colors">Forgot password?</a>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-[#e0e5ec] text-blue-500 font-bold text-lg rounded-xl py-3 shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff] transition-all disabled:opacity-70"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-slate-500">
          Don&apos;t have an account?{" "}
          <Link href="/signup/template-5" className="font-semibold text-blue-400 hover:text-blue-500 transition-colors">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
