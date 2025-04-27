import { Star } from "lucide-react"

interface StarRatingProps {
  rating: number
  max?: number
  size?: "sm" | "md" | "lg"
  showValue?: boolean
  reviewCount?: number
}

export function StarRating({ rating, max = 5, size = "md", showValue = false, reviewCount }: StarRatingProps) {
  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  }

  const textSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  }

  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {Array.from({ length: max }).map((_, i) => (
          <Star
            key={i}
            className={`${sizeClasses[size]} ${
              i < Math.floor(rating)
                ? "text-yellow-400 fill-yellow-400"
                : i < rating
                  ? "text-yellow-400 fill-yellow-400 opacity-60"
                  : "text-gray-300"
            }`}
          />
        ))}
      </div>

      {showValue && (
        <span className={`${textSizeClasses[size]} text-gray-600 ml-1`}>
          {rating.toFixed(1)}
          {reviewCount && <span className="text-gray-500"> ({reviewCount})</span>}
        </span>
      )}
    </div>
  )
}
