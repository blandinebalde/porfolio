import { useTranslation } from 'react-i18next'
import './Header.css'

function Header() {
  const { t } = useTranslation()

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-name">{t('header.name')}</h1>
        <p className="header-title">{t('header.title')}</p>
        <p className="header-location">{t('header.location')}</p>
      </div>
    </header>
  )
}

export default Header
