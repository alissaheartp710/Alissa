
import { useState } from 'react'
import {
  Menu,
  X,
  BarChart3,
  ArrowUpRight,
  Sun,
  Moon,
} from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

function Navbar({ isDark, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#080d1a]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">

        {/* Branding */}
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
              ALISSA HEART PONCE
            </h1>

            <p className="text-[10px] tracking-[0.25em] text-slate-400">
              DATA ANALYST
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 xl:flex">
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

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Light Mode' : 'Dark Mode'}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition-all hover:border-sky-500/40 hover:bg-sky-500/10 hover:text-sky-400"
          >
            {isDark ? (
              <Sun size={19} />
            ) : (
              <Moon size={19} />
            )}
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            className="flex shrink-0 items-center gap-2 rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/20"
          >
            Let's Talk
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:bg-white/5"
          >
            {isDark ? (
              <Sun size={19} />
            ) : (
              <Moon size={19} />
            )}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-lg border border-white/10 p-2 text-slate-300 transition-colors hover:bg-white/5"
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
        </div>
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
                className="text-sm font-medium text-slate-300 transition-colors hover:text-sky-400"
              >
                {link.name}
              </a>
            ))}

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
