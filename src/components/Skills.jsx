import { useTranslation } from 'react-i18next'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './Skills.css'

function Skills() {
  const { t } = useTranslation()
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1 })
  const skills = t('skills.items', { returnObjects: true })
  const softSkills = t('skills.soft.items', { returnObjects: true })
  const transversalSkills = t('skills.transversal.items', { returnObjects: true })

  return (
    <section id="skills" className="section skills" ref={sectionRef}>
      <h2 className={`section-title ${isSectionVisible ? 'fade-in-up' : 'animate-on-scroll'}`}>
        {t('skills.title')}
      </h2>
        
        <div className="skills-section">
          <h3 className={`skills-subtitle ${isSectionVisible ? 'fade-in-up' : 'animate-on-scroll'}`}>
            Compétences techniques
          </h3>
          <div className="skills-grid">
            {Object.entries(skills).map(([key, value], index) => (
              <div 
                key={key} 
                className={`skill-item ${isSectionVisible ? 'scale-in stagger-item' : 'animate-on-scroll'}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {value}
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <h3 className={`skills-subtitle ${isSectionVisible ? 'fade-in-up' : 'animate-on-scroll'}`}>
            {t('skills.soft.title')}
          </h3>
          <div className="skills-list">
            {softSkills.map((skill, index) => (
              <div 
                key={index} 
                className={`soft-skill-item ${isSectionVisible ? 'fade-in-scale stagger-item' : 'animate-on-scroll'}`}
                style={{ animationDelay: `${(Object.keys(skills).length * 0.05) + (index * 0.1)}s` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <h3 className={`skills-subtitle ${isSectionVisible ? 'fade-in-up' : 'animate-on-scroll'}`}>
            {t('skills.transversal.title')}
          </h3>
          <div className="skills-list">
            {transversalSkills.map((skill, index) => (
              <div 
                key={index} 
                className={`soft-skill-item ${isSectionVisible ? 'fade-in-scale stagger-item' : 'animate-on-scroll'}`}
                style={{ animationDelay: `${(Object.keys(skills).length * 0.05) + (softSkills.length * 0.1) + (index * 0.1)}s` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default Skills
