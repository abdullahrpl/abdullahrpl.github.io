import React, { useState, useEffect } from 'react';
import { translations } from '../data/translations';

const Header = ({ onNavigate, currentPage, lang, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for active sections
  useEffect(() => {
    if (currentPage !== 'home') return;

    const sections = ['hero', 'about', 'projects', 'certificates', 'skills', 'contact'];
    const options = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [currentPage]);

  const handleNavLinkClick = (e, id) => {
    e.preventDefault();
    
    if (currentPage === 'projects') {
      // 1. Transition back to home
      onNavigate('home');

      // 2. Wait for diagonal curtain transition to complete and scroll to target
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const headerOffset = 100;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 700);
    } else {
      // Direct scroll if already on home
      const el = document.getElementById(id);
      if (el) {
        const headerOffset = 100;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (currentPage === 'projects') {
      onNavigate('home');
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container-xl is--menu">
        <a 
          href="#hero" 
          className="nav__logo-link" 
          onClick={handleLogoClick}
        >
          <div className="nav__logo-text">ABDULLAH<span>.</span></div>
        </a>

        <div className="nav__menu">
          <a 
            href="#about" 
            className={`nav__item ${currentPage === 'home' && activeSection === 'about' ? 'active' : ''}`}
            onClick={(e) => handleNavLinkClick(e, 'about')}
          >
            {translations[lang].nav.about}
          </a>
          <a 
            href="#projects" 
            className={`nav__item ${currentPage === 'projects' || (currentPage === 'home' && activeSection === 'projects') ? 'active' : ''}`}
            onClick={(e) => handleNavLinkClick(e, 'projects')}
          >
            {translations[lang].nav.projects}
          </a>
          <a 
            href="#certificates" 
            className={`nav__item ${currentPage === 'home' && activeSection === 'certificates' ? 'active' : ''}`}
            onClick={(e) => handleNavLinkClick(e, 'certificates')}
          >
            {translations[lang].nav.certifications}
          </a>
          <a 
            href="#skills" 
            className={`nav__item ${currentPage === 'home' && activeSection === 'skills' ? 'active' : ''}`}
            onClick={(e) => handleNavLinkClick(e, 'skills')}
          >
            {translations[lang].nav.skills}
          </a>
          <a 
            href="#contact" 
            className={`nav__item ${currentPage === 'home' && activeSection === 'contact' ? 'active' : ''}`}
            onClick={(e) => handleNavLinkClick(e, 'contact')}
          >
            {translations[lang].nav.contact}
          </a>

          {/* Aesthetic Language Selector */}
          <div className="wg-element-wrapper">
            <button 
              className={`wg-selector ${lang === 'EN' ? 'active' : ''}`}
              onClick={() => setLang('EN')}
            >
              EN
            </button>
            <button 
              className={`wg-selector ${lang === 'ID' ? 'active' : ''}`}
              onClick={() => setLang('ID')}
            >
              ID
            </button>
          </div>
        </div>

        <a href="mailto:abdaja.9@gmail.com" className="cta menu w-button">
          abdaja.9@gmail.com
        </a>
      </div>
    </nav>
  );
};

export default Header;
