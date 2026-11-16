import { portfolioData } from '../data/portfolioData';
import { useReveal } from '../hooks/useReveal';

export default function Hero() {
  const copyRef = useReveal();
  const visualRef = useReveal();

  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy reveal" ref={copyRef}>
        <div className="eyebrow">
          <span className="status-dot"></span> {portfolioData.hero.status}{' '}
          <span className="eyebrow-line"></span> {portfolioData.hero.location}
        </div>
        <h1>
          {portfolioData.hero.headingLine1}
          <br />
          {portfolioData.hero.headingLine2Prefix}
          <span className="gradient-text">{portfolioData.hero.headingLine2Gradient}</span>
        </h1>
        <p className="hero-lede">{portfolioData.hero.lede}</p>
        <div className="hero-actions">
          {portfolioData.hero.buttons.map((btn, idx) => (
            <a key={idx} className={btn.className} href={btn.href}>
              {btn.label} <span>{idx === 0 ? '↘' : '↗'}</span>
            </a>
          ))}
        </div>
        <div className="hero-links">
          {portfolioData.hero.links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
            >
              {link.label} <span>↗</span>
            </a>
          ))}
        </div>
      </div>
      <div className="hero-visual reveal" ref={visualRef}>
        <div className="orbit orbit-a"></div>
        <div className="orbit orbit-b"></div>
        <div className="portrait-frame">
          <img src={portfolioData.hero.portrait} alt="Professional portrait of Kamalesh Ayyala" />
        </div>
        <div className="floating-chip chip-ai">
          <span className="chip-icon">✳</span>
          <span>
            <b>AI / ML</b>
            <small>Intelligent systems</small>
          </span>
        </div>
        <div className="floating-chip chip-stack">
          <span className="chip-icon">{'{ }'}</span>
          <span>
            <b>Full Stack</b>
            <small>Web applications</small>
          </span>
        </div>
        <div className="visual-caption">
          <span className="caption-line"></span>
          <span>{portfolioData.hero.caption}</span>
        </div>
      </div>
      <div className="hero-bottom">
        <span>{portfolioData.hero.bottomLeft}</span>
        <span className="scroll-mark">↓</span>
        <span className="hero-bottom-line"></span>
        <span>{portfolioData.hero.bottomRight}</span>
      </div>
    </section>
  );
}
