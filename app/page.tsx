import Image from "next/image"
import Link from "next/link"
import { LandmarkCard } from "@/components/landmark-card"
import { ArticleCard } from "@/components/article-card"
import { landmarksData } from "@/data/landmarks-data"

export default function Home() {
  // Get featured articles (first article from each landmark)
  const featuredArticles = landmarksData
    .map((landmark) => ({
      article: landmark.articles[0],
      landmarkId: landmark.id,
    }))
    .filter((item) => item.article)
    .slice(0, 3)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Путешествие по историческим достопримечательностям</h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
            Откройте для себя богатую историю и культурное значение замечательных достопримечательностей. Познакомьтесь с их историей и наследием, которое они хранят.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/route"
                className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors"
              >
                Исследовать маршрут
              </Link>
              <Link
                href="/about"
                className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors"
              >
                Узнать больше
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/30 z-0"></div>
      </section>

      {/* Featured Landmarks */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Достопримечательности</h2>
            <Link href="/route" className="text-primary font-medium hover:underline inline-flex items-center">
              Просмотреть все
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {landmarksData.slice(0, 3).map((landmark) => (
              <LandmarkCard key={landmark.id} landmark={landmark} variant="compact" />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Статьи</h2>
            <Link href="/articles" className="text-primary font-medium hover:underline inline-flex items-center">
            Просмотреть все
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map(({ article, landmarkId }) => (
              <ArticleCard key={article.id} article={article} landmarkId={landmarkId} variant="featured" />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our Project</h2>
              <p className="text-lg text-gray-700 mb-4">
                Our mission is to preserve and promote cultural heritage by making information about historical sites
                accessible to everyone. We believe that understanding our past helps us appreciate our present and build
                a better future.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The project features a comprehensive database of landmarks, each with detailed descriptions, historical
                context, and related articles that delve deeper into their significance.
              </p>
              <Link
                href="/about"
                className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors inline-block"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600&text=About+Our+Project"
                alt="About our project"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы к путешествию?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
          Откройте для себя увлекательные истории исторических достопримечательностей и погрузитесь в их богатое культурное
          наследие.
          </p>
          <Link
            href="/route"
            className="bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-block"
          >
            Начать путешествие!
          </Link>
        </div>
      </section>
    </div>
  )
}
