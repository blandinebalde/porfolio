import { useTranslation } from 'react-i18next'
import './Hero.css'

export default function Hero() {
  const { t, i18n } = useTranslation()
  const language = i18n.language?.split('-')[0] || 'en'
  const cvLanguage = language === 'fr' ? 'fr' : 'en'
  const cvUrl = `${import.meta.env.BASE_URL}cv_blandine_balde_${cvLanguage}.pdf`

  return (
    <section id="hero">
      <div className="hero-grid">
        <div className="hero-content">
          <div className="hero-status">
            <span className="status-dot" />
            {t('hero.status')}
          </div>
          <div className="hero-eyebrow">{t('hero.eyebrow')}</div>
          <h1 className="hero-name">
            {t('hero.nameFirst')} <em>{t('hero.nameLast')}</em>
          </h1>
          <p className="hero-role">{t('hero.role')}</p>
          <p className="hero-stack">Java <span>•</span> Spring Boot <span>•</span> Angular <span>•</span> Cloud <span>•</span> DevOps <span>•</span> AI</p>
          <p className="hero-tagline">{t('hero.tagline')}</p>
          <div className="hero-actions">
            <a href={cvUrl} className="btn-primary" download target="_blank" rel="noreferrer">
              {t('nav.downloadCV')}
            </a>
            <a href="#projects" className="btn-ghost">{t('hero.viewProjects')}</a>
          </div>
        </div>

        <div className="hero-visual" aria-label={t('hero.architectureLabel')}>
          <div className="visual-window">
            <div className="visual-toolbar">
              <span /><span /><span />
              <p>production.architecture</p>
            </div>
            <div className="architecture-flow">
              <div className="architecture-node node-client">
                <small>CLIENT</small>
                <strong>Angular</strong>
              </div>
              <div className="flow-line"><span>HTTPS</span></div>
              <div className="architecture-node node-api">
                <small>API</small>
                <strong>Spring Boot</strong>
                <em>JWT secured</em>
              </div>
              <div className="flow-split">
                <span />
                <span />
                <span />
              </div>
              <div className="architecture-services">
                <div><small>DATA</small><strong>PostgreSQL</strong></div>
                <div><small>RUNTIME</small><strong>Docker</strong></div>
                <div><small>CLOUD</small><strong>AWS</strong></div>
              </div>
            </div>
            <div className="visual-footer">
              <span><i className="status-dot" /> production ready</span>
              <span>CI/CD enabled</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-metrics">
        <div><strong>3+</strong><span>{t('hero.metricYears')}</span></div>
        <div><strong>7+</strong><span>{t('hero.metricSystems')}</span></div>
        <div><strong>3</strong><span>{t('hero.metricPlatforms')}</span></div>
        <div><strong>Full</strong><span>{t('hero.metricLifecycle')}</span></div>
      </div>
    </section>
  )
}
