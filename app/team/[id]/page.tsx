import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { getTeamMemberById } from "@/data/team-data"
import { ChevronLeft, Github, Linkedin, Twitter, Globe, Mail, Calendar } from "lucide-react"

interface TeamMemberPageProps {
  params: {
    id: string
  }
}

export default function TeamMemberPage({ params }: TeamMemberPageProps) {
  const member = getTeamMemberById(params.id)

  if (!member) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Team member not found</h1>
        <p className="text-gray-600 mb-8">The team member you're looking for doesn't exist or has been removed.</p>
        <Link
          href="/team"
          className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
        >
          View All Team Members
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/team" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to Team
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-1">
          <div className="sticky top-20">
            <div className="relative h-80 w-full rounded-lg overflow-hidden mb-6">
              <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-1 text-primary">{member.name}</h2>
              <p className="text-gray-600 mb-4">{member.role}</p>

              <div className="space-y-4">
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center text-gray-700 hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    {member.email}
                  </a>
                )}

                {member.joinedDate && (
                  <div className="flex items-center text-gray-700">
                    <Calendar className="h-5 w-5 mr-2" />
                    Joined{" "}
                    {new Date(member.joinedDate).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "long",
                    })}
                  </div>
                )}

                <div className="flex space-x-4 pt-4 border-t">
                  {member.socialLinks?.linkedin && (
                    <a
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary transition-colors"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="h-6 w-6" />
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
                      <Twitter className="h-6 w-6" />
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
                      <Github className="h-6 w-6" />
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
                      <Globe className="h-6 w-6" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">About</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">{member.bio}</p>

            {member.skills && member.skills.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-gray-100 text-gray-700 px-3 py-1 text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {member.projects && member.projects.length > 0 && (
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Projects</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {member.projects.map((project) => (
                    <li key={project}>{project}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* This section could be expanded with additional information like publications, 
              contributions, or other relevant details about the team member */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Contributions</h2>
            <p className="text-gray-700">
              This section can be customized to showcase the team member's specific contributions to the project,
              including landmarks researched, articles written, or other notable achievements.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
