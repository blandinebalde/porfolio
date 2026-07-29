import { useTranslation } from 'react-i18next'
import './EngineeringProfile.css'

const tools = ['IntelliJ IDEA', 'VS Code', 'Docker Desktop', 'Ubuntu', 'GitHub', 'Cursor']
const focus = ['AI', 'LLM', 'Spring AI', 'Kubernetes', 'Cloud Architecture']

export default function EngineeringProfile() {
  const { t } = useTranslation()
  const notes = t('engineering.notes', { returnObjects: true })

  return (
    <section id="engineering">
      <div className="section-label reveal">{t('engineering.sectionLabel')}</div>
      <h2 className="section-title reveal">
        {t('engineering.sectionTitle')} <em>{t('engineering.sectionTitleEm')}</em>
      </h2>

      <div className="engineering-grid reveal">
        <article className="engineering-card">
          <span className="engineering-kicker">NOW</span>
          <h3>{t('engineering.nowTitle')}</h3>
          <p>{t('engineering.nowDescription')}</p>
          <div className="engineering-tags">
            {focus.map((item) => <span key={item}>{item}</span>)}
          </div>
        </article>

        <article className="engineering-card">
          <span className="engineering-kicker">USES</span>
          <h3>{t('engineering.usesTitle')}</h3>
          <p>{t('engineering.usesDescription')}</p>
          <div className="tool-list">
            {tools.map((tool) => (
              <div key={tool}><i />{tool}</div>
            ))}
          </div>
        </article>

        <article className="engineering-card engineering-notes">
          <span className="engineering-kicker">NOTES</span>
          <h3>{t('engineering.notesTitle')}</h3>
          <p>{t('engineering.notesDescription')}</p>
          <div className="notes-list">
            {Array.isArray(notes) && notes.map((note, index) => (
              <div key={note}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{note}</p>
                <em>{t('engineering.planned')}</em>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
