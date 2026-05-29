import React, { useEffect } from 'react';
import { projectsData } from '../data/projects';
import { translations } from '../data/translations';

const AllProjects = ({ onNavigate, lang }) => {
  // Auto scroll to top when page opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = (e) => {
    e.preventDefault();
    onNavigate('home');
  };

  return (
    <section className="section is--all-projects" style={{ minHeight: '100vh', paddingTop: '160px' }}>
      <div className="container-xl">
        <div className="projects-header" style={{ marginBottom: '60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 className="heading-section-outlined">
            <span>/ </span>{translations[lang].allProjects.title}
          </h2>
          <a 
            href="#home" 
            className="view-all-link"
            onClick={handleBackClick}
          >
            {translations[lang].allProjects.backToHome}
          </a>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-card" 
              key={index}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <h3 className="project-title-bazil">{project.title}</h3>
              <p className="project-desc-bazil">{project.description[lang]}</p>
              <div className="project-tags-bazil">
                {project.tags.map((tag, tagIdx) => (
                  <span key={tagIdx}>{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div style={{ marginTop: '80px', textAlign: 'center' }}>
          <a 
            href="#home" 
            className="cta__mobile filled"
            onClick={handleBackClick}
            style={{ display: 'inline-block' }}
          >
            {translations[lang].allProjects.backToHomepageBtn}
          </a>
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
