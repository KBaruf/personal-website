import React from 'react';
import ReactTooltip from 'react-tooltip';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
              <p>Professional E-commerce Web application built with React and NextJS. Stores user data in MongoDB and performs Authentication using NextAuth. Integrated with Stripe payment gateway.</p>
            </div>
          </li>
          {/* End li */}
          <li>
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
              <p>A creatively designed and highly responsive food delivery web application built with JavaScript-ES6, HTML, and CSS. Stores Data and Handles Authentication using Firebase.</p>
            </div>
          </li>
          {/* End li */}
          <li>
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
              <p>Fitness web application that fetches exercise data then searches, filters and display them based on targeted body parts. YouTube Videos, similar exercises, and exercises that uses the same equipments are also displayed.</p>
            </div>
          </li>
          {/* End li */}
          {/* End li */}
          <li>
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
              <p>Workout application that uses openstreet API to display workout information and its location on the map. Has an option to display either running or cycling workout</p>
            </div>
          </li>
          {/* End li */}
          <li>
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
              <p>Job tracking application build using React. Performs user authentication and displays stats of all jobs applied in area chart or bar chart.</p>
            </div>
          </li>{' '}
          {/* End li */}
        </Slider>
      </ul>
    </div>
  );
};

export default Portfolio;
