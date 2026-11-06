
import { motion } from 'framer-motion'
import {
  BriefcaseBusiness,
  GraduationCap,
  CalendarDays,
  Sparkles,
  ArrowUpRight,
  Code2,
  FileSpreadsheet,
  Workflow,
} from 'lucide-react'

const capabilities = [
  {
    icon: FileSpreadsheet,
    title: 'Information Management',
    description:
      'Organizing information and working with spreadsheets to maintain structured records.',
  },
  {
    icon: Workflow,
    title: 'Workflow Organization',
    description:
      'Using productivity and collaboration tools to organize tasks and manage schedules.',
  },
  {
    icon: Code2,
    title: 'Technical Fundamentals',
    description:
      'Applying foundational web development knowledge to understand and build digital interfaces.',
  },
]

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#080d1a] px-6 py-24 lg:px-10"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-sky-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">
            Career Journey
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            Experience & <span className="text-sky-400">Background</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            A look at the professional capabilities, knowledge,
            and experience that shape my career journey.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mx-auto max-w-4xl">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl border border-white/10 bg-[#0d1628] p-8 md:p-10"
          >
            {/* Timeline Icon */}
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                <BriefcaseBusiness size={27} />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  Professional Experience
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Career development and professional journey
                </p>
              </div>
            </div>

            {/* Empty Experience State */}
            <div className="rounded-xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-10 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sky-500/10">
                <CalendarDays
                  size={25}
                  className="text-sky-400"
                />
              </div>

              <h4 className="text-lg font-semibold text-white">
                Experience Details
              </h4>

              <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-400">
                Professional roles, employment history, and
                career milestones will be presented here as
                verified details become available.
              </p>

              <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/5 px-4 py-2 text-xs font-medium text-sky-400">
                <Sparkles size={14} />
                Career Profile
              </span>
            </div>
          </motion.div>

        </div>

        {/* Professional Capabilities */}
        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-9 text-center"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
              Professional Strengths
            </span>

            <h3 className="mt-3 text-2xl font-bold text-white md:text-3xl">
              What I Bring to the Table
            </h3>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {capabilities.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  className="group rounded-2xl border border-white/10 bg-[#0d1628] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-sky-500/30"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 transition-colors group-hover:bg-sky-500 group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <h4 className="text-lg font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Career Development Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-2xl border border-sky-500/10 bg-gradient-to-r from-sky-500/[0.08] to-blue-500/[0.03] p-8 text-center"
        >
          <GraduationCap
            size={32}
            className="mx-auto mb-4 text-sky-400"
          />

          <h3 className="text-xl font-bold text-white">
            Always Learning, Always Growing
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-400">
            Continuously developing technical knowledge,
            strengthening analytical thinking, and exploring
            new ways to work with information and technology.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default Experience
