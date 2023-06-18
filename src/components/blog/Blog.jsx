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
  // var settings = {
  //   dots: false,
  //   arrow: true,
  //   infinite: true,
  //   speed: 800,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   draggable: false,
  //   responsive: [
  //     {
  //       breakpoint: 575,
  //       settings: {
  //         slidesToShow: 1,
  //         arrow: false,
  //         autoplay: false,
  //         speed: 300,
  //         draggable: true,
  //         dots: true,
  //       },
  //     },
  //   ],
  // };

  return (
    <>
      <div className='news_inner my_carousel'>
        <ul>
          <Slider>
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

                <div className='news_details' onClick={() => toggleModal()}>
                  <span>
                    April 07,2021 <a href={blogTitle}>Design</a>
                  </span>
                  <h3 className='title'>Forzo Immobile</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry’s.</p>
                </div>
                {/* End details */}
              </div>
            </li>
            {/* End single blog One */}
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
