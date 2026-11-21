"use client";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowRight, Sun, Moon } from "lucide-react";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="min-h-screen flex font-sans transition-colors duration-300">
      
      {/* Floating Theme Toggle - Extreme Right */}
      <button 
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-6 right-6 z-50 p-2.5 rounded-full shadow-lg transition-all duration-300 ${isDark ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400' : 'bg-white hover:bg-slate-100 text-slate-800'}`}
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Left Side - Form */}
      <div className={`flex-1 flex flex-col justify-center px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 w-full lg:w-1/2 transition-colors duration-300 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="mb-10">
            <h2 className={`text-3xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>Create an account</h2>
            <p className={`mt-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Already have an account?{" "}
              <Link href="/login/template-1" className="font-semibold text-indigo-500 hover:text-indigo-400 transition-colors">
                Sign in
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <input type="text" id="name" required className={`peer block w-full appearance-none rounded-lg border px-3 pt-5 pb-2 focus:outline-none focus:ring-0 bg-transparent ${isDark ? 'border-slate-700 text-white focus:border-indigo-500' : 'border-slate-300 text-slate-900 focus:border-indigo-600'}`} placeholder=" " />
              <label htmlFor="name" className={`absolute left-3 top-4 z-10 origin-[0] -translate-y-3 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 font-medium ${isDark ? 'text-slate-400 peer-focus:text-indigo-400' : 'text-slate-500 peer-focus:text-indigo-600'}`}>Full Name</label>
            </div>

            <div className="relative">
              <input type="email" id="email" required className={`peer block w-full appearance-none rounded-lg border px-3 pt-5 pb-2 focus:outline-none focus:ring-0 bg-transparent ${isDark ? 'border-slate-700 text-white focus:border-indigo-500' : 'border-slate-300 text-slate-900 focus:border-indigo-600'}`} placeholder=" " />
              <label htmlFor="email" className={`absolute left-3 top-4 z-10 origin-[0] -translate-y-3 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 font-medium ${isDark ? 'text-slate-400 peer-focus:text-indigo-400' : 'text-slate-500 peer-focus:text-indigo-600'}`}>Email address</label>
            </div>

            <div className="relative">
              <input type={showPassword ? "text" : "password"} id="password" required className={`peer block w-full appearance-none rounded-lg border px-3 pt-5 pb-2 pr-10 focus:outline-none focus:ring-0 bg-transparent ${isDark ? 'border-slate-700 text-white focus:border-indigo-500' : 'border-slate-300 text-slate-900 focus:border-indigo-600'}`} placeholder=" " />
              <label htmlFor="password" className={`absolute left-3 top-4 z-10 origin-[0] -translate-y-3 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 font-medium ${isDark ? 'text-slate-400 peer-focus:text-indigo-400' : 'text-slate-500 peer-focus:text-indigo-600'}`}>Password</label>
              <button type="button" onClick={() => setShowPassword(!showPassword)} className={`absolute right-3 top-1/2 -translate-y-1/2 transition-colors focus:outline-none ${isDark ? 'text-slate-500 hover:text-slate-300' : 'text-slate-400 hover:text-slate-600'}`}>
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="flex items-start">
              <div className="flex h-6 items-center">
                <input id="terms" name="terms" type="checkbox" required className={`h-4 w-4 rounded border ${isDark ? 'border-slate-700 bg-slate-800 text-indigo-500 focus:ring-indigo-500' : 'border-slate-300 text-indigo-600 focus:ring-indigo-600'}`} />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label htmlFor="terms" className={`font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  I agree to the <a href="#" className="text-indigo-500 hover:text-indigo-400">Terms</a> and <a href="#" className="text-indigo-500 hover:text-indigo-400">Privacy Policy</a>
                </label>
              </div>
            </div>

            <button type="submit" disabled={isLoading} className="group relative flex w-full justify-center rounded-lg bg-indigo-600 px-3 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-2">
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Creating account...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Create account
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="relative hidden w-0 flex-1 lg:block">
        <div className={`absolute inset-0 h-full w-full overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-slate-900'}`}>
          <div className={`absolute inset-0 bg-gradient-to-tr from-indigo-900 via-slate-900 to-purple-900 opacity-80 transition-opacity duration-300 ${isDark ? 'opacity-60' : 'opacity-80'}`} />
          <div className="absolute inset-0 flex flex-col justify-center px-16 text-white z-10">
            <h1 className="text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Start your journey <br /> with us today.
            </h1>
            <p className="text-lg text-slate-300 max-w-md">
              Get access to premium features, dedicated support, and a community of builders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
