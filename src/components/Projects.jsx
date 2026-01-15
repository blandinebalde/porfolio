import { useTranslation } from 'react-i18next'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './Projects.css'

function Projects() {
  const { t } = useTranslation()
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1 })
  const personalProjects = t('projects.personal.items', { returnObjects: true })
  const academicProjects = t('projects.academic.items', { returnObjects: true })

  return (
    <section id="projects" className="section projects" ref={sectionRef}>
      <h2 className={`section-title ${isSectionVisible ? 'fade-in-up' : 'animate-on-scroll'}`}>
        {t('projects.title')}
      </h2>
        
        <div className="projects-section">
          <h3 className={`projects-subtitle ${isSectionVisible ? 'fade-in-up' : 'animate-on-scroll'}`}>
            {t('projects.personal.title')}
          </h3>
          <div className="projects-list">
            {personalProjects.map((project, index) => (
              <div 
                key={index} 
                className={`project-item personal-project ${isSectionVisible ? 'fade-in-scale stagger-item' : 'animate-on-scroll'}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="project-header">
                  <h3 className="project-name">{project.name}</h3>
                  <span className="project-badge personal-badge">Projet Personnel</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-details">
                  <div className="project-detail">
                    <span className="project-detail-label">Technologies:</span>
                    <span className="project-detail-value">{project.technologies}</span>
                  </div>
                  <div className="project-detail">
                    <span className="project-detail-label">Rôle:</span>
                    <span className="project-detail-value">{project.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="projects-section">
          <h3 className={`projects-subtitle ${isSectionVisible ? 'fade-in-up' : 'animate-on-scroll'}`}>
            {t('projects.academic.title')}
          </h3>
          <div className="projects-list">
            {academicProjects.map((project, index) => (
              <div 
                key={index} 
                className={`project-item academic-project ${isSectionVisible ? 'fade-in-scale stagger-item' : 'animate-on-scroll'}`}
                style={{ animationDelay: `${(personalProjects.length * 0.15) + (index * 0.15)}s` }}
              >
                <div className="project-header">
                  <h3 className="project-name">{project.name}</h3>
                  {project.type && (
                    <span className="project-badge academic-badge">{project.type}</span>
                  )}
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-details">
                  <div className="project-detail">
                    <span className="project-detail-label">Technologies:</span>
                    <span className="project-detail-value">{project.technologies}</span>
                  </div>
                  <div className="project-detail">
                    <span className="project-detail-label">Rôle:</span>
                    <span className="project-detail-value">{project.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default Projects
