import { useTranslation } from 'react-i18next'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './Education.css'

function Education() {
  const { t } = useTranslation()
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1 })

  // Format period for display
  const formatPeriod = (period) => {
    return period.toUpperCase()
  }

  return (
    <section id="education" className="section education" ref={sectionRef}>
      <h2 className={`section-title ${isSectionVisible ? 'fade-in-up' : 'animate-on-scroll'}`}>
        {t('education.title')}
      </h2>
      <div className="education-list">
        {t('education.items', { returnObjects: true }).map((item, index) => (
          <div 
            key={index} 
            className={`education-item ${isSectionVisible ? 'fade-in-scale stagger-item' : 'animate-on-scroll'}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
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
