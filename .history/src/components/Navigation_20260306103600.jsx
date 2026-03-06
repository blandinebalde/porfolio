import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import './Navigation.css'

const CV_FILES = {
  en: '/cv_blandine_balde_en.pdf',
  fr: '/cv_blandine_balde_fr.pdf',
  es: '/cv_blandine_balde_en.pdf',
  ko: '/cv_blandine_balde_en.pdf',
}

export default function Navigation({ scrolled }) {
  const { t, i18n } = useTranslation()
  const lng = i18n.language?.split('-')[0] || 'en'
  const cvUrl = CV_FILES[lng] || CV_FILES.en

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <a href="#hero" className="nav-logo">B<span>.</span>Baldé</a>
      <ul className="nav-links">
        <li><a href="#about">{t('nav.about')}</a></li>
        <li><a href="#skills">{t('nav.skills')}</a></li>
        <li><a href="#projects">{t('nav.projects')}</a></li>
        <li><a href="#experience">{t('nav.experience')}</a></li>
      </ul>
      <div className="nav-right">
        <a href={cvUrl} className="nav-cv" download target="_blank" rel="noopener noreferrer">
          {t('nav.downloadCV')}
        </a>
        <LanguageSwitcher />
        <a href="#contact" className="nav-cta">{t('nav.letsTalk')}</a>
      </div>
    </nav>
  )
}
