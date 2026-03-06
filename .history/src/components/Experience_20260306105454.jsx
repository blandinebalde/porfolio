import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import './Experience.css'

function getExperienceItems(t) {
  const items = t('experience.items', { returnObjects: true })
  if (Array.isArray(items) && items.length > 0) return items
  const enBundle = i18n.getResourceBundle('en', 'translation')
  const enItems = enBundle?.experience?.items
  return Array.isArray(enItems) ? enItems : []
}

export default function Experience() {
  const { t } = useTranslation()
  const items = getExperienceItems(t)

  if (items.length === 0) return null

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
