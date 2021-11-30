import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Navigation from '../Navigation/Navigation'
import Portfolio from '../Portfolio/Portfolio';
import Skill from '../Skill/Skill';
import BackToTop from "react-back-to-top-button";
import { BiArrowToTop } from "react-icons/bi";

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <AboutMe />
            <Skill />
            <Portfolio />
            <Contact />
            <BackToTop
                showOnScrollUp
                showAt={100}
                speed={1500}
                easing="easeInOutQuint"
            >
                <BiArrowToTop style={{ color: 'aqua' }} />
            </BackToTop>
        </div>
    );
};

export default Home;