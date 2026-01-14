import { useTranslation } from 'react-i18next'
import './About.css'

function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="section about">
      <p className="about-description">{t('about.description')}</p>
    </section>
  )
}

export default About
