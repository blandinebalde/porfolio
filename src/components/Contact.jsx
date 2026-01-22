import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './Contact.css'

function Contact() {
  const { t } = useTranslation()
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  // EmailJS configuration - Remplacez ces valeurs par vos identifiants EmailJS
  // Obtenez-les sur https://www.emailjs.com/
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || ''
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      // Si EmailJS est configuré, utiliser EmailJS
      if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_email: 'blandinebalde@gmail.com'
          },
          EMAILJS_PUBLIC_KEY
        )
        
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        // Fallback vers mailto si EmailJS n'est pas configuré
        const subject = encodeURIComponent(formData.subject || 'Contact depuis le portfolio')
        const body = encodeURIComponent(
          `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )
        window.location.href = `mailto:blandinebalde@gmail.com?subject=${subject}&body=${body}`
        
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      }
      
      setTimeout(() => setStatus(''), 5000)
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
      setStatus('error')
      setTimeout(() => setStatus(''), 5000)
    }
  }

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

      <div className={`contact-form-container ${isSectionVisible ? 'fade-in-up' : 'animate-on-scroll'}`} style={{ animationDelay: '0.3s' }}>
        <h3 className="contact-form-title">{t('contact.formTitle')}</h3>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">{t('contact.formName')}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder={t('contact.formNamePlaceholder')}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">{t('contact.formEmail')}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder={t('contact.formEmailPlaceholder')}
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">{t('contact.formSubject')}</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder={t('contact.formSubjectPlaceholder')}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">{t('contact.formMessage')}</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder={t('contact.formMessagePlaceholder')}
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="submit-button"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? t('contact.formSending') : t('contact.formSubmit')}
          </button>
          {status === 'success' && (
            <p className="form-status success">{t('contact.formSuccess')}</p>
          )}
          {status === 'error' && (
            <p className="form-status error">{t('contact.formError')}</p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
