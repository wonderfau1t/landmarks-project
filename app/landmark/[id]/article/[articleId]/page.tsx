import { redirect } from "next/navigation"
import { getArticleById } from "@/data/landmarks-data"

interface LandmarkArticlePageProps {
  params: {
    id: string
    articleId: string
  }
}

// This is a convenience route that redirects to the main article page
// while preserving the context of which landmark the article belongs to
export default function LandmarkArticlePage({ params }: LandmarkArticlePageProps) {
  const { id, articleId } = params

  const articleData = getArticleById(articleId)

  if (!articleData || articleData.landmark.id !== id) {
    // If article doesn't exist or doesn't belong to this landmark, redirect to landmark page
    redirect(`/landmark/${id}`)
  }

  // Redirect to the main article page
  redirect(`/articles/${articleId}`)
}
