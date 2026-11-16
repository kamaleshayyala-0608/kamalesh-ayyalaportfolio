import { portfolioData } from '../data/portfolioData';
import { useReveal } from '../hooks/useReveal';

export default function Education() {
  const headingRef = useReveal();
  const listRef = useReveal();
  const certRef = useReveal();

  return (
    <section className="section-wrap section-block" id="education">
      <div className="section-heading reveal" ref={headingRef}>
        <span className="section-index">{portfolioData.education.index}</span>
        <h2>
          {portfolioData.education.heading[0]}
          <br />
          <span className="muted-heading">{portfolioData.education.heading[1]}</span>
        </h2>
      </div>
      <div className="education-list reveal" ref={listRef}>
        {portfolioData.education.items.map((edu, idx) => (
          <div className="education-item" key={idx}>
            <div className="education-year">{edu.year}</div>
            <div className="education-main">
              <h3>{edu.title}</h3>
              <p>{edu.subtitle}</p>
              <span>{edu.place}</span>
            </div>
            <div className="education-score">
              {edu.score}
              <small>%</small>
            </div>
          </div>
        ))}
      </div>
      <div className="cert-block reveal" ref={certRef}>
        <h3>{portfolioData.education.certifications.title}</h3>
        <div className="cert-list">
          {portfolioData.education.certifications.list.map((cert, idx) => (
            <span key={idx}>{cert}</span>
          ))}
        </div>
        <p className="section-note">{portfolioData.education.certifications.note}</p>
      </div>
    </section>
  );
}
