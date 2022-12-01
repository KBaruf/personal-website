import React from 'react';

const Footer = () => {
  return (
    <>
      <div className='inner'>
        <div className='copy'>
          <p>
            &copy; {new Date().getFullYear()} by{' '}
            <a href='https://barufkosgei.com' target='_blank' rel='noreferrer'>
              Baruf Kosgei
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
