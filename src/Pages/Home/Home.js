import React from 'react';
import AboutUs from './AboutUs';
import Banar from './Banar';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Service from './Service';


const Home = () => {
    return (
        <div className='mx-10'>
            <Banar></Banar>
        <AboutUs></AboutUs>
        <Service></Service>
        <Portfolio></Portfolio>
        <Contact></Contact>
        </div>
    );
};

export default Home;