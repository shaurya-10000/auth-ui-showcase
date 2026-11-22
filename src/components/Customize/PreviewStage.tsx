"use client";

import { useEffect, useRef, useState } from "react";
import type { BrandablePage } from "@/lib/brand/registry";
import type { BrandValues } from "@/lib/brand/types";

interface PreviewStageProps {
  Page: BrandablePage;
  brand: BrandValues;
}

/** Renders the real page on a 1440x810 canvas and scales it to fit the available width. */
export function PreviewStage({ Page, brand }: PreviewStageProps) {
  const [scale, setScale] = useState(0.5);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = boxRef.current;
    if (!element) return;

    const update = () => setScale(element.clientWidth / 1440);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={boxRef}
      className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl ring-1 ring-white/5"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-0 top-0 h-[810px] w-[1440px] overflow-hidden bg-[#0a0a0a] *:h-full! *:min-h-0! *:w-full!"
          style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}
        >
          <Page brand={brand} />
        </div>
      </div>
    </div>
  );
}
