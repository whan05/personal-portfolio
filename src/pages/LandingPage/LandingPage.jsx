import HeroSection from './sections/HeroSection/HeroSection'
import AboutSection from './sections/AboutSection/AboutSection'
import ContactSection from './sections/ContactSection/ContactSection'
import { contactContent } from '../../data/contact'
import { heroContent } from '../../data/hero'
import { skillGroups } from '../../data/experiences'
import ExperienceSection from './sections/ExperienceSection/ExperienceSection'
import getLocalizedText from '../../utils/getLocalizedText'
import '../ExperiencePage/ExperiencePage.css'
export default function LandingPage({ lang, onNavigate }) {
 const t = (es, en) => lang === 'es' ? es : en
 return <div className="page-sequence">
  <HeroSection lang={lang} onNavigate={onNavigate} heroContent={heroContent} sectionId="inicio" sectionKey="inicio" />
  <AboutSection lang={lang} sectionId="about" sectionKey="about" />
  <ExperienceSection lang={lang} />
  <section id="skills" data-section-key="skills" className="panel career-panel"><p className="section-kicker">{t('Stack técnico', 'Technical stack')}</p><h2>{t('Habilidades y herramientas', 'Skills & tools')}</h2><p className="career-intro">{t('Tecnologías y metodologías de mi perfil profesional, desde la interfaz hasta las pruebas y la infraestructura.', 'Technologies and methodologies from my professional profile, from interfaces to testing and infrastructure.')}</p><div className="skills-grid">{skillGroups.map((group) => <section key={group.title.en}><h3>{getLocalizedText(group.title, lang)}</h3><ul className="technology-tags">{group.items.map((item) => <li key={item}>{item}</li>)}</ul></section>)}</div></section>
  <ContactSection lang={lang} contactContent={contactContent} sectionId="contact" sectionKey="contact" />
 </div>
}
