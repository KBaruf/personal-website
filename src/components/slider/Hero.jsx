import React from 'react';
import Social from '../Social';
import ReactTyped from 'react-typed';

const heroContent = {
  shapeImage: 'hero-shape',
  heroImage: '2',
  name: 'Baruf Kosgei',
  description: `I'm a passionate Front-end Engineer who specialize in building (and occasionally designing) exceptional digital experiences. `,
};

const Hero = () => {
  return (
    //    HERO
    <div className='edina_tm_hero' id='home'>
      <div className='content'>
        <div className='img-shape' data-aos='fade-up' data-aos-duration='1200'>
          <img src={`img/hero/${heroContent.shapeImage}`} srcSet={`img/hero/${heroContent.heroImage}.jpg`} alt='about author' />
        </div>
        <div className='extra'>
          <h5 data-aos='fade-up' data-aos-duration='1200' data-aos-delay='100' className='hello'>
            Hi, my name is <strong>{heroContent.name}</strong>
          </h5>
          <h1 className='name' data-aos='fade-up' data-aos-duration='1200' data-aos-delay='200'>
            <span className='typer-toper'>
              <ReactTyped loop typeSpeed={150} backSpeed={60} strings={['Front-End Engineer', 'React Developer']} smartBackspace shuffle={false} backDelay={1} fadeOut={false} fadeOutDelay={100} loopCount={0} showCursor cursorChar='|' />
            </span>
          </h1>
          <p className='text' data-aos='fade-up' data-aos-duration='1200' data-aos-delay='300'>
            {heroContent.description}
          </p>

          <div className='social' data-aos='fade-up' data-aos-duration='1200' data-aos-delay='400'>
            <Social />
          </div>
          <div className='edina_tm_button' data-aos='fade-up' data-aos-duration='1200' data-aos-delay='500'>
            <a href='/Baruf_Kosgei_Resume.pdf' download className='color'>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
    // /HERO
  );
};

export default Hero;
