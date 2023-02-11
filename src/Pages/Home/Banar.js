import React from 'react';
import Main from './../../image/mainpic.png'
import { Typewriter } from 'react-simple-typewriter';



const Banar = () => {
    const handleType = (count: number) => {
        // access word count number

    };

    const handleDone = () => {

    };
    return (
        <div className='w-full mt-5 grid lg:grid-cols-2'>
            <div className='lg:mt-32'>
                <h1 className='text-3xl font-bold text-black text-center' >
                    Hello!<br />
                    I'M Hari Kumar Tripura<br />
                    I,M Expert in {" "}
                    <span className='text-red-700'>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={["Facebook Marketing", "Google marketing", "Seo (Search Engine Optimization)", " Email  Marketing", "youtube marketin", "Shopify Store Design"]}
                            loop={50}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopDone={handleDone}
                            onType={handleType}
                        />
                    </span>
                </h1>
                <br />
                <br />
                <p className='break-all text-black font-semibold'>I,m Expert in : Facebook Marketing , Google marketing , Seo (Search Engine Optimization) , Shopify Store Design, Email  Marketing ,youtube marketing
                </p>
            </div>
            <div>
                <img className='m-auto' src={Main} alt='' />
            </div>
        </div>
    );
};

export default Banar;