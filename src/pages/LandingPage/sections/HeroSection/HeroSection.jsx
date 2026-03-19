import '../shared/SectionBase.css'
import '../shared/ActionLinks.css'
import getLocalizedText from '../../../../utils/getLocalizedText'
import './HeroSection.css'

function HeroSection({ lang, onNavigate, heroContent, sectionId, sectionKey }) {
  return (
    <section
      id={sectionId}
      data-section-key={sectionKey}
      className="panel hero-panel"
    >
      <div className="hero-copy">
        <h1>{getLocalizedText(heroContent.title, lang)}</h1>
        <p className="lead">{getLocalizedText(heroContent.description, lang)}</p>
        <div className="hero-actions">
          <button
            type="button"
            className="primary-link"
            onClick={() => onNavigate(heroContent.primaryAction.href.replace('#', ''))}
          >
            {getLocalizedText(heroContent.primaryAction.label, lang)}
          </button>
          <button
            type="button"
            className="secondary-link"
            onClick={() => onNavigate(heroContent.secondaryAction.href.replace('#', ''))}
          >
            {getLocalizedText(heroContent.secondaryAction.label, lang)}
          </button>
        </div>
      </div>

      <div className="hero-art" aria-hidden="true">
        <div className="art-ring"></div>
        <div className="art-grid"></div>
      </div>
    </section>
  )
}

export default HeroSection
