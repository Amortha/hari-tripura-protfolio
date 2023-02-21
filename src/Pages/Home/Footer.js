import React from 'react';
import Twtwer from './../../image/Twtwer.png'
import pinterest from './../../image/pinterest.png'

const Footer = () => {
    return (
        <footer className=' footer-center  lg:mt-0 mt-96 bg-slate-900 p-4 text-base-content  rounded'>
  <div class="flex  justify-center  ">
    <a class="link link-hover p-3 "target="_blank" href='https://twitter.com/tripura_100'><img className='bg-white'  width="30px" height="30px" src={Twtwer}  alt="" /> </a> 
    <a class="link link-hover p-3 "target="_blank" href=' https://www.facebook.com/profile.php?id=100073239757273'><img className='bg-white'  width="30px" height="30px" src="https://cdn-icons-png.flaticon.com/512/124/124010.png"  alt="" /> </a> 
    <a class="link link-hover p-3"target="_blank" href='https://www.pinterest.com/haritripura8090/'><img className='bg-white'  width="30px" height="30px" src={pinterest} alt="" /> </a> 
    <a class="link link-hover p-3"target="_blank" href='https://www.linkedin.com/in/hari-tripura-48b54024b/'><img className='bg-white'  width="30px" height="30px" src="https://www.kindpng.com/picc/m/363-3632986_logo-linkedin-png-rond-transparent-png.png"  alt="" /> </a> 
    
   
  </div>  
  <div>
    <p className='pb-5 font-samibold text-xl text-white'>Copyright © 2023 - All right reserved by Hari Kumar Tripura</p>
  </div>
</footer>
    );
};

export default Footer;