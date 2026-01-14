import { useTranslation } from 'react-i18next'
import './Skills.css'

function Skills() {
  const { t } = useTranslation()
  const skills = t('skills.items', { returnObjects: true })
  const softSkills = t('skills.soft.items', { returnObjects: true })
  const transversalSkills = t('skills.transversal.items', { returnObjects: true })

  return (
    <section id="skills" className="section skills">
      <h2 className="section-title">{t('skills.title')}</h2>
        
        <div className="skills-section">
          <h3 className="skills-subtitle">Compétences techniques</h3>
          <div className="skills-grid">
            {Object.entries(skills).map(([key, value]) => (
              <div key={key} className="skill-item">
                {value}
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <h3 className="skills-subtitle">{t('skills.soft.title')}</h3>
          <div className="skills-list">
            {softSkills.map((skill, index) => (
              <div key={index} className="soft-skill-item">
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <h3 className="skills-subtitle">{t('skills.transversal.title')}</h3>
          <div className="skills-list">
            {transversalSkills.map((skill, index) => (
              <div key={index} className="soft-skill-item">
                {skill}
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default Skills
