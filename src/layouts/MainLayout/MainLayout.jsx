import {
  cloneElement,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import Header from '../../components/Header/Header'
import MenuOverlay from '../../components/MenuOverlay/MenuOverlay'
import SideDots from '../../components/SideDots/SideDots'
import useActiveSection from '../../hooks/useActiveSection'
import getLocalizedText from '../../utils/getLocalizedText'
import './MainLayout.css'

function MainLayout({ children, navItems, isDetail, routeKey }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lang, setLang] = useState('en')
  const mainRef = useRef(null)
  const localizedNavItems = useMemo(
    () =>
      navItems.map((item) => ({
        ...item,
        label: getLocalizedText(item.label, lang),
      })),
    [lang, navItems],
  )
  const activeSection = useActiveSection(mainRef, localizedNavItems)

  const navigateToSection = (sectionId) => {
    setMenuOpen(false)
    if (isDetail) {
      window.location.hash = sectionId
      return
    }
    window.location.hash = sectionId
    window.dispatchEvent(new HashChangeEvent('hashchange'))
  }

  useEffect(() => {
    const restorePosition = () => {
      if (isDetail) {
        mainRef.current?.scrollTo({ top: 0, behavior: 'instant' })
        window.scrollTo({ top: 0, behavior: 'instant' })
      } else {
        const sectionId = window.location.hash.slice(1)
        mainRef.current?.querySelector(`[id="${CSS.escape(sectionId)}"]`)?.scrollIntoView({ block: 'start', behavior: 'instant' })
      }
    }
    const frame = requestAnimationFrame(restorePosition)
    window.addEventListener('hashchange', restorePosition)
    return () => { cancelAnimationFrame(frame); window.removeEventListener('hashchange', restorePosition) }
  }, [isDetail, routeKey])

  useEffect(() => { document.documentElement.lang = lang }, [lang])

  return (
    <div className={`page-shell ${isDetail ? 'page-shell-detail' : ''}`}>
      <Header
        lang={lang}
        setLang={setLang}
        menuOpen={menuOpen}
        onNavigate={navigateToSection}
        onToggleMenu={() => setMenuOpen((value) => !value)}
      />
      <MenuOverlay
        menuOpen={menuOpen}
        lang={lang}
        navItems={localizedNavItems}
        onNavigate={navigateToSection}
        onClose={() => setMenuOpen(false)}
      />
      {!isDetail && <SideDots
        navItems={localizedNavItems}
        activeSection={activeSection}
        onNavigate={navigateToSection}
      />}
      <main ref={mainRef} className={`page-main ${isDetail ? 'page-main-detail' : ''}`}>
        {isValidElement(children)
          ? cloneElement(children, { lang, onNavigate: navigateToSection })
          : children}
      </main>
    </div>
  )
}

export default MainLayout
