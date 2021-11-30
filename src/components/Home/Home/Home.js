import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Navigation from '../Navigation/Navigation'
import Portfolio from '../Portfolio/Portfolio';
import Skill from '../Skill/Skill';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <AboutMe />
            <Skill />
            <Portfolio />
            <Contact />
        </div>
    );
};

export default Home;