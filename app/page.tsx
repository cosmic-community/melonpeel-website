import { getAllPosts, getAllCategories } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import PostCard from '@/components/PostCard'
import CategoryBadge from '@/components/CategoryBadge'
import Link from 'next/link'

export default async function HomePage() {
  const [posts, categories] = await Promise.all([
    getAllPosts(),
    getAllCategories(),
  ])

  const featuredPost = posts[0]
  const recentPosts = posts.slice(1, 7)

  return (
    <div>
      <Hero />

      {categories.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Browse Categories</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <CategoryBadge key={category.id} category={category} />
            ))}
          </div>
        </section>
      )}

      {featuredPost && (
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Story</h2>
          <Link href={`/posts/${featuredPost.slug}`} className="group block">
            <div className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-melon-50 to-peel-50 rounded-3xl p-8 md:p-12 hover:shadow-2xl transition-shadow duration-300">
              {featuredPost.metadata?.featured_image && (
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={`${featuredPost.metadata.featured_image.imgix_url}?w=1200&h=800&fit=crop&auto=format,compress`}
                    alt={featuredPost.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div>
                {featuredPost.metadata?.category && (
                  <span className="inline-block bg-melon-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {featuredPost.metadata.category.title}
                  </span>
                )}
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-melon-600 transition-colors">
                  {featuredPost.title}
                </h3>
                {featuredPost.metadata?.author && (
                  <p className="text-gray-600">
                    By <span className="font-semibold">{featuredPost.metadata.author.title}</span>
                  </p>
                )}
              </div>
            </div>
          </Link>
        </section>
      )}

      {recentPosts.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}

      {posts.length === 0 && (
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-gray-600 text-lg">No posts available yet. Check back soon!</p>
        </div>
      )}
    </div>
  )
}