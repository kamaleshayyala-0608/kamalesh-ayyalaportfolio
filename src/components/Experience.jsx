import { portfolioData } from '../data/portfolioData';
import { useReveal } from '../hooks/useReveal';

export default function Experience() {
  const headingRef = useReveal();
  const timelineRef = useReveal();

  const item = portfolioData.experience.item;

  return (
    <section className="section-wrap section-block" id="experience">
      <div className="section-heading reveal" ref={headingRef}>
        <span className="section-index">{portfolioData.experience.index}</span>
        <h2>
          {portfolioData.experience.heading[0]}
          <br />
          <span className="muted-heading">{portfolioData.experience.heading[1]}</span>
        </h2>
      </div>
      <div className="timeline reveal" ref={timelineRef}>
        <div className="timeline-date">{item.date}</div>
        <div className="timeline-marker"></div>
        <div className="timeline-content">
          <div className="timeline-top">
            <div>
              <h3>{item.title}</h3>
              <p className="company">{item.company}</p>
            </div>
            <span className="timeline-type">{item.type}</span>
          </div>
          <p>{item.description}</p>
          <ul>
            {item.bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
          <div className="project-tags">
            {item.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
