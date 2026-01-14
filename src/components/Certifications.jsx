import { useTranslation } from 'react-i18next'
import './Certifications.css'

function Certifications() {
  const { t } = useTranslation()

  return (
    <section id="certifications" className="section certifications">
      <h2 className="section-title">{t('certifications.title')}</h2>
      <div className="certifications-list">
        {t('certifications.items', { returnObjects: true }).map((cert, index) => (
          <div key={index} className="certification-item">
            <div className="certification-header">
              <h3 className="certification-name">{cert.name}</h3>
              <span className="certification-period">{cert.period}</span>
            </div>
            <p className="certification-provider">{cert.provider}</p>
            <p className="certification-document">{cert.document}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certifications
