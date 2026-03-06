import { useTranslation } from 'react-i18next'
import './Projects.css'

const projectVisuals = [
  (
    <>
      <span style={{ color: 'rgba(255,140,0,0.8)' }}>POST</span> /api/bookings<br />
      <span style={{ color: 'rgba(255,140,0,0.8)' }}>GET</span>  /api/availability<br />
      <span style={{ color: 'rgba(255,140,0,0.8)' }}>GET</span>  /api/providers<br />
      <span style={{ color: 'rgba(255,140,0,0.5)' }}>──────────────────</span><br />
      <span style={{ color: 'rgba(238,240,248,0.4)' }}>status: </span><span style={{ color: '#4CAF8A' }}>200 OK</span><br />
      <span style={{ color: 'rgba(238,240,248,0.4)' }}>auth:   </span>JWT Bearer<br />
      <span style={{ color: 'rgba(238,240,248,0.4)' }}>db:     </span>PostgreSQL
    </>
  ),
  (
    <>
      <span style={{ color: 'rgba(255,140,0,0.8)' }}>Stock</span>      → 1,240 items<br />
      <span style={{ color: 'rgba(255,140,0,0.8)' }}>Inbound</span>    → 14 today<br />
      <span style={{ color: 'rgba(255,140,0,0.8)' }}>Outbound</span>   → 9 today<br />
      <span style={{ color: 'rgba(255,140,0,0.5)' }}>──────────────────</span><br />
      <span style={{ color: 'rgba(238,240,248,0.4)' }}>warehouses: </span>3<br />
      <span style={{ color: 'rgba(238,240,248,0.4)' }}>users:      </span>12<br />
      <span style={{ color: 'rgba(238,240,248,0.4)' }}>db:         </span>MySQL
    </>
  ),
]

const projectTags = [
  ['Spring Boot', 'Angular', 'PostgreSQL', 'REST API', 'Spring Security'],
  ['JavaFX', 'MySQL', 'Java', 'FXML', 'JDBC'],
]

const projectKeys = [
  { number: '01', labelKey: 'projects.featured1Label', titleKey: 'projects.featured1Title', descKey: 'projects.featured1Desc' },
  { number: '02', labelKey: 'projects.featured2Label', titleKey: 'projects.featured2Title', descKey: 'projects.featured2Desc' },
]

export default function Projects() {
  const { t } = useTranslation()
  return (
    <section id="projects">
      <div className="section-label reveal">{t('projects.sectionLabel')}</div>
      <h2 className="section-title reveal">{t('projects.sectionTitle')} <em>{t('projects.sectionTitleEm')}</em></h2>
      <div className="projects-stack">
        {projectKeys.map((proj, i) => (
          <div key={proj.number} className="project-card reveal">
            <div className="project-number">{proj.number}</div>
            <div className="project-info">
              <div className="project-label">{t(proj.labelKey)}</div>
              <h3 className="project-title">{t(proj.titleKey)}</h3>
              <p className="project-desc">{t(proj.descKey)}</p>
              <div className="project-tags">
                {projectTags[i].map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href="https://github.com/blandinebalde" className="project-link" target="_blank" rel="noopener noreferrer">
                  {t('projects.github')}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                </a>
              </div>
            </div>
            <div className="project-visual">
              <div className="project-visual-inner">
                {projectVisuals[i]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
