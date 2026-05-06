import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="gradient-bg">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-6xl mb-6 animate-bounce">🍉</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
              Fresh stories, <br />
              <span className="gradient-text">juicy ideas</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto">
              Welcome to Melonpeel — a vibrant collection of creative writing, insights, and inspiration.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/posts"
                className="bg-melon-500 hover:bg-melon-600 text-white px-8 py-3 rounded-full font-semibold transition-colors shadow-lg hover:shadow-xl"
              >
                Read Latest Posts
              </Link>
              <Link
                href="/categories"
                className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-full font-semibold transition-colors shadow-lg hover:shadow-xl border border-gray-200"
              >
                Browse Categories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}