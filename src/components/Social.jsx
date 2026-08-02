import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { socials } from '../data/content';

const icons = {
  github: FiGithub,
  linkedin: FiLinkedin,
  mail: FiMail,
};

const Social = () => {
  return (
    <ul>
      {socials.map((item) => {
        const Icon = icons[item.icon];
        const isMail = item.icon === 'mail';

        return (
          <li key={item.name}>
            <a href={item.link} aria-label={item.name} title={item.name} {...(isMail ? {} : { target: '_blank', rel: 'noreferrer' })}>
              {Icon && <Icon aria-hidden='true' focusable='false' />}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Social;
