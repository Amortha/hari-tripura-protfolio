import React from 'react';
// import Navber from '../Hader/Navber';
import AboutUs from './AboutUs';
import Banar from './Banar';
import Contact from './Contact';
import Portfolio from './Portfolio';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Skills from './Skills';
import Certificat from './Certificat';

import Cuntups from './Cuntups';
import Services from './Services';
import Footer from './Footer';


const Home = () => {
    return (
        <div className=''>
            {/* <Navber></Navber> */}
            <Banar></Banar>
            <AboutUs></AboutUs>
            <Skills></Skills>
            <Services></Services>
            <Certificat></Certificat>
            <Cuntups></Cuntups>
            <Portfolio></Portfolio>
            <Contact></Contact>
            <Footer></Footer>
            <AnchorLink></AnchorLink>
           
        </div>
    );
};

export default Home;