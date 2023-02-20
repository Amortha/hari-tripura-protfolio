import React from 'react';
import Portfolio1 from './../../image/protfolio1.png'
import Portfolio2 from './../../image/protfolio2.png'
import Protfolio3 from './../../image/protfolio3.png'
import Portfolio4 from './../../image/protfolio4.png'
import Googleadd1 from './../../image/googleadd1.png'
import Googleadd2 from './../../image/googleadd2.png'
import Googleadd3 from './../../image/googleadd3.png'
import Googleadd4 from './../../image/googleadd4.png'


const Portfolio = () => {
    return (
        <div id='protfolio'className='mx-8 mt-8'>
            <h1 className='font-bold text-4xl text-center text-purple-800'>PORTFOLIO</h1>
            <div className='mt-10 grid grid-cols-2 lg:grid-cols-4 gap-5'>
                <img className=' h-96  border-solid border-2 border-indigo-300' src={Portfolio1} alt='pic' />
                <img className=' h-96  border-solid border-2 border-indigo-300 ' src={Portfolio2} alt='pic' />
                <img className=' h-96  border-solid border-2 border-indigo-300' src={Protfolio3} alt='pic' />
                <img className=' h-96  border-solid border-2 border-indigo-300' src={Portfolio4} alt='pic' />
            </div>
            <div className='grid lg:grid-cols-2 gap-8 mt-5'>
                <img className='border-solid border-2 border-indigo-300' src={Googleadd1} alt="pic"/>
                <img  className='border-solid border-2 border-indigo-300' src={Googleadd2} alt="pic"/>
                <img  className='border-solid border-2 border-indigo-300' src={Googleadd3} alt="pic"/>
                <img  className=' border-solid border-2 border-indigo-300' src={Googleadd4} alt="pic"/>
            </div>
        </div>
    );
};

export default Portfolio;