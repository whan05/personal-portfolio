import { useEffect, useRef } from 'react'
import './MenuOverlay.css'

export default function MenuOverlay({ menuOpen, navItems, onClose, onNavigate, lang }) {
  const root = useRef(null)
  const closeRef = useRef(onClose)
  useEffect(() => { closeRef.current = onClose }, [onClose])
  useEffect(() => {
    if (!menuOpen) return undefined
    const previous = document.activeElement
    root.current?.querySelector('button')?.focus()
    const handleKey = (event) => {
      if (event.key === 'Escape') closeRef.current()
      if (event.key === 'Tab') {
        const buttons = [...root.current.querySelectorAll('button')]
        const first = buttons[0], last = buttons.at(-1)
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => { document.removeEventListener('keydown', handleKey); previous?.focus() }
  }, [menuOpen])
  const mainItems = navItems.filter((item) => !item.id.startsWith('experiencia-'))
  const careerItems = navItems.filter((item) => item.id.startsWith('experiencia-'))
  const renderLink = (item) => <button type="button" key={item.id} className="overlay-link" onClick={() => { onNavigate(item.id); onClose() }}>{item.label}<span aria-hidden="true">↗</span></button>
  return <div ref={root} className={`menu-overlay ${menuOpen ? 'is-open' : ''}`} id="site-menu" role="dialog" aria-modal="true" aria-label={lang === 'es' ? 'Navegación' : 'Navigation'} inert={!menuOpen}>
    <div className="menu-content"><div className="menu-top"><span>Whanderley / {lang === 'es' ? 'Navegación' : 'Navigation'}</span><button type="button" onClick={onClose} className="menu-close">{lang === 'es' ? 'Cerrar' : 'Close'} ×</button></div>
      <nav className="overlay-nav" aria-label={lang === 'es' ? 'Secciones principales' : 'Main sections'}><div><p>{lang === 'es' ? 'Perfil' : 'Profile'}</p>{mainItems.map(renderLink)}</div><div><p>{lang === 'es' ? 'Experiencia profesional' : 'Professional experience'}</p>{careerItems.map(renderLink)}</div></nav>
    </div>
  </div>
}
