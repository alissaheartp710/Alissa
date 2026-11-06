
import {
  BarChart3,
  Code2,
  Globe,
  ArrowUp,
  Heart,
} from 'lucide-react'

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-[#080d1a] px-6 pb-8 pt-14 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Footer Main Content */}
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-3">

          {/* Branding */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                <BarChart3 size={24} />
              </div>

              <div>
                <h3 className="text-base font-bold tracking-wide text-white">
                  SEIJURO AKATSUKI
                </h3>

                <p className="text-[10px] tracking-[0.25em] text-slate-500">
                  DATA ANALYST
                </p>
              </div>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Transforming information into meaningful insights
              through analytical thinking, organization, and
              technology.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-all hover:border-sky-500 hover:bg-sky-500/10 hover:text-sky-400"
              >
                <Code2 size={19} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-all hover:border-sky-500 hover:bg-sky-500/10 hover:text-sky-400"
              >
                <Globe size={19} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>

            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-slate-400 transition-colors hover:text-sky-400"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              Let's Connect
            </h4>

            <p className="text-sm leading-7 text-slate-400">
              Interested in collaborating or discussing
              professional opportunities? Feel free to
              reach out.
            </p>

            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-400 transition-colors hover:text-sky-300"
            >
              Get in Touch
              <ArrowUp size={15} className="rotate-45" />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between gap-5 pt-8 text-center sm:flex-row sm:text-left">

          <p className="text-xs text-slate-500">
            © {currentYear} Seijuro Akatsuki. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-slate-500">
            Designed with
            <Heart
              size={13}
              className="fill-sky-400 text-sky-400"
            />
            using React & Tailwind CSS
          </p>

          {/* Back to Top */}
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-all hover:border-sky-500 hover:bg-sky-500/10 hover:text-sky-400"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
