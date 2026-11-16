import { portfolioData } from '../data/portfolioData';
import { useReveal } from '../hooks/useReveal';

export default function Skills() {
  const headingRef = useReveal();
  const gridRef = useReveal();
  const noteRef = useReveal();

  return (
    <section className="section-wrap section-block" id="skills">
      <div className="section-heading reveal" ref={headingRef}>
        <span className="section-index">{portfolioData.skills.index}</span>
        <h2>
          {portfolioData.skills.heading[0]}
          <br />
          <span className="muted-heading">{portfolioData.skills.heading[1]}</span>
        </h2>
      </div>
      <div className="skills-grid reveal" ref={gridRef}>
        {portfolioData.skills.cards.map((card, idx) => (
          <article className="skill-card" key={idx}>
            <div className="skill-top">
              <span className="skill-symbol">{card.symbol}</span>
              <span className="skill-count">{card.count}</span>
            </div>
            <h3>{card.title}</h3>
            <div className="tags">
              {card.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <p className="section-note reveal" ref={noteRef}>
        {portfolioData.skills.note}
      </p>
    </section>
  );
}
