import { useTranslation } from 'react-i18next'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './Languages.css'

function Languages() {
  const { t } = useTranslation()
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="languages" className="section languages" ref={sectionRef}>
      <h2 className={`section-title ${isSectionVisible ? 'fade-in-up' : 'animate-on-scroll'}`}>
        {t('languages.title')}
      </h2>
      <div className="languages-list">
        {t('languages.items', { returnObjects: true }).map((lang, index) => (
          <div 
            key={index} 
            className={`language-item ${isSectionVisible ? 'fade-in-scale stagger-item' : 'animate-on-scroll'}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span className="language-name">{lang.language}</span>
            <span className="language-level">{lang.level}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Languages
