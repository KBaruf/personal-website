import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import Sidebar from '../components/header/Sidebar';
import Hero from '../components/slider/Hero';
import About from '../components/about/About';
import ExperienceSection from '../components/experience/ExperienceSection';
import Portfolio from '../components/portfolio/Portfolio';
import Contact from '../components/Contact';
import Address from '../components/Address';
import Map from '../components/Map';
import HeaderMobile from '../components/header/HeaderMobile';
import Footer from '../components/footer/Footer';

// Resolve the initial theme from the user's stored choice, then their OS preference.
const getInitialIsDark = () => {
  if (typeof window === 'undefined') return true;

  const stored = window.localStorage.getItem('theme-color');
  if (stored === 'theme-light') return false;
  if (stored === 'theme-dark') return true;

  return !window.matchMedia('(prefers-color-scheme: light)').matches;
};

const Home = () => {
  const [isDark, setIsDark] = useState(getInitialIsDark);
  // change jobSearching state if job searching
  const [isJobSearching] = useState(false);

  // Keep <body> and localStorage in sync with the active theme.
  useEffect(() => {
    const body = document.body;
    body.classList.toggle('theme-dark', isDark);
    body.classList.toggle('theme-light', !isDark);
    window.localStorage.setItem('theme-color', isDark ? 'theme-dark' : 'theme-light');
  }, [isDark]);

  const handleThemeChange = () => setIsDark((dark) => !dark);

  return (
    <div className={`home-light edina_tm_mainpart ${isDark ? 'theme-dark' : ''}`}>
      <a className='skip_link' href='#main-content'>
        Skip to content
      </a>

      {/* Start Dark & Light Mode Swicher  */}
      <label className={`theme-switcher-label d-flex ${isDark ? 'active' : ''}`}>
        <span className='sr-only'>{isDark ? 'Switch to light mode' : 'Switch to dark mode'}</span>
        <input type='checkbox' checked={isDark} onChange={handleThemeChange} className='theme-switcher' />
        <div className='switch-handle' aria-hidden='true'>
          <i className='light-text'>
            <FaMoon />
          </i>
          <i className='dark-text'>
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

      <main id='main-content'>
        <Hero isJobSearching={isJobSearching} />
        {/* End Hero */}
        <About />
        {/* End About */}
        <ExperienceSection />
        {/* End Experience */}

        <section className='edina_tm_portfolio' id='portfolio' aria-labelledby='portfolio-heading'>
          <div className='container'>
            <div className='edina_tm_title'>
              <h3 id='portfolio-heading'>Projects</h3>
              <p>A selection of applications I have designed and built to explore new technologies end to end.</p>
            </div>
            {/* End edian_tm_title */}
            <Portfolio />
          </div>
        </section>
        {/* End Portfolio */}

        <section className='edina_tm_contact' id='contact' aria-labelledby='contact-heading'>
          <div className='container'>
            <div className='edina_tm_title'>
              <h3 id='contact-heading'>Contact</h3>
              <p>Have a role, a project, or a question in mind? I would love to hear about it.</p>
            </div>
            <div className='extra_info'>
              <Address />
            </div>
            {/* End Address Info */}
            <div className='mainpart'>
              <div className='left' data-aos='fade-right' data-aos-duration='1000' data-aos-delay='300'>
                <div className='title'>
                  <p>
                    <span>Get In Touch.</span>
                  </p>
                </div>
                {/* End title */}
                <div className='fields'>
                  <Contact />
                </div>
                {/* End Contact Form */}
              </div>
              <div className='right' data-aos='fade-left' data-aos-duration='1000' data-aos-delay='400'>
                <Map />
              </div>
              {/* End Map */}
            </div>
          </div>
        </section>
        {/* /CONTACT */}
      </main>

      {/* {FOOTER} */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
