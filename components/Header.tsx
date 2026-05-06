import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-3xl">🍉</span>
          <span className="text-2xl font-bold gradient-text">Melonpeel</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-melon-600 font-medium transition-colors">
            Home
          </Link>
          <Link href="/posts" className="text-gray-700 hover:text-melon-600 font-medium transition-colors">
            Posts
          </Link>
          <Link href="/categories" className="text-gray-700 hover:text-melon-600 font-medium transition-colors">
            Categories
          </Link>
          <Link href="/authors" className="text-gray-700 hover:text-melon-600 font-medium transition-colors">
            Authors
          </Link>
        </nav>
        <Link 
          href="/posts" 
          className="md:hidden text-melon-600 font-medium"
        >
          Posts
        </Link>
      </div>
    </header>
  )
}