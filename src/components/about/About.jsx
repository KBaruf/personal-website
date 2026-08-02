import React from 'react';
import Skills from '../skills/Skills';
import { profile } from '../../data/content';

const About = () => {
  return (
    <section className='edina_tm_about' id='about' aria-labelledby='about-heading'>
      <div className='container'>
        <div className='about_title'>
          <h3 id='about-heading'>About Me</h3>
        </div>
        <div className='content'>
          <div className='leftpart' data-aos='fade-right' data-aos-duration='1000' data-aos-delay='100'>
            <div className='info'>
              <h3>
                Hello, my name is <span>{profile.name}</span>
              </h3>
              <p>{profile.about}</p>
              <p>{profile.aboutSecondary}</p>
            </div>
            <div className='my_skills'>
              <h3 className='title'>Technical skills</h3>
              <p className='desc'>The tools and platforms I work with day to day.</p>
              <Skills />
              <div className='edina_tm_button'>
                <a href='#experience' className='color'>
                  View my experience
                </a>
              </div>
            </div>
          </div>
          {/* End leftpart */}

          <div className='rightpart'>
            <div className='image'>
              <img src='img/thumbs/26-35.jpg' alt='' width='520' height='700' aria-hidden='true' />

              <div
                className='main'
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL + 'img/about/8.jpg'})`,
                }}
                role='img'
                aria-label={`Portrait of ${profile.name}`}
                data-aos='fade-left'
                data-aos-duration='1000'
                data-aos-delay='200'
              ></div>

              <div className='experience' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='300'>
                <div className='info'>
                  <h3>{`${profile.yearsOfExperience} Years`}</h3>
                  <span>Of Experience</span>
                </div>
              </div>
            </div>
          </div>
          {/* End righttpart */}
        </div>
      </div>
    </section>
  );
};

export default About;
