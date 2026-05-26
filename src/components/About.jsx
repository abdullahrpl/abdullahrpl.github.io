import React from 'react';

const About = () => {
  return (
    <section className="section is--about" id="about">
      <div className="container-xl">
        <div className="section-header-bazil">
          <h2 className="heading-section-outlined">
            <span>01 / </span>ABOUT
          </h2>
        </div>

        <div className="about__copy-wrapper">
          <p className="about__copy">
            I'm a developer based in <span>Bogor, Indonesia</span> with a focus on creating clean, user-centered digital
            experiences. I believe in the power of <span>simplicity</span> and thoughtful design.
          </p>
          <p className="about__subcopy">
            I am currently a student with a strong interest in web development, seeking opportunities to gain real-world experience and grow my skills through hands-on projects.
          </p>
          <p className="about__subcopy" style={{ marginTop: '20px' }}>
            When I'm not coding, you'll find me exploring new coffee shops, reading about design, or taking photographs
            around the city.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
