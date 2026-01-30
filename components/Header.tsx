import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        {/* Logo / Site Name */}
        <Link 
          href="/" 
          className="text-xl font-bold tracking-tight text-zinc-900 hover:opacity-70 transition-opacity"
        >
          Maybe Banger
        </Link>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-8">
          <Link 
            href="/albums" 
            className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            Albums
          </Link>
          <Link 
            href="/about" 
            className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
