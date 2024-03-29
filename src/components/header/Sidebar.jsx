import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollspyNav from 'react-scrollspy-nav';

// logo name
const logo = 'dark';
const logo2 = 'light';

// sidebar content
const sidebarContent = [
  { icon: 'home', itemName: 'Home', itemRoute: '#home', activeClass: 'active' },
  { icon: 'human', itemName: 'About', itemRoute: '#about', activeClass: '' },
  {
    icon: 'portfolio',
    itemName: 'Projects',
    itemRoute: '#portfolio',
    activeClass: '',
  },
  // { icon: 'blog', itemName: 'Blog', itemRoute: '#blog', activeClass: '' },
  {
    icon: 'contact',
    itemName: 'Contact',
    itemRoute: '#contact',
    activeClass: '',
  },
];

// sidebar footer bottom content
const sidebarFooterContent = {
  avatar: 'img/about/avatar.jpg',
  name: 'Baruf Kosgei',
  email: 'barufkosgei@gmail.com',
  emailRef: 'mailto:barufkosgei@gmail.com',
};

const Sidebar = ({ isJobSearching }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <div className='mob-header'>
        <button className='toggler-menu' onClick={handleClick}>
          <div className={click ? 'active' : ''}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      {/* End Mobile Header */}
      <div className={click ? 'edina_tm_sidebar menu-open' : 'edina_tm_sidebar'}>
        <div className='sidebar_inner'>
          <div className='logo'>
            <Link to='/'>
              <img className='logo_dark' src={`img/logo/${logo}.png`} alt='brand' />
              <img className='logo_light' src={`img/logo/${logo2}.png`} alt='brand' />
            </Link>
          </div>
          {/* End .logo */}

          <div className='menu'>
            {/* add 'blog' to scrollTargetIds array */}
            <ScrollspyNav scrollTargetIds={['home', 'about', 'portfolio', 'contact']} activeNavClass='active' offset={0} scrollDuration='100'>
              <ul className='anchor_nav'>
                {sidebarContent.map((val, i) => (
                  <li key={i}>
                    <div className='list_inner'>
                      <a href={val.itemRoute} className={val.activeClass} onClick={handleClick}>
                        <img className='svg custom' src={`img/svg/${val.icon}.svg`} alt='icon' />
                        {val.itemName}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollspyNav>
          </div>
          <div className='edina_tm_button menu'>
            {/* <a href='img/cv.jpg' download className='color'>
              Resume
            </a> */}
            {isJobSearching && (
              <a href='/Baruf_Kosgei_Resume.pdf' target='_blank' rel='noreferrer'>
                Resume
              </a>
            )}
          </div>

          {/* End .menu */}

          <div className='author'>
            <div className='inner'>
              <div className='image'>
                <div
                  className='main'
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + sidebarFooterContent.avatar})`,
                  }}
                ></div>
              </div>
              <div className='short'>
                <h3>{sidebarFooterContent.name}</h3>
                <a href={sidebarFooterContent.emailRef}>{sidebarFooterContent.email}</a>
              </div>
            </div>
          </div>
          {/* End author */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
