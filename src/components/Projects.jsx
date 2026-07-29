import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import './Projects.css'

function getProjectItems(t, key) {
  const items = t(key, { returnObjects: true })
  if (Array.isArray(items) && items.length > 0) return items
  const enBundle = i18n.getResourceBundle('en', 'translation')
  const path = key.split('.') // e.g. 'projects.personal.items'
  let en = enBundle
  for (const p of path) { en = en?.[p] }
  return Array.isArray(en) ? en : []
}

const GITHUB_URL = 'https://github.com/blandinebalde'

const defaultArchitectures = [
  ['React', 'Spring Boot', 'PostgreSQL', 'Docker', 'Cloud'],
  ['Angular', 'Spring Boot', 'MySQL', 'Docker', 'AWS EC2'],
  ['Angular', 'Spring Boot', 'MySQL', 'Flutter', 'AWS EC2'],
  ['Tests', 'Jenkins', 'Docker', 'CI/CD'],
]

export default function Projects() {
  const { t } = useTranslation()
  const personalItems = getProjectItems(t, 'projects.personal.items')
  const academicItems = getProjectItems(t, 'projects.academic.items')
  const personalTitle = t('projects.personal.title')
  const academicTitle = t('projects.academic.title')

  const personal = personalItems.map((item) => ({ ...item, category: 'personal' }))
  const academic = academicItems.map((item) => ({ ...item, category: 'academic' }))
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
          const architecture = Array.isArray(project.architecture)
            ? project.architecture
            : defaultArchitectures[i % defaultArchitectures.length]
          return (
            <div key={i} className="project-card reveal">
              <div className="project-info">
                <div className="project-topline">
                  <div className="project-label">{label}</div>
                  <span className="project-number">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="project-title">{project.name}</h3>
                <p className="project-desc">{project.description}</p>
                {project.role && (
                  <div className="project-result">
                    <span>{t('projects.roleLabel')}</span>
                    <p>{project.role}</p>
                  </div>
                )}
                <div className="project-tags">
                  {tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={GITHUB_URL} className="project-link" target="_blank" rel="noopener noreferrer">
                    {t('projects.githubProfile')}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                  </a>
                </div>
              </div>
              <div className="project-visual">
                <div className="project-visual-header">
                  <span>{t('projects.architectureLabel')}</span>
                  <span className="project-status"><i />{t('projects.productionReady')}</span>
                </div>
                <div className="project-architecture">
                  {architecture.map((node, nodeIndex) => (
                    <div className="architecture-step" key={`${node}-${nodeIndex}`}>
                      <div>{node}</div>
                      {nodeIndex < architecture.length - 1 && <span>↓</span>}
                    </div>
                  ))}
                </div>
                <div className="project-visual-footer">
                  <span>{t('projects.systemDesign')}</span>
                  <span>{architecture.length} layers</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
