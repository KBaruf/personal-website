import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useState } from 'react';
import Sidebar from '../components/header/Sidebar';
import Hero from '../components/slider/Hero';
import About from '../components/about/About';
import Portfolio from '../components/portfolio/Portfolio';
import Blog from '../components/blog/Blog';
import Contact from '../components/Contact';
import Address from '../components/Address';
import Map from '../components/Map';
import HeaderMobile from '../components/header/HeaderMobile';
import Footer from '../components/footer/Footer';

const Home = () => {
  const [isDark, setIsDark] = useState(true);
  // change jobSearching state if job searching
  const [isJobSearching, setisJobSearching] = useState(false);

  // document.querySelector('body').classList.remove('rtl');

  const handleLabelClick = () => {
    if (isDark) {
      localStorage.setItem('theme-color', 'theme-light');
      document.querySelector('body').classList.add('theme-light');
      document.querySelector('body').classList.remove('theme-dark');
      setIsDark(false);
    } else {
      localStorage.setItem('theme-color', 'theme-dark');
      document.querySelector('body').classList.add('theme-dark');
      document.querySelector('body').classList.remove('theme-light');
      setIsDark(true);
    }
  };
  return (
    <div className={`home-light edina_tm_mainpart ${isDark ? 'theme-dark' : ''}`}>
      {/* Start Dark & Light Mode Swicher  */}
      <label className={`theme-switcher-label d-flex  ${isDark ? 'active' : ''}`}>
        <input type='checkbox' onClick={handleLabelClick} className='theme-switcher' />
        <div className='switch-handle'>
          <i className='light-text' title='Switch to Dark'>
            <FaMoon />
          </i>
          <i className='dark-text' title='Switch to Light'>
            <FaSun />
          </i>
        </div>
      </label>
      {/* End Dark & Light Mode Swicher  */}

      <header className='header-area'>
        <div className='header-inner'>
          <HeaderMobile />
        </div>
      </header>

      <Sidebar isJobSearching={isJobSearching} />
      {/* End Header */}
      <Hero isJobSearching={isJobSearching} />
      {/* End Hero */}
      <About />
      {/* End Hero */}

      <div className='edina_tm_portfolio' id='portfolio'>
        <div className='container'>
          <div className='edina_tm_title'>
            <h3>Projects</h3>
            <p>To help learn and solidify my understanding of various technologies, I design and build variety of projects including the following:</p>
          </div>
          {/* End edian_tm_title */}
          <Portfolio />
        </div>
      </div>
      {/* End Portfolio */}

      {/* <div className='edina_tm_news' id='blog'>
        <div className='container'>
          <div className='edina_tm_title'>
            <h3>Blog</h3>
            <p>Welcome to this blog section where I will explore the fascinating world of emerging technologies, personal growth techniques, and entrepreneurial insights. The goal is to empower you on your journey to success, keeping you informed, inspired, and motivated.</p>
          </div> */}
      {/* End edian_tm_title */}
      {/* <Blog />
        </div>
      </div> */}

      {/* End Blog */}

      <div className='edina_tm_contact' id='contact'>
        <div className='container'>
          <div className='edina_tm_title'>
            <h3>Contact</h3>
          </div>
          <div className='extra_info'>
            <Address />
          </div>
          {/* End Address Info */}
          <div className='mainpart'>
            <div className='left' data-aos='fade-right' data-aos-duration='1200' data-aos-delay='300'>
              <div className='title'>
                <p>
                  <span> Get In Touch.</span>
                </p>
              </div>
              {/* End title */}
              <div className='fields'>
                <Contact />
              </div>
              {/* End Contact Form */}
            </div>
            <div className='right' data-aos='fade-right' data-aos-duration='1200' data-aos-delay='400'>
              <Map />
            </div>
            {/* End Map */}
          </div>
        </div>
      </div>
      {/* /CONTACT */}
      {/* {FOOTER} */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
