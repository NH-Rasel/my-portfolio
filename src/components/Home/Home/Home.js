import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation'

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <AboutMe />
        </div>
    );
};

export default Home;