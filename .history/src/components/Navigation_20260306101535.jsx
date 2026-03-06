import './Navigation.css'

export default function Navigation({ scrolled }) {
  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <a href="#hero" className="nav-logo">B<span>.</span>Baldé</a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
      </ul>
      <a href="#contact" className="nav-cta">Let's talk</a>
    </nav>
  )
}
