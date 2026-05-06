// app/categories/[slug]/page.tsx
import { getCategoryBySlug, getPostsByCategory, getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import PostCard from '@/components/PostCard'
import Link from 'next/link'

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  const posts = await getPostsByCategory(category.id)

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/categories" className="inline-flex items-center text-melon-600 hover:text-melon-700 mb-6 font-medium">
        ← All Categories
      </Link>

      <div className="bg-gradient-to-br from-melon-50 to-peel-50 rounded-3xl p-8 md:p-12 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {category.title}
        </h1>
        {category.metadata?.description && (
          <p className="text-lg text-gray-700">
            {getMetafieldValue(category.metadata.description)}
          </p>
        )}
      </div>

      {posts.length === 0 ? (
        <p className="text-gray-600">No posts in this category yet.</p>
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