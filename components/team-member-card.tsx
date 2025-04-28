import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { TeamMember } from "@/data/team-data"
import { Github, Linkedin, Twitter, Globe } from "lucide-react"

interface TeamMemberCardProps {
  member: TeamMember
  variant?: "default" | "compact"
}

export function TeamMemberCard({ member, variant = "default" }: TeamMemberCardProps) {
  const renderSocialLinks = () => {
    return (
      <div className="flex space-x-3 mt-4">
        {member.socialLinks?.linkedin && (
          <a
            href={member.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary transition-colors"
            aria-label={`${member.name}'s LinkedIn profile`}
          >
            <Linkedin className="h-5 w-5" />
          </a>
        )}
        {member.socialLinks?.twitter && (
          <a
            href={member.socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary transition-colors"
            aria-label={`${member.name}'s Twitter profile`}
          >
            <Twitter className="h-5 w-5" />
          </a>
        )}
        {member.socialLinks?.github && (
          <a
            href={member.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary transition-colors"
            aria-label={`${member.name}'s GitHub profile`}
          >
            <Github className="h-5 w-5" />
          </a>
        )}
        {member.socialLinks?.website && (
          <a
            href={member.socialLinks.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary transition-colors"
            aria-label={`${member.name}'s personal website`}
          >
            <Globe className="h-5 w-5" />
          </a>
        )}
      </div>
    )
  }

  if (variant === "compact") {
    return (
      <Card className="overflow-hidden transition-all hover:shadow-md">
        <div className="flex items-center p-4">
          <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
            <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover rounded-full" />
          </div>
          <div>
            <h3 className="font-bold text-lg">{member.name}</h3>
            <p className="text-gray-600 text-sm">{member.role}</p>
            {member.email && (
              <a href={`mailto:${member.email}`} className="text-primary text-sm hover:underline">
                {member.email}
              </a>
            )}
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md h-full flex flex-col">
      <div className="relative h-96 w-full overflow-hidden">
        <Image 
          src={member.image || "/placeholder.svg"} 
          alt={member.name} 
          fill 
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader className="p-4 pb-0">
        <h3 className="font-bold text-xl text-primary">{member.name}</h3>
        <p className="text-gray-600">{member.role}</p>
      </CardHeader>
      <CardContent className="p-4 pt-2 flex-grow">
        <p className="text-gray-700 mb-4">{member.bio}</p>

        {member.skills && member.skills.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Expertise</h4>
            <div className="flex flex-wrap gap-2">
              {member.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-gray-100 text-gray-700">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {member.email && (
          <a href={`mailto:${member.email}`} className="text-primary font-medium hover:underline inline-block mb-2">
            {member.email}
          </a>
        )}

        {renderSocialLinks()}
      </CardContent>
    </Card>
  )
}
