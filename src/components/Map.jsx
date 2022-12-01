import React from 'react';

const Map = () => {
  return (
    <>
      <div className='google-map'>
        <iframe className='embed-responsive-item' title='my location' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107364.78850242411!2d-97.37877025504176!3d32.761763704501234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e713ff3f9631b%3A0xbf65436b18784965!2sDowntown%20Fort%20Worth!5e0!3m2!1sen!2sus!4v1669871834460!5m2!1sen!2sus'></iframe>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
