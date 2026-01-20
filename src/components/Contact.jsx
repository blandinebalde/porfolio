import { useTranslation } from 'react-i18next'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './Contact.css'

function Contact() {
  const { t } = useTranslation()
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="contact" className="section contact" ref={sectionRef}>
      <h2 className={`section-title ${isSectionVisible ? 'fade-in-up' : 'animate-on-scroll'}`}>
        {t('contact.title')}
      </h2>
      <div className="contact-info">
        <div 
          className={`contact-item ${isSectionVisible ? 'fade-in-scale stagger-item' : 'animate-on-scroll'}`}
          style={{ animationDelay: '0.1s' }}
        >
          <span className="contact-label">{t('contact.email')}:</span>
          <a href="mailto:blandinebalde@gmail.com" className="contact-value">blandinebalde@gmail.com</a>
        </div>
        <div 
          className={`contact-item ${isSectionVisible ? 'fade-in-scale stagger-item' : 'animate-on-scroll'}`}
          style={{ animationDelay: '0.2s' }}
        >
          <span className="contact-label">{t('contact.github')}:</span>
          <a href="https://github.com/blandinebalde" target="_blank" rel="noopener noreferrer" className="contact-value">
            github.com/blandinebalde
          </a>
        </div>
        
      </div>
    </section>
  )
}

export default Contact
