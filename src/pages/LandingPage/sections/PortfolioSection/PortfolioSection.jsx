import '../shared/SectionBase.css'
import getLocalizedText from '../../../../utils/getLocalizedText'
import './PortfolioSection.css'

function PortfolioSection({
  lang,
  sectionId,
  sectionKey,
  index,
  title,
  subtitle,
  description,
  meta,
  variant,
  accentShape,
  background,
  media,
  blocks,
}) {
  if (variant === 'showcase') {
    return (
      <section
        id={sectionId}
        data-section-key={sectionKey}
        className="panel portfolio-panel portfolio-panel-showcase"
        style={{ background }}
      >
        <div className="portfolio-showcase-copy">
          <h2>{getLocalizedText(title, lang)}</h2>
          {subtitle ? (
            <p className="portfolio-subtitle">{getLocalizedText(subtitle, lang)}</p>
          ) : null}
          <p className="portfolio-description">{getLocalizedText(description, lang)}</p>
        </div>

        <div className="portfolio-showcase-media">
          {accentShape === 'circle' ? (
            <div className="portfolio-accent-circle" aria-hidden="true">
              <div className="portfolio-accent-stripes"></div>
            </div>
          ) : null}

          <figure className="portfolio-desktop-shot">
            <img
              src={media?.desktopImage}
              alt={getLocalizedText(media?.desktopAlt, lang) || getLocalizedText(title, lang)}
            />
          </figure>

          <figure className="portfolio-mobile-shot">
            <img
              src={media?.mobileImage}
              alt={getLocalizedText(media?.mobileAlt, lang) || getLocalizedText(title, lang)}
            />
          </figure>
        </div>
      </section>
    )
  }

  if (variant === 'gallery') {
    return (
      <section
        id={sectionId}
        data-section-key={sectionKey}
        className="panel portfolio-panel portfolio-panel-gallery"
        style={{ background }}
      >
        <div className="portfolio-gallery-media">
          {accentShape === 'diamond' ? (
            <div className="portfolio-accent-diamond" aria-hidden="true">
              <div className="portfolio-accent-diamond-shadow"></div>
            </div>
          ) : null}

          <figure className="portfolio-gallery-desktop">
            <img
              src={media?.desktopImage}
              alt={getLocalizedText(media?.desktopAlt, lang) || getLocalizedText(title, lang)}
            />
          </figure>

          <figure className="portfolio-gallery-mobile">
            <img
              src={media?.mobileImage}
              alt={getLocalizedText(media?.mobileAlt, lang) || getLocalizedText(title, lang)}
            />
          </figure>
        </div>

        <div className="portfolio-gallery-copy">
          <h2>{getLocalizedText(title, lang)}</h2>
          {subtitle ? (
            <p className="portfolio-subtitle">{getLocalizedText(subtitle, lang)}</p>
          ) : null}
          <p className="portfolio-description">{getLocalizedText(description, lang)}</p>
        </div>
      </section>
    )
  }

  if (variant === 'stacked') {
    return (
      <section
        id={sectionId}
        data-section-key={sectionKey}
        className="panel portfolio-panel portfolio-panel-stacked"
        style={{ background }}
      >
        <div className="portfolio-stacked-list">
          {blocks?.map((block, blockIndex) => (
            <article
              key={block.title}
              className={`portfolio-stack-card ${
                blockIndex % 2 === 1 ? 'is-reversed' : ''
              }`}
              style={{ background: block.background }}
            >
              <div className="portfolio-stack-copy">
                <h2>{getLocalizedText(block.title, lang)}</h2>
                <p className="portfolio-subtitle">{getLocalizedText(block.subtitle, lang)}</p>
              </div>

              <div className="portfolio-stack-media">
                {block.accentShape === 'triangle' ? (
                  <div className="portfolio-accent-triangle" aria-hidden="true">
                    <div className="portfolio-accent-triangle-shadow"></div>
                  </div>
                ) : null}

                {block.accentShape === 'circle' ? (
                  <div className="portfolio-stack-circle" aria-hidden="true">
                    <div className="portfolio-stack-circle-stripes"></div>
                  </div>
                ) : null}

                {block.accentShape === 'ring' ? (
                  <div className="portfolio-stack-ring" aria-hidden="true">
                    <div className="portfolio-stack-ring-dashes"></div>
                  </div>
                ) : null}

                {block.accentShape === 'diamond' ? (
                  <div className="portfolio-accent-diamond stack-diamond" aria-hidden="true">
                    <div className="portfolio-accent-diamond-shadow"></div>
                  </div>
                ) : null}

                <figure className="portfolio-stack-desktop">
                  <img
                    src={block.desktopImage}
                    alt={getLocalizedText(block.desktopAlt, lang)}
                  />
                </figure>

                <figure className="portfolio-stack-mobile">
                  <img
                    src={block.mobileImage}
                    alt={getLocalizedText(block.mobileAlt, lang)}
                  />
                </figure>
              </div>
            </article>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section id={sectionId} data-section-key={sectionKey} className="panel portfolio-panel">
      <div className="portfolio-index">0{index}</div>
      <div className="portfolio-content">
        <h2>{getLocalizedText(title, lang)}</h2>
        {subtitle ? <p className="portfolio-subtitle">{getLocalizedText(subtitle, lang)}</p> : null}
        <p>{getLocalizedText(description, lang)}</p>
      </div>
      <div className="portfolio-meta">{getLocalizedText(meta, lang)}</div>
    </section>
  )
}

export default PortfolioSection
