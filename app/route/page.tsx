import Image from "next/image"
import { LandmarkCard } from "@/components/landmark-card"
import { ArticleCard } from "@/components/article-card"
import { landmarksData } from "@/data/landmarks-data"
import { MapPin } from "lucide-react"

export default function RoutePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Маршрут по Томску</h1>
        <p className="text-gray-600">Ознакомьтесь с нашей подборкой исторических достопримечательностей и культурных объектов.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {landmarksData.map((landmark) => (
            <div key={landmark.id} className="space-y-6">
              <LandmarkCard landmark={landmark} />

              {landmark.articles.length > 0 && (
                <div className="pl-4 border-l-4 border-gray-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Статьи</h3>
                  <div className="space-y-4">
                    {landmark.articles.map((article) => (
                      <ArticleCard key={article.id} article={article} landmarkId={landmark.id} variant="compact" />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="sticky top-20 h-[600px] rounded-lg overflow-hidden border shadow-sm bg-white">
          <div className="p-4 border-b">
            <h3 className="font-semibold text-gray-800">Карта маршрута</h3>
          </div>
          <div className="relative h-[calc(100%-57px)] w-full">
            <Image
              src="/placeholder.svg?height=600&width=400&text=Interactive+Map"
              alt="Map of landmarks"
              fill
              className="object-cover"
            />

            {/* Map markers */}
            {/* <div className="absolute inset-0 p-4">
              {landmarksData.map((landmark, index) => (
                <div
                  key={landmark.id}
                  className="absolute"
                  style={{
                    top: `${20 + index * 15}%`,
                    left: `${30 + index * 10}%`,
                  }}
                >
                  <div className="relative group">
                    <div className="p-2 bg-primary text-white rounded-full cursor-pointer">
                      <MapPin className="h-5 w-5" />
                    </div>

                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-white shadow-lg rounded-md p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      <div className="text-sm font-semibold">{landmark.name}</div>
                      <div className="text-xs text-gray-600 truncate">{landmark.location?.address}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
