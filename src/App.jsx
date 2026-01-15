import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import Sidebar from './components/Sidebar'
import LanguageSwitcher from './components/LanguageSwitcher'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Languages from './components/Languages'
import Activities from './components/Activities'
import Contact from './components/Contact'
import './App.css'

function App() {
  const { t } = useTranslation()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const mainContentRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (mainContentRef.current) {
        const rect = mainContentRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        setMousePosition({ x, y })
      }
    }

    const handleMouseLeave = () => {
      setMousePosition({ x: -1000, y: -1000 })
    }

    const mainContent = mainContentRef.current
    if (mainContent) {
      mainContent.addEventListener('mousemove', handleMouseMove)
      mainContent.addEventListener('mouseleave', handleMouseLeave)
      return () => {
        mainContent.removeEventListener('mousemove', handleMouseMove)
        mainContent.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  return (
    <div className="app">
      <Sidebar />
      <LanguageSwitcher />
      <main className="main-content" ref={mainContentRef}>
        <div 
          className="cursor-light"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
          }}
        ></div>
        <div className="main-content-wrapper">
          <About />
          <Experience />
          <Projects />
          <Education />
          <Certifications />
          <Skills />
          <Languages />
          <Activities />
          <Contact />
        </div>
      </main>
    </div>
  )
}

export default App
