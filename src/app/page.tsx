"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { templates } from "@/config/templates";
import Header from "@/components/Header";

import { Login as Template1Login } from "@/templates/template-1";
import { Login as Template2Login } from "@/templates/template-2";
import { Login as Template3Login } from "@/templates/template-3";
import { Login as Template4Login } from "@/templates/template-4";
import { Login as Template5Login } from "@/templates/template-5";
import { Login as Template6Login } from "@/templates/template-6";

const previewComponents = {
  'template-1': Template1Login,
  'template-2': Template2Login,
  'template-3': Template3Login,
  'template-4': Template4Login,
  'template-5': Template5Login,
  'template-6': Template6Login,
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

  const current = templates[currentIndex];
  const PreviewComponent = previewComponents[current.id as keyof typeof previewComponents];

  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col overflow-hidden">
      <Header />

      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-6 pt-24 pb-12">

        <div className="relative flex items-center justify-between gap-8 h-[500px]">

          <button
            onClick={prevTemplate}
            className="hidden md:flex shrink-0 w-14 h-14 items-center justify-center rounded-full bg-neutral-900/50 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 transition-all backdrop-blur-sm text-2xl z-50"
            aria-label="Previous template"
          >
            ←
          </button>

          <div className="flex-1 h-full flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

            {/* Live Scaled Preview Box */}
            <div
              ref={boxRef}
              className="group relative w-full flex-1 aspect-video rounded-2xl border border-white/10 shadow-2xl overflow-hidden bg-[#0a0a0a] ring-1 ring-white/5"
            >
              {/* 1440x810 canvas scaled to exactly fit the box width */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                  className="absolute top-0 left-0 w-[1440px] h-[810px] bg-[#0a0a0a] overflow-hidden [&>*]:!h-full [&>*]:!min-h-0 [&>*]:!w-full"
                  style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}
                >
                  {PreviewComponent ? <PreviewComponent /> : (
                    <div className="w-full h-full flex items-center justify-center text-neutral-500 font-medium">
                      Preview Loading...
                    </div>
                  )}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                <Link
                  href={`/login/${current.id}`}
                  className="bg-white text-black font-semibold py-3 px-6 rounded-xl shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                >
                  Open Live Preview
                </Link>
              </div>
            </div>

            <div className="flex-1 w-full lg:max-w-md flex flex-col">
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

          <button
            onClick={nextTemplate}
            className="hidden md:flex shrink-0 w-14 h-14 items-center justify-center rounded-full bg-neutral-900/50 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 transition-all backdrop-blur-sm text-2xl z-50"
            aria-label="Next template"
          >
            →
          </button>
        </div>

        <div className="flex md:hidden justify-center gap-6 mt-8">
            <button onClick={prevTemplate} className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center">←</button>
            <button onClick={nextTemplate} className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center">→</button>
        </div>

      </div>
    </main>
  );
}
