import { useTranslation } from 'react-i18next'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './About.css'

function About() {
  const { t } = useTranslation()
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="about" className="section about">
      <p 
        ref={ref}
        className={`about-description ${isVisible ? 'fade-in-up' : 'animate-on-scroll'}`}
      >
        {t('about.description')}
      </p>
    </section>
  )
}

export default About
