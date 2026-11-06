
import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Database,
  TrendingUp,
  Activity,
} from 'lucide-react'

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  CartesianGrid,
} from 'recharts'

const chartData = [
  { month: 'Jan', value: 35 },
  { month: 'Feb', value: 48 },
  { month: 'Mar', value: 42 },
  { month: 'Apr', value: 65 },
  { month: 'May', value: 57 },
  { month: 'Jun', value: 78 },
  { month: 'Jul', value: 72 },
  { month: 'Aug', value: 95 },
  { month: 'Sep', value: 85 },
  { month: 'Oct', value: 110 },
  { month: 'Nov', value: 100 },
  { month: 'Dec', value: 125 },
]

const stats = [
  {
    label: 'Total Revenue',
    value: '$124.8K',
    change: '+12.8%',
    icon: TrendingUp,
  },
  {
    label: 'Total Records',
    value: '48,294',
    change: '+8.4%',
    icon: Database,
  },
  {
    label: 'Data Accuracy',
    value: '98.5%',
    change: '+2.3%',
    icon: Activity,
  },
]

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#080d1a] px-6 pb-16 pt-32 lg:px-10"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-sky-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* LEFT: INTRODUCTION */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-7"
        >
          {/* Availability Label */}
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-sky-400" />
            <span className="text-xs font-medium tracking-wide text-sky-400">
              DATA ANALYST PORTFOLIO
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <p className="text-lg font-medium text-slate-400">
              Hello, I'm
            </p>

            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl xl:text-7xl">
              Alissa Heart
              <span className="block text-sky-400">
                Ponce.
              </span>
            </h1>

            <h2 className="text-xl font-semibold text-slate-300 md:text-2xl">
              Data Analyst
              <span className="ml-2 text-sky-400">|</span>
              Data Visualization
            </h2>
          </div>

          {/* Description */}
          <p className="max-w-xl text-base leading-8 text-slate-400">
            Transforming complex datasets into meaningful insights.
            Passionate about data analysis, uncovering trends,
            and creating visual stories that support smarter
            business decisions.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/20"
            >
              Explore Projects
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 rounded-lg border border-white/10 px-6 py-3.5 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-sky-400 hover:text-sky-400"
            >
              Contact Me
              <ArrowUpRight size={17} />
            </a>
          </div>

          {/* Bottom Skills */}
          <div className="border-t border-white/10 pt-7">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Focus Areas
            </p>

            <div className="flex flex-wrap gap-3">
              {['Canva', 'Google Workspace', 'Trello', 'Google Calendar', 'Excel'].map(
                (skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-300 transition-colors hover:border-sky-500/40 hover:text-sky-400"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>

        {/* RIGHT: ANALYTICS DASHBOARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          {/* Dashboard Container */}
          <div className="rounded-2xl border border-white/10 bg-[#0d1628]/90 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-7">

            {/* Dashboard Header */}
            <div className="mb-7 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="text-sky-400" size={20} />

                  <h3 className="font-semibold text-white">
                    Analytics Overview
                  </h3>
                </div>

                <p className="mt-1 text-xs text-slate-500">
                  Illustrative sample dataset
                </p>
              </div>

              <span className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-400">
                Demo Data
              </span>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat, index) => {
                const Icon = stat.icon

                return (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/5 bg-white/[0.03] p-3"
                  >
                    <Icon
                      size={18}
                      className="mb-3 text-sky-400"
                    />

                    <p className="text-[10px] text-slate-500 sm:text-xs">
                      {stat.label}
                    </p>

                    <h4 className="mt-1 text-sm font-bold text-white sm:text-lg">
                      {stat.value}
                    </h4>

                    <p className="mt-1 text-[10px] text-emerald-400">
                      {stat.change}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Chart Section */}
            <div className="mt-6 rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Revenue Analytics
                  </h4>

                  <p className="mt-1 text-xs text-slate-500">
                    Monthly performance overview
                  </p>
                </div>

                <TrendingUp
                  size={20}
                  className="text-sky-400"
                />
              </div>

              <div className="h-52 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient
                        id="revenueGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#0ea5e9"
                          stopOpacity={0.35}
                        />

                        <stop
                          offset="100%"
                          stopColor="#0ea5e9"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>

                    <CartesianGrid
                      stroke="#1e293b"
                      strokeDasharray="3 3"
                      vertical={false}
                    />

                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#64748b', fontSize: 10 }}
                      interval={2}
                    />

                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#0f172a',
                        border: '1px solid #334155',
                        borderRadius: '10px',
                        color: '#fff',
                      }}
                      labelStyle={{ color: '#94a3b8' }}
                    />

                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#38bdf8"
                      strokeWidth={2.5}
                      fill="url(#revenueGradient)"
                      activeDot={{
                        r: 5,
                        fill: '#38bdf8',
                        stroke: '#fff',
                        strokeWidth: 2,
                      }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Dashboard Footer */}
            <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
              <div className="flex items-center gap-2">
                <Database size={15} className="text-sky-400" />

                <span className="text-xs text-slate-400">
                  Data-driven decisions
                </span>
              </div>

              <span className="text-xs text-slate-500">
                Sample Dashboard
              </span>
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-4 hidden items-center gap-3 rounded-xl border border-white/10 bg-[#111c30] p-4 shadow-xl sm:flex">
            <div className="rounded-lg bg-sky-500/10 p-2">
              <TrendingUp className="text-sky-400" size={22} />
            </div>

            <div>
              <p className="text-xs text-slate-500">
                Data Visualization
              </p>

              <p className="text-sm font-semibold text-white">
                Insights that matter.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition-colors hover:text-sky-400 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">
          Scroll to explore
        </span>

        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  )
}

export default Hero
