import './About.css'

export default function About() {
  return (
    <section id="about">
      <div className="section-label reveal">About</div>
      <h2 className="section-title reveal">Engineer at <em>every layer</em></h2>
      <div className="about-grid">
        <div className="about-photo-wrap reveal">
          <div className="about-photo-frame">
            <div className="about-initials">BB</div>
          </div>
          <div className="photo-accent" />
          <div className="photo-accent-2" />
        </div>
        <div className="about-text reveal">
          <p>
            I'm <strong>Blandine Baldé</strong>, a mid-level software engineer with a holistic approach to development. I'm involved across the entire lifecycle — from <strong>requirements analysis and architecture</strong> to development, testing, and production deployment.
          </p>
          <p>
            My focus is building applications that are <strong>reliable, well-structured, and solve real problems</strong> — not just technically sound, but genuinely useful.
          </p>
          <p>
            I bring <strong>rigour, autonomy, and analytical thinking</strong> to every project. I thrive in dynamic environments where I can contribute meaningfully and keep growing as an engineer.
          </p>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-num">3+</span>
              <span className="stat-label">Years experience</span>
            </div>
            <div className="stat">
              <span className="stat-num">2</span>
              <span className="stat-label">Active projects</span>
            </div>
            <div className="stat">
              <span className="stat-num">7+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
