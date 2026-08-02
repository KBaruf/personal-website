import React from 'react';
import { FaGraduationCap, FaAward } from 'react-icons/fa';
import { education, certifications } from '../../data/content';

const Education = () => {
  return (
    <div className='credentials'>
      <div className='credential_block' data-aos='fade-up' data-aos-duration='800'>
        <h4 className='block_title'>
          <FaGraduationCap aria-hidden='true' focusable='false' />
          Education
        </h4>
        <ul className='credential_list'>
          {education.map((item) => (
            <li key={item.institute}>
              <p className='primary'>{item.degree}</p>
              <p className='secondary'>{item.field}</p>
              <p className='tertiary'>{item.institute}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className='credential_block' data-aos='fade-up' data-aos-duration='800' data-aos-delay='80'>
        <h4 className='block_title'>
          <FaAward aria-hidden='true' focusable='false' />
          Certifications
        </h4>
        <ul className='credential_list'>
          {certifications.map((item) => (
            <li key={item.code}>
              <p className='primary'>{item.name}</p>
              <p className='tertiary'>
                <span className='cert_code'>{item.code}</span>
                <span className='cert_issuer'>Microsoft</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
