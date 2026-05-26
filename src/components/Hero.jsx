import React from 'react';

const Hero = () => {

  const handleScrollTo = (e, id) => {
    e.preventDefault();
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
  };

  return (
    <section className="section is--intro" id="hero">
      <div className="container-xl">
        <div className="intro__content-wrapper">
          <div className="intro__text is--first">
            👋, my name is Abdullah and I am a Software Developer
          </div>
          
          {/* Title 1: Developer */}
          <div className="heading-outline__wrapper">
            <a 
              href="#projects" 
              className="intro__link"
              onClick={(e) => handleScrollTo(e, 'projects')}
            >
              Developer
            </a>
          </div>

          {/* Title 2: & Designer */}
          <div className="heading-outline__wrapper">
            <a 
              href="#contact" 
              className="intro__link"
              onClick={(e) => handleScrollTo(e, 'contact')}
            >
              &amp; Designer
            </a>
          </div>

          <div className="intro__bottom-text">
            <div className="intro__text is--left">
              based in Bogor, Indonesia.
            </div>
            
            {/* Minimal logo/skill marquee row in Bazil's style */}
            <div className="intro__clients">
              <div className="client__logo-wrapper">
                <span className="client__logo-text">REACT</span>
                <div className="client__logo-divider"></div>
                <span className="client__logo-text">LARAVEL</span>
                <div className="client__logo-divider"></div>
                <span className="client__logo-text">TAILWIND</span>
                <div className="client__logo-divider"></div>
                <span className="client__logo-text">PYTHON</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bazil's background luminosity float photo */}
        <img 
          src="/images/profile.jpg" 
          alt="Abdullah - Developer" 
          className="intro__photo"
        />

        {/* Bottom Call to Actions */}
        <div className="intro__buttons">
          <a 
            href="#contact" 
            className="cta__mobile filled"
            onClick={(e) => handleScrollTo(e, 'contact')}
          >
            You need a developer
          </a>
          <a 
            href="/cv.pdf" 
            className="cta__mobile ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            My CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
