import React from 'react';
import { profile } from '../data/content';

const contactDetails = [
  {
    label: 'Phone',
    icon: 'img/address/phone.png',
    value: profile.phone,
    href: profile.phoneHref,
  },
  {
    label: 'Email',
    icon: 'img/address/email.png',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: 'Location',
    icon: 'img/address/location.png',
    value: profile.location,
    href: null,
  },
];

const Address = () => {
  return (
    <ul className='wrapper'>
      {contactDetails.map((item, i) => (
        <li key={item.label} data-aos='fade-right' data-aos-duration='1000' data-aos-delay={i * 100}>
          <div className='list_inner'>
            <div className='icon'>
              <img src={item.icon} alt='' width='24' height='24' loading='lazy' aria-hidden='true' />
            </div>
            {/* End icon */}
            <div className='content'>
              <h3>{item.label}</h3>
              {item.href ? (
                <a href={item.href}>{item.value}</a>
              ) : (
                <p>{item.value}</p>
              )}
            </div>
            {/* End .content */}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Address;
