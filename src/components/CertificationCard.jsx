
import { Award, CalendarDays, ExternalLink } from 'lucide-react'

function CertificationCard({ title, organization, date, image, description }) {
  return (
    <article className="certification-card group overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50">
      {/* Certificate image */}
      <div className="certification-image-wrap relative overflow-hidden">
        <img
          src={image}
          alt={`${title} certificate`}
          className="h-52 w-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute right-4 top-4 rounded-full bg-purple-600/90 p-2 text-white">
          <Award size={18} />
        </div>
      </div>

      {/* Certificate information */}
      <div className="p-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-purple-400">
          Certificate of Participation
        </p>

        <h3 className="mb-2 text-lg font-bold certification-title">
          {title}
        </h3>

        <p className="mb-4 text-sm certification-muted">
          {organization}
        </p>

        <p className="mb-5 flex items-center gap-2 text-sm certification-muted">
          <CalendarDays size={16} className="text-purple-400" />
          {date}
        </p>

        <p className="mb-5 text-sm leading-relaxed certification-muted">
          {description}
        </p>

        <a
          href={image}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 transition-colors hover:text-purple-300"
        >
          View Certificate
          <ExternalLink size={15} />
        </a>
      </div>
    </article>
  )
}

export default CertificationCard
