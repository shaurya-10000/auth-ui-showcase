"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Carousel", href: "/" },
    { name: "Grid View", href: "/grid" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl">
      <div className="w-full px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-white font-semibold text-lg tracking-tight flex items-center gap-2">
          AuthShowcase<span className="text-indigo-500">.</span>
        </Link>
        
        <nav className="flex items-center gap-8 text-sm font-medium text-neutral-400">
          {navLinks.map((link) => {
            // Use the pathname to determine active state
            // Next.js usePathname returns the current URL path
            const isActive = link.href === "/" 
              ? pathname === "/" 
              : pathname?.startsWith(link.href);

            return (
              <Link 
                key={link.name}
                href={link.href} 
                className={`transition-colors duration-200 ${
                  isActive ? "text-white" : "hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <a 
            href="https://github.com/shaurya-10000/auth-ui-showcase" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-white transition-colors duration-200 flex items-center gap-2"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
