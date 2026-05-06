import { getAllCategories } from '@/lib/cosmic'
import Link from 'next/link'
import { getMetafieldValue } from '@/lib/cosmic'

export const metadata = {
  title: 'Categories | Melonpeel',
}

export default async function CategoriesPage() {
  const categories = await getAllCategories()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Categories</h1>
      <p className="text-lg text-gray-600 mb-12">Browse content by topic</p>

      {categories.length === 0 ? (
        <p className="text-gray-600">No categories yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="block bg-gradient-to-br from-melon-50 to-peel-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-melon-600">
                {category.title}
              </h2>
              {category.metadata?.description && (
                <p className="text-gray-600">
                  {getMetafieldValue(category.metadata.description)}
                </p>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}