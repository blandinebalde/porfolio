import { useTranslation } from 'react-i18next'
import './Footer.css'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer>
      <span>{t('footer.copyright')}</span>
      <span>{t('footer.built')}</span>
      <span style={{ color: 'var(--amber)' }}>BB.</span>
    </footer>
  )
}
