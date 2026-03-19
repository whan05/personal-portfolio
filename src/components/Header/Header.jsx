import './Header.css'

function Header({ lang, setLang, menuOpen, onNavigate, onToggleMenu }) {
  return (
    <header className="site-header">
      <button type="button" className="brand brand-button" onClick={() => onNavigate('inicio')}>
        <span className="brand-mark" aria-hidden="true">
          WF
        </span>
        <span className="brand-copy">
          <strong>Whanderley</strong>
          <span>Fonseca Picado</span>
        </span>
      </button>

      <div className="header-actions">
        <div className="language-switcher" aria-label="Language selector">
          <button
            type="button"
            className={`language-button ${lang === 'es' ? 'is-active' : ''}`}
            onClick={() => setLang('es')}
          >
            ES
          </button>
          <button
            type="button"
            className={`language-button ${lang === 'en' ? 'is-active' : ''}`}
            onClick={() => setLang('en')}
          >
            EN
          </button>
        </div>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          aria-label={menuOpen ? 'Cerrar menu' : 'Abrir menu'}
          onClick={onToggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
