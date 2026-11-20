import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl">
      <div className="w-full px-6 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="text-white font-semibold text-lg tracking-tight flex items-center gap-2">
          AuthShowcase<span className="text-indigo-500">.</span>
        </Link>
        
        {/* Right: Navigation */}
        <nav className="flex items-center gap-8 text-sm font-medium text-neutral-400">
          <Link href="/" className="hover:text-white transition-colors duration-200">Carousel</Link>
          <Link href="#" className="hover:text-white transition-colors duration-200">Grid View</Link>
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
