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
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f7] p-4 md:p-8 font-sans">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        
        {/* Left Card (Branding) */}
        <div className="bg-white rounded-[2rem] p-10 flex flex-col justify-between shadow-sm border border-black/5 min-h-[400px]">
          <div>
            <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-8">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4 leading-tight">
              Welcome to the <br /> Bento Experience.
            </h1>
            <p className="text-gray-500 text-lg max-w-sm">
              A clean, minimal approach to secure authentication. Built for modern web apps.
            </p>
          </div>
          <div className="flex items-center gap-3 mt-8">
            <div className="flex -space-x-3">
              <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white" />
              <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white" />
              <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white" />
            </div>
            <p className="text-sm font-medium text-gray-600">Trusted by thousands</p>
          </div>
        </div>

        {/* Right Card (Form) */}
        <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-black/5 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Sign in</h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
              <input 
                type="email" 
                required 
                className="w-full bg-[#f5f5f7] rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all placeholder-gray-400" 
                placeholder="name@example.com" 
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
              <input 
                type="password" 
                required 
                className="w-full bg-[#f5f5f7] rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all placeholder-gray-400" 
                placeholder="••••••••" 
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-600">
                <input type="checkbox" className="rounded border-gray-300 text-black focus:ring-black" />
                Remember me
              </label>
              <a href="#" className="text-sm font-medium text-gray-900 hover:underline">Forgot password?</a>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-black text-white font-medium rounded-xl py-3 hover:bg-gray-800 transition-all flex items-center justify-center gap-2 disabled:opacity-70 mt-4"
            >
              {isLoading ? "Signing in..." : "Sign In"}
              {!isLoading && <ArrowRight size={18} />}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <Link href="/signup/template-6" className="font-medium text-black hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
