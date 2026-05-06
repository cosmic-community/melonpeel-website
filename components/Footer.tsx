import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🍉</span>
              <span className="text-2xl font-bold">Melonpeel</span>
            </Link>
            <p className="text-gray-400">
              Fresh stories, vibrant ideas, and creative inspiration.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><Link href="/posts" className="text-gray-400 hover:text-white transition-colors">All Posts</Link></li>
              <li><Link href="/categories" className="text-gray-400 hover:text-white transition-colors">Categories</Link></li>
              <li><Link href="/authors" className="text-gray-400 hover:text-white transition-colors">Authors</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <p className="text-gray-400">
              Built with Next.js and Cosmic CMS.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Melonpeel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}