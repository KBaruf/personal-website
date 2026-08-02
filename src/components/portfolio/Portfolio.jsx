import React from 'react';
import ReactTooltip from 'react-tooltip';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  var settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrow: false,
          autoplay: false,
          draggable: true,
          speed: 300,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className='portfolio_inner my_carousel gallery_zoom'>
      <ul data-aos='fade-right' data-aos-duration='1200'>
        <Slider {...settings}>
          <li>
            <Link to='https://github.com/KBaruf/NaiRobi' target='_blank' className='inspect' data-aos='fade-right' data-aos-duration='1200' data-aos-delay='400'>
              {' '}
              <FaSearch transform='scale(1.2)' color='white' fontSize='1.6em' /> Inspect Code
            </Link>

            <div className='list_inner'>
              <div className='image'>
                <a href='https://nairobi1.vercel.app/' target='_blank' rel='noreferrer' className='details'>
                  <img src='img/portfolio/nairobi1.png' data-tip data-for='product' alt='nairobi' />
                  <ReactTooltip id='product' place='bottom' type='light' effect='float' className='tooltip-wrapper'>
                    <div>
                      <h5>NaiRobi</h5>
                      {/* <span>Product</span> */}
                    </div>
                  </ReactTooltip>
                </a>
              </div>
              <p className='list_inner-text'>Professional E-commerce Web application built with React and NextJS. Stores user data in MongoDB and performs Authentication using NextAuth. Integrated with Stripe payment gateway.</p>
            </div>
          </li>
          {/* End li */}
          <li>
            <Link to='https://github.com/KBaruf/OmniFood' target='_blank' className='inspect' data-aos='fade-right' data-aos-duration='1200' data-aos-delay='400'>
              {' '}
              <FaSearch transform='scale(1.2)' color='white' fontSize='1.6em' /> Inspect Code
            </Link>
            <div className='list_inner'>
              <div className='image'>
                <a href='https://omni-food-smoky.vercel.app/' target='_blank' rel='noreferrer' className='details'>
                  <img src='img/portfolio/omnifood.png' data-tip data-for='omnifood' alt='portfolio' />
                  <ReactTooltip id='omnifood' place='bottom' type='light' effect='float' className='tooltip-wrapper'>
                    <div>
                      <h5>Omnifood</h5>
                    </div>
                  </ReactTooltip>
                </a>
              </div>
              <p className='list_inner-text'>A creatively designed and highly responsive food delivery web application built with JavaScript-ES6, HTML, and CSS. Stores Data and Handles Authentication using Firebase.</p>
            </div>
          </li>
          {/* End li */}
          {/* End li */}
          <li>
            <Link to='https://github.com/KBaruf/Sound-Studio-Client' target='_blank' className='inspect' data-aos='fade-right' data-aos-duration='1200' data-aos-delay='400'>
              {' '}
              <FaSearch transform='scale(1.2)' color='white' fontSize='1.6em' /> Inspect Code
            </Link>
            <div className='list_inner'>
              <div className='image'>
                <a href='https://sound-studio-kbaruf.vercel.app/' target='_blank' rel='noreferrer' className='details'>
                  <img src='img/portfolio/soundstudio.png' data-tip data-for='soundstudio' alt='portfolio' />
                  <ReactTooltip id='soundstudio' place='bottom' type='light' effect='float' className='tooltip-wrapper'>
                    <div>
                      <h5>Sound Studio</h5>
                    </div>
                  </ReactTooltip>
                </a>
              </div>
              <p className='list_inner-text'>An E-commerce web application coded in Typescript and uses Tailwind CSS for styling. It is integrated with the Sanity content management system and accepts payments through Stripe payment gateway.</p>
            </div>
          </li>
          {/* End li */}
          <li>
            <Link to='https://github.com/KBaruf/fitwork' target='_blank' className='inspect' data-aos='fade-right' data-aos-duration='1200' data-aos-delay='400'>
              {' '}
              <FaSearch transform='scale(1.2)' color='white' fontSize='1.6em' /> Inspect Code
            </Link>
            <div className='list_inner'>
              <div className='image'>
                <a href='https://fitwork.netlify.app/' target='_blank' rel='noreferrer' className='details'>
                  <img src='img/portfolio/fitwork.png' data-tip data-for='fitwork' alt='portfolio' />
                  <ReactTooltip id='fitwork' place='bottom' type='light' effect='float' className='tooltip-wrapper'>
                    <div>
                      <h5>FitWork</h5>
                    </div>
                  </ReactTooltip>
                </a>
              </div>
              <p className='list_inner-text'>Fitness web application that fetches exercise data then searches, filters and display them based on targeted body parts. YouTube Videos, similar exercises, and exercises that uses the same equipments are also displayed.</p>
            </div>
          </li>
          {/* End li */}
          {/* End li */}
          <li>
            <Link to='https://github.com/KBaruf/Mapty' target='_blank' className='inspect' data-aos='fade-right' data-aos-duration='1200' data-aos-delay='400'>
              {' '}
              <FaSearch transform='scale(1.2)' color='white' fontSize='1.6em' /> Inspect Code
            </Link>
            <div className='list_inner'>
              <div className='image'>
                <a href='https://mapty-kohl.vercel.app/' target='_blank' rel='noreferrer' className='details'>
                  <img src='img/portfolio/mapty.png' data-tip data-for='mapty' alt='portfolio' />
                  <ReactTooltip id='mapty' place='bottom' type='light' effect='float' className='tooltip-wrapper'>
                    <div>
                      <h5>Mapty</h5>
                    </div>
                  </ReactTooltip>
                </a>
              </div>
              <p className='list_inner-text'>Workout application that uses openstreet API to display workout information and its location on the map. Has an option to display either running or cycling workout</p>
            </div>
          </li>
          {/* End li */}
          <li>
            <Link to='https://github.com/KBaruf?tab=repositories' target='_blank' className='inspect' data-aos='fade-right' data-aos-duration='1200' data-aos-delay='400'>
              {' '}
              <FaSearch transform='scale(1.2)' color='white' fontSize='1.6em' /> Inspect Code
            </Link>
            <div className='list_inner'>
              <div className='image'>
                <a href='https://applyandtrack.vercel.app/' target='_blank' rel='noreferrer' className='details'>
                  <img src='img/portfolio/applyandtrack.png' data-tip data-for='applyandtrack' alt='applyandtrack' />
                  <ReactTooltip id='applyandtrack' place='bottom' type='light' effect='float' className='tooltip-wrapper'>
                    <div>
                      <h5>Apply & Track</h5>
                    </div>
                  </ReactTooltip>
                </a>
              </div>
              <p className='list_inner-text'>Job tracking application build using React. Performs user authentication and displays stats of all jobs applied in area chart or bar chart.</p>
            </div>
          </li>{' '}
          {/* End li */}
        </Slider>
      </ul>
    </div>
  );
};

export default Portfolio;
