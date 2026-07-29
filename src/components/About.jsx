import { useTranslation } from 'react-i18next'
import './About.css'

function renderWithStrong(str) {
  if (!str) return null
  const parts = str.split(/\*\*(.*?)\*\*/g)
  return parts.map((part, i) => i % 2 === 1 ? <strong key={i}>{part}</strong> : part)
}

export default function About() {
  const { t } = useTranslation()
  const journey = t('about.journey', { returnObjects: true })

  return (
    <section id="about">
      <div className="section-label reveal">{t('about.sectionLabel')}</div>
      <h2 className="section-title reveal">{t('about.sectionTitle')} <em>{t('about.sectionTitleEm')}</em></h2>
      <div className="about-grid">
        <div className="about-text reveal">
          <p className="about-lead">{renderWithStrong(t('about.p1'))}</p>
          <p>{renderWithStrong(t('about.p2'))}</p>
          <p>{renderWithStrong(t('about.p3'))}</p>
          <div className="about-principles">
            <span>{t('about.principle1')}</span>
            <span>{t('about.principle2')}</span>
            <span>{t('about.principle3')}</span>
          </div>
        </div>
        <div className="journey-card reveal">
          <div className="journey-header">
            <span>{t('about.journeyTitle')}</span>
            <span className="journey-live">{t('about.journeyLive')}</span>
          </div>
          <div className="journey-list">
            {Array.isArray(journey) && journey.map((item, index) => (
              <div className={`journey-item ${index === journey.length - 1 ? 'journey-next' : ''}`} key={`${item.date}-${item.title}`}>
                <div className="journey-marker" />
                <div className="journey-date">{item.date}</div>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
