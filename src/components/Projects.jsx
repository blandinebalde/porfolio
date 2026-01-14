import { useTranslation } from 'react-i18next'
import './Projects.css'

function Projects() {
  const { t } = useTranslation()
  const personalProjects = t('projects.personal.items', { returnObjects: true })
  const academicProjects = t('projects.academic.items', { returnObjects: true })

  return (
    <section id="projects" className="section projects">
      <h2 className="section-title">{t('projects.title')}</h2>
        
        <div className="projects-section">
          <h3 className="projects-subtitle">{t('projects.personal.title')}</h3>
          <div className="projects-list">
            {personalProjects.map((project, index) => (
              <div key={index} className="project-item personal-project">
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
          <h3 className="projects-subtitle">{t('projects.academic.title')}</h3>
          <div className="projects-list">
            {academicProjects.map((project, index) => (
              <div key={index} className="project-item academic-project">
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
