import { useState } from 'react'
import '../shared/SectionBase.css'
import getLocalizedText from '../../../../utils/getLocalizedText'
import './TestimonialsSection.css'

function TestimonialsSection({ lang, testimonialsContent, sectionId, sectionKey }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeTestimonial = testimonialsContent.testimonials[activeIndex]

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonialsContent.testimonials.length - 1 : current - 1,
    )
  }

  const showNext = () => {
    setActiveIndex((current) =>
      current === testimonialsContent.testimonials.length - 1 ? 0 : current + 1,
    )
  }

  return (
    <section
      id={sectionId}
      data-section-key={sectionKey}
      className="panel testimonials-panel"
    >
      <div className="testimonials-copy">
        <h2 className="testimonials-title">
          <span>{getLocalizedText(testimonialsContent.title.lead, lang)}</span>
          <strong>{getLocalizedText(testimonialsContent.title.emphasis, lang)}</strong>
        </h2>

        <div className="testimonial-featured">
          <div className="testimonial-meta">
            <strong>{activeTestimonial.author}</strong>
            <span>{getLocalizedText(activeTestimonial.role, lang)}</span>
          </div>

          <div className="testimonial-quote-row">
            <button
              type="button"
              className="testimonial-nav"
              aria-label={lang === 'es' ? 'Testimonio anterior' : 'Previous testimonial'}
              onClick={showPrevious}
            >
              &lt;
            </button>
            <p>{getLocalizedText(activeTestimonial.quote, lang)}</p>
            <button
              type="button"
              className="testimonial-nav"
              aria-label={lang === 'es' ? 'Testimonio siguiente' : 'Next testimonial'}
              onClick={showNext}
            >
              &gt;
            </button>
          </div>
        </div>

        <div className="testimonial-wave" aria-hidden="true"></div>
      </div>

      <div className="brands-grid">
        {testimonialsContent.brands.map((brand) => (
          <article key={brand.name} className="brand-tile">
            {brand.image ? (
              <img src={brand.image} alt={brand.name} className="brand-image" />
            ) : null}
            <span>{brand.name}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection
