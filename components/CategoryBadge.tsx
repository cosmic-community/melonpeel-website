import Link from 'next/link'
import { Category } from '@/types'

export default function CategoryBadge({ category }: { category: Category }) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="inline-block bg-white border-2 border-melon-200 text-melon-700 hover:bg-melon-500 hover:text-white hover:border-melon-500 px-5 py-2 rounded-full font-medium transition-all duration-200"
    >
      {category.title}
    </Link>
  )
}