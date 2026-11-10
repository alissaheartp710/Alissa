
import CertificationCard from './CertificationCard'

const certifications = [
  {
    id: 1,
    title: 'International Research Conference on Information Technology Education',
    organization: 'IRCITE 2024',
    date: 'March 8, 2024',
    image: '/IRCITE Certificate of Participation.png',
    description:
      'Participated in the International Research Conference on Information Technology Education, featuring global innovation, knowledge, engineering, and diversity-centered research.',
  },
  {
    id: 2,
    title: 'Regional Assembly on Information Technology Education',
    organization: 'PSITE – Central Luzon | RAITE 2025',
    date: 'October 17, 2025',
    image: '/RAITE 2025 Participation Certificate.png',
    description:
      'Participated in the regional assembly with the theme "I.T. Beyond Tomorrow: Shaping the Digital Frontier."',
  },
  {
    id: 3,
    title: 'Regional Assembly on Information Technology Education',
    organization: 'PSITE – Central Luzon | RAITE 2026',
    date: 'October 2, 2026',
    image: '/RAITE 2026 Participation Certificate.png',
    description:
      'Participated in the regional assembly with the theme "CTRL + NEXT: Empowering Students as Future-Ready Digital Innovators and Technology Leaders."',
  },
]

function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
            Achievements & Recognition
          </p>

          <h2 className="mb-4 text-3xl font-bold certification-title md:text-4xl">
            Certifications
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-relaxed certification-muted md:text-base">
            Conferences and professional learning experiences that reflect
            continued participation in the information technology community.
          </p>
        </div>

        {/* Certificate cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certificate) => (
            <CertificationCard
              key={certificate.id}
              {...certificate}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
