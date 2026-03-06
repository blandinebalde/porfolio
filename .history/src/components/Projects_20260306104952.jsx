import { useTranslation } from 'react-i18next'
import './Projects.css'

const GITHUB_URL = 'https://github.com/blandinebalde'

// Optional visual placeholders per project type (index)
const projectVisuals = [
  (
    <>
      <span style={{ color: 'rgba(255,140,0,0.8)' }}>Stock</span>      → real-time<br />
      <span style={{ color: 'rgba(255,140,0,0.8)' }}>Inbound</span>    → 14 today<br />
      <span style={{ color: 'rgba(255,140,0,0.8)' }}>Outbound</span>   → 9 today<br />
      <span style={{ color: 'rgba(255,140,0,0.5)' }}>──────────────────</span><br />
      <span style={{ color: 'rgba(238,240,248,0.4)' }}>stack:   </span>Spring Boot, Flutter<br />
      <span style={{ color: 'rgba(238,240,248,0.4)' }}>db:      </span>MySQL
    </>
  ),
  (
    <>
      <span style={{ color: 'rgba(255,140,0,0.8)' }}>POST</span> /api/bookings<br />
      <span style={{ color: 'rgba(255,140,0,0.8)' }}>GET</span>  /api/availability<br />
      <span style={{ color: 'rgba(255,140,0,0.8)' }}>GET</span>  /api/providers<br />
      <span style={{ color: 'rgba(255,140,0,0.5)' }}>──────────────────</span><br />
      <span style={{ color: 'rgba(238,240,248,0.4)' }}>status: </span><span style={{ color: '#4CAF8A' }}>200 OK</span><br />
      <span style={{ color: 'rgba(238,240,248,0.4)' }}>db:     </span>PostgreSQL
    </>
  ),
  (
    <>
      <span style={{ color: 'rgba(255,140,0,0.8)' }}>Jenkins</span>  → pipeline<br />
      <span style={{ color: 'rgba(255,140,0,0.8)' }}>Selenium</span> → UI tests<br />
      <span style={{ color: 'rgba(255,140,0,0.8)' }}>Cucumber</span> → BDD<br />
      <span style={{ color: 'rgba(255,140,0,0.5)' }}>──────────────────</span><br />
      <span style={{ color: 'rgba(238,240,248,0.4)' }}>JMeter</span>  → performance<br />
      <span style={{ color: 'rgba(238,240,248,0.4)' }}>result: </span>CI/CD OK
    </>
  ),
]

export default function Projects() {
  const { t } = useTranslation()
  const personalItems = t('projects.personal.items', { returnObjects: true })
  const academicItems = t('projects.academic.items', { returnObjects: true })
  const personalTitle = t('projects.personal.title')
  const academicTitle = t('projects.academic.title')

  const personal = Array.isArray(personalItems) ? personalItems.map((item) => ({ ...item, category: 'personal' })) : []
  const academic = Array.isArray(academicItems) ? academicItems.map((item) => ({ ...item, category: 'academic' })) : []
  const allProjects = [...personal, ...academic]

  if (allProjects.length === 0) return null

  return (
    <section id="projects">
      <div className="section-label reveal">{t('projects.sectionLabel')}</div>
      <h2 className="section-title reveal">
        {t('projects.sectionTitle')} <em>{t('projects.sectionTitleEm')}</em>
      </h2>
      <div className="projects-stack">
        {allProjects.map((project, i) => {
          const label = project.category === 'academic' && project.type
            ? project.type
            : project.category === 'academic'
              ? academicTitle
              : personalTitle
          const tags = project.technologies ? project.technologies.split(',').map((t) => t.trim()).filter(Boolean) : []
          const visual = projectVisuals[i % projectVisuals.length]
          return (
            <div key={i} className="project-card reveal">
              <div className="project-number">{String(i + 1).padStart(2, '0')}</div>
              <div className="project-info">
                <div className="project-label">{label}</div>
                <h3 className="project-title">{project.name}</h3>
                <p className="project-desc">{project.description}</p>
                {project.role && (
                  <p className="project-role">{project.role}</p>
                )}
                <div className="project-tags">
                  {tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={GITHUB_URL} className="project-link" target="_blank" rel="noopener noreferrer">
                    {t('projects.github')}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                  </a>
                </div>
              </div>
              <div className="project-visual">
                <div className="project-visual-inner">{visual}</div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
