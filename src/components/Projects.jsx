
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  BarChart3,
  FileSpreadsheet,
  CalendarDays,
  Code2,
  CheckCircle2,
  LayoutDashboard,
  ClipboardList,
} from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Sales Performance Dashboard',
    category: 'Spreadsheet & Data Management',
    description:
      'A sample sales dashboard concept designed to organize sales information, monitor performance, and present business data through visual reports.',
    tools: ['Microsoft Excel'],
    icon: BarChart3,
    type: 'dashboard',
    number: '01',
  },
  {
    id: 2,
    title: 'Productivity & Task Tracker',
    category: 'Productivity & Organization',
    description:
      'A sample productivity management concept for organizing daily tasks, managing schedules, and keeping track of activities.',
    tools: ['Google Workspace', 'Trello', 'Google Calendar'],
    icon: ClipboardList,
    type: 'productivity',
    number: '02',
  },
  {
    id: 3,
    title: 'Responsive Website Design',
    category: 'Web Development',
    description:
      'A sample responsive website concept demonstrating the fundamentals of HTML structure, CSS styling, and JavaScript interactions.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    icon: Code2,
    type: 'website',
    number: '03',
  },
]

// Dashboard Preview
function DashboardPreview() {
  return (
    <div className="space-y-4 rounded-xl border border-white/10 bg-[#080d1a] p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BarChart3 size={17} className="text-sky-400" />
          <span className="text-xs font-semibold text-white">
            Sales Overview
          </span>
        </div>

        <span className="rounded-md bg-sky-500/10 px-2 py-1 text-[9px] text-sky-400">
          Sample
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-white/[0.04] p-3">
          <p className="text-[10px] text-slate-500">Total Sales</p>
          <p className="mt-2 text-lg font-bold text-white">$24,500</p>
          <p className="text-[9px] text-emerald-400">
            Illustrative figure
          </p>
        </div>

        <div className="rounded-lg bg-white/[0.04] p-3">
          <p className="text-[10px] text-slate-500">Orders</p>
          <p className="mt-2 text-lg font-bold text-white">1,248</p>
          <p className="text-[9px] text-slate-500">
            Illustrative figure
          </p>
        </div>
      </div>

      <div className="rounded-lg bg-white/[0.03] p-3">
        <p className="mb-3 text-[10px] text-slate-400">
          Monthly Sales Trend
        </p>

        <div className="flex h-20 items-end justify-around gap-2">
          {[35, 55, 42, 75, 60, 90, 70, 100].map((height, index) => (
            <div
              key={index}
              style={{ height: `${height}%` }}
              className="w-full rounded-t-sm bg-sky-500/70 transition-all hover:bg-sky-400"
            />
          ))}
        </div>

        <div className="mt-2 flex justify-between text-[9px] text-slate-500">
          <span>Jan</span>
          <span>Mar</span>
          <span>Jun</span>
          <span>Aug</span>
        </div>
      </div>
    </div>
  )
}

// Productivity Preview
function ProductivityPreview() {
  const tasks = [
    'Organize daily tasks',
    'Update project schedule',
    'Review weekly activities',
  ]

  return (
    <div className="rounded-xl border border-white/10 bg-[#080d1a] p-4">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CalendarDays size={17} className="text-sky-400" />
          <span className="text-xs font-semibold text-white">
            My Workspace
          </span>
        </div>

        <span className="text-[10px] text-slate-500">
          Sample Board
        </span>
      </div>

      <div className="mb-4 grid grid-cols-3 gap-2">
        {[
          { label: 'To Do', count: '03' },
          { label: 'Doing', count: '02' },
          { label: 'Done', count: '05' },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-lg bg-white/[0.04] p-3"
          >
            <p className="text-[9px] text-slate-500">
              {item.label}
            </p>
            <p className="mt-1 text-lg font-bold text-white">
              {item.count}
            </p>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        {tasks.map((task, index) => (
          <div
            key={task}
            className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.03] p-3"
          >
            <CheckCircle2
              size={16}
              className={index === 0 ? 'text-emerald-400' : 'text-slate-600'}
            />

            <span className="text-xs text-slate-300">
              {task}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Website Preview
function WebsitePreview() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#080d1a]">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-red-400" />
        <span className="h-2 w-2 rounded-full bg-yellow-400" />
        <span className="h-2 w-2 rounded-full bg-green-400" />

        <div className="ml-3 flex-1 rounded-md bg-white/5 px-3 py-1 text-[9px] text-slate-500">
          sample-website.com
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between">
          <div className="h-3 w-20 rounded bg-sky-400/80" />

          <div className="flex gap-2">
            <div className="h-2 w-8 rounded bg-slate-600" />
            <div className="h-2 w-8 rounded bg-slate-600" />
          </div>
        </div>

        <div className="rounded-lg bg-gradient-to-br from-sky-500/20 to-blue-900/30 p-5">
          <div className="h-3 w-2/3 rounded bg-white/80" />
          <div className="mt-3 h-2 w-full rounded bg-white/20" />
          <div className="mt-2 h-2 w-3/4 rounded bg-white/20" />

          <div className="mt-5 h-7 w-24 rounded-md bg-sky-500" />
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-lg border border-white/5 bg-white/[0.03] p-3"
            >
              <div className="mb-2 h-5 rounded bg-sky-500/20" />
              <div className="h-2 rounded bg-white/20" />
              <div className="mt-2 h-2 w-2/3 rounded bg-white/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectPreview({ type }) {
  if (type === 'dashboard') return <DashboardPreview />
  if (type === 'productivity') return <ProductivityPreview />

  return <WebsitePreview />
}

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#0b1220] px-6 py-24 lg:px-10"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-sky-500/5 blur-[120px]" />

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
            My Work
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            Featured <span className="text-sky-400">Projects</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            Exploring practical applications of productivity,
            spreadsheet management, and web development skills.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0d1628] transition-all duration-300 hover:-translate-y-2 hover:border-sky-500/30 hover:shadow-xl hover:shadow-sky-500/5"
              >
                {/* Preview */}
                <div className="p-4">
                  <div className="relative">
                    <ProjectPreview type={project.type} />

                    <span className="absolute right-3 top-3 rounded-md border border-amber-400/20 bg-amber-500/10 px-2 py-1 text-[9px] font-semibold text-amber-300">
                      DEMO CONCEPT
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="px-6 pb-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-medium text-sky-400">
                      {project.category}
                    </span>

                    <span className="text-sm font-bold text-slate-600">
                      {project.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white transition-colors group-hover:text-sky-400">
                    {project.title}
                  </h3>

                  <p className="mt-3 min-h-20 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>

                  {/* Tools */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] font-medium text-slate-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Project Footer */}
                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                    <div className="flex items-center gap-2">
                      <Icon size={16} className="text-sky-400" />

                      <span className="text-xs text-slate-400">
                        Project Preview
                      </span>
                    </div>

                    <span className="flex items-center gap-1 text-xs font-semibold text-slate-500">
                      Coming Soon
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Bottom Message */}
        <div className="mt-14 rounded-2xl border border-sky-500/10 bg-sky-500/[0.04] p-7 text-center">
          <LayoutDashboard
            size={28}
            className="mx-auto mb-4 text-sky-400"
          />

          <h3 className="text-lg font-semibold text-white">
            More Projects Coming Soon
          </h3>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-7 text-slate-400">
            These are illustrative project concepts. Actual
            project examples and completed work can be added
            as they become available.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Projects
