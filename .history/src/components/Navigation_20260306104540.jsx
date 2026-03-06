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
  const lng = i18n.language?.split('-')[0] || 'en'
  const cv = CV_CONFIG[lng] || CV_CONFIG.en

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <a href="#hero" className="nav-logo">B<span>.</span>Baldé</a>
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
    </nav>
  )
}
