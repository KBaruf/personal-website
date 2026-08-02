import React from 'react';
import Social from '../Social';
import { ReactTyped } from 'react-typed';
import { profile } from '../../data/content';

const Hero = ({ isJobSearching }) => {
  return (
    //    HERO
    <section className='edina_tm_hero' id='home' aria-labelledby='hero-heading'>
      <div className='content'>
        <div className='img-shape' data-aos='fade-up' data-aos-duration='1000'>
          <img src='img/hero/5.jpg' alt={`${profile.name}, ${profile.title}`} width='300' height='342' fetchpriority='high' decoding='async' />
        </div>
        <div className='extra'>
          <h5 data-aos='fade-up' data-aos-duration='1000' data-aos-delay='100' className='hello'>
            Hi, my name is <strong>{profile.name}</strong>
          </h5>
          <h1 className='name' id='hero-heading' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='200'>
            <span className='sr-only'>{`${profile.name} — ${profile.title}`}</span>
            <span className='typer-toper' aria-hidden='true'>
              <ReactTyped loop typeSpeed={90} backSpeed={45} strings={profile.roles} smartBackspace shuffle={false} backDelay={1600} fadeOut={false} fadeOutDelay={100} loopCount={0} showCursor cursorChar='|' />
            </span>
          </h1>
          <p className='text' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='300'>
            {profile.summary}
          </p>

          <ul className='hero_meta' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='350'>
            <li>{profile.location}</li>
            <li>Azure Certified — AZ-204 / AZ-900</li>
          </ul>

          <div className='social' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='400'>
            <Social />
          </div>
          <div className='edina_tm_button hero_actions' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='500'>
            <a href='#contact' className='color'>
              Get in touch
            </a>
            {isJobSearching && (
              <a href={profile.resumeUrl} download className='ghost'>
                Download Resume
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
    // /HERO
  );
};

export default Hero;
