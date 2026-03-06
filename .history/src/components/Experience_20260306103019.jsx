import { useTranslation } from 'react-i18next'
import './Experience.css'

export default function Experience() {
  const { t } = useTranslation()
  const timeline1Points = [t('experience.timeline1Point1'), t('experience.timeline1Point2'), t('experience.timeline1Point3')]
  const timeline2Points = [t('experience.timeline2Point1'), t('experience.timeline2Point2')]
  return (
    <section id="experience">
      <div className="section-label reveal">{t('experience.sectionLabel')}</div>
      <h2 className="section-title reveal">{t('experience.sectionTitle')} <em>{t('experience.sectionTitleEm')}</em></h2>
      <div className="timeline">
        <div className="timeline-item reveal">
          <div className="timeline-dot" />
          <div className="timeline-date">{t('experience.timeline1Date')}</div>
          <div className="timeline-role">{t('experience.timeline1Role')}</div>
          <div className="timeline-company">{t('experience.timeline1Company')}</div>
          <ul className="timeline-points">
            {timeline1Points.map((point, j) => (
              <li key={j}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="timeline-item reveal">
          <div className="timeline-dot" />
          <div className="timeline-date">{t('experience.timeline2Date')}</div>
          <div className="timeline-role">{t('experience.timeline2Role')}</div>
          <div className="timeline-company">{t('experience.timeline2Company')}</div>
          <ul className="timeline-points">
            {timeline2Points.map((point, j) => (
              <li key={j}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
