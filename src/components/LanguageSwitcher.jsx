import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './LanguageSwitcher.css'

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'ko', label: 'KO' }
]

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const currentLng = i18n.language?.split('-')[0] || 'en'

  useEffect(() => {
    document.documentElement.lang = currentLng
    window.localStorage.setItem('portfolio-language', currentLng)
  }, [currentLng])

  return (
    <div className="language-switcher" role="group" aria-label="Language">
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => i18n.changeLanguage(code)}
          className={currentLng === code ? 'active' : ''}
          aria-pressed={currentLng === code}
          aria-label={`${label} (${code})`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
