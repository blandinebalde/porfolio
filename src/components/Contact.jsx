import { useTranslation } from 'react-i18next'
import './Contact.css'

function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="section contact">
      <h2 className="section-title">{t('contact.title')}</h2>
      <div className="contact-info">
       
        <div className="contact-item">
          <span className="contact-label">{t('contact.email')}:</span>
          <a href="mailto:blandinebalde@gmail.com" className="contact-value">blandinebalde@gmail.com</a>
        </div>
        <div className="contact-item">
          <span className="contact-label">{t('contact.github')}:</span>
          <a href="https://github.com/blandinebalde" target="_blank" rel="noopener noreferrer" className="contact-value">
            github.com/blandinebalde
          </a>
        </div>
        <div className="contact-item">
          <span className="contact-label">{t('contact.location')}:</span>
          <span className="contact-value">Rufisque, Dakar, Sénégal</span>
        </div>
      </div>
    </section>
  )
}

export default Contact
