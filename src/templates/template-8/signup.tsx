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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#4a5568] to-[#2d3748] p-4 font-sans py-12">
      <div className="w-full max-w-md bg-[#e2e8f0] rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.8)] border border-[#cbd5e0]">
        
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto bg-[#cbd5e0] rounded-full flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),0_1px_1px_rgba(255,255,255,0.8)] mb-4">
            <div className="w-8 h-8 bg-[#4a5568] rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.3)]" />
          </div>
          <h1 className="text-3xl font-bold text-[#2d3748] drop-shadow-sm mb-1">Create Account</h1>
          <p className="text-[#718096] text-sm">Join the system today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-[#4a5568] mb-2">Full Name</label>
            <input 
              type="text" 
              required 
              className="w-full bg-[#edf2f7] border border-[#a0aec0] rounded-lg px-4 py-3 text-[#2d3748] shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:outline-none focus:ring-2 focus:ring-[#4299e1] transition-all placeholder-[#a0aec0]" 
              placeholder="John Doe" 
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-[#4a5568] mb-2">Email</label>
            <input 
              type="email" 
              required 
              className="w-full bg-[#edf2f7] border border-[#a0aec0] rounded-lg px-4 py-3 text-[#2d3748] shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:outline-none focus:ring-2 focus:ring-[#4299e1] transition-all placeholder-[#a0aec0]" 
              placeholder="name@example.com" 
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-[#4a5568] mb-2">Password</label>
            <input 
              type="password" 
              required 
              className="w-full bg-[#edf2f7] border border-[#a0aec0] rounded-lg px-4 py-3 text-[#2d3748] shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:outline-none focus:ring-2 focus:ring-[#4299e1] transition-all placeholder-[#a0aec0]" 
              placeholder="Create a strong password" 
            />
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-gradient-to-b from-[#48bb78] to-[#38a169] text-white font-bold text-lg rounded-lg py-3 border border-[#2f855a] shadow-[0_4px_6px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:brightness-110 active:brightness-95 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] transition-all disabled:opacity-70 mt-4"
          >
            {isLoading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-[#718096]">
          Already have an account?{" "}
          <Link href="/login/template-8" className="font-bold text-[#3182ce] hover:text-[#2b6cb0] transition-colors">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
