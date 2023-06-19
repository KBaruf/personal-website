import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Modal from 'react-modal';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BlogModal from '../../posts/BlogModal';

Modal.setAppElement('#root');

const Blog = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [blogTitle, setBlogTitle] = useState('Overcoming Public Speaking Anxiety');

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const getBlogTitle = queryParams.get('blog');

    if (blogTitle.replaceAll(' ', '-') === getBlogTitle) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [location.search, blogTitle]);

  function toggleModal() {
    setIsOpen(!isOpen);
    const searchParams = new URLSearchParams(location.search);

    if (!isOpen) {
      searchParams.set('blog', blogTitle.replaceAll(' ', '-'));
    } else {
      searchParams.delete('blog');
    }

    const newSearch = `?${searchParams.toString()}`;

    window.history.pushState({ path: newSearch }, '', newSearch);
  }
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
          speed: 300,
          draggable: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <div className='news_inner my_carousel'>
        <ul>
          <Slider {...settings}>
            <li data-aos='fade-right' data-aos-duration='1200'>
              <div className='list_inner'>
                <div className='image' onClick={() => toggleModal()}>
                  <img src='/img/placeholders/4-3.jpg' alt='thumb' />
                  <div
                    className='main'
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL + 'img/news/4.jpg'})`,
                    }}
                  ></div>
                </div>
                {/* End image */}

                <div className='news_details'>
                  <span>
                    April 07,2021 <a href='#'>Public Speaking</a>
                  </span>
                  <h3 className='title' onClick={() => toggleModal()}>
                    Forzo Immobile
                  </h3>
                </div>
                {/* End details */}
              </div>
            </li>
            {/* End single blog One */}

            <li data-aos='fade-right' data-aos-duration='1200' data-aos-delay='150'>
              <div className='list_inner'>
                <div className='image' onClick={() => toggleModal()}>
                  <img src='/img/placeholders/4-3.jpg' alt='thumb' />
                  <div
                    className='main'
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL + 'img/news/2.jpg'})`,
                    }}
                  ></div>
                </div>
                {/* End image */}

                <div className='news_details'>
                  <span>
                    March 25,2021 <a href='#'>Branding</a>
                  </span>
                  <h3 className='title' onClick={() => toggleModal()}>
                    Mosby Lavette
                  </h3>
                </div>
                {/* End details */}
              </div>
              {/* End list inner */}
            </li>
            {/* End single blog Two */}

            <li data-aos='fade-right' data-aos-duration='1200' data-aos-delay='300'>
              <div className='list_inner'>
                <div className='image' onClick={() => toggleModal()}>
                  <img src='/img/placeholders/4-3.jpg' alt='thumb' />
                  <div
                    className='main'
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL + 'img/news/3.jpg'})`,
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className='news_details'>
                  <span>
                    May 01,2021 <a href='#'>Lifestyle</a>
                  </span>
                  <h3 className='title' onClick={() => toggleModal()}>
                    Jacuba Bamba
                  </h3>
                </div>
                {/* End details */}
              </div>
              {/* END LIST INNER */}
            </li>
            {/* End single blog Three */}

            <li data-aos='fade-right' data-aos-duration='1200' data-aos-dealy='400'>
              <div className='list_inner'>
                <div className='image' onClick={() => toggleModal()}>
                  <img src='/img/placeholders/4-3.jpg' alt='thumb' />
                  <div
                    className='main'
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL + 'img/news/1.jpg'})`,
                    }}
                  ></div>
                </div>
                {/* End image */}

                <div className='news_details'>
                  <span>
                    July 07,2021 <a href='#'>Travel</a>
                  </span>
                  <h3 className='title' onClick={() => toggleModal()}>
                    Dostie Memorie
                  </h3>
                </div>
                {/* End details */}
              </div>
            </li>
            {/* End single blog Four */}
          </Slider>
        </ul>

        {/* Start Modal One */}
        <Modal isOpen={isOpen} onRequestClose={() => toggleModal()} contentLabel='My dialog' className='custom-modal' overlayClassName='custom-overlay' closeTimeoutMS={500}>
          <div className='edina_tm_modalbox'>
            <button className='close-modal' onClick={() => toggleModal()}>
              <img src='/img/svg/cancel.svg' alt='close icon' />
            </button>
            {/* End close icon */}

            <div className='box_inner'>
              <BlogModal />
            </div>
            {/* End box inner */}
          </div>
          {/* End modal box news */}
        </Modal>
        {/* End modal One */}
      </div>
    </>
  );
};

export default Blog;
