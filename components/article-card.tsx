import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import type { Article } from "@/data/landmarks-data"
import { CalendarDays, Clock } from "lucide-react"

interface ArticleCardProps {
  article: Article
  landmarkId?: string
  variant?: "default" | "compact" | "featured"
}

export function ArticleCard({ article, landmarkId, variant = "default" }: ArticleCardProps) {
  const href = landmarkId ? `/landmark/${landmarkId}/article/${article.id}` : `/articles/${article.id}`

  if (variant === "compact") {
    return (
      <Link href={href} className="block hover:no-underline group">
        <div className="border-l-4 border-primary pl-4 py-2 group-hover:bg-gray-50 transition-colors">
          <h4 className="font-medium text-gray-900 group-hover:text-primary transition-colors">{article.title}</h4>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">{article.excerpt}</p>
        </div>
      </Link>
    )
  }

  if (variant === "featured") {
    return (
      <Card className="overflow-hidden h-full flex flex-col transition-all hover:shadow-md">
        <div className="relative h-48">
          <Image
            src={article.coverImage || "/placeholder.svg?height=400&width=800&text=Article"}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
        <CardHeader className="p-4 pb-0">
          <Link href={href} className="hover:underline">
            <h3 className="font-bold text-xl text-primary">{article.title}</h3>
          </Link>
        </CardHeader>
        <CardContent className="p-4 pt-2 flex-grow">
          <p className="text-gray-600">{article.excerpt}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 text-sm text-gray-500 flex items-center justify-between">
          {article.publishedAt && (
            <div className="flex items-center">
              <CalendarDays className="h-4 w-4 mr-1" />
              {new Date(article.publishedAt).toLocaleDateString()}
            </div>
          )}
          {article.readTime && (
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {article.readTime}
            </div>
          )}
        </CardFooter>
      </Card>
    )
  }

  return (
    <Link href={href} className="block">
      <Card className="overflow-hidden transition-all hover:shadow-md">
        <div className="md:flex">
          {article.coverImage && (
            <div className="md:w-1/3 relative h-48 md:h-auto">
              <Image src={article.coverImage || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
            </div>
          )}
          <div className={`${article.coverImage ? "md:w-2/3" : "w-full"} p-6`}>
            <h3 className="font-bold text-xl mb-2 text-primary">{article.title}</h3>
            <p className="text-gray-600 mb-4">{article.excerpt}</p>

            <div className="flex items-center text-sm text-gray-500 mt-auto">
              {article.publishedAt && (
                <div className="flex items-center mr-4">
                  <CalendarDays className="h-4 w-4 mr-1" />
                  {new Date(article.publishedAt).toLocaleDateString()}
                </div>
              )}
              {article.readTime && (
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {article.readTime}
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  )
}
