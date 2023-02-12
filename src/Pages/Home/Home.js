import React from 'react';
import Navber from '../Hader/Navber';
import AboutUs from './AboutUs';
import Banar from './Banar';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Service from './Service';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Home = () => {
    return (
        <div className='mx-10'>
            <Navber></Navber>
            <Banar></Banar>
            <AboutUs></AboutUs>
            <Service></Service>
            <Portfolio></Portfolio>
            <Contact></Contact>
            <AnchorLink></AnchorLink>
        </div>
    );
};

export default Home;