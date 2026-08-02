import React from 'react';

const skillsContent = [
  {
    name: 'React.js',
    skillPercent: '95',
  },
  {
    name: 'Next.js',
    skillPercent: '90',
  },
  {
    name: 'HTML',
    skillPercent: '95',
  },
  {
    name: 'CSS',
    skillPercent: '95',
  },
  {
    name: 'Node.js',
    skillPercent: '90',
  },
  {
    name: 'Express.js',
    skillPercent: '95',
  },
  {
    name: 'MongoDB',
    skillPercent: '80',
  },
  {
    name: 'Git & Github',
    skillPercent: '85',
  },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className='progress_inner' key={i}>
          <span className='label'>{val.name}</span>
          <div className='background'>
            <div className='bar'>
              <div className='bar_in' style={{ width: val.skillPercent + '%' }}></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
