import { getAllAuthors, getMetafieldValue } from '@/lib/cosmic'
import Link from 'next/link'

export const metadata = {
  title: 'Authors | Melonpeel',
}

export default async function AuthorsPage() {
  const authors = await getAllAuthors()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Authors</h1>
      <p className="text-lg text-gray-600 mb-12">Meet the creative minds behind Melonpeel</p>

      {authors.length === 0 ? (
        <p className="text-gray-600">No authors yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {authors.map((author) => (
            <Link
              key={author.id}
              href={`/authors/${author.slug}`}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center gap-4 mb-4">
                {author.metadata?.avatar ? (
                  <img
                    src={`${author.metadata.avatar.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
                    alt={author.title}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-melon-400 to-peel-400 flex items-center justify-center text-white text-xl font-bold">
                    {author.title.charAt(0)}
                  </div>
                )}
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-melon-600 transition-colors">
                  {author.title}
                </h2>
              </div>
              {author.metadata?.bio && (
                <p className="text-gray-600 line-clamp-3">
                  {getMetafieldValue(author.metadata.bio)}
                </p>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}