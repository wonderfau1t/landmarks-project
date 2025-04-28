import Image from "next/image"
import Link from "next/link"
import { StarRating } from "@/components/star-rating"
import { ArticleCard } from "@/components/article-card"
import { Badge } from "@/components/ui/badge"
import { getLandmarkById } from "@/data/landmarks-data"
import { MapPin, Clock, Calendar } from "lucide-react"

interface LandmarkPageProps {
  params: {
    id: string
  }
}

export default function LandmarkPage({ params }: LandmarkPageProps) {
  const landmark = getLandmarkById(params.id)

  if (!landmark) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Landmark not found</h1>
        <p className="text-gray-600 mb-8">The landmark you're looking for doesn't exist or has been removed.</p>
        <Link
          href="/route"
          className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
        >
          Browse All Landmarks
        </Link>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
        <Image src={landmark.image || "/placeholder.svg"} alt={landmark.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
          <div className="container mx-auto">
            <div className="flex flex-wrap gap-2 mb-3">
              {landmark.tags?.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-white/20 backdrop-blur-sm">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
              {landmark.name} {landmark.year && <span className="text-gray-200 font-normal">{landmark.year}</span>}
            </h1>
            <div className="flex items-center">
              <StarRating rating={landmark.rating} size="lg" showValue reviewCount={landmark.reviewCount} />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">О достопримечательности</h2>
              <p className="text-gray-700 mb-6">{landmark.longDescription || landmark.description}</p>

              {/* Additional sections can be added here */}
              {/* <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Historical Significance</h3>
                <p className="text-gray-700">
                  This landmark holds significant historical value for the region, representing an important period in
                  the area's development. Visitors can experience firsthand the architectural style and cultural
                  elements that defined this era.
                </p>
              </div> */}
            </div>

            {/* Articles Section */}
            {landmark.articles.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Что можно узнать?</h2>
                <div className="space-y-6">
                  {landmark.articles.map((article) => (
                    <ArticleCard key={article.id} article={article} landmarkId={landmark.id} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/*<div className="space-y-6">*/}
          {/*  /!* Info Card *!/*/}
          {/*  <div className="bg-white rounded-lg shadow-sm p-6">*/}
          {/*    <h3 className="text-lg font-bold mb-4 text-gray-900">Visitor Information</h3>*/}

          {/*    {landmark.location && (*/}
          {/*      <div className="flex items-start mb-4">*/}
          {/*        <MapPin className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />*/}
          {/*        <div>*/}
          {/*          <h4 className="font-medium text-gray-900">Location</h4>*/}
          {/*          <p className="text-gray-600">{landmark.location.address}</p>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    )}*/}

          {/*    {landmark.openingHours && (*/}
          {/*      <div className="flex items-start mb-4">*/}
          {/*        <Clock className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />*/}
          {/*        <div>*/}
          {/*          <h4 className="font-medium text-gray-900">Opening Hours</h4>*/}
          {/*          <p className="text-gray-600">{landmark.openingHours}</p>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    )}*/}

          {/*    <div className="flex items-start">*/}
          {/*      <Calendar className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />*/}
          {/*      <div>*/}
          {/*        <h4 className="font-medium text-gray-900">Best Time to Visit</h4>*/}
          {/*        <p className="text-gray-600">Spring and early autumn offer the most pleasant weather for visiting.</p>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}

          {/*  /!* Map Card *!/*/}
          {/*  <div className="bg-white rounded-lg shadow-sm overflow-hidden">*/}
          {/*    <div className="relative h-[250px] w-full">*/}
          {/*      <Image*/}
          {/*        src="/placeholder.svg?height=250&width=400&text=Location+Map"*/}
          {/*        alt="Location map"*/}
          {/*        fill*/}
          {/*        className="object-cover"*/}
          {/*      />*/}
          {/*      <div className="absolute inset-0 flex items-center justify-center">*/}
          {/*        <div className="p-2 bg-primary text-white rounded-full">*/}
          {/*          <MapPin className="h-6 w-6" />*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className="p-4">*/}
          {/*      <Link*/}
          {/*        href="#"*/}
          {/*        className="text-primary font-medium hover:underline inline-flex items-center justify-center w-full"*/}
          {/*      >*/}
          {/*        Get Directions*/}
          {/*        <svg*/}
          {/*          className="w-4 h-4 ml-1"*/}
          {/*          fill="none"*/}
          {/*          stroke="currentColor"*/}
          {/*          viewBox="0 0 24 24"*/}
          {/*          xmlns="http://www.w3.org/2000/svg"*/}
          {/*        >*/}
          {/*          <path*/}
          {/*            strokeLinecap="round"*/}
          {/*            strokeLinejoin="round"*/}
          {/*            strokeWidth={2}*/}
          {/*            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"*/}
          {/*          />*/}
          {/*        </svg>*/}
          {/*      </Link>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  )
}
