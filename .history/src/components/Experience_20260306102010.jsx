import './Experience.css'

const timeline = [
  {
    date: '2022 — Present',
    role: 'Full Stack Developer',
    company: 'Independent Projects & Freelance',
    points: [
      'Designing and building full stack web and desktop applications end-to-end, from architecture decisions to production deployment.',
      'Working across Java, Spring Boot, Angular, JavaFX, PostgreSQL and MySQL on real-world products.',
      'Managing entire development lifecycle: requirements analysis, design, development, testing, and release.',
    ],
  },
  {
    date: 'Education',
    role: 'Software Engineering Studies',
    company: 'Computer Science · Development & Architecture',
    points: [
      'Deep foundation in object-oriented programming, data structures, algorithms, and software architecture.',
      'Specialisation in enterprise Java development and relational database design.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-label reveal">Journey</div>
      <h2 className="section-title reveal">Experience &amp; <em>background</em></h2>
      <div className="timeline">
        {timeline.map((item, i) => (
          <div key={i} className="timeline-item reveal">
            <div className="timeline-dot" />
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-role">{item.role}</div>
            <div className="timeline-company">{item.company}</div>
            <ul className="timeline-points">
              {item.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
