import getLocalizedText from '../../utils/getLocalizedText'

export default function ProjectGallery({ projects, lang }) {
  return <div className="project-gallery">{projects.map((project) => (
    <figure key={project.src} className="project-entry">
      <div className={`project-images ${(project.images?.length ?? 1) > 1 ? 'project-images-pair' : ''}`}>
        {(project.images ?? [project.src]).map((src, index) => <a key={src} href={src} target="_blank" rel="noreferrer" aria-label={`${lang === 'es' ? 'Ampliar imagen' : 'Open full image'}: ${project.title ?? getLocalizedText(project.alt, lang)} ${index + 1}`}><img src={src} alt={`${getLocalizedText(project.alt, lang)}${project.images ? ` (${index + 1})` : ''}`} loading="lazy" /></a>)}
      </div>
      <figcaption>{project.title && <h3>{project.title}</h3>}{project.caption && <p>{getLocalizedText(project.caption, lang)}</p>}{project.source && <a className="project-source" href={project.source} target="_blank" rel="noreferrer">{lang === 'es' ? 'Ver aplicación' : 'View application'} · {project.sourceLabel} ↗</a>}</figcaption>
    </figure>
  ))}</div>
}
