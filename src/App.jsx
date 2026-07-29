import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ArchitectureShowcase from './components/ArchitectureShowcase'
import Experience from './components/Experience'
import Education from './components/Education'
import Languages from './components/Languages'
import Activities from './components/Activities'
import EngineeringProfile from './components/EngineeringProfile'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const { t } = useTranslation()
  const [navScrolled, setNavScrolled] = useState(false)
  const [toastShow, setToastShow] = useState(false)

  // Navbar scroll
  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Section enter animation (between section transitions)
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]:not(#hero)')
    const sectionObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible')
            sectionObs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -5% 0px' }
    )
    sections.forEach((el) => sectionObs.observe(el))
    return () => sectionObs.disconnect()
  }, [])

  // Reveal on scroll (staggered elements inside sections)
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 60)
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    reveals.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  // Toast: show then hide after 2.4s
  const showCopyToast = () => {
    setToastShow(true)
    const t = setTimeout(() => setToastShow(false), 2400)
    return () => clearTimeout(t)
  }

  // Smooth scroll for anchor links
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a || a.getAttribute('href') === '#') return
      const id = a.getAttribute('href').slice(1)
      const el = document.getElementById(id)
      if (el) {
        e.preventDefault()
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <div className="app">
      <div id="toast" className={toastShow ? 'show' : ''} aria-live="polite">{t('toast.copied')}</div>

      <Navigation scrolled={navScrolled} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ArchitectureShowcase />
      <Experience />
      <Education />
      <Languages />
      <Activities />
      <EngineeringProfile />
      <Contact onCopyEmail={showCopyToast} />
      <Footer />
    </div>
  )
}

export default App
