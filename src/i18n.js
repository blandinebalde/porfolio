import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationEN from './locales/en.json'
import translationFR from './locales/fr.json'
import translationES from './locales/es.json'
import translationKO from './locales/ko.json'

const savedLanguage = window.localStorage.getItem('portfolio-language')

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      fr: { translation: translationFR },
      es: { translation: translationES },
      ko: { translation: translationKO }
    },
    lng: savedLanguage || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
