import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-xl tracking-tighter">
          Auth<span className="text-indigo-400">Showcase</span>.
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
          <Link href="/" className="hover:text-white transition-colors">Carousel</Link>
          <Link href="#" className="hover:text-white transition-colors">Grid View</Link>
          <a href="https://github.com/shaurya-10000/auth-ui-showcase" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
