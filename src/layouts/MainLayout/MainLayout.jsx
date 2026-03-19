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
import useInfiniteLoopScroll from '../../hooks/useInfiniteLoopScroll'
import getLocalizedText from '../../utils/getLocalizedText'
import './MainLayout.css'

function MainLayout({ children, navItems }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lang, setLang] = useState('es')
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

  useInfiniteLoopScroll(mainRef)

  const navigateToSection = (sectionId) => {
    const scrollRoot = mainRef.current

    if (!scrollRoot) {
      return
    }

    const target = scrollRoot.querySelector(`[data-section-key="${sectionId}"]`)

    if (!target) {
      return
    }

    window.history.replaceState(null, '', `#${sectionId}`)
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
    setMenuOpen(false)
  }

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')

    if (hash) {
      requestAnimationFrame(() => {
        navigateToSection(hash)
      })
    }
  }, [])

  return (
    <div className="page-shell">
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
      <SideDots
        navItems={localizedNavItems}
        activeSection={activeSection}
        onNavigate={navigateToSection}
      />
      <main ref={mainRef} className="page-main">
        {isValidElement(children)
          ? cloneElement(children, { lang, onNavigate: navigateToSection })
          : children}
      </main>
    </div>
  )
}

export default MainLayout
