import { portfolioData } from '../data/portfolioData';
import { useReveal } from '../hooks/useReveal';

export default function Contact() {
  const innerRef = useReveal();

  return (
    <section className="contact-section" id="contact">
      <div className="section-wrap contact-inner reveal" ref={innerRef}>
        <span className="section-index">{portfolioData.contact.index}</span>
        <p className="contact-kicker">{portfolioData.contact.kicker}</p>
        <h2>
          {portfolioData.contact.headingLine1}
          <br />
          <span className="gradient-text">{portfolioData.contact.headingLine2Gradient}</span>
        </h2>
        <p className="contact-copy">{portfolioData.contact.copy}</p>
        <a className="button button-primary button-large" href={portfolioData.contact.button.href}>
          {portfolioData.contact.button.label} <span>↗</span>
        </a>
        <div className="contact-details">
          {portfolioData.contact.details.map((detail, idx) => (
            <a
              key={idx}
              href={detail.href}
              target={detail.external ? '_blank' : undefined}
              rel={detail.external ? 'noreferrer' : undefined}
            >
              {detail.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
