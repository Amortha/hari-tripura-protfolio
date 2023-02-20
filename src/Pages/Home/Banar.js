import React from 'react';
import Main from './../../image/mainpic.png'
import { Typewriter } from 'react-simple-typewriter';
import AnchorLink from 'react-anchor-link-smooth-scroll';



const Banar = () => {
    const handleType = (count) => {
        // access word count number

    };

    const handleDone = () => {

    };
    return (
        <div className=' grid lg:grid-cols-2 mx-10' id='home'>
            <div className='lg:mt-32'>
                <h1 className='text-4xl font-bold  text-center' >
                    Hello!<br />
                    I'M Hari Kumar Tripura<br />
                    I,M Expert in {" "}
                    <span className='text-purple-800'>
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
                <p className='break text-xl  font-semibold'>Hey, I am Hari Tripura an professional Digital Marketer from  Bangladesh and I have been working as a digital marketer with 2+ years. During these two years I have completed many clients  project in the Local market and International market successfully. So Let,s make an effective plan for your business.
                </p>
                <div className='text-center mt-6'>
                    <button className='w-32 h-10  m-1 border-solid border-2 border-indigo-600 font-bold hover:bg-purple-800 hover:text-white' ><AnchorLink href="#contact">Hire Me</AnchorLink></button>
                    <button className='w-36 h-10 m-1 border-solid border-2 border-indigo-600 font-bold hover:bg-purple-800 hover:text-white'><a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/17qpOCHURd3PzaQaPz1C8Fn52lTJrl9eO/view?usp=share_link">See My Resume</a> </button>
                </div>
            </div>
            <div >
                <img className='m-auto' src={Main} alt='' />
            </div>
        </div>
    );
};

export default Banar;