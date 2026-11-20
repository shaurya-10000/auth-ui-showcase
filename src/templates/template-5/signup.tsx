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
    <div className="min-h-screen flex items-center justify-center bg-[#e0e5ec] p-4 font-sans py-12">
      <div className="w-full max-w-md bg-[#e0e5ec] rounded-3xl p-8 shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff]">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-700 mb-2">Create Account</h1>
          <p className="text-slate-500 text-sm">Join us today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-600 mb-2 ml-1">Full Name</label>
            <input 
              type="text" 
              required 
              className="w-full bg-[#e0e5ec] rounded-xl px-4 py-3 text-slate-700 focus:outline-none shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff] placeholder-slate-400" 
              placeholder="John Doe" 
            />
          </div>

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

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-[#e0e5ec] text-blue-500 font-bold text-lg rounded-xl py-3 shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff] transition-all disabled:opacity-70 mt-4"
          >
            {isLoading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link href="/login/template-5" className="font-semibold text-blue-400 hover:text-blue-500 transition-colors">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
