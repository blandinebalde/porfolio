import './Hero.css'

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-content">
        <div className="hero-eyebrow">Software Engineer · Full Stack</div>
        <h1 className="hero-name">
          Blandine<br /><em>Baldé</em>
        </h1>
        <p className="hero-tagline">
          I build reliable, well-structured applications — from architectural design to production deployment. Backend precision. Clean frontend. Real impact.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-ghost">Get in touch</a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="orb-outer">
          <div className="orb-dot" />
          <div className="orb-dot" />
          <div className="orb-dot" />
          <div className="orb-core">
            <div className="orb-text">
              Java<br />Spring Boot<br />Angular<br />PostgreSQL
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-line" />
        scroll
      </div>
    </section>
  )
}
