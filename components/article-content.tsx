import type { Landmark } from "@/data/landmarks-data"

interface ArticleContentProps {
  content: string
  landmarks?: Record<string, Landmark | undefined>
}

export function ArticleContent({ content, landmarks = {} }: ArticleContentProps) {
  // Process the content to replace landmark references with links
  let processedContent = content

  // Replace landmark references with actual links
  Object.entries(landmarks).forEach(([key, landmark]) => {
    if (landmark) {
      const regex = new RegExp(`\\[${landmark.name}\\]`, "g")
      processedContent = processedContent.replace(
        regex,
        `<a href="/landmark/${landmark.id}" class="text-primary hover:underline">${landmark.name}</a>`,
      )
    }
  })

  return <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: processedContent }} />
}
