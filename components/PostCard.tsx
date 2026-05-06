import Link from 'next/link'
import { Post } from '@/types'

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/posts/${post.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
    >
      {post.metadata?.featured_image ? (
        <div className="aspect-[16/10] overflow-hidden bg-gray-100">
          <img
            src={`${post.metadata.featured_image.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      ) : (
        <div className="aspect-[16/10] bg-gradient-to-br from-melon-200 to-peel-200 flex items-center justify-center">
          <span className="text-6xl">🍉</span>
        </div>
      )}
      <div className="p-6">
        {post.metadata?.category && (
          <span className="inline-block bg-melon-100 text-melon-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
            {post.metadata.category.title}
          </span>
        )}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-melon-600 transition-colors line-clamp-2">
          {post.title}
        </h3>
        {post.metadata?.author && (
          <div className="flex items-center gap-2">
            {post.metadata.author.metadata?.avatar && (
              <img
                src={`${post.metadata.author.metadata.avatar.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                alt={post.metadata.author.title}
                className="w-7 h-7 rounded-full object-cover"
              />
            )}
            <span className="text-sm text-gray-600">{post.metadata.author.title}</span>
          </div>
        )}
      </div>
    </Link>
  )
}