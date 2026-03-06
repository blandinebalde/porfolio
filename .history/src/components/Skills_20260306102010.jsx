import './Skills.css'

const skillGroups = [
  {
    title: 'Backend',
    tags: ['Java', 'Spring Boot', 'Spring Security', 'REST APIs', 'JPA / Hibernate'],
  },
  {
    title: 'Frontend',
    tags: ['Angular', 'TypeScript', 'JavaFX', 'HTML / CSS', 'Responsive Design'],
  },
  {
    title: 'Data',
    tags: ['PostgreSQL', 'MySQL', 'Data Modeling', 'Query Optimization'],
  },
  {
    title: 'Practices & Tools',
    tags: ['Git / GitHub', 'Architecture Design', 'Unit Testing', 'Agile / Scrum', 'CI / CD'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-label reveal">Expertise</div>
      <h2 className="section-title reveal">The <em>stack</em> I work with</h2>
      <div className="skills-grid reveal">
        {skillGroups.map((group, i) => (
          <div key={group.title} className="skill-group">
            <div className="skill-group-title">{group.title}</div>
            <div className="skill-tags">
              {group.tags.map(tag => (
                <div key={tag} className="skill-tag">{tag}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
