import { experiences } from './experiences'

export const navItems = [
 { id: 'inicio', label: { es: 'Inicio', en: 'Home' } },
 { id: 'about', label: { es: 'Sobre mí', en: 'About me' } },
 ...experiences.map((item) => ({ id: `experiencia-${item.slug}`, label: { es: item.company, en: item.company } })),
 { id: 'skills', label: { es: 'Habilidades', en: 'Skills' } },
 { id: 'contact', label: { es: 'Contacto', en: 'Contact' } },
]
