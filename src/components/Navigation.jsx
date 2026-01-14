import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './Navigation.css'

function Navigation() {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('about')}>
          {t('header.name').split(' ').pop()}
        </div>
        <button 
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} style={{ counterReset: 'item' }}>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>{t('nav.about')}</a></li>
          <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience') }}>{t('nav.experience')}</a></li>
          <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills') }}>{t('nav.skills')}</a></li>
          <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}>{t('nav.projects')}</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>{t('nav.contact')}</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
