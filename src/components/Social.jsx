import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiGithub, FiLinkedin } from 'react-icons/fi';

const SocialShare = [
  {
    iconName: <FiFacebook />,
    link: 'https://www.facebook.com/',
  },
  { iconName: <FiTwitter />, link: 'https://twitter.com/' },
  {
    iconName: <FiInstagram />,
    link: 'https://www.instagram.com/',
  },
  { iconName: <FiGithub />, link: 'https://github.com/' },
  {
    iconName: <FiLinkedin />,
    link: 'https://www.linkedin.com/feed/',
  },
];
const Social = () => {
  return (
    <ul>
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target='_blank' rel='noreferrer'>
            {val.iconName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
