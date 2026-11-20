"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Signup() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#a0e0a0] p-4 font-sans py-12">
      <div className="w-full max-w-lg bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        
        <div className="mb-8">
          <h1 className="text-4xl font-black tracking-tight text-black mb-2">Join the club.</h1>
          <p className="font-bold text-gray-600">Create your new account.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-black uppercase mb-2 text-black">Full Name</label>
            <input 
              type="text" 
              required 
              className="w-full bg-[#f4f4f0] border-4 border-black px-4 py-3 font-bold text-black focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all placeholder-gray-400" 
              placeholder="JOHN DOE" 
            />
          </div>

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

          <div className="flex items-start gap-3 mt-4">
            <input type="checkbox" required id="terms" className="w-5 h-5 mt-1 border-4 border-black rounded-none accent-black shrink-0" />
            <label htmlFor="terms" className="font-bold text-sm text-black leading-tight">
              I agree to the <a href="#" className="underline decoration-2">Terms</a> and <a href="#" className="underline decoration-2">Conditions</a>.
            </label>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-black text-white font-black text-xl uppercase py-4 border-4 border-black hover:bg-[#f4d0d0] hover:text-black transition-all active:translate-x-1 active:translate-y-1 active:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50 mt-6 flex justify-center items-center gap-2"
          >
            {isLoading ? "Creating..." : "Sign Up"}
            {!isLoading && <ArrowRight size={24} strokeWidth={3} />}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t-4 border-black text-center">
          <Link href="/login/template-7" className="font-black underline decoration-4 underline-offset-4 hover:bg-black hover:text-white px-2 py-1 transition-colors">
            Already have an account? Log in.
          </Link>
        </div>
      </div>
    </div>
  );
}
