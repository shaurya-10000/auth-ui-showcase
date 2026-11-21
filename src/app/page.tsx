"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { templates } from "@/config/templates";
import Header from "@/components/Header";
import { useSwipe } from "@/hooks/useSwipe";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Login as Template1Login } from "@/templates/template-1";
import { Login as Template2Login } from "@/templates/template-2";
import { Login as Template3Login } from "@/templates/template-3";
import { Login as Template4Login } from "@/templates/template-4";
import { Login as Template5Login } from "@/templates/template-5";
import { Login as Template6Login } from "@/templates/template-6";
import { Login as Template7Login } from "@/templates/template-7";
import { Login as Template8Login } from "@/templates/template-8";

const previewComponents = {
  'template-1': Template1Login,
  'template-2': Template2Login,
  'template-3': Template3Login,
  'template-4': Template4Login,
  'template-5': Template5Login,
  'template-6': Template6Login,
  'template-7': Template7Login,
  'template-8': Template8Login,
};

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scale, setScale] = useState(0.4);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / 1440);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const nextTemplate = () => {
    setCurrentIndex((prev) => (prev + 1) % templates.length);
  };

  const prevTemplate = () => {
    setCurrentIndex((prev) => (prev - 1 + templates.length) % templates.length);
  };

  const swipeHandlers = useSwipe({
    onSwipeLeft: nextTemplate,
    onSwipeRight: prevTemplate,
  });

  const current = templates[currentIndex];
  const PreviewComponent = previewComponents[current.id as keyof typeof previewComponents];

  return (
    <main className="h-screen bg-neutral-950 text-white flex flex-col relative overflow-hidden">
      <Header />

      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none mt-16">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <div
        className="relative z-10 flex-1 min-h-0 flex items-center max-w-[90rem] mx-auto w-full px-12 sm:px-20 lg:px-0 py-4"
        style={{ touchAction: "pan-y" }}
        {...swipeHandlers}
      >

        <div className="flex items-center justify-between gap-6 w-full h-full max-h-[600px]">

          {/* Desktop Previous Arrow - centered vertically, outside the preview */}
          <button
            onClick={prevTemplate}
            className="hidden lg:flex shrink-0 w-14 h-14 items-center justify-center rounded-full bg-neutral-900/50 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 transition-all backdrop-blur-sm text-2xl"
            aria-label="Previous template"
          >
            <ChevronLeft size={28} />
          </button>

          <div className="flex-1 min-w-0 h-full flex flex-col items-center justify-center">

            <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">

              {/* Live Scaled Preview Box */}
              <div
                ref={boxRef}
                className="group relative w-full flex-1 aspect-video max-h-[60vh] rounded-2xl border border-white/10 shadow-2xl overflow-hidden bg-[#0a0a0a] ring-1 ring-white/5"
              >
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div
                    className="absolute top-0 left-0 w-[1440px] h-[810px] bg-[#0a0a0a] overflow-hidden *:h-full! *:min-h-0! *:w-full!"
                    style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}
                  >
                    {PreviewComponent ? <PreviewComponent /> : (
                      <div className="w-full h-full flex items-center justify-center text-neutral-500 font-medium">
                        Preview Loading...
                      </div>
                    )}
                  </div>
                </div>

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                  <Link
                    href={`/login/${current.id}`}
                    className="bg-white text-black font-semibold py-3 px-6 rounded-xl shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                  >
                    Open Live Preview
                  </Link>
                </div>
              </div>

              <div className="flex-1 w-full lg:max-w-md flex flex-col justify-center">
                <div className="flex gap-2 mb-4">
                  {current.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">{current.name}</h1>
                <p className="text-neutral-400 text-base sm:text-lg mb-6 leading-relaxed">
                  {current.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
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
                  <a
                    href={`/api/download/${current.id}`}
                    download
                    className="flex-1 text-center bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-xl transition-colors shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    Code
                  </a>
                </div>

                <div className="flex justify-center mt-8 lg:justify-start gap-2">
                  {templates.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-indigo-500' : 'w-2 bg-neutral-800'}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Navigation Controls */}
            <div className="flex lg:hidden justify-center gap-6 mt-6 w-full shrink-0">
              <button onClick={prevTemplate} className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:bg-neutral-800 transition-colors" aria-label="Previous template">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextTemplate} className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:bg-neutral-800 transition-colors" aria-label="Next template">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Desktop Next Arrow - centered vertically, outside the content */}
          <button
            onClick={nextTemplate}
            className="hidden lg:flex shrink-0 w-14 h-14 items-center justify-center rounded-full bg-neutral-900/50 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 transition-all backdrop-blur-sm text-2xl"
            aria-label="Next template"
          >
            <ChevronRight size={28} />
          </button>

        </div>
      </div>
    </main>
  );
}
