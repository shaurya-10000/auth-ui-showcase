"use client";

import { useState } from "react";
import Link from "next/link";
import { templates } from "@/config/templates";
import Header from "@/components/Header";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTemplate = () => {
    setCurrentIndex((prev) => (prev + 1) % templates.length);
  };

  const prevTemplate = () => {
    setCurrentIndex((prev) => (prev - 1 + templates.length) % templates.length);
  };

  const current = templates[currentIndex];

  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col overflow-hidden">
      <Header />

      {/* Ambient Background Glow */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-6 pt-24 pb-12">
        
        {/* Main Carousel Area */}
        <div className="relative flex items-center justify-between gap-8 h-[500px]">
          
          {/* Left Button */}
          <button 
            onClick={prevTemplate}
            className="hidden md:flex shrink-0 w-14 h-14 items-center justify-center rounded-full bg-neutral-900/50 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 transition-all backdrop-blur-sm text-2xl"
            aria-label="Previous template"
          >
            ←
          </button>

          {/* The Active Template Preview */}
          <div className="flex-1 h-full flex flex-col md:flex-row gap-8 items-center">
            
            {/* Visual Preview Box */}
            <div className={`flex-1 w-full h-full rounded-3xl border border-neutral-800 shadow-2xl transition-colors duration-500 flex items-center justify-center ${current.previewColor}`}>
              <span className="text-neutral-500 font-medium tracking-widest uppercase text-sm">
                {current.name} UI Preview
              </span>
            </div>

            {/* Info & Actions */}
            <div className="flex-1 w-full md:max-w-md flex flex-col">
              <div className="flex gap-2 mb-6">
                {current.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs font-medium bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{current.name}</h1>
              <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                {current.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <Link 
                  href={`/login/${current.id}`}
                  className="flex-1 text-center bg-white text-black font-semibold py-3 rounded-xl hover:bg-neutral-200 transition-colors shadow-lg shadow-white/10"
                >
                  View Login
                </Link>
                <Link 
                  href={`/signup/${current.id}`}
                  className="flex-1 text-center bg-neutral-900 border border-neutral-800 text-white font-semibold py-3 rounded-xl hover:bg-neutral-800 transition-colors"
                >
                  View Sign Up
                </Link>
              </div>

              {/* Progress Indicator */}
              <div className="flex gap-2 mt-8">
                {templates.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-indigo-500' : 'w-2 bg-neutral-800'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Button */}
          <button 
            onClick={nextTemplate}
            className="hidden md:flex shrink-0 w-14 h-14 items-center justify-center rounded-full bg-neutral-900/50 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 transition-all backdrop-blur-sm text-2xl"
            aria-label="Next template"
          >
            →
          </button>
        </div>

        {/* Mobile Arrows */}
        <div className="flex md:hidden justify-center gap-6 mt-8">
            <button onClick={prevTemplate} className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center">←</button>
            <button onClick={nextTemplate} className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center">→</button>
        </div>

      </div>
    </main>
  );
}