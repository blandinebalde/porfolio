import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './Sidebar.css'

function Sidebar() {
  const { t } = useTranslation()
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'education', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 250

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const rect = section.getBoundingClientRect()
          const sectionTop = rect.top + window.scrollY
          const sectionHeight = rect.height
          if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    handleScroll() // Check on mount
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      // Update active section after a short delay to allow scroll to complete
      setTimeout(() => setActiveSection(sectionId), 100)
    }
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-header">
          <h1 className="sidebar-name">{t('header.name')}</h1>
          <p className="sidebar-title">{t('header.title')}</p>
          <p className="sidebar-tagline">{t('header.tagline')}</p>
        </div>

        <nav className="sidebar-nav">
          <ul className="sidebar-menu">
            <li>
              <a 
                href="#about" 
                onClick={(e) => { e.preventDefault(); scrollToSection('about') }}
                className={activeSection === 'about' ? 'active' : ''}
              >
                <span className="nav-line"></span>
                <span className="nav-text">{t('nav.about')}</span>
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                onClick={(e) => { e.preventDefault(); scrollToSection('experience') }}
                className={activeSection === 'experience' ? 'active' : ''}
              >
                <span className="nav-line"></span>
                <span className="nav-text">{t('nav.experience')}</span>
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}
                className={activeSection === 'projects' ? 'active' : ''}
              >
                <span className="nav-line"></span>
                <span className="nav-text">{t('nav.projects')}</span>
              </a>
            </li>
            <li>
              <a 
                href="#education" 
                onClick={(e) => { e.preventDefault(); scrollToSection('education') }}
                className={activeSection === 'education' ? 'active' : ''}
              >
                <span className="nav-line"></span>
                <span className="nav-text">{t('nav.education')}</span>
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                onClick={(e) => { e.preventDefault(); scrollToSection('skills') }}
                className={activeSection === 'skills' ? 'active' : ''}
              >
                <span className="nav-line"></span>
                <span className="nav-text">{t('nav.skills')}</span>
              </a>
            </li>
            
            
          </ul>
        </nav>

        <div className="sidebar-social">
          <a href="https://github.com/blandinebalde" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="mailto:blandinebalde@gmail.com" aria-label="Email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>

          <a href="https://www.linkedin.com/in/blandine-balde-00b24a1a3/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <line x1="4" y1="22" x2="4" y2="9"/>
            </svg>
          </a>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
