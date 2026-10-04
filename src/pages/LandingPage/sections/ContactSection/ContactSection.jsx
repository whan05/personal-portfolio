import '../shared/SectionBase.css'
import SiteFooter from '../../../../components/SiteFooter/SiteFooter'
import './ContactSection.css'

export default function ContactSection({ lang, contactContent, sectionId, sectionKey }) {
  const t = (es, en) => lang === 'es' ? es : en
  return <section id={sectionId} data-section-key={sectionKey} className="panel contact-panel">
    <div className="contact-content">
      <div className="contact-heading"><p className="section-kicker">{t('Contacto · San José, Costa Rica', 'Contact · San José, Costa Rica')}</p><h2>{t('Construyamos', 'Let’s build')}<br /><span>{t('algo juntos.', 'something together.')}</span></h2><p className="contact-description">{t('¿Tienes un proyecto o una oportunidad profesional? Conversemos sobre aplicaciones web, desarrollo móvil y soluciones full stack.', 'Have a project or a professional opportunity? Let’s talk about web applications, mobile development and full stack solutions.')}</p><a className="contact-cta" href={`mailto:${contactContent.email}`}>{t('Escríbeme', 'Get in touch')} ↗</a></div>
      <div className="contact-links">
        <a href={`mailto:${contactContent.email}`}><span>{t('Correo electrónico', 'Email')}</span><strong>{contactContent.email}</strong><span aria-hidden="true">↗</span></a>
        <a href="tel:+50686809168"><span>{t('Teléfono', 'Phone')}</span><strong>{contactContent.phone}</strong><span aria-hidden="true">↗</span></a>
        <a href="/cv-whanderley-fonseca.pdf" download><span>{t('Perfil profesional', 'Professional profile')}</span><strong>{t('Descargar mi CV', 'Download my CV')}</strong><span aria-hidden="true">↓</span></a>
        <div className="contact-networks">{contactContent.socialLinks.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div>
      </div>
    </div>
    <SiteFooter lang={lang} />
  </section>
}
