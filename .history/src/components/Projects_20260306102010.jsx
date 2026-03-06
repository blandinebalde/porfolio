import './Projects.css'

const projects = [
  {
    number: '01',
    label: 'Web Platform · Full Stack',
    title: 'Service Booking Platform',
    desc: 'A ClassPass-inspired platform connecting clients with service providers — beauty salons, hairdressers, and massage therapists. Features user management, appointment scheduling, real-time availability tracking, and a dedicated provider dashboard.',
    tags: ['Spring Boot', 'Angular', 'PostgreSQL', 'REST API', 'Spring Security'],
    github: 'https://github.com/blandinebalde',
    visual: (
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
  },
  {
    number: '02',
    label: 'Desktop App · JavaFX',
    title: 'Warehouse Management System',
    desc: 'A full-featured desktop application for warehouse operations. Covers stock management, inbound/outbound tracking, order management, user roles, and inter-warehouse transfers — all from a structured JavaFX interface backed by MySQL.',
    tags: ['JavaFX', 'MySQL', 'Java', 'FXML', 'JDBC'],
    github: 'https://github.com/blandinebalde',
    visual: (
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
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-label reveal">Work</div>
      <h2 className="section-title reveal">Selected <em>projects</em></h2>
      <div className="projects-stack">
        {projects.map((proj) => (
          <div key={proj.number} className="project-card reveal">
            <div className="project-number">{proj.number}</div>
            <div className="project-info">
              <div className="project-label">{proj.label}</div>
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.desc}</p>
              <div className="project-tags">
                {proj.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={proj.github} className="project-link" target="_blank" rel="noopener noreferrer">
                  GitHub
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                </a>
              </div>
            </div>
            <div className="project-visual">
              <div className="project-visual-inner">
                {proj.visual}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
