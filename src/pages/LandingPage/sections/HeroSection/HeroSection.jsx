import '../shared/SectionBase.css'
import getLocalizedText from '../../../../utils/getLocalizedText'
import './HeroSection.css'

export default function HeroSection({ lang, onNavigate, heroContent, sectionId, sectionKey }) {
  const t = (es, en) => lang === 'es' ? es : en
  return <section id={sectionId} data-section-key={sectionKey} className="panel hero-panel">
    <div className="hero-main">
      <div className="hero-copy">
        <p className="section-kicker">Whanderley Fonseca Picado / {t('Desarrollador full stack', 'Full stack developer')}</p>
        <h1>{t('Desarrollo', 'Building for')}<br /><span>{t('web y móvil.', 'web & mobile.')}</span></h1>
        <p className="hero-lead">{t('Conecto interfaces, datos e ideas para crear aplicaciones que funcionan.', 'Connecting interfaces, data and ideas to build applications that work.')}</p>
        <p className="hero-description">{t('Más de 5 años en desarrollo web. React, React Native y NestJS, con atención al código limpio, la calidad y la experiencia de usuario.', 'Over 5 years in web development. React, React Native and NestJS, with a focus on clean code, quality and user experience.')}</p>
        <div className="hero-actions"><button className="hero-primary" type="button" onClick={() => onNavigate(heroContent.primaryAction.href.slice(1))}>{getLocalizedText(heroContent.primaryAction.label, lang)} <span aria-hidden="true">↗</span></button><button className="hero-secondary" type="button" onClick={() => onNavigate(heroContent.secondaryAction.href.slice(1))}>{getLocalizedText(heroContent.secondaryAction.label, lang)} <span aria-hidden="true">→</span></button></div>
      </div>
      <div className="hero-system" role="img" aria-label={t('Mi stack: interfaces React, Next.js y Angular; móvil con React Native; backend NestJS y Node.js; bases de datos SQL.', 'My stack: React, Next.js and Angular interfaces; React Native mobile; NestJS and Node.js backend; SQL databases.')}>
        <div className="hero-system-label" aria-hidden="true"><span>{t('De la interfaz a los datos', 'From interface to data')}</span><span>01 / STACK</span></div>
        <div className="hero-web" aria-hidden="true"><div className="hero-window-bar"><span>WF / {t('Desarrollo', 'Development')}</span><span>↗</span></div><div className="hero-web-content"><span className="hero-code-symbol">&lt;/&gt;</span><p>{t('Interfaces', 'Interfaces')}<br /><strong>{t('con intención.', 'with intention.')}</strong></p><small>React · Next.js · Angular</small></div></div>
        <div className="hero-mobile" aria-hidden="true"><span className="hero-mobile-notch" /><span className="hero-mobile-label">MOBILE</span><span className="hero-mobile-mark">WF<span>↗</span></span><p>React<br />Native</p><span className="hero-mobile-bottom">iOS / Android</span></div>
        <div className="hero-data" aria-hidden="true"><span className="hero-data-icon">{ '{ }' }</span><div><strong>NestJS / Node.js</strong><span>REST APIs · MySQL · PostgreSQL</span></div><span className="hero-data-arrow">↔</span></div>
      </div>
    </div>
    <div className="hero-bottom"><p><span className="hero-location-dot" aria-hidden="true" />San José, Costa Rica</p><p>{t('Web · Móvil · Backend · QA', 'Web · Mobile · Backend · QA')}</p><button type="button" onClick={() => onNavigate('about')}>{t('Conoce mi perfil', 'Get to know me')} <span aria-hidden="true">↓</span></button></div>
  </section>
}
