import React from 'react';
import { translations } from '../data/translations';

const About = ({ lang }) => {
  return (
    <section className="section is--about" id="about">
      <div className="container-xl">
        <div className="section-header-bazil">
          <h2 className="heading-section-outlined">
            <span>01 / </span>{translations[lang].about.title}
          </h2>
        </div>

        <div className="about__copy-wrapper">
          <p className="about__copy">
            {lang === 'EN' ? (
              <>I'm a developer based in <span>Bogor, Indonesia</span> with a focus on creating clean, user-centered digital experiences. I believe in the power of <span>simplicity</span> and thoughtful design.</>
            ) : (
              <>Saya adalah seorang developer yang berbasis di <span>Bogor, Indonesia</span> dengan fokus pada pembuatan pengalaman digital yang bersih dan berpusat pada pengguna. Saya percaya pada kekuatan <span>kesederhanaan</span> dan desain yang dipikirkan dengan matang.</>
            )}
          </p>
          <p className="about__subcopy">
            {translations[lang].about.p2}
          </p>
          <p className="about__subcopy" style={{ marginTop: '20px' }}>
            {translations[lang].about.p3}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
