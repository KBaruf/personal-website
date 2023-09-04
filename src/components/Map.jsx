import React from 'react';

const Map = () => {
  return (
    <>
      <div className='google-map'>
        <iframe className='embed-responsive-item' title='my location' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13782.992485745846!2d-97.75378218854965!3d30.27275709694757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b50a22f2576f%3A0xfded6e1aca5cba6!2sDowntown%20Austin%2C%20Austin%2C%20TX!5e0!3m2!1sen!2sus!4v1693787400219!5m2!1sen!2sus'></iframe>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
