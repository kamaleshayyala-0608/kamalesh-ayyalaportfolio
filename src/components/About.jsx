import { portfolioData } from '../data/portfolioData';
import { useReveal } from '../hooks/useReveal';

export default function About() {
  const headingRef = useReveal();
  const mainRef = useReveal();
  const asideRef = useReveal();

  return (
    <section className="section-wrap section-block" id="about">
      <div className="section-heading reveal" ref={headingRef}>
        <span className="section-index">{portfolioData.about.index}</span>
        <h2>
          {portfolioData.about.heading[0]}
          <br />
          <span className="muted-heading">{portfolioData.about.heading[1]}</span>
        </h2>
      </div>
      <div className="about-grid">
        <div className="about-main reveal" ref={mainRef}>
          {portfolioData.about.main.map((p, idx) => (
            <p key={idx} className={idx === 0 ? 'large-copy' : ''}>
              {p}
            </p>
          ))}
          <a className="text-link" href={portfolioData.about.link.href}>
            {portfolioData.about.link.label} <span>↗</span>
          </a>
        </div>
        <div className="about-aside reveal" ref={asideRef}>
          {portfolioData.about.facts.map((fact, idx) => (
            <div className="fact-card" key={idx}>
              <span className="fact-number">{fact.number}</span>
              <span className="fact-label">{fact.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
