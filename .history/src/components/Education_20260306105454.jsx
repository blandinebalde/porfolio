import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import './Education.css'

function getItems(t, key) {
  const items = t(key, { returnObjects: true })
  if (Array.isArray(items) && items.length > 0) return items
  const enBundle = i18n.getResourceBundle('en', 'translation')
  const path = key.split('.')
  let en = enBundle
  for (const p of path) { en = en?.[p] }
  return Array.isArray(en) ? en : []
}

export default function Education() {
  const { t } = useTranslation()
  const educationItems = getItems(t, 'education.items')
  const certificationItems = getItems(t, 'certifications.items')
  const hasEducation = educationItems.length > 0
  const hasCertifications = certificationItems.length > 0

  return (
    <section id="education">
      <div className="section-label reveal">{t('education.sectionLabel')}</div>
      <h2 className="section-title reveal">
        {t('education.sectionTitle')} <em>{t('education.sectionTitleEm')}</em>
      </h2>

      {hasEducation && (
        <div className="education-block reveal">
          <h3 className="education-block-title">{t('education.title')}</h3>
          <div className="education-list">
            {educationItems.map((item, index) => (
              <div key={index} className="education-item">
                <div className="education-date">{item.period}</div>
                <div className="education-content">
                  <h4 className="education-degree">{item.degree}</h4>
                  <p className="education-school">{item.school}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {hasCertifications && (
        <div className="education-block reveal">
          <h3 className="education-block-title">{t('certifications.title')}</h3>
          <div className="certifications-list">
            {certificationItems.map((item, index) => (
              <div key={index} className="certification-item">
                <div className="certification-period">{item.period}</div>
                <div className="certification-content">
                  <h4 className="certification-name">{item.name}</h4>
                  <p className="certification-meta">
                    {item.provider && <span className="certification-provider">{item.provider}</span>}
                    {item.document && (
                      <span className="certification-document"> — {item.document}</span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
