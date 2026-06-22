import { experienceData } from '../data/experience';
import { translations } from '../data/translations';

const Experience = ({ lang }) => {
  return (
    <section className="section is--experience" id="experience">
      <div className="container-xl">
        <div className="experience-header" style={{ marginBottom: '60px' }}>
          <h2 className="heading-section-outlined">
            <span>05 / </span>{translations[lang].experience.title}
          </h2>
        </div>

        <div className="experience-list">
          {experienceData.map((exp, index) => (
            <div className="experience-item" key={index}>
              <div className="experience-duration">
                {exp.duration}
              </div>
              <div className="experience-details">
                <h3 className="experience-role">
                  {exp.role[lang]}
                </h3>
                <span className="experience-company">
                  {exp.company}
                </span>
                <p className="experience-desc">
                  {exp.description[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
