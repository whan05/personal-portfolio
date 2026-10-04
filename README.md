# React + Vite

## Portfolio content

The initial language is English; ES/EN switches the page content.
Experience routes use `#/experiencias/<slug>`.

Optional project galleries and achievements are configured in
`src/data/experienceDetails.js`, under each experience slug. Empty arrays hide
their sections. Add image files to `public/projects/` and reference them like this:

```js
projects: [
  {
    src: '/projects/project-name.webp',
    alt: { en: 'Description of the project screen', es: 'Descripción de la pantalla del proyecto' },
    caption: { en: 'Project name and contribution', es: 'Nombre del proyecto y aporte' },
  },
],
achievements: [
  { en: 'A verified achievement', es: 'Un logro comprobado' },
],
```

Bee Loyal Card and Globant have achievements populated. Bee includes public
project images with source links; downloaded image sources are recorded in
`public/projects/sources.json`. Images can be added to any role. Contact and
experience pages share `SiteFooter`.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
