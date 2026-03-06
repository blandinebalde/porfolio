import { useTranslation } from 'react-i18next'
import './Hero.css'

export default function Hero() {
  const { t } = useTranslation()
  return (
    <section id="hero">
      <div className="hero-content">
        <div className="hero-eyebrow">{t('hero.eyebrow')}</div>
        <h1 className="hero-name">
          {t('hero.nameFirst')}<br /><em>{t('hero.nameLast')}</em>
        </h1>
        <p className="hero-tagline">{t('hero.tagline')}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">{t('hero.viewProjects')}</a>
          <a href="#contact" className="btn-ghost">{t('hero.getInTouch')}</a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="orb-outer">
          <div className="orb-dot" />
          <div className="orb-dot" />
          <div className="orb-dot" />
          <div className="orb-core">
            <div className="orb-text">
              Java<br />Spring Boot<br />Angular<br />PostgreSQL
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-line" />
        {t('hero.scroll')}
      </div>
    </section>
  )
}
