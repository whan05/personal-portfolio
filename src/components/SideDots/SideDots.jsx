import './SideDots.css'

function SideDots({ navItems, activeSection, onNavigate }) {
  return (
    <nav className="side-dots" aria-label="Navegacion de secciones">
      {navItems.map((item) => {
        const isActive = activeSection === item.id

        return (
          <button
            type="button"
            key={item.id}
            className={`side-dot ${isActive ? 'is-active' : ''}`}
            aria-label={item.label}
            aria-current={isActive ? 'location' : undefined}
            onClick={() => onNavigate(item.id)}
          >
            <span className="side-dot-core"></span>
          </button>
        )
      })}
    </nav>
  )
}

export default SideDots
