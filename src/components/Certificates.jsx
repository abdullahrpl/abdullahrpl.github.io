import React from 'react';

const Certificates = () => {
  const certificatesList = [
    {
      title: 'Prompt Engineer for Software Developer',
      issuer: 'Dicoding',
      date: '2025',
      image: '/images/dicoding-prompt.jpg',
    },
    {
      title: 'Python Basic',
      issuer: 'Dicoding',
      date: '2025',
      image: '/images/dicoding-python.jpg',
    },
    {
      title: 'AI Basic',
      issuer: 'Dicoding',
      date: '2025',
      image: '/images/dicoding-ai.jpg',
    },
    {
      title: 'Python for Data Science',
      issuer: 'Coursera',
      date: '2026',
      image: '/images/coursera-python-data-science.jpg',
    },
    {
      title: 'AI with Flask',
      issuer: 'Coursera',
      date: '2026',
      image: '/images/coursera-AI-flask.jpg',
    },
    {
      title: 'Linux commands and shell scripting',
      issuer: 'Coursera',
      date: '2026',
      image: '/images/coursera-linux.jpg',
    },
  ];

  return (
    <section className="section is--certificates" id="certificates">
      <div className="container-xl">
        <div className="projects-header" style={{ marginBottom: '60px' }}>
          <h2 className="heading-section-outlined">
            <span>03 / </span>CERTIFICATES
          </h2>
        </div>

        <div className="certificates-scroller">
          {certificatesList.map((cert, index) => (
            <div className="certificate-card-bazil" key={index}>
              <div className="certificate-img-wrapper">
                <img src={cert.image} alt={cert.title} loading="lazy" />
              </div>
              <div className="certificate-details">
                <h3>{cert.title}</h3>
                <span className="issuer">{cert.issuer}</span>
                <p className="date">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
