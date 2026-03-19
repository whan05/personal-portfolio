import './MenuOverlay.css'

function MenuOverlay({ menuOpen, navItems, onClose, onNavigate, lang }) {
  return (
    <div className={`menu-overlay ${menuOpen ? 'is-open' : ''}`} id="site-menu">
      <nav
        className="overlay-nav"
        aria-label={lang === 'es' ? 'Secciones principales' : 'Main sections'}
      >
        {navItems.map((item) => (
          <button
            type="button"
            key={item.id}
            className="overlay-link"
            onClick={() => {
              onNavigate(item.id)
              onClose()
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  )
}

export default MenuOverlay
