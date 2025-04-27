"use client"

import { useEffect, useState } from "react"

interface TableOfContentsProps {
  articleContent?: string
}

export function TableOfContents({ articleContent }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Array<{ id: string; text: string; level: number }>>([])

  useEffect(() => {
    if (typeof document !== "undefined") {
      // Find all headings in the article
      const articleHeadings = Array.from(document.querySelectorAll(".prose h2, .prose h3"))
        .map((heading) => ({
          id: heading.id,
          text: heading.textContent || "",
          level: heading.tagName === "H2" ? 2 : 3,
        }))
        .filter((heading) => heading.id && heading.text)

      setHeadings(articleHeadings)
    }
  }, [articleContent])

  if (headings.length === 0) {
    return <p className="text-gray-500 text-sm italic">Table of contents will be generated from article headings.</p>
  }

  return (
    <nav className="text-sm">
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.id} className={heading.level === 3 ? "pl-4" : ""}>
            <a href={`#${heading.id}`} className="text-gray-700 hover:text-primary transition-colors block py-1">
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
