import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
    },
    {
      title: 'Tools',
      skills: ['Git', 'Figma', 'PyTorch', 'Flask'],
    },
  ];

  return (
    <section className="section is--skills" id="skills">
      <div className="container-xl">
        <div className="section-header-bazil">
          <h2 className="heading-section-outlined">
            <span>04 / </span>SKILLS
          </h2>
        </div>

        <div className="skills-grid-bazil">
          {skillCategories.map((category, index) => (
            <div className="skill-box-bazil" key={index}>
              <h3>{category.title}</h3>
              <ul>
                {category.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
