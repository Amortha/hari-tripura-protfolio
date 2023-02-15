import React from 'react';
import certificates from '../../image/certificates.png'
import seo from './../../image/seo.png'

const Certificat = () => {
    return (
        <div id='certificate'>
            <h1 className='font-bold text-center text-4xl my-7'>CERTIFICATE</h1>
          <div className='grid grid-cols-2 gap-5 mx-4'>
          <img src={certificates} alt=""/>
            <img src={seo} alt=""/>
          </div>
        </div>
    );
};

export default Certificat;