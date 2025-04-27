import { getAllArticles } from "@/data/landmarks-data"
import { ArticleCard } from "@/components/article-card"

export default function ArticlesPage() {
  // Get all articles across all landmarks
  const allArticles = getAllArticles().map((article) => {
    // Find the landmark this article belongs to
    const landmarkId = article.landmarkId || ""
    return {
      ...article,
      landmarkId,
    }
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Articles</h1>
        <p className="text-gray-600">
          Explore our collection of articles about historical landmarks and cultural heritage.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allArticles.map((article) => (
          <ArticleCard key={article.id} article={article} landmarkId={article.landmarkId} variant="featured" />
        ))}
      </div>
    </div>
  )
}
