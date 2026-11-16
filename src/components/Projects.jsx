import { portfolioData } from '../data/portfolioData';
import { useReveal } from '../hooks/useReveal';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const headingRef = useReveal();
  const noteRef = useReveal();

  return (
    <section className="section-wrap section-block" id="projects">
      <div className="section-heading project-heading reveal" ref={headingRef}>
        <div>
          <span className="section-index">{portfolioData.projects.index}</span>
          <h2>
            {portfolioData.projects.heading[0]}
            <br />
            <span className="muted-heading">{portfolioData.projects.heading[1]}</span>
          </h2>
        </div>
        <a
          className="text-link"
          href={portfolioData.projects.githubLink.href}
          target="_blank"
          rel="noreferrer"
        >
          {portfolioData.projects.githubLink.label} <span>↗</span>
        </a>
      </div>
      <div className="project-list">
        {portfolioData.projects.items.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
      <p className="section-note reveal" ref={noteRef}>
        {portfolioData.projects.note}
      </p>
    </section>
  );
}
