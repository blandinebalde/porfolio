import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const { t } = useTranslation()
  const [navScrolled, setNavScrolled] = useState(false)
  const [toastShow, setToastShow] = useState(false)
  const cursorRef = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })

  // Custom cursor
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    const ring = document.getElementById('cursor-ring')
    if (!cursor || !ring) return

    const onMove = (e) => {
      cursorRef.current.mx = e.clientX
      cursorRef.current.my = e.clientY
    }

    function anim() {
      const { mx, my, rx, ry } = cursorRef.current
      cursor.style.left = mx + 'px'
      cursor.style.top = my + 'px'
      cursorRef.current.rx += (mx - cursorRef.current.rx) * 0.12
      cursorRef.current.ry += (my - cursorRef.current.ry) * 0.12
      ring.style.left = cursorRef.current.rx + 'px'
      ring.style.top = cursorRef.current.ry + 'px'
      requestAnimationFrame(anim)
    }
    requestAnimationFrame(anim)
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  // Navbar scroll
  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Reveal on scroll
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80)
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
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
      <div id="cursor" />
      <div id="cursor-ring" />
      <div id="toast" className={toastShow ? 'show' : ''} aria-live="polite">{t('toast.copied')}</div>

      <Navigation scrolled={navScrolled} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact onCopyEmail={showCopyToast} />
      <Footer />
    </div>
  )
}

export default App
