
import { motion } from 'framer-motion'
import {
  Database,
  BarChart3,
  Lightbulb,
  Search,
  Workflow,
  Target,
  ArrowRight,
} from 'lucide-react'

const expertise = [
  {
    icon: Database,
    title: 'Data Processing',
    description:
      'Organizing, cleaning, and preparing datasets to ensure information is structured and ready for analysis.',
  },
  {
    icon: BarChart3,
    title: 'Data Visualization',
    description:
      'Presenting complex information through clear charts, dashboards, and visual reports.',
  },
  {
    icon: Lightbulb,
    title: 'Insight Discovery',
    description:
      'Exploring patterns, identifying trends, and translating findings into meaningful insights.',
  },
]

const workflow = [
  {
    number: '01',
    title: 'Collect',
    description: 'Gather relevant data from available sources.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Process',
    description: 'Clean, organize, and prepare the dataset.',
    icon: Database,
  },
  {
    number: '03',
    title: 'Analyze',
    description: 'Identify patterns, relationships, and trends.',
    icon: Workflow,
  },
  {
    number: '04',
    title: 'Visualize',
    description: 'Present findings through meaningful dashboards.',
    icon: Target,
  },
]

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0b1220] px-6 py-24 lg:px-10"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-sky-500/5 blur-[100px]" />

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
            Get to know me
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            About <span className="text-sky-400">Me</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            Exploring data, discovering meaningful patterns, and
            transforming information into insights.
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid items-start gap-12 lg:grid-cols-2">

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-lg border border-sky-500/20 bg-sky-500/5 px-4 py-2">
              <BarChart3 size={17} className="text-sky-400" />

              <span className="text-xs font-medium text-sky-400">
                My Analytical Mindset
              </span>
            </div>

            <h3 className="text-2xl font-bold leading-snug text-white md:text-3xl">
              Turning Information Into
              <span className="text-sky-400"> Opportunities.</span>
            </h3>

            <p className="text-sm leading-8 text-slate-400 md:text-base">
              I'm Seijuro Akatsuki, a Data Analyst passionate about
              understanding data and uncovering the stories behind
              numbers. I enjoy exploring datasets, identifying
              meaningful patterns, and presenting information in
              ways that are easy to understand.
            </p>

            <p className="text-sm leading-8 text-slate-400 md:text-base">
              My approach combines analytical thinking,
              problem-solving, and data visualization to transform
              raw information into useful insights that can support
              informed decision-making.
            </p>

            {/* Personal Approach */}
            <div className="rounded-xl border border-white/10 bg-[#111c30] p-5">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-sky-500/10 p-3">
                  <Lightbulb size={23} className="text-sky-400" />
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    My Philosophy
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    Good analysis goes beyond numbers. It's about
                    finding the right questions, understanding
                    the results, and communicating insights clearly.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Expertise Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {expertise.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.title}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  className="group flex gap-5 rounded-xl border border-white/10 bg-[#111c30]/70 p-6 transition-colors hover:border-sky-500/30"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 transition-colors group-hover:bg-sky-500 group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      {item.description}
                    </p>
                  </div>

                  <ArrowRight
                    size={18}
                    className="ml-auto hidden shrink-0 text-slate-600 transition-colors group-hover:text-sky-400 sm:block"
                  />
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Analytical Workflow */}
        <div className="mt-24">
          <div className="mb-10 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
              My Approach
            </span>

            <h3 className="mt-3 text-2xl font-bold text-white md:text-3xl">
              My Data Analysis Workflow
            </h3>

            <p className="mt-3 text-sm text-slate-400">
              A structured approach to turning raw data into insights.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {workflow.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="relative rounded-xl border border-white/10 bg-[#111c30]/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/30"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-3xl font-bold text-sky-500/30">
                      {item.number}
                    </span>

                    <div className="rounded-lg bg-sky-500/10 p-3">
                      <Icon size={21} className="text-sky-400" />
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
