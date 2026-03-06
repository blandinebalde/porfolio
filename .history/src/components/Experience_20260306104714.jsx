import { useTranslation } from 'react-i18next'
import './Experience.css'

export default function Experience() {
  const { t } = useTranslation()
  const items = t('experience.items', { returnObjects: true })
  const hasItems = Array.isArray(items) && items.length > 0

  if (!hasItems) return null

  return (
    <section id="experience">
      <div className="section-label reveal">{t('experience.sectionLabel')}</div>
      <h2 className="section-title reveal">
        {t('experience.sectionTitle')} <em>{t('experience.sectionTitleEm')}</em>
      </h2>
      <div className="timeline">
        {items.map((item, index) => (
          <div key={index} className="timeline-item reveal">
            <div className="timeline-dot" />
            <div className="timeline-date">{item.period}</div>
            <div className="timeline-role">{item.title}</div>
            <div className="timeline-company">{item.company}</div>
            <ul className="timeline-points">
              {item.missions?.map((mission, j) => (
                <li key={j}>{mission}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
