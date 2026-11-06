
import { useState } from 'react'
import {
  Menu,
  X,
  BarChart3,
  ArrowUpRight,
} from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#080d1a]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">

        {/* Logo / Branding */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
            <BarChart3 size={23} />
          </div>

          <div>
            <h1 className="text-base font-bold tracking-wide text-white">
              SEIJURO AKATSUKI
            </h1>

            <p className="text-[10px] tracking-[0.25em] text-slate-400">
              DATA ANALYST
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-sky-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <a
          href="#contact"
          className="hidden shrink-0 items-center gap-2 rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/20 lg:flex"
        >
          Let's Talk
          <ArrowUpRight size={16} />
        </a>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-lg border border-white/10 p-2 text-slate-300 transition-colors hover:bg-white/5 lg:hidden"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-[#080d1a] px-6 py-5 lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-5">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-sky-400"
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Contact Button */}
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-400"
            >
              Let's Talk
              <ArrowUpRight size={16} />
            </a>

          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
