import React from 'react';
import { skillGroups } from '../../data/content';

const Skills = () => {
  return (
    <div className='skills_groups'>
      {skillGroups.map((group, i) => (
        <div className='skill_group' key={group.label} data-aos='fade-up' data-aos-duration='800' data-aos-delay={i * 60}>
          <h4 className='group_label'>{group.label}</h4>
          <ul className='tag_list'>
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
