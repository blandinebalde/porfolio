import { useTranslation } from 'react-i18next'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './Certifications.css'

function Certifications() {
  const { t } = useTranslation()
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="certifications" className="section certifications" ref={sectionRef}>
      <h2 className={`section-title ${isSectionVisible ? 'fade-in-up' : 'animate-on-scroll'}`}>
        {t('certifications.title')}
      </h2>
      <div className="certifications-list">
        {t('certifications.items', { returnObjects: true }).map((cert, index) => (
          <div 
            key={index} 
            className={`certification-item ${isSectionVisible ? 'fade-in-scale stagger-item' : 'animate-on-scroll'}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
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
