import React from 'react';
import Social from '../Social';
import ReactTyped from 'react-typed';

const heroContent = {
  shapeImage: 'hero-shape',
  heroImage: '5',
  name: 'Baruf Kosgei',
  description: `I am a passionate Full Stack Developer who is proficient in designing, developing, and deploying complex web applications that are secure, scalable, and efficient. As a problem solver and a technology enthusiast, I always stay up-to-date with the latest trends and technologies in the field. `,
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
              <ReactTyped loop typeSpeed={150} backSpeed={60} strings={['Software Engineer', 'Full-Stack Developer']} smartBackspace shuffle={false} backDelay={1} fadeOut={false} fadeOutDelay={100} loopCount={0} showCursor cursorChar='|' />
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
