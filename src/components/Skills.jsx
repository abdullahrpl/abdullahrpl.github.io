import React from 'react';
import { translations } from '../data/translations';

const Skills = ({ lang }) => {
  const skillCategories = [
    {
      title: 'FRONTEND',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <line x1="8" x2="16" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
        </svg>
      ),
      skills: ['React', 'Next.js', 'Angular', 'Tailwind CSS', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
      title: 'BACKEND',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="8" x="2" y="2" rx="2" />
          <rect width="20" height="8" x="2" y="14" rx="2" />
          <line x1="6" x2="6.01" y1="6" y2="6" />
          <line x1="6" x2="6.01" y1="18" y2="18" />
        </svg>
      ),
      skills: ['NestJS', 'Node.js', 'Express.js', 'Laravel', 'REST API', 'Authentication', 'RBAC'],
    },
    {
      title: 'DATABASE',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5V19c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      ),
      skills: ['PostgreSQL', 'MySQL', 'Firebase Firestore',],
    },
    {
      title: 'TOOLS & TESTING',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" x2="20" y1="19" y2="19" />
        </svg>
      ),
      skills: ['Git', 'GitHub', 'Postman', 'Unit Testing', 'Integration Testing'],
    },
    {
      title: 'CLOUD & DEVOPS',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.42-1.04-1.29-1.89-2.37-2.37a4.67 4.67 0 0 0-6.13 6.13c-.48.42-.92.93-1.28 1.5a3.5 3.5 0 0 0 2.28 5.25" />
        </svg>
      ),
      skills: ['AWS','Cloud Deployment'],
    },
    {
      title: 'SOFTWARE ENGINEERING',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        </svg>
      ),
      skills: ['Clean Architecture', 'SOLID Principles', 'OOP', 'System Design', 'Agile (Scrum)'],
    },
  ];

  return (
    <section className="section is--skills" id="skills">
      <div className="container-xl">
        <div className="skills-header" style={{ marginBottom: '10px' }}>
          <h2 className="heading-section-outlined">
            <span>04 / </span>{translations[lang].skills.title}
          </h2>
        </div>

        <div className="skills-grid-alt">
          {skillCategories.map((category, index) => (
            <div className="skill-box-alt" key={index}>
              <div className="skill-box-header">
                <h3>{category.title}</h3>
                <div className="skill-box-icon-container">
                  {category.icon}
                </div>
              </div>
              <div className="skill-badges-container">
                {category.skills.map((skill, idx) => (
                  <span className="skill-badge-pill" key={idx}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
