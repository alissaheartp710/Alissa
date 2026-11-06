
import { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('portfolio-theme') !== 'light'
  })

  useEffect(() => {
    const theme = isDark ? 'dark' : 'light'

    document.documentElement.setAttribute('data-theme', theme)

    localStorage.setItem('portfolio-theme', theme)
  }, [isDark])

  const toggleTheme = () => {
    setIsDark((previous) => !previous)
  }

  return (
    <div data-theme={isDark ? 'dark' : 'light'}>
      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
