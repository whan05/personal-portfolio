import { useEffect, useRef } from 'react'
import { experiences, experienceHref } from '../../data/experiences'
import { experienceDetails } from '../../data/experienceDetails'
import SiteFooter from '../../components/SiteFooter/SiteFooter'
import ProjectGallery from './ProjectGallery'
import Achievements from './Achievements'
import getLocalizedText from '../../utils/getLocalizedText'
import './ExperiencePage.css'

export default function ExperiencePage({ slug, lang }) {
  const item = experiences.find((entry) => entry.slug === slug)
  const heading = useRef(null)
  const t = (es, en) => lang === 'es' ? es : en
  useEffect(() => { heading.current?.focus({ preventScroll: true }) }, [slug])
  if (!item) return <><article className="experience-page"><h1 ref={heading} tabIndex={-1}>{t('Experiencia no encontrada', 'Experience not found')}</h1><a href="#experiencias">{t('Volver a las experiencias', 'Back to experience')}</a></article><SiteFooter lang={lang} /></>
  const index = experiences.indexOf(item)
  const next = experiences[(index + 1) % experiences.length]
  const { projects = [], achievements = [] } = experienceDetails[slug] ?? {}
  return <div className="experience-detail-shell"><article className="experience-page">
    <a className="experience-back" href="#experiencias">← {t('Todas las experiencias', 'All experience')}</a>
    <header className="experience-hero"><div><p className="section-kicker">{t('Experiencia profesional', 'Professional experience')} / 0{index + 1}</p><h1 ref={heading} tabIndex={-1}>{item.company}</h1><p className="experience-role">{item.role}</p></div><dl className="experience-meta"><div><dt>{t('Periodo', 'Period')}</dt><dd>{getLocalizedText(item.period, lang)}</dd></div><div><dt>{t('Ubicación y modalidad', 'Location & work arrangement')}</dt><dd>{getLocalizedText(item.location, lang)}</dd></div></dl></header>
    <p className="experience-summary">{getLocalizedText(item.summary, lang)}</p>
    <div className="experience-body"><section><h2>{t('Responsabilidades y aportes', 'Responsibilities & contributions')}</h2><ol className="experience-responsibilities">{item.responsibilities.map((point) => <li key={point.en}>{getLocalizedText(point, lang)}</li>)}</ol></section><aside><p className="section-kicker">{t('Aporte destacado', 'Key contribution')}</p><p className="experience-highlight">{getLocalizedText(item.highlight, lang)}</p><h2>{t('Habilidades y herramientas', 'Skills & tools')}</h2><ul className="technology-tags">{item.technologies.map((tech) => <li key={getLocalizedText(tech, 'en')}>{getLocalizedText(tech, lang)}</li>)}</ul></aside></div>
    {achievements.length > 0 && <section className="experience-extra"><p className="section-kicker">{t('Resultados', 'Results')}</p><h2>{t('Logros', 'Achievements')}</h2><Achievements achievements={achievements} lang={lang} /></section>}
    {projects.length > 0 && <section className="experience-extra"><p className="section-kicker">{t('Trabajo seleccionado', 'Selected work')}</p><h2>{t('Proyectos en imágenes', 'Project gallery')}</h2><ProjectGallery projects={projects} lang={lang} /></section>}
    <nav className="experience-footer" aria-label={t('Navegación de experiencias', 'Experience navigation')}><a href="#contact">{t('Conversemos sobre tu proyecto', 'Let’s talk about your project')} ↗</a><a href={experienceHref(next.slug)}><small>{t('Siguiente experiencia', 'Next experience')}</small>{next.company} →</a></nav>
  </article><SiteFooter lang={lang} /></div>
}
