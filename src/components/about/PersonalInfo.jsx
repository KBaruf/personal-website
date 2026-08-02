import React from 'react';

const personalInfoContent = [
  { meta: 'first name', metaInfo: 'Baruf ' },
  { meta: 'last name', metaInfo: 'Kosgei' },
  { meta: 'Age', metaInfo: '25 Years' },
  { meta: 'Nationality', metaInfo: 'USA' },
  { meta: 'Address', metaInfo: 'Fort Worth' },
  { meta: 'phone', metaInfo: '+1 217-671-2074' },
  { meta: 'Email', metaInfo: 'barufkosgei@gmail.com' },
  { meta: 'langages', metaInfo: 'English, Swahili' },
];

const PersonalInfo = () => {
  return (
    <ul className='about-list list-unstyled open-sans-font'>
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className='title'>{val.meta}: </span>
          <span className='value d-block d-sm-inline-block d-lg-block d-xl-inline-block'>{val.metaInfo}</span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
