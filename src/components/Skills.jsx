
import { motion } from 'framer-motion'
import {
  CalendarDays,
  CheckSquare,
  FileSpreadsheet,
  FileCode2,
  Code2,
  Palette,
  Layers,
} from 'lucide-react'

const skillCategories = [
  {
    title: 'Productivity & Collaboration',
    description:
      'Tools for organization, communication, creative work, and workflow management.',
    icon: Layers,
    skills: [
      { name: 'Google Workspace', icon: Layers },
      { name: 'Trello', icon: CheckSquare },
      { name: 'Google Calendar', icon: CalendarDays },
      { name: 'Canva', icon: Palette },
    ],
  },
  {
    title: 'Spreadsheet & Data Management',
    description:
      'Working with spreadsheets, organizing information, and managing data.',
    icon: FileSpreadsheet,
    skills: [
      { name: 'Microsoft Excel', icon: FileSpreadsheet },
    ],
  },
  {
    title: 'Web Development Fundamentals',
    description:
      'Understanding the fundamentals of building and styling web interfaces.',
    icon: Code2,
    skills: [
      { name: 'HTML', icon: FileCode2 },
      { name: 'CSS', icon: Palette },
      { name: 'JavaScript', icon: Code2 },
    ],
  },
]

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#080d1a] px-6 py-24 lg:px-10"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-sky-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">
            My Capabilities
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            Skills & <span className="text-sky-400">Tools</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            A combination of productivity tools, spreadsheet
            management, creative applications, and web development
            fundamentals that support my professional capabilities.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid gap-6 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="group rounded-2xl border border-white/10 bg-[#0d1628] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-sky-500/30 hover:shadow-xl hover:shadow-sky-500/5"
              >
                {/* Category Icon */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 transition-colors group-hover:bg-sky-500 group-hover:text-white">
                    <CategoryIcon size={24} />
                  </div>

                  <span className="text-sm font-semibold text-slate-600">
                    0{index + 1}
                  </span>
                </div>

                {/* Category Details */}
                <h3 className="text-lg font-bold text-white">
                  {category.title}
                </h3>

                <p className="mt-2 min-h-12 text-sm leading-6 text-slate-400">
                  {category.description}
                </p>

                {/* Skill List */}
                <div className="mt-6 space-y-3">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon

                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-4 transition-all duration-300 hover:border-sky-500/30 hover:bg-sky-500/5"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400">
                          <SkillIcon size={19} />
                        </div>

                        <span className="text-sm font-medium text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                    )
                  })}
                </div>

                {/* Footer */}
                <div className="mt-6 border-t border-white/10 pt-4">
                  <span className="text-xs font-medium text-sky-400">
                    {category.skills.length} Skills Listed
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Information */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 rounded-2xl border border-sky-500/10 bg-sky-500/[0.04] p-6 text-center"
        >
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <div className="rounded-full bg-sky-500/10 p-3">
              <FileSpreadsheet
                size={22}
                className="text-sky-400"
              />
            </div>

            <p className="text-sm leading-7 text-slate-400">
              Combining technical knowledge, creative tools,
              and organizational skills to support efficient
              workflows and structured information management.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Skills
