import { useTranslation } from 'react-i18next'
import './ArchitectureShowcase.css'

const systemFlow = ['Angular', 'REST API', 'Spring Boot', 'PostgreSQL', 'Docker', 'AWS EC2']
const deliveryFlow = ['Developer', 'Git', 'GitHub', 'Jenkins', 'Docker', 'Production']

function Flow({ items }) {
  return (
    <div className="showcase-flow">
      {items.map((item, index) => (
        <div className="showcase-step" key={item}>
          <div>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{item}</strong>
          </div>
          {index < items.length - 1 && <i aria-hidden="true">→</i>}
        </div>
      ))}
    </div>
  )
}

export default function ArchitectureShowcase() {
  const { t } = useTranslation()

  return (
    <section id="architecture">
      <div className="section-label reveal">{t('architecture.sectionLabel')}</div>
      <h2 className="section-title reveal">
        {t('architecture.sectionTitle')} <em>{t('architecture.sectionTitleEm')}</em>
      </h2>
      <p className="architecture-intro reveal">{t('architecture.intro')}</p>

      <div className="showcase-grid reveal">
        <article className="showcase-card">
          <div className="showcase-card-header">
            <div>
              <span>{t('architecture.systemLabel')}</span>
              <h3>{t('architecture.systemTitle')}</h3>
            </div>
            <span className="showcase-badge">REST · JWT</span>
          </div>
          <Flow items={systemFlow} />
          <p>{t('architecture.systemDescription')}</p>
        </article>

        <article className="showcase-card">
          <div className="showcase-card-header">
            <div>
              <span>{t('architecture.devopsLabel')}</span>
              <h3>{t('architecture.devopsTitle')}</h3>
            </div>
            <span className="showcase-badge">CI/CD</span>
          </div>
          <Flow items={deliveryFlow} />
          <p>{t('architecture.devopsDescription')}</p>
        </article>
      </div>
    </section>
  )
}
