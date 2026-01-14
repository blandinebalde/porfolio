import { useTranslation } from 'react-i18next'
import './Education.css'

function Education() {
  const { t } = useTranslation()

  // Format period for display
  const formatPeriod = (period) => {
    return period.toUpperCase()
  }

  return (
    <section id="education" className="section education">
      <h2 className="section-title">{t('education.title')}</h2>
      <div className="education-list">
        {t('education.items', { returnObjects: true }).map((item, index) => (
          <div key={index} className="education-item">
            <div className="education-date">{formatPeriod(item.period)}</div>
            <div className="education-content">
              <h3 className="education-degree">{item.degree}</h3>
              <p className="education-school">{item.school}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
