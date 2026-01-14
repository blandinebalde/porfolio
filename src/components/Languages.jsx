import { useTranslation } from 'react-i18next'
import './Languages.css'

function Languages() {
  const { t } = useTranslation()

  return (
    <section id="languages" className="section languages">
      <h2 className="section-title">{t('languages.title')}</h2>
      <div className="languages-list">
        {t('languages.items', { returnObjects: true }).map((lang, index) => (
          <div key={index} className="language-item">
            <span className="language-name">{lang.language}</span>
            <span className="language-level">{lang.level}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Languages
