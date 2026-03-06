import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import './Navigation.css'

const CV_CONFIG = {
  en: { url: '/cv_blandine_balde_en.pdf', filename: 'cv_blandine_balde_en.pdf' },
  fr: { url: '/cv_blandine_balde_fr.pdf', filename: 'cv_blandine_balde_fr.pdf' },
  es: { url: '/cv_blandine_balde_en.pdf', filename: 'cv_blandine_balde_en.pdf' },
  ko: { url: '/cv_blandine_balde_en.pdf', filename: 'cv_blandine_balde_en.pdf' },
}

export default function Navigation({ scrolled }) {
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const lng = i18n.language?.split('-')[0] || 'en'
  const cv = CV_CONFIG[lng] || CV_CONFIG.en

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <a href="#hero" className="nav-logo" onClick={closeMenu}>B<span>.</span>Baldé</a>
      <ul className="nav-links">
        <li><a href="#about">{t('nav.about')}</a></li>
        <li><a href="#skills">{t('nav.skills')}</a></li>
        <li><a href="#projects">{t('nav.projects')}</a></li>
        <li><a href="#experience">{t('nav.experience')}</a></li>
        <li><a href="#education">{t('nav.education')}</a></li>
      </ul>
      <div className="nav-right">
        <a
          href={cv.url}
          className="nav-cv"
          download={cv.filename}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('nav.downloadCV')}
        </a>
        <LanguageSwitcher />
        <a href="#contact" className="nav-cta">{t('nav.letsTalk')}</a>
      </div>

      <button
        type="button"
        className={`nav-toggle ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-overlay ${menuOpen ? 'open' : ''}`} onClick={closeMenu} aria-hidden="true" />
      <div className={`nav-mobile ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-mobile-links">
          <li><a href="#about" onClick={closeMenu}>{t('nav.about')}</a></li>
          <li><a href="#skills" onClick={closeMenu}>{t('nav.skills')}</a></li>
          <li><a href="#projects" onClick={closeMenu}>{t('nav.projects')}</a></li>
          <li><a href="#experience" onClick={closeMenu}>{t('nav.experience')}</a></li>
          <li><a href="#education" onClick={closeMenu}>{t('nav.education')}</a></li>
        </ul>
        <div className="nav-mobile-actions">
          <a href={cv.url} className="nav-cv" download={cv.filename} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
            {t('nav.downloadCV')}
          </a>
          <LanguageSwitcher />
          <a href="#contact" className="nav-cta" onClick={closeMenu}>{t('nav.letsTalk')}</a>
        </div>
      </div>
    </nav>
  )
}
