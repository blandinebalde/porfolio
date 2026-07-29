import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import './Skills.css'

const DEFAULT_GROUPS = [
  { title: 'Backend', tags: ['Java', 'Spring Boot', 'Spring Security', 'REST API', 'JWT', 'Microservices'] },
  { title: 'Frontend', tags: ['Angular', 'TypeScript', 'React', 'Flutter', 'HTML / CSS'] },
  { title: 'DevOps', tags: ['Docker', 'Jenkins', 'Git', 'GitHub', 'GitLab', 'Linux'] },
  { title: 'Database', tags: ['PostgreSQL', 'MySQL', 'SQLite', 'Advanced SQL'] },
  { title: 'Cloud', tags: ['AWS EC2', 'GCP', 'Render', 'Vercel', 'CI / CD'] },
  { title: 'Architecture', tags: ['MVC', 'REST', 'Microservices', 'UML', 'MERISE', 'SOLID'] },
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
        {groups.map((group, index) => (
          <div key={group.title} className="skill-group">
            <div className="skill-group-header">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div className="skill-group-title">{group.title}</div>
            </div>
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
