import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 w-full border-b border-zinc-200 bg-green-500/50 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-xl font-bold tracking-tight text-black hover:text-white/90 transition-colors"
        >
          Maybe Banger
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <Link 
            href="/albums" 
            className="text-sm font-medium text-black hover:text-white/90 transition-colors"
          >
            Albums
          </Link>
          <Link 
            href="/about" 
            className="text-sm font-medium text-black hover:text-white/90 transition-colors"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
