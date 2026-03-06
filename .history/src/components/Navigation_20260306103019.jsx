import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import './Navigation.css'

export default function Navigation({ scrolled }) {
  const { t } = useTranslation()
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
        <LanguageSwitcher />
        <a href="#contact" className="nav-cta">{t('nav.letsTalk')}</a>
      </div>
    </nav>
  )
}
