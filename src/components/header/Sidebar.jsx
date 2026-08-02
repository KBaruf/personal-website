import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ScrollspyNav from 'react-scrollspy-nav';
import { profile } from '../../data/content';

// logo name
const logo = 'dark';
const logo2 = 'light';

// sidebar content
const sidebarContent = [
  { icon: 'home', itemName: 'Home', itemRoute: '#home' },
  { icon: 'human', itemName: 'About', itemRoute: '#about' },
  { icon: 'service', itemName: 'Experience', itemRoute: '#experience' },
  { icon: 'portfolio', itemName: 'Projects', itemRoute: '#portfolio' },
  { icon: 'contact', itemName: 'Contact', itemRoute: '#contact' },
];

const scrollTargetIds = sidebarContent.map((item) => item.itemRoute.replace('#', ''));

const Sidebar = ({ isJobSearching }) => {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);
  const toggle = () => setIsOpen((open) => !open);

  // Close the mobile menu on Escape and lock body scroll while it is open.
  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') close();
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.classList.add('menu-is-open');

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('menu-is-open');
    };
  }, [isOpen, close]);

  return (
    <>
      <div className='mob-header'>
        <button className='toggler-menu' onClick={toggle} aria-expanded={isOpen} aria-controls='primary-navigation' aria-label={isOpen ? 'Close menu' : 'Open menu'} type='button'>
          <div className={isOpen ? 'active' : ''}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      {/* End Mobile Header */}
      <nav id='primary-navigation' className={isOpen ? 'edina_tm_sidebar menu-open' : 'edina_tm_sidebar'} aria-label='Primary'>
        <div className='sidebar_inner'>
          <div className='logo'>
            <Link to='/' aria-label={`${profile.name} — home`}>
              <img className='logo_dark' src={`img/logo/${logo}.png`} alt='' width='90' height='30' aria-hidden='true' />
              <img className='logo_light' src={`img/logo/${logo2}.png`} alt='' width='90' height='30' aria-hidden='true' />
            </Link>
          </div>
          {/* End .logo */}

          <div className='menu'>
            <ScrollspyNav scrollTargetIds={scrollTargetIds} activeNavClass='active' offset={0} scrollDuration='100'>
              <ul className='anchor_nav'>
                {sidebarContent.map((val) => (
                  <li key={val.itemRoute}>
                    <div className='list_inner'>
                      <a href={val.itemRoute} onClick={close}>
                        <img className='svg custom' src={`img/svg/${val.icon}.svg`} alt='' aria-hidden='true' />
                        {val.itemName}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollspyNav>
          </div>
          {isJobSearching && (
            <div className='edina_tm_button menu'>
              <a href={profile.resumeUrl} target='_blank' rel='noreferrer'>
                Resume
              </a>
            </div>
          )}

          {/* End .menu */}

          <div className='author'>
            <div className='inner'>
              <div className='image'>
                <div
                  className='main'
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + 'img/about/avatar.jpg'})`,
                  }}
                  role='img'
                  aria-label={`Photo of ${profile.name}`}
                ></div>
              </div>
              <div className='short'>
                <h3>{profile.name}</h3>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
            </div>
          </div>
          {/* End author */}
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
