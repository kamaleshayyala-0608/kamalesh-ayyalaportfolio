import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="site-footer">
      <a className="brand" href="#home">
        <span className="brand-mark">
          K<span>.</span>
        </span>
        <span>{portfolioData.footer.brand}</span>
      </a>
      <span>{portfolioData.footer.tagline}</span>
      <a href="#home">{portfolioData.footer.backToTop}</a>
    </footer>
  );
}
