// app/authors/[slug]/page.tsx
import { getAuthorBySlug, getPostsByAuthor, getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import PostCard from '@/components/PostCard'
import Link from 'next/link'

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const author = await getAuthorBySlug(slug)

  if (!author) {
    notFound()
  }

  const posts = await getPostsByAuthor(author.id)

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/authors" className="inline-flex items-center text-melon-600 hover:text-melon-700 mb-6 font-medium">
        ← All Authors
      </Link>

      <div className="bg-gradient-to-br from-melon-50 to-peel-50 rounded-3xl p-8 md:p-12 mb-12">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          {author.metadata?.avatar ? (
            <img
              src={`${author.metadata.avatar.imgix_url}?w=300&h=300&fit=crop&auto=format,compress`}
              alt={author.title}
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-melon-400 to-peel-400 flex items-center justify-center text-white text-4xl font-bold border-4 border-white shadow-lg">
              {author.title.charAt(0)}
            </div>
          )}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              {author.title}
            </h1>
            {author.metadata?.bio && (
              <p className="text-lg text-gray-700 mb-3 max-w-2xl">
                {getMetafieldValue(author.metadata.bio)}
              </p>
            )}
            {author.metadata?.email && (
              <a 
                href={`mailto:${getMetafieldValue(author.metadata.email)}`}
                className="text-melon-600 hover:text-melon-700 font-medium"
              >
                {getMetafieldValue(author.metadata.email)}
              </a>
            )}
          </div>
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
        Posts by {author.title}
      </h2>

      {posts.length === 0 ? (
        <p className="text-gray-600">No posts by this author yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}