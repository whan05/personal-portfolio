import { contactContent } from '../../data/contact'
import './SiteFooter.css'

export default function SiteFooter({ lang }) {
  return <footer className="site-footer">
    <a className="footer-name" href="#inicio">Whanderley Fonseca Picado<span>Full Stack Developer · Costa Rica</span></a>
    <nav aria-label={lang === 'es' ? 'Enlaces del pie de página' : 'Footer links'}>
      {contactContent.socialLinks.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}
      <a href="/cv-whanderley-fonseca.pdf" download>{lang === 'es' ? 'Descargar CV' : 'Download CV'} ↓</a>
    </nav>
    <small>© {new Date().getFullYear()} Whanderley Fonseca Picado</small>
  </footer>
}
