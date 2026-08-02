import React from 'react';

const experienceContent = [
  {
    year: 'Mar. 2023 – Present',
    position: ' Software/Forms Developer',
    companyName: 'Texas Family Initiative',
    details: `Design and maintain forms for Agency's enterprise fostercare application using C#, VB.Net, ASP.Net, Azure DevOps, SQL Server, and JavaScript/TypeScript.`,
  },
  {
    year: 'Nov. 2021 – Mar. 2023',
    position: ' Front-End Engineer',
    companyName: 'Change Healthcare',
    details: `Created a high-quality, responsive and user friendly web application using react.`,
  },
  {
    year: 'Jun. 2019 – Sep. 2021',
    position: ' Front-End Engineer',
    companyName: 'Autobahn Limo',
    details: `Developed and maintained a highly interactive ride-booking web application using Javascript-ES6, CSS, Sass, HTML, Firebase, and Formspree.`,
  },
  {
    year: 'Dec. 2018 – May. 2019',
    position: ' WordPress Developer',
    companyName: 'Upwork',
    details: `Worked with clients to generate and optimize wordpress sites for Search Engine Optimization (SEO).`,
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
