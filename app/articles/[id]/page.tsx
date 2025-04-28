"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Calendar, Clock, Share2, Bookmark, ThumbsUp } from "lucide-react"
import { getArticleById, landmarksData } from "@/data/landmarks-data"
import { Badge } from "@/components/ui/badge"
import { ArticleCard } from "@/components/article-card"
import { TableOfContents } from "@/components/table-of-contents"
import { ArticleContent } from "@/components/article-content"

interface ArticlePageProps {
  params: {
    id: string
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const articleData = getArticleById(params.id)

  // Add IDs to headings in the content when the component mounts
  useEffect(() => {
    if (typeof document !== "undefined") {
      const headings = document.querySelectorAll(".prose h2, .prose h3, .prose h4")
      headings.forEach((heading) => {
        if (!heading.id && heading.textContent) {
          // Create an ID from the heading text
          const id = heading.textContent
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "")
          heading.id = id
        }
      })
    }
  }, [articleData])

  if (!articleData) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Article not found</h1>
        <p className="text-gray-600 mb-8">The article you're looking for doesn't exist or has been removed.</p>
        <Link
          href="/articles"
          className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
        >
          Browse All Articles
        </Link>
      </div>
    )
  }

  const { article, landmark } = articleData

  // Get related articles from the same landmark, excluding the current article
  const relatedArticles = landmark.articles.filter((a) => a.id !== article.id).slice(0, 3)

  // Create a map of landmarks for internal linking
  const landmarksMap: Record<string, (typeof landmarksData)[0]> = {}
  landmarksData.forEach((landmark) => {
    landmarksMap[landmark.id] = landmark
  })

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Article Header */}
      <div className="relative bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <Link
            href={`/landmark/${landmark.id}`}
            className="inline-flex items-center text-primary hover:underline mb-6"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            {landmark.name}
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {landmark.tags?.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-gray-100 text-gray-700">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">{article.title}</h1>

            <div className="flex flex-wrap items-center text-gray-600 gap-4 mb-6">
              {article.publishedAt && (
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <time dateTime={article.publishedAt}>
                    {new Date(article.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
              )}

              {article.readTime && (
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {article.readTime}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="w-full bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src={article.coverImage || "/placeholder.svg?height=500&width=1000&text=Article+Cover+Image"}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex justify-between items-center mt-4">
              <p className="text-sm text-gray-500 italic">
                {landmark.name}
              </p>

              {/*<div className="flex space-x-3">*/}
              {/*  <button className="text-gray-500 hover:text-primary transition-colors" aria-label="Share article">*/}
              {/*    <Share2 className="h-5 w-5" />*/}
              {/*  </button>*/}
              {/*  <button className="text-gray-500 hover:text-primary transition-colors" aria-label="Bookmark article">*/}
              {/*    <Bookmark className="h-5 w-5" />*/}
              {/*  </button>*/}
              {/*  <button className="text-gray-500 hover:text-primary transition-colors" aria-label="Like article">*/}
              {/*    <ThumbsUp className="h-5 w-5" />*/}
              {/*  </button>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          {/* Sidebar - Table of Contents */}
          <aside className="lg:col-span-3 order-2 lg:order-1">
            <div className="sticky top-20">
              {/*<div className="bg-white rounded-lg shadow-sm p-6 mb-6">*/}
              {/*  <h2 className="text-lg font-bold mb-4 text-gray-900">Table of Contents</h2>*/}
              {/*  <TableOfContents articleContent={article.content} />*/}
              {/*</div>*/}

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-bold mb-4 text-gray-900">О {landmark.name}</h2>
                <p className="text-gray-700 mb-4 text-sm">{landmark.description}</p>
                <Link
                  href={`/landmark/${landmark.id}`}
                  className="text-primary font-medium hover:underline text-sm inline-flex items-center"
                >
                  К точке интереса
                  <ChevronLeft className="h-4 w-4 ml-1 rotate-180" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-9 order-1 lg:order-2">
            <article className="bg-white rounded-lg shadow-sm p-6 md:p-8 lg:p-10">
              <ArticleContent content={article.content} landmarks={landmarksMap} />

              {/* Sources Section */}
              {article.sources && article.sources.length > 0 && (
                <div className="mt-10 pt-6 border-t">
                  <h2 className="text-xl font-semibold mb-4">Источники</h2>
                  <ul className="space-y-2 text-gray-600 list-disc pl-5">
                    {article.sources.map((source, index) => (
                      <li key={index} className="text-sm">
                        {source}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Article Footer */}
              <div className="border-t mt-10 pt-6">
                <div className="flex flex-wrap justify-between items-end gap-4">
                  {/*<div className="flex items-center gap-2">*/}
                  {/*  <button className="inline-flex items-center gap-1 text-gray-600 hover:text-primary transition-colors">*/}
                  {/*    <ThumbsUp className="h-5 w-5" />*/}
                  {/*    <span>Like</span>*/}
                  {/*  </button>*/}
                  {/*  <button className="inline-flex items-center gap-1 text-gray-600 hover:text-primary transition-colors">*/}
                  {/*    <Share2 className="h-5 w-5" />*/}
                  {/*    <span>Share</span>*/}
                  {/*  </button>*/}
                  {/*</div>*/}

                  <div></div>

                  <Link
                    href={`/landmark/${landmark.id}`}
                    className="text-primary font-medium hover:underline inline-flex items-center"
                  >
                    {landmark.name}
                    <ChevronLeft className="h-4 w-4 ml-1 rotate-180" />
                  </Link>
                </div>
              </div>
            </article>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Связанные статьи</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedArticles.map((relatedArticle) => (
                    <ArticleCard
                      key={relatedArticle.id}
                      article={relatedArticle}
                      landmarkId={landmark.id}
                      variant="featured"
                    />
                  ))}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
