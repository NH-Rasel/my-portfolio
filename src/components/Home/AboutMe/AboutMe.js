import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../my-image.png';

const AboutMe = () => {
    return (
        <div id="aboutMe" className="container" >
            <div className="d-flex align-items-center row ms-1" style={{ marginTop: '188px' }}>
                <div className="col-sm-12 col-lg-7 mb-lg-4 mb-sm-5">
                    <h5 style={{ lineHeight: 1.7 }}
                        className="text-start">Hello! I'm Nur Hossain Rasel, a passionate web developer. I develop web applications. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I love to make the web more open to the world. Currently I am graduating with a bachelor's degree in Electrical & Electronic Engg. from Chittagong Institute of Engg. & Tech. at Chittagong, Bangladesh.  I am available for any kind of job opportunity that suits my interests.</h5>
                    <div style={{ marginLeft: '-22px' }} className="d-flex justify-content start mt-3">
                        <a href="https://drive.google.com/uc?export=download&id=1kIHSASOizTkRPgKCYw6gZcicpYZjtKGj">
                            <button style={{ backgroundColor: 'aqua', color: 'rgb(7, 4, 32)' }} type="button" className="btn btn-lg p-3 mt-3 ms-4">Get Resume</button>
                        </a>
                        <Link style={{ textDecoration: 'none' }} to="/"><button style={{ border: '1px solid aqua', color: 'aqua' }} type="button" className="btn btn-lg p-3 mt-3 ms-3">Contact Me</button></Link>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-5 d-flex align-items-center">
                    <img className=" ms-lg-4" style={{ width: '320px', marginTop: '-40px' }} src={image} alt="" />
                    <div className="d-flex flex-column align-items-center">
                        <p style={{ transform: 'rotate(90deg)', marginTop: '41px', border: '1px solid aqua', borderRadius: '8px', padding: '8px', color: 'aqua' }}>ABOUT ME</p>
                        <hr style={{ transform: 'rotate(90deg)', width: '100px', marginTop: '80px' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;