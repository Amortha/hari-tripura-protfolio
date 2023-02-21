import React from 'react';

const Service = ({data}) => {
    return (
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"  className='bg-base-300 p-12 hover:bg-purple-800  hover:text-white'>
           <h1 className='hover:text-white'>{data.img}</h1>
           <h2 className='text-xl lg:text-2xl font-bold mt-5 mb-3'>{data.name}</h2>
           <h2 className=''>{data. descraption}</h2>
        </div>
    );
};

export default Service;