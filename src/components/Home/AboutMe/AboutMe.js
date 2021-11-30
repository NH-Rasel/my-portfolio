import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../my-image.png';

const AboutMe = () => {
    return (
        <div id="aboutMe" className="container" >
            <div class="d-flex align-items-center row ms-1" style={{ marginTop: '180px' }}>
                <div class="col-sm-12 col-lg-7 mb-3">
                    <h5 style={{ lineHeight: 1.7 }}
                        className="text-start">Hello! I'm Nur Hossain Rasel, a passionate web developer. I develop web applications, mobile applications, and desktop applications. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I love to make the web more open to the world. Currently I am graduating with a bachelor's degree in Electrical & Electronic Engg. from Chittagong Institute of Engg. & Tech. at Chittagong, Bangladesh.  I am available for any kind of job opportunity that suits my interests.</h5>
                    <div style={{ marginLeft: '-22px' }} className="d-flex justify-content start mt-3">
                        <a href="https://doc-10-3c-docs.googleusercontent.com/docs/securesc/fgktbrosslhkhi8bgcj83e6s6mklt5gr/vfd2bqaet553m6kl9lvu98lpmmclqr99/1638206175000/17362211290581971110/17362211290581971110/1kIHSASOizTkRPgKCYw6gZcicpYZjtKGj?e=download&authuser=0&nonce=t521f5dsvls06&user=17362211290581971110&hash=bio1kuhpe1b1rtc5firvtvsu3mholt0g">
                            <button style={{ backgroundColor: 'aqua', color: 'rgb(7, 4, 32)' }} type="button" className="btn btn-lg p-3 mt-3 ms-4">Get Resume</button>
                        </a>
                        <Link style={{ textDecoration: 'none' }} to="/"><button style={{ border: '1px solid aqua', color: 'aqua' }} type="button" className="btn btn-lg p-3 mt-3 ms-3">Contact Me</button></Link>
                    </div>
                </div>
                <div class="col-sm-12 col-lg-5 d-flex align-items-center">
                    <img className="mt-sm-4 ms-lg-4" style={{ width: '320px' }} src={image} alt="" />
                    <div>
                        <p style={{ transform: 'rotate(90deg)', marginTop: '41px', border: '1px solid aqua', borderRadius: '8px', padding: '8px', color: 'aqua' }}>ABOUT ME</p>
                        <hr style={{ transform: 'rotate(90deg)', width: '100px', marginTop: '80px' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;