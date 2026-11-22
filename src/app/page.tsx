"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { templates } from "@/config/templates";
import Header from "@/components/Header";
import CodeSidebar from "@/components/CodeSidebar";
import { useSwipe } from "@/hooks/useSwipe";
import { ChevronLeft, ChevronRight, Code as CodeIcon } from "lucide-react";

import { Login as Template1Login } from "@/templates/template-1";
import { Login as Template2Login } from "@/templates/template-2";
import { Login as Template3Login } from "@/templates/template-3";
import { Login as Template4Login } from "@/templates/template-4";
import { Login as Template5Login } from "@/templates/template-5";
import { Login as Template6Login } from "@/templates/template-6";
import { Login as Template7Login } from "@/templates/template-7";
import { Login as Template8Login } from "@/templates/template-8";
import { Login as Template9Login } from "@/templates/template-9";
import { Login as Template10Login } from "@/templates/template-10";
import { Login as Template11Login } from "@/templates/template-11";
import { Login as Template12Login } from "@/templates/template-12";
import { Login as Template13Login } from "@/templates/template-13";
import { Login as Template14Login } from "@/templates/template-14";

const previewComponents = {
  'template-1': Template1Login,
  'template-2': Template2Login,
  'template-3': Template3Login,
  'template-4': Template4Login,
  'template-5': Template5Login,
  'template-6': Template6Login,
  'template-7': Template7Login,
  'template-8': Template8Login,
  'template-9': Template9Login,
  'template-10': Template10Login,
  'template-11': Template11Login,
  'template-12': Template12Login,
  'template-13': Template13Login,
  'template-14': Template14Login,
};

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCodeOpen, setIsCodeOpen] = useState(false);
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

  const closeCode = useCallback(() => setIsCodeOpen(false), []);

  const swipeHandlers = useSwipe({
    onSwipeLeft: nextTemplate,
    onSwipeRight: prevTemplate,
  });

  const current = templates[currentIndex];
  const PreviewComponent = previewComponents[current.id as keyof typeof previewComponents];

  return (
    <main className="min-h-screen lg:h-screen bg-neutral-950 text-white flex flex-col relative overflow-x-hidden lg:overflow-hidden pt-16">
      <Header />

      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none mt-16">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <div
        className="relative z-10 flex-1 min-h-0 flex items-center max-w-[90rem] mx-auto w-full px-4 sm:px-8 lg:px-6 py-6 lg:py-4"
        style={{ touchAction: "pan-y" }}
        {...swipeHandlers}
      >
        <div className="flex items-center justify-between gap-6 w-full lg:h-full lg:max-h-[600px]">
          {/* Desktop Previous Arrow - centered vertically, outside the preview */}
          <button
            onClick={prevTemplate}
            className="hidden lg:flex shrink-0 w-14 h-14 items-center justify-center rounded-full bg-neutral-900/50 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 transition-all backdrop-blur-sm text-2xl"
            aria-label="Previous template"
          >
            <ChevronLeft size={28} />
          </button>

          <div className="flex-1 min-w-0 lg:h-full flex flex-col items-center justify-center">
            <div className="w-full flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 items-center">
              {/* Live Scaled Preview Box */}
              <div
                ref={boxRef}
                className="group relative w-full lg:flex-1 aspect-video max-h-[42vh] sm:max-h-[50vh] lg:max-h-[60vh] rounded-2xl border border-white/10 shadow-2xl overflow-hidden bg-[#0a0a0a] ring-1 ring-white/5"
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

              <div className="w-full lg:flex-1 lg:max-w-md flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  {current.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3">{current.name}</h1>
                <p className="text-neutral-400 text-sm sm:text-lg mb-5 sm:mb-6 leading-relaxed">
                  {current.description}
                </p>

                <div className="grid grid-cols-2 sm:flex sm:flex-row gap-2.5 sm:gap-3 mt-auto">
                  <Link
                    href={`/login/${current.id}`}
                    className="flex-1 text-center bg-white text-black text-sm sm:text-base font-semibold py-2.5 sm:py-3 rounded-xl hover:bg-neutral-200 transition-colors shadow-lg shadow-white/10"
                  >
                    View Login
                  </Link>
                  <Link
                    href={`/signup/${current.id}`}
                    className="flex-1 text-center bg-neutral-900 border border-neutral-800 text-white text-sm sm:text-base font-semibold py-2.5 sm:py-3 rounded-xl hover:bg-neutral-800 transition-colors"
                  >
                    View Sign Up
                  </Link>
                  <a
                    href={`/api/download/${current.id}`}
                    download
                    className="col-span-2 sm:flex-1 text-center bg-indigo-600 hover:bg-indigo-500 text-white text-sm sm:text-base font-semibold py-2.5 sm:py-3 rounded-xl transition-colors shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    Code
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => setIsCodeOpen(true)}
                  aria-haspopup="dialog"
                  className="mt-2.5 sm:mt-3 w-full flex items-center justify-center gap-2 bg-neutral-900 border border-neutral-800 text-white text-sm sm:text-base font-semibold py-2.5 sm:py-3 rounded-xl hover:bg-neutral-800 transition-colors"
                >
                  <CodeIcon size={18} />
                  View Code
                </button>

                <div className="flex items-center justify-between lg:justify-start mt-6 sm:mt-8">
                  <button
                    onClick={prevTemplate}
                    className="flex lg:hidden w-11 h-11 rounded-full bg-neutral-900 border border-neutral-800 items-center justify-center hover:bg-neutral-800 transition-colors"
                    aria-label="Previous template"
                  >
                    <ChevronLeft size={22} />
                  </button>

                  <div className="flex justify-center gap-2">
                    {templates.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-indigo-500' : 'w-2 bg-neutral-800'}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextTemplate}
                    className="flex lg:hidden w-11 h-11 rounded-full bg-neutral-900 border border-neutral-800 items-center justify-center hover:bg-neutral-800 transition-colors"
                    aria-label="Next template"
                  >
                    <ChevronRight size={22} />
                  </button>
                </div>
              </div>
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

      <CodeSidebar
        open={isCodeOpen}
        templateId={current.id}
        templateName={current.name}
        onClose={closeCode}
      />
    </main>
  );
}