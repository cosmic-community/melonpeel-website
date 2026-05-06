// app/posts/[slug]/page.tsx
import { getPostBySlug, getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const tags = getMetafieldValue(post.metadata?.tags)
  const tagList = tags ? tags.split(',').map(t => t.trim()).filter(Boolean) : []

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <Link href="/posts" className="inline-flex items-center text-melon-600 hover:text-melon-700 mb-8 font-medium">
        ← Back to Posts
      </Link>

      {post.metadata?.category && (
        <Link 
          href={`/categories/${post.metadata.category.slug}`}
          className="inline-block bg-melon-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4 hover:bg-melon-600 transition-colors"
        >
          {post.metadata.category.title}
        </Link>
      )}

      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        {post.title}
      </h1>

      {post.metadata?.author && (
        <Link 
          href={`/authors/${post.metadata.author.slug}`}
          className="flex items-center gap-3 mb-8 group"
        >
          {post.metadata.author.metadata?.avatar && (
            <img
              src={`${post.metadata.author.metadata.avatar.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
              alt={post.metadata.author.title}
              className="w-12 h-12 rounded-full object-cover"
            />
          )}
          <div>
            <p className="font-semibold text-gray-900 group-hover:text-melon-600 transition-colors">
              {post.metadata.author.title}
            </p>
            <p className="text-sm text-gray-500">
              {new Date(post.created_at).toLocaleDateString('en-US', { 
                year: 'numeric', month: 'long', day: 'numeric' 
              })}
            </p>
          </div>
        </Link>
      )}

      {post.metadata?.featured_image && (
        <div className="rounded-2xl overflow-hidden mb-10">
          <img
            src={`${post.metadata.featured_image.imgix_url}?w=2000&h=1000&fit=crop&auto=format,compress`}
            alt={post.title}
            className="w-full h-auto"
          />
        </div>
      )}

      {post.metadata?.content && (
        <div 
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-melon-600 prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: post.metadata.content }}
        />
      )}

      {tagList.length > 0 && (
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {tagList.map((tag, idx) => (
              <span key={idx} className="bg-peel-100 text-peel-700 px-3 py-1 rounded-full text-sm">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}