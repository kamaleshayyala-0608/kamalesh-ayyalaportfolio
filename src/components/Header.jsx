import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      const newState = !prev;
      return newState;
    });
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Kamalesh home" onClick={closeMenu}>
        <span className="brand-mark">K<span>.</span></span>
        <span>{portfolioData.brand}</span>
      </a>
      <button
        className="menu-toggle"
        id="menuToggle"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav id="mainNav" aria-label="Main navigation" className={menuOpen ? 'open' : ''}>
        {portfolioData.nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={item.className || ''}
            onClick={closeMenu}
          >
            {item.label}
            {item.className === 'nav-contact' ? <span>↗</span> : null}
          </a>
        ))}
      </nav>
    </header>
  );
}
