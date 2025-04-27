// Configurable data file for team members
export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  email?: string
  socialLinks?: {
    linkedin?: string
    twitter?: string
    github?: string
    website?: string
  }
  skills?: string[]
  projects?: string[]
  joinedDate?: string
}

// Easily configurable team members data
export const teamMembersData: TeamMember[] = [
  {
    id: "member-1",
    name: "Батаева Ева",
    role: "Системный аналитик",
    bio: "Системный аналитик продумывает архитектуру платформы, чтобы игровые сценарии и маршруты были логичными, увлекательными и доступными для всех путешественников по Томску.",
    image: "/placeholder.svg?height=400&width=400&text=Alex+Johnson",
    // email: "alex@example.com",
    // socialLinks: {
    //   linkedin: "https://linkedin.com/in/alexjohnson",
    //   twitter: "https://twitter.com/alexjohnson",
    // },
    // skills: ["Project Management", "Historical Research", "Digital Preservation"],
    // joinedDate: "2020-01-15",
  },
  {
    id: "member-2",
    name: "Таюрская Валерия",
    role: "Контент-мейкер",
    bio: "Контент-мейкер исследует архивы и легенды Томска, преврящая их в увлекательные истории и сценарии, которые оживают в наших игровых маршрутах.",
    image: "/placeholder.svg?height=400&width=400&text=Alex+Johnson",
    // email: "alex@example.com",
    // socialLinks: {
    //   linkedin: "https://linkedin.com/in/alexjohnson",
    //   twitter: "https://twitter.com/alexjohnson",
    // },
    // skills: ["Project Management", "Historical Research", "Digital Preservation"],
    // joinedDate: "2020-01-15",
  },
  {
    id: "member-3",
    name: "Итигечев Дмитрий",
    role: "Разработчик",
    bio: "Разработчик воплощает идеи в интерактивный опыт, создавая платформу, где игровые сценарии и маршруты становятся живым путешествием по истории города.",
    image: "/placeholder.svg?height=400&width=400&text=Alex+Johnson",
    // email: "alex@example.com",
    // socialLinks: {
    //   linkedin: "https://linkedin.com/in/alexjohnson",
    //   twitter: "https://twitter.com/alexjohnson",
    // },
    // skills: ["Project Management", "Historical Research", "Digital Preservation"],
    // joinedDate: "2020-01-15",
  },
  {
    id: "member-2",
    name: "Maria Rodriguez",
    role: "Senior Researcher",
    bio: "Maria specializes in architectural history and has contributed to numerous publications on historical landmarks. She brings academic rigor to our content.",
    image: "/placeholder.svg?height=400&width=400&text=Maria+Rodriguez",
    email: "maria@example.com",
    socialLinks: {
      linkedin: "https://linkedin.com/in/mariarodriguez",
      website: "https://mariarodriguez.com",
    },
    skills: ["Architectural History", "Academic Research", "Content Creation"],
    joinedDate: "2020-03-22",
  },
  {
    id: "member-3",
    name: "David Chen",
    role: "Lead Developer",
    bio: "David is responsible for the technical implementation of our platform. He ensures that our digital experience is smooth, accessible, and user-friendly.",
    image: "/placeholder.svg?height=400&width=400&text=David+Chen",
    email: "david@example.com",
    socialLinks: {
      github: "https://github.com/davidchen",
      linkedin: "https://linkedin.com/in/davidchen",
    },
    skills: ["Web Development", "UX Design", "Database Management"],
    joinedDate: "2020-02-10",
  },
  {
    id: "member-4",
    name: "Sarah Patel",
    role: "Content Strategist",
    bio: "Sarah develops our content strategy and ensures that our articles and landmark descriptions are engaging, informative, and historically accurate.",
    image: "/placeholder.svg?height=400&width=400&text=Sarah+Patel",
    email: "sarah@example.com",
    socialLinks: {
      twitter: "https://twitter.com/sarahpatel",
      linkedin: "https://linkedin.com/in/sarahpatel",
    },
    skills: ["Content Strategy", "Copywriting", "SEO"],
    joinedDate: "2020-05-18",
  },
  {
    id: "member-5",
    name: "Michael Kim",
    role: "UX Designer",
    bio: "Michael creates the visual identity of our platform and ensures that users can easily navigate and find the information they're looking for.",
    image: "/placeholder.svg?height=400&width=400&text=Michael+Kim",
    email: "michael@example.com",
    socialLinks: {
      website: "https://michaelkim.design",
      linkedin: "https://linkedin.com/in/michaelkim",
    },
    skills: ["UI/UX Design", "Visual Design", "Prototyping"],
    joinedDate: "2020-04-05",
  },
  {
    id: "member-6",
    name: "Emma Wilson",
    role: "Community Manager",
    bio: "Emma manages our community engagement and social media presence. She helps connect our platform with history enthusiasts and educational institutions.",
    image: "/placeholder.svg?height=400&width=400&text=Emma+Wilson",
    email: "emma@example.com",
    socialLinks: {
      twitter: "https://twitter.com/emmawilson",
      linkedin: "https://linkedin.com/in/emmawilson",
    },
    skills: ["Community Management", "Social Media", "Event Planning"],
    joinedDate: "2020-06-20",
  },
]

// Helper function to get all team members
export function getAllTeamMembers(): TeamMember[] {
  return teamMembersData
}

// Helper function to find a specific team member by ID
export function getTeamMemberById(id: string): TeamMember | undefined {
  return teamMembersData.find((member) => member.id === id)
}

// Helper function to get team members by role
export function getTeamMembersByRole(role: string): TeamMember[] {
  return teamMembersData.filter((member) => member.role.includes(role))
}
