import HeroSection from './sections/HeroSection/HeroSection'
import AboutSection from './sections/AboutSection/AboutSection'
import PortfolioSection from './sections/PortfolioSection/PortfolioSection'
import ServicesSection from './sections/ServicesSection/ServicesSection'
import TestimonialsSection from './sections/TestimonialsSection/TestimonialsSection'
import ContactSection from './sections/ContactSection/ContactSection'
import { navItems } from '../../data/navigation'
import { portfolioItems } from '../../data/portfolio'
import { servicesContent } from '../../data/services'
import { testimonialsContent } from '../../data/testimonials'
import { contactContent } from '../../data/contact'
import { heroContent } from '../../data/hero'
import getLocalizedText from '../../utils/getLocalizedText'

function LandingPage({ lang, onNavigate }) {
  return (
    <div className="page-sequence">
      <HeroSection
        lang={lang}
        onNavigate={onNavigate}
        heroContent={heroContent}
        sectionId="inicio"
        sectionKey="inicio"
      />
      <AboutSection lang={lang} sectionId="about" sectionKey="about" />
      {portfolioItems.map((item, index) => (
        <PortfolioSection
          key={item.title.en}
          lang={lang}
          sectionId={`portfolio-${index + 1}`}
          sectionKey={`portfolio-${index + 1}`}
          kicker={getLocalizedText(navItems[index + 2].label, lang)}
          index={index + 1}
          {...item}
        />
      ))}
      <ServicesSection
        lang={lang}
        servicesContent={servicesContent}
        sectionId="services"
        sectionKey="services"
      />
      <TestimonialsSection
        lang={lang}
        testimonialsContent={testimonialsContent}
        sectionId="testimonials"
        sectionKey="testimonials"
      />
      <ContactSection
        lang={lang}
        contactContent={contactContent}
        sectionId="contact"
        sectionKey="contact"
      />
    </div>
  )
}

export default LandingPage
