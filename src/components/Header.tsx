"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, GalleryHorizontal } from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Carousel", href: "/", icon: GalleryHorizontal },
    { name: "Grid View", href: "/grid", icon: LayoutGrid },
  ];

  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl">
      <div className="w-full px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-white font-semibold text-lg tracking-tight flex items-center gap-2">
          AuthShowcase<span className="text-indigo-500">.</span>
        </Link>
        
        <nav className="flex items-center gap-2 sm:gap-6 text-sm font-medium text-neutral-400">
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
            const Icon = link.icon;
            
            return (
              <Link 
                key={link.name}
                href={link.href} 
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  isActive ? "bg-neutral-800 text-white" : "hover:bg-neutral-900 hover:text-white"
                }`}
              >
                <Icon size={18} />
                <span className="hidden sm:inline">{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
