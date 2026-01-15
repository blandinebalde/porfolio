import { useTranslation } from 'react-i18next'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './Activities.css'

function Activities() {
  const { t } = useTranslation()
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="activities" className="section activities" ref={sectionRef}>
      <h2 className={`section-title ${isSectionVisible ? 'fade-in-up' : 'animate-on-scroll'}`}>
        {t('activities.title')}
      </h2>
      <div className="activities-list">
        {t('activities.items', { returnObjects: true }).map((activity, index) => (
          <div 
            key={index} 
            className={`activity-item ${isSectionVisible ? 'fade-in-scale stagger-item' : 'animate-on-scroll'}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="activity-header">
              <h3 className="activity-name">{activity.name}</h3>
              <span className="activity-type">{activity.type}</span>
            </div>
            <p className="activity-description">{activity.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Activities
