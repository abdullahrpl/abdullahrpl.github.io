import React from 'react';
import { projectsData } from '../data/projects';
import { translations } from '../data/translations';

const Projects = ({ onNavigate, lang }) => {
  // Show only the first 4 projects as "Featured" on the homepage
  const featuredProjects = projectsData.slice(0, 4);

  const handleViewAllClick = (e) => {
    e.preventDefault();
    onNavigate('projects');
  };

  return (
    <section className="section is--projects" id="projects">
      <div className="container-xl">
        <div className="projects-header" style={{ marginBottom: '60px' }}>
          <h2 className="heading-section-outlined">
            <span>02 / </span>{translations[lang].projects.title}
          </h2>
          <a 
            href="#all-projects" 
            className="view-all-link"
            onClick={handleViewAllClick}
          >
            {translations[lang].projects.viewAll}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>

        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
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
      </div>
    </section>
  );
};

export default Projects;
