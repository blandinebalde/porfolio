import { useTranslation } from 'react-i18next'
import './LanguageSwitcher.css'

function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="language-switcher">
      <button
        onClick={() => changeLanguage('fr')}
        className={i18n.language === 'fr' ? 'active' : ''}
      >
        FR
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={i18n.language === 'en' ? 'active' : ''}
      >
        EN
      </button>
    </div>
  )
}

export default LanguageSwitcher
