import { useTranslation } from 'react-i18next'
import './About.css'

function renderWithStrong(str) {
  if (!str) return null
  const parts = str.split(/\*\*(.*?)\*\*/g)
  return parts.map((part, i) => i % 2 === 1 ? <strong key={i}>{part}</strong> : part)
}

export default function About() {
  const { t } = useTranslation()
  return (
    <section id="about">
      <div className="section-label reveal">{t('about.sectionLabel')}</div>
      <h2 className="section-title reveal">{t('about.sectionTitle')} <em>{t('about.sectionTitleEm')}</em></h2>
      <div className="about-grid">
        <div className="about-photo-wrap reveal">
          <div className="about-photo-frame">
            <div className="about-initials">BB</div>
          </div>
          <div className="photo-accent" />
          <div className="photo-accent-2" />
        </div>
        <div className="about-text reveal">
          <p>{renderWithStrong(t('about.p1'))}</p>
          <p>{renderWithStrong(t('about.p2'))}</p>
          <p>{renderWithStrong(t('about.p3'))}</p>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-num">{t('about.statYears')}</span>
              <span className="stat-label">{t('about.statYearsLabel')}</span>
            </div>
            <div className="stat">
              <span className="stat-num">{t('about.statProjects')}</span>
              <span className="stat-label">{t('about.statProjectsLabel')}</span>
            </div>
            <div className="stat">
              <span className="stat-num">{t('about.statTech')}</span>
              <span className="stat-label">{t('about.statTechLabel')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
