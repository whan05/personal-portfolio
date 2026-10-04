// Optional content. Add project images and achievements to any experience.
// projects: [{ src: '/projects/image.webp', alt: { es: '...', en: '...' }, caption: { es: '...', en: '...' } }]
// achievements: [{ es: '...', en: '...' }]
// Image paths point to files in public/projects/. Empty sections stay hidden.
export const experienceDetails = {
  'bee-loyal-card': {
    projects: [
      {
        title: 'Bee Loyal Card', src: '/projects/bee-1.jpg', images: ['/projects/bee-1.jpg', '/projects/bee-2.jpg'],
        alt: { es: 'Captura pública de Bee Loyal Card publicada en Google Play', en: 'Public Bee Loyal Card screenshot from Google Play' },
        caption: { es: 'Frontend, QA y desarrollo backend con NestJS.', en: 'Frontend, QA and backend development with NestJS.' },
        source: 'https://play.google.com/store/apps/details?id=com.puntosbee.customersapp',
        sourceLabel: 'Google Play',
      },
      {
        title: 'Enjoy Rewards', src: '/projects/enjoy-1.jpg', images: ['/projects/enjoy-1.jpg', '/projects/enjoy-2.jpg'],
        alt: { es: 'Captura pública de Enjoy Rewards publicada en Google Play', en: 'Public Enjoy Rewards screenshot from Google Play' },
        caption: { es: 'Frontend, QA y desarrollo backend con NestJS.', en: 'Frontend, QA and backend development with NestJS.' },
        source: 'https://play.google.com/store/apps/details?id=com.nwideas.enjoygrouployalty',
        sourceLabel: 'Google Play',
      },
      {
        title: 'Maia Go', src: '/projects/maia-go.png',
        alt: { es: 'Imagen oficial de Maia Go con la pantalla de inicio de sesión de la aplicación', en: 'Official Maia Go image showing the application login screen' },
        caption: { es: 'Desarrollo frontend y QA.', en: 'Frontend development and QA.' },
        source: 'https://maiago.app/es/', sourceLabel: 'Maia Go',
      },
      {
        title: 'Mayca One', src: '/projects/mayca-2.png', images: ['/projects/mayca-2.png', '/projects/mayca-1.png'],
        alt: { es: 'Imagen pública de Mayca One publicada en Google Play', en: 'Public Mayca One image from Google Play' },
        caption: { es: 'Desarrollo frontend y QA, servicio al cliente por WhatsApp y llamadas telefónicas. Ayudante voluntario en Mayca Food Show durante dos años consecutivos.', en: 'Frontend development and QA, customer service via WhatsApp and phone calls. Volunteer helper at Mayca Food Show for two consecutive years.' },
        source: 'https://play.google.com/store/apps/details?id=com.maycaone.app', sourceLabel: 'Google Play',
      },
      {
        title: 'CRMarine', src: '/projects/crmarine-1.png', images: ['/projects/crmarine-1.png', '/projects/crmarine-2.png'],
        alt: { es: 'Captura pública de CR Marine publicada en Google Play', en: 'Public CR Marine screenshot from Google Play' },
        caption: { es: 'Desarrollo frontend con React y QA.', en: 'Frontend development with React and QA.' },
        source: 'https://play.google.com/store/apps/details?id=com.crmarine.customersapp', sourceLabel: 'Google Play',
      },
      {
        title: 'Puntos del Sol', src: '/projects/puntos-del-sol-1.png', images: ['/projects/puntos-del-sol-1.png', '/projects/puntos-del-sol-2.png'],
        alt: { es: 'Captura pública de Puntos del Sol publicada en Google Play', en: 'Public Puntos del Sol screenshot from Google Play' },
        caption: { es: 'Desarrollo frontend con React y QA.', en: 'Frontend development with React and QA.' },
        source: 'https://play.google.com/store/apps/details?id=com.nwideas.grupodelsol', sourceLabel: 'Google Play',
      },
      {
        title: 'Virbac Club', src: '/projects/virbac-1.jpg', images: ['/projects/virbac-1.jpg', '/projects/virbac-2.jpg'],
        alt: { es: 'Captura pública de Virbac Club publicada en Google Play', en: 'Public Virbac Club screenshot from Google Play' },
        caption: { es: 'Desarrollo frontend con React y QA.', en: 'Frontend development with React and QA.' },
        source: 'https://play.google.com/store/apps/details?id=com.beeloyalcard.virbac', sourceLabel: 'Google Play',
      },
    ],
    achievements: [
      { es: 'Mejoras en la interfaz de usuario de las aplicaciones móviles.', en: 'Improved the user interface of mobile applications.' },
      { es: 'Mejora de la documentación de casos de uso para QA, aportando mejoras en las columnas de registro y en la evidencia de las pruebas.', en: 'Improved QA use case documentation, including better tracking columns and test evidence.' },
      { es: 'Inclusión de buenas prácticas de desarrollo en todos los proyectos en los que participé.', en: 'Introduced development best practices across all projects I contributed to.' },
      {
        es: 'Contribución al proceso que permitió a Bee obtener la certificación ISO/IEC 27001.',
        en: 'Contributed to the process that enabled Bee to obtain ISO/IEC 27001 certification.',
        source: 'https://beeloyalcard.com/2026/08/18/%f0%9f%94%90-bee-obtiene-la-certificacion-iso-iec-27001/',
        sourceLabel: { es: 'Anuncio de Bee sobre la certificación', en: 'Bee’s certification announcement' },
      },
      { es: 'Creación de una aplicación para registrar casos de uso y mejorar su trazabilidad.', en: 'Created an application to record use cases and improve their traceability.' },
      { es: 'Participación como ayudante voluntario en Mayca Food Show durante dos años consecutivos.', en: 'Participated as a volunteer helper at Mayca Food Show for two consecutive years.' },
    ],
  },
  freelance: { projects: [], achievements: [] },
  globant: {
    projects: [],
    achievements: [
      { es: '80% de cobertura de pruebas unitarias con Jest y Testing Library.', en: '80% unit test coverage with Jest and Testing Library.' },
      { es: 'Diseño y desarrollo de una plataforma interna de generación de CV.', en: 'Designed and developed an internal CV generation platform.' },
      { es: 'Presentación técnica en el Tecnológico de Costa Rica sobre una carrera en desarrollo web.', en: 'Delivered a technical presentation at Tecnológico de Costa Rica about a career in web development.' },
    ],
  },
  accenture: { projects: [], achievements: [] },
  'beta-tech': { projects: [], achievements: [] },
  logosoft: { projects: [], achievements: [] },
}
