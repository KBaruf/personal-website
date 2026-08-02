import React from 'react';
import Experience from '../about/Experience';
import Education from '../about/Education';

const ExperienceSection = () => {
  return (
    <section className='edina_tm_experience' id='experience' aria-labelledby='experience-heading'>
      <div className='container'>
        <div className='edina_tm_title'>
          <h3 id='experience-heading'>Experience</h3>
          <p>Five years of building, modernizing, and securing enterprise software across cloud, backend, and frontend teams.</p>
        </div>

        <div className='experience_inner'>
          <Experience />
          <Education />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
