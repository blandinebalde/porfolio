import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import './Skills.css'

const DEFAULT_GROUPS = [
  { title: 'Backend', tags: ['Java', 'Spring Boot', 'REST API', 'JWT', 'PHP', 'Laravel'] },
  { title: 'Frontend', tags: ['Angular', 'React', 'TypeScript', 'Flutter', 'HTML / CSS'] },
  { title: 'Data', tags: ['PostgreSQL', 'MySQL', 'SQLite', 'Data Modeling', 'Advanced SQL'] },
  { title: 'Practices & Tools', tags: ['Git / GitHub', 'Docker', 'Jenkins', 'CI / CD', 'Agile / Scrum'] },
]

function getSkillGroups(t) {
  const groups = t('skills.groups', { returnObjects: true })
  if (Array.isArray(groups) && groups.length > 0) return groups
  const enBundle = i18n.getResourceBundle('en', 'translation')
  const enGroups = enBundle?.skills?.groups
  return Array.isArray(enGroups) && enGroups.length > 0 ? enGroups : DEFAULT_GROUPS
}

function getSkillList(t, key) {
  const items = t(key, { returnObjects: true })
  return Array.isArray(items) ? items : []
}

export default function Skills() {
  const { t } = useTranslation()
  const groups = getSkillGroups(t)
  const softTitle = t('skills.soft.title')
  const softItems = getSkillList(t, 'skills.soft.items')
  const transversalTitle = t('skills.transversal.title')
  const transversalItems = getSkillList(t, 'skills.transversal.items')

  return (
    <section id="skills">
      <div className="section-label reveal">{t('skills.sectionLabel')}</div>
      <h2 className="section-title reveal">
        {t('skills.sectionTitle')} <em>{t('skills.sectionTitleEm')}</em> {t('skills.sectionTitleSuffix')}
      </h2>
      <div className="skills-grid reveal">
        {groups.map((group) => (
          <div key={group.title} className="skill-group">
            <div className="skill-group-title">{group.title}</div>
            <div className="skill-tags">
              {group.tags.map((tag) => (
                <div key={tag} className="skill-tag">{tag}</div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {(softItems.length > 0 || transversalItems.length > 0) && (
        <div className="skills-extra reveal">
          {softItems.length > 0 && (
            <div className="skills-extra-block">
              <h3 className="skills-extra-title">{softTitle}</h3>
              <ul className="skills-extra-list">
                {softItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {transversalItems.length > 0 && (
            <div className="skills-extra-block">
              <h3 className="skills-extra-title">{transversalTitle}</h3>
              <ul className="skills-extra-list">
                {transversalItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
