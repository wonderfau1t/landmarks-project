import { teamMembersData } from "@/data/team-data"
import { TeamMemberCard } from "@/components/team-member-card"
import test from "node:test"

export default function TeamPage() {
  // Group team members by role for organization
  // const leadership = teamMembersData.filter(
  //   (member) => member.role.includes("Lead") || member.role.includes("Director") || member.role.includes("Manager"),
  // )
  const team = teamMembersData.filter(
    (member) => member.role.includes("Системный аналитик") || member.role.includes("Контент-мейкер")|| member.role.includes("Разработчик")
  )

  // const researchers = teamMembersData.filter(
  //   (member) => member.role.includes("Researcher") || member.role.includes("Historian"),
  // )

  // const technical = teamMembersData.filter(
  //   (member) => member.role.includes("Developer") || member.role.includes("Designer") || member.role.includes("UX"),
  // )

  // const other = teamMembersData.filter(
  //   (member) => !leadership.includes(member) && !researchers.includes(member) && !technical.includes(member),
  // )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Команда</h1>
        <p className="text-gray-600">
          Наша разнообразная команда объединяет опыт в области истории, технологий, дизайна и вовлечения общественности.
        </p>
      </div>

      {team.length > 0 && (
        <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-2">Состав</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>
      )}

      {/* {leadership.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-2">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>
      )} */}

      {/* {researchers.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-2">Research Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>
      )}

      {technical.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-2">Technical Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technical.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>
      )} */}

      {/* {other.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-2">Support Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {other.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>
      )} */}
{/* 
      <section className="bg-gray-50 rounded-lg p-8 mt-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Join Our Team</h2>
          <p className="text-gray-600 mb-6">
            We're always looking for passionate individuals to join our mission of preserving and sharing historical
            knowledge. If you're interested in history, technology, or education, we'd love to hear from you.
          </p>
          <a
            href="/contact"
            className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors inline-block"
          >
            Contact Us
          </a>
        </div>
      </section> */}
    </div>
  )
}
