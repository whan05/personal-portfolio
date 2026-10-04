import '../shared/SectionBase.css'
import { aboutContent } from '../../../../data/about'
import { experiences } from '../../../../data/experiences'
import getLocalizedText from '../../../../utils/getLocalizedText'
import './AboutSection.css'

export default function AboutSection({ lang, sectionId, sectionKey }) {
  const t = (es, en) => lang === 'es' ? es : en
  return (
    <section id={sectionId} data-section-key={sectionKey} className="panel about-panel">
      <div className="about-inner">
        <div className="about-copy">
          <p className="section-kicker">{t('San José, Costa Rica · Full stack', 'San José, Costa Rica · Full stack')}</p>
          <h2 className="about-title"><span>{getLocalizedText(aboutContent.title.lead, lang)}</span><strong>{getLocalizedText(aboutContent.title.emphasis, lang)}</strong></h2>
          <p className="about-intro">{getLocalizedText(aboutContent.intro, lang)}</p>
          <div className="about-text">
            <p>{getLocalizedText(aboutContent.journey, lang)}</p>
            <p>{t('Transformo necesidades de clientes y equipos en soluciones mantenibles. Trabajo desde los requisitos hasta la integración y las pruebas, con atención a la accesibilidad y la experiencia de usuario.', 'I turn client and team needs into maintainable solutions. I work from requirements through integration and testing, with attention to accessibility and user experience.')}</p>
          </div>
          <div className="about-actions"><a href="#experiencias">{t('Explorar mi trayectoria', 'Explore my career')} ↗</a><a href="/cv-whanderley-fonseca.pdf" download>{t('Descargar CV', 'Download CV')} ↓</a></div>
        </div>
        <div className="about-profile">
          <dl className="about-metrics"><div><dt>{t('Años en desarrollo web', 'Years in web development')}</dt><dd>5+</dd></div><div><dt>{t('Etapas profesionales', 'Professional roles')}</dt><dd>{experiences.length.toString().padStart(2, '0')}</dd></div></dl>
          <div className="about-focus">{aboutContent.focus.map((area, index) => <div className="about-focus-row" key={area.title.en}><span className="about-focus-number" aria-hidden="true">0{index + 1}</span><div><h3>{getLocalizedText(area.title, lang)}</h3><p>{area.detail}</p></div></div>)}</div>
          <div className="about-current"><span className="about-current-mark" aria-hidden="true" /><div><p>{t('Actualmente en Bee Loyal Card', 'Currently at Bee Loyal Card')}</p><span>Full Stack Web Developer · {t('Remoto', 'Remote')}</span></div></div>
          <p className="about-workflow">{t('Desarrollo asistido por IA', 'AI-assisted development')} <span>Codex · Claude Code · OpenCode</span></p>
        </div>
      </div>
    </section>
  )
}
