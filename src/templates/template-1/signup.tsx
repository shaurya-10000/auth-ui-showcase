"use client";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="min-h-screen flex bg-white font-sans text-slate-900">
      {/* Left Side - Form */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 w-full lg:w-1/2">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Create an account</h2>
            <p className="mt-2 text-sm text-slate-500">
              Already have an account?{" "}
              <Link href="/login/template-1" className="font-semibold text-indigo-600 hover:text-indigo-500 transition-colors">
                Sign in
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <input type="text" id="name" required className="peer block w-full appearance-none rounded-lg border border-slate-300 px-3 pt-5 pb-2 text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-0 bg-transparent" placeholder=" " />
              <label htmlFor="name" className="absolute left-3 top-4 z-10 origin-[0] -translate-y-3 scale-75 transform text-sm text-slate-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-indigo-600 font-medium">Full Name</label>
            </div>

            <div className="relative">
              <input type="email" id="email" required className="peer block w-full appearance-none rounded-lg border border-slate-300 px-3 pt-5 pb-2 text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-0 bg-transparent" placeholder=" " />
              <label htmlFor="email" className="absolute left-3 top-4 z-10 origin-[0] -translate-y-3 scale-75 transform text-sm text-slate-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-indigo-600 font-medium">Email address</label>
            </div>

            <div className="relative">
              <input type={showPassword ? "text" : "password"} id="password" required className="peer block w-full appearance-none rounded-lg border border-slate-300 px-3 pt-5 pb-2 pr-10 text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-0 bg-transparent" placeholder=" " />
              <label htmlFor="password" className="absolute left-3 top-4 z-10 origin-[0] -translate-y-3 scale-75 transform text-sm text-slate-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-indigo-600 font-medium">Password</label>
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 transition-colors focus:outline-none">
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="flex items-start">
              <div className="flex h-6 items-center">
                <input id="terms" name="terms" type="checkbox" required className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600" />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label htmlFor="terms" className="font-medium text-slate-600">
                  I agree to the <a href="#" className="text-indigo-600 hover:text-indigo-500">Terms</a> and <a href="#" className="text-indigo-600 hover:text-indigo-500">Privacy Policy</a>
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
        <div className="absolute inset-0 h-full w-full bg-slate-900 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900 via-slate-900 to-purple-900 opacity-80" />
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
