import { useTranslation } from 'react-i18next'
import './Skills.css'

const skillGroupKeys = [
  { titleKey: 'skills.groupBackend', tags: ['Java', 'Spring Boot', 'REST API', 'JWT', 'PHP', 'Laravel'] },
  { titleKey: 'skills.groupFrontend', tags: ['Angular', 'React', 'TypeScript', 'Flutter', 'HTML / CSS'] },
  { titleKey: 'skills.groupData', tags: ['PostgreSQL', 'MySQL', 'SQLite', 'Data Modeling', 'Advanced SQL'] },
  { titleKey: 'skills.groupTools', tags: ['Git / GitHub', 'Docker', 'Jenkins', 'CI / CD', 'Agile / Scrum'] },
]

export default function Skills() {
  const { t } = useTranslation()
  return (
    <section id="skills">
      <div className="section-label reveal">{t('skills.sectionLabel')}</div>
      <h2 className="section-title reveal">{t('skills.sectionTitle')} <em>{t('skills.sectionTitleEm')}</em> {t('skills.sectionTitleSuffix')}</h2>
      <div className="skills-grid reveal">
        {skillGroupKeys.map((group) => (
          <div key={group.titleKey} className="skill-group">
            <div className="skill-group-title">{t(group.titleKey)}</div>
            <div className="skill-tags">
              {group.tags.map(tag => (
                <div key={tag} className="skill-tag">{tag}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
