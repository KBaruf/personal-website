import React from 'react';

const educationContent = [
  {
    year: 'current',
    // degree: "ENGINEERING DEGREE",
    institute: 'UNIVERSITY OF WEST FLORIDA (online) ',
    details: `Masters of Science in Computer Science
`,
  },
  {
    year: '2019 – 2021',
    // degree: 'MASTER DEGREE',
    institute: 'UNIVERSITY OF ILLINOIS AT CHICAGO',
    details: `The Bachelor of Science in Integrated Health
Studies`,
  },
  {
    year: '2014 – 2016',
    // degree: 'BACHELOR DEGREE ',
    institute: 'LINCOLN COLLEGE',
    details: `Associate in Nursing
`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          {/* <div className='icon'>
            <img src='img/about/book.png' alt='icon' />
          </div> */}
          <span className='time open-sans-font text-uppercase'>{val.year}</span>
          <h5 className='poppins-font text-uppercase'>
            {val.degree}
            <span className='place open-sans-font'>{val.institute}</span>
          </h5>
          <p className='open-sans-font'>{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
