import React from 'react';

const experienceContent = [
  {
    year: 'Jun 2021 – May 2022',
    position: ' Front-End Engineer',
    companyName: 'Autobahn Limo',
    details: `Developed and maintained a highly interactive ride-booking web application using Javascript-ES6, CSS, Sass,
HTML, Firebase, and Formspree.`,
  },
  {
    year: 'Dec 2019 – May 2021',
    position: ' WordPress Developer',
    compnayName: 'Freelancer',
    details: `Worked with clients to generate and customize wordpress sites and implemented various upsell and security plugins.`,
  },
  {
    year: 'Sep 2020 – Apr 2021',
    position: 'Marketing Technologist',
    companyName: 'Howard Johnson Hotel',
    details: `Implemented Customer Relationship Management tools and built marketing assests such as emails templates and landing pages.
`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          {/* <div className='icon'>
            <img src='img/about/briefcase.png' alt='icon' />
            <i className='fa fa-briefcase'></i>
          </div> */}
          <span className='time open-sans-font text-uppercase'>{val.year}</span>
          <h5 className='poppins-font text-uppercase'>
            {val.position}
            <span className='place open-sans-font'>{val.compnayName}</span>
          </h5>
          <p className='open-sans-font'>{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
