import '../shared/SectionBase.css'
import getLocalizedText from '../../../../utils/getLocalizedText'
import './ServicesSection.css'

function ServicesSection({ lang, servicesContent, sectionId, sectionKey }) {
  return (
    <section
      id={sectionId}
      data-section-key={sectionKey}
      className="panel services-panel"
    >
      <div className="services-heading">
        <h2 className="services-title">
          <span>{getLocalizedText(servicesContent.title.lead, lang)}</span>
          <strong>{getLocalizedText(servicesContent.title.emphasis, lang)}</strong>
        </h2>
        <p className="services-intro">{getLocalizedText(servicesContent.intro, lang)}</p>
      </div>

      <div className="services-list">
        {servicesContent.items.map((service) => (
          <article
            key={service.title}
            className="service-card"
            style={{ background: service.background }}
          >
            <div className={`service-accent service-accent-${service.accentShape}`} aria-hidden="true">
              {service.accentShape === 'triangle' ? (
                <span className="service-accent-triangle-shadow"></span>
              ) : null}
              {service.accentShape === 'circle' ? (
                <span className="service-accent-circle-stripes"></span>
              ) : null}
              {service.accentShape === 'square' ? (
                <span className="service-accent-square-shadow"></span>
              ) : null}
            </div>

            <div className="service-card-body">
              <h3>{getLocalizedText(service.title, lang)}</h3>
              <ul>
                {service.points.map((point) => (
                  <li key={point.en}>{getLocalizedText(point, lang)}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
