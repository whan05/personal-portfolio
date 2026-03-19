import '../shared/SectionBase.css'
import { aboutContent } from '../../../../data/about'
import getLocalizedText from '../../../../utils/getLocalizedText'
import './AboutSection.css'

function AboutSection({ lang, sectionId, sectionKey }) {
  return (
    <section
      id={sectionId}
      data-section-key={sectionKey}
      className="panel about-panel"
    >
      <div className="about-copy">
        <h2 className="about-title">
          <span>{getLocalizedText(aboutContent.title.lead, lang)}</span>
          <strong>{getLocalizedText(aboutContent.title.emphasis, lang)}</strong>
        </h2>

        <div className="about-text">
          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph.en}>{getLocalizedText(paragraph, lang)}</p>
          ))}
        </div>
      </div>

      <div className="about-stats">
        <div className="tool-row" aria-label="Herramientas principales">
          {aboutContent.tools.map((tool) => (
            <div key={tool} className="tool-chip">
              <span>{tool}</span>
            </div>
          ))}
        </div>

        <div className="project-counter">
          <strong>{aboutContent.projectCount}</strong>
          <span>{getLocalizedText(aboutContent.projectLabel, lang)}</span>
          <div className="counter-mark" aria-hidden="true"></div>
        </div>

        <div className="skill-list">
          {aboutContent.skills.map((skill) => (
            <div key={skill.name} className="skill-item">
              <div className="skill-head">
                <span>{skill.name}</span>
                <span>{skill.value}%</span>
              </div>
              <div className="skill-track">
                <div
                  className="skill-fill"
                  style={{ width: `${skill.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
