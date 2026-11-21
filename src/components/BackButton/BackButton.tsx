"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";

/** Routes where the back button is shown (login and signup pages only). */
const VISIBLE_ROUTES = /^\/(login|signup)(\/|$)/;

export default function BackButton() {
  const pathname = usePathname();

  if (!VISIBLE_ROUTES.test(pathname)) return null;

  return (
    <Link
      href="/"
      aria-label="Back to templates"
      className="fixed top-6 left-6 z-50 flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2.5 text-sm font-medium text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-black/80"
    >
      <ArrowLeft size={20} />
      Back
    </Link>
  );
}
