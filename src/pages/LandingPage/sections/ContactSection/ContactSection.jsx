import '../shared/SectionBase.css'
import getLocalizedText from '../../../../utils/getLocalizedText'
import './ContactSection.css'

function ContactSection({ lang, contactContent, sectionId, sectionKey }) {
  const marqueeLoop = [...contactContent.marqueeItems, ...contactContent.marqueeItems]

  return (
    <section
      id={sectionId}
      data-section-key={sectionKey}
      className="panel contact-panel"
    >
      <div className="contact-main">
        <div className="contact-copy">
          <h2 className="contact-title">
            <span>{getLocalizedText(contactContent.title.lead, lang)}</span>
            <strong>{getLocalizedText(contactContent.title.emphasis, lang)}</strong>
          </h2>

          <div className="contact-socials">
            {contactContent.socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="contact-social"
                aria-label={item.label}
              >
                <span>{item.shortLabel}</span>
              </a>
            ))}
          </div>

          <a href={`mailto:${contactContent.email}`} className="contact-email">
            {contactContent.email}
          </a>
        </div>

        <div className="contact-message-wrap">
          <p className="contact-message">{getLocalizedText(contactContent.message, lang)}</p>
        </div>

        <div className="contact-plus" aria-hidden="true">
          {Array.from({ length: 9 }).map((_, index) => (
            <span key={index}>+</span>
          ))}
        </div>

        <div className="contact-ring" aria-hidden="true">
          <div className="contact-ring-dashes"></div>
        </div>
      </div>

      <div className="contact-marquee" aria-hidden="true">
        <div className="contact-marquee-track">
          {marqueeLoop.map((item, index) => (
            <span key={`${item}-${index}`} className="contact-marquee-item">
              {getLocalizedText(item, lang)}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactSection
