import { experiences, experienceHref } from '../../../../data/experiences'
import getLocalizedText from '../../../../utils/getLocalizedText'
import '../shared/SectionBase.css'
import './ExperienceSection.css'

const backgrounds = ['#e8f5df', '#fcf1c9', '#dfe6fb', '#f7eaf3', '#dff5f1', '#e9e2d7']

export default function ExperienceSection({ lang }) {
  const groups = Array.from({ length: Math.ceil(experiences.length / 2) }, (_, index) => experiences.slice(index * 2, index * 2 + 2))
  return groups.map((group, groupIndex) => (
    <section key={groupIndex} id={groupIndex === 0 ? 'experiencias' : `experiencias-${groupIndex + 1}`} className={`panel experience-showcase ${group.length === 1 ? 'experience-showcase-single' : ''}`} aria-label={lang === 'es' ? 'Experiencia profesional' : 'Professional experience'}>
      {group.map((item, offset) => {
        const index = groupIndex * 2 + offset
        return (
          <article key={item.slug} id={`experiencia-${item.slug}`} data-section-key={`experiencia-${item.slug}`} className={`experience-showcase-row ${index % 2 ? 'is-reversed' : ''}`} style={{ background: backgrounds[index] }}>
            <div className="experience-showcase-copy">
              <p className="section-kicker">{getLocalizedText(item.period, lang)}</p>
              <h2>{item.company}</h2>
              <p className="experience-showcase-role">{item.role}</p>
              <a href={experienceHref(item.slug)}>{lang === 'es' ? 'Explorar experiencia' : 'Explore experience'} ↗</a>
            </div>
            <div className="experience-showcase-visual">
              <div className="experience-sheet-top"><span>{lang === 'es' ? 'Mi aporte' : 'My contribution'}</span><span aria-hidden="true">0{index + 1}</span></div>
                <p className="experience-sheet-summary">{getLocalizedText(item.summary, lang)}</p>
                <p className="experience-sheet-highlight">{getLocalizedText(item.highlight, lang)}</p>
              {item.technologies.length > 0 && <ul className="experience-showcase-skills" aria-label={lang === 'es' ? 'Habilidades y herramientas' : 'Skills and tools'}>{item.technologies.map((technology) => <li key={getLocalizedText(technology, 'en')}>{getLocalizedText(technology, lang)}</li>)}</ul>}
            </div>
          </article>
        )
      })}
    </section>
  ))
}
