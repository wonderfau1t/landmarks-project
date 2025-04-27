import Image from "next/image"
import Link from "next/link"
import { StarRating } from "@/components/star-rating"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import type { Landmark } from "@/data/landmarks-data"
import { Clock, MapPin } from "lucide-react"

interface LandmarkCardProps {
  landmark: Landmark
  variant?: "default" | "compact"
}

export function LandmarkCard({ landmark, variant = "default" }: LandmarkCardProps) {
  if (variant === "compact") {
    return (
      <Card className="overflow-hidden transition-all hover:shadow-md">
        <div className="relative h-48 w-full">
          <Image src={landmark.image || "/placeholder.svg"} alt={landmark.name} fill className="object-cover" />
          {landmark.tags && landmark.tags.length > 0 && (
            <div className="absolute top-2 right-2">
              <Badge variant="secondary" className="bg-white/80 text-primary">
                {landmark.tags[0]}
              </Badge>
            </div>
          )}
        </div>
        <CardHeader className="p-4 pb-0">
          <Link href={`/landmark/${landmark.id}`} className="hover:underline">
            <h3 className="font-bold text-lg line-clamp-1">
              {landmark.name} {landmark.year && <span className="text-gray-500 font-normal">{landmark.year}</span>}
            </h3>
          </Link>
          <StarRating rating={landmark.rating} showValue reviewCount={landmark.reviewCount} />
        </CardHeader>
        <CardContent className="p-4 pt-2">
          <p className="text-gray-600 text-sm line-clamp-2">{landmark.description}</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="md:flex">
        <div className="md:w-1/3 relative h-64 md:h-auto">
          <Image src={landmark.image || "/placeholder.svg"} alt={landmark.name} fill className="object-cover" />
        </div>
        <div className="md:w-2/3 p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {landmark.tags?.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-gray-100 text-gray-700">
                {tag}
              </Badge>
            ))}
          </div>

          <Link href={`/landmark/${landmark.id}`} className="hover:underline">
            <h2 className="text-2xl font-bold mb-2 text-primary">
              {landmark.name} {landmark.year && <span className="text-gray-500 font-normal">{landmark.year}</span>}
            </h2>
          </Link>

          <div className="mb-4">
            <StarRating rating={landmark.rating} size="lg" showValue reviewCount={landmark.reviewCount} />
          </div>

          {landmark.location && (
            <div className="flex items-center text-gray-600 mb-3">
              <MapPin className="h-4 w-4 mr-2" />
              <span className="text-sm">{landmark.location.address}</span>
            </div>
          )}

          {landmark.openingHours && (
            <div className="flex items-center text-gray-600 mb-4">
              <Clock className="h-4 w-4 mr-2" />
              <span className="text-sm">{landmark.openingHours}</span>
            </div>
          )}

          <p className="text-gray-700 mb-4">{landmark.description}</p>

          <div className="mt-auto">
            <Link
              href={`/landmark/${landmark.id}`}
              className="text-primary font-medium hover:underline inline-flex items-center"
            >
              View Details
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
        </div>
      </div>
    </Card>
  )
}
