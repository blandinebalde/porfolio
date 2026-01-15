import { useTranslation } from 'react-i18next'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './Experience.css'

function Experience() {
  const { t } = useTranslation()
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1 })

  // Extract technologies from missions
  const extractTechnologies = (missions) => {
    const techSet = new Set()
    missions.forEach(mission => {
      const match = mission.match(/\[Outils?\s*:\s*([^\]]+)\]/i) || mission.match(/\[Tools?\s*:\s*([^\]]+)\]/i)
      if (match) {
        const tools = match[1].split(',').map(t => t.trim())
        tools.forEach(tool => {
          // Capitalize first letter and handle common variations
          const formatted = tool.charAt(0).toUpperCase() + tool.slice(1).toLowerCase()
          techSet.add(formatted)
        })
      }
    })
    return Array.from(techSet)
  }

  // Format period for display
  const formatPeriod = (period) => {
    return period.replace(/–/g, '—').replace(/-/g, '—').toUpperCase()
  }

  // Get description from missions (without tools)
  const getDescription = (missions) => {
    const fullDescription = missions.map(mission => {
      return mission.replace(/\s*\[Outils?\s*:\s*[^\]]+\]/gi, '').replace(/\s*\[Tools?\s*:\s*[^\]]+\]/gi, '').trim()
    }).join(' ')
    
    // Limit description to 300 characters
    if (fullDescription.length > 300) {
      return fullDescription.substring(0, 300) + '...'
    }
    return fullDescription
  }

  return (
    <section id="experience" className="section experience" ref={sectionRef}>
      <h2 className={`section-title ${isSectionVisible ? 'fade-in-up' : 'animate-on-scroll'}`}>
        {t('experience.title')}
      </h2>
      <div className="experience-list">
        {t('experience.items', { returnObjects: true }).map((item, index) => {
          const technologies = extractTechnologies(item.missions)
          const description = getDescription(item.missions)
          
          return (
            <div 
              key={index} 
              className={`experience-item ${isSectionVisible ? 'fade-in-scale stagger-item' : 'animate-on-scroll'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="experience-date">{formatPeriod(item.period)}</div>
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="experience-title">{item.title}</h3>
                  <span className="experience-company">{item.company}</span>
                </div>
                <p className="experience-description">{description}</p>
                {technologies.length > 0 && (
                  <div className="experience-tech">
                    {technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="tech-tag"
                        style={{ animationDelay: `${(index * 0.1) + (idx * 0.05)}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Experience
