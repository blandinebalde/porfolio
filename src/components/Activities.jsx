import { useTranslation } from 'react-i18next'
import './Activities.css'

function Activities() {
  const { t } = useTranslation()

  return (
    <section id="activities" className="section activities">
      <h2 className="section-title">{t('activities.title')}</h2>
      <div className="activities-list">
        {t('activities.items', { returnObjects: true }).map((activity, index) => (
          <div key={index} className="activity-item">
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
