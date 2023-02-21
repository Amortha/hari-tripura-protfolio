import React from 'react';
import certificates from '../../image/certificates.png'
import seo from './../../image/seo.png'

const Certificat = () => {
  return (
    <div id='certificate'>
      <h1 className='font-bold text-center text-4xl my-7 text-purple-800'>CERTIFICATE</h1>
      <div className='grid grid-cols-2 gap-5 mx-4'>
        <div data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <img src={certificates} alt="" />
        </div>
        <div data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <img src={seo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Certificat;