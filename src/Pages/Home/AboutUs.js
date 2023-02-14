import React from 'react';
import aboutaus from './../../image/aboutaus.png'

const AboutUs = () => {


  return (
    <div className='grid lg:grid-cols-2 gap-7 lg:mx-10 mt-16 ' id='aboutus'>
      <div >
        <img className='w-full px-5 lg:px-0' src={aboutaus} alt="pic" />
      </div>
      <div className='mx-12 '>
        <h1 className='text-xl font-bold text-purple-800'>About me</h1>
        <h1 className='text-xl lg:text-5xl  font-bold my-6'>Digital Marketing With Passion While Exploring The World</h1>
        <h1 className='break-all font-semibold text-gray-600' >
          I Am Hari Tripura As A Professional Digital Marketing Specialist.  I have Been running in this career for two+ Years. My Expertise in Social Media Marketing, Search Engine Marketing, SEO , Shopify Dropshipping store design & Email Marketing . I Can Grow Any Type Of Online Business. Because I Always Follow The Best Marketing Strategy For My Clients. I have done lots of social media and search engine project with many client in locally.. My goal & dedication is to help companies book their online visibility and attain their target audience correctly.
        </h1>
      </div>
    </div>
  );
};

export default AboutUs;
