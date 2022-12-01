import React from 'react';

const Address = () => {
  return (
    <ul className='wrapper'>
      <li data-aos='fade-right' data-aos-duration='1200'>
        <div className='list_inner'>
          <div className='icon'>
            <img src='img/address/phone.png' alt='icon' />
          </div>
          {/* End icon */}
          <div className='content'>
            <h3>Phone</h3>
            <ul>
              <li>
                <a href='Tel: +1 217-671-2074'>+1 217-671-2074</a>
              </li>
            </ul>
          </div>{' '}
          {/* End .content */}
        </div>
      </li>
      <li data-aos='fade-right' data-aos-duration='1200' data-aos-delay='100'>
        <div className='list_inner'>
          <div className='icon'>
            <img src='img/address/email.png' alt='icon' />
          </div>
          {/* End icon */}
          <div className='content'>
            <h3>Email</h3>
            <ul>
              <li>
                <a href='mailto:barufkosgei@gmail.com'>barufkosgei@gmail.com</a>
              </li>
            </ul>
          </div>{' '}
          {/* End .content */}
        </div>
      </li>
      <li data-aos='fade-right' data-aos-duration='1200' data-aos-delay='200'>
        <div className='list_inner'>
          <div className='icon'>
            <img src='img/address/location.png' alt='icon' />
          </div>
          {/* End icon */}
          <div className='content'>
            <h3>Address</h3>
            <ul>
              <li>
                <p>Fort Worth, Texas</p>
              </li>
            </ul>
          </div>
          {/* End .content */}
        </div>
      </li>
    </ul>
  );
};

export default Address;
