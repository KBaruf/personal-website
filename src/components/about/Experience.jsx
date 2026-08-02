import React from 'react';
import { experience } from '../../data/content';

const Experience = () => {
  return (
    <ol className='timeline'>
      {experience.map((job, i) => (
        <li className='timeline_item' key={`${job.company}-${job.start}`} data-aos='fade-up' data-aos-duration='800' data-aos-delay={Math.min(i * 80, 240)}>
          <span className='marker' aria-hidden='true' />
          <div className='timeline_card'>
            <div className='meta'>
              <span className='period'>{job.period}</span>
              {job.current && <span className='badge_current'>Current</span>}
            </div>
            <h4 className='role'>{job.role}</h4>
            <p className='company'>
              <span className='company_name'>{job.company}</span>
              <span className='divider' aria-hidden='true'>
                •
              </span>
              <span className='location'>{job.location}</span>
            </p>
            <ul className='highlights'>
              {job.highlights.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
            {job.tags?.length > 0 && (
              <ul className='tag_list'>
                {job.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Experience;
