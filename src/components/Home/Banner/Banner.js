import React from 'react';
import { Nav } from 'react-bootstrap';
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Banner.css';

const Banner = () => {
    return (
        <div className="container ms-2">
            <div className="row">
                <div className="col-2 d-flex flex-column align-items-center">
                    <div>
                        <a href="https://github.com/NH-Rasel"><BsGithub style={{ color: 'aqua' }} className="m-2" /></a><br />
                        <a href="https://www.linkedin.com/in/nur-hossain-rasel/"><BsLinkedin style={{ color: 'aqua' }} className="m-2" /></a><br />
                        <a href="https://www.facebook.com/profile.php?id=100013807599316"><BsFacebook style={{ color: 'aqua' }} className="m-2" /></a>
                        <Link to="/"></Link>
                    </div>
                    <hr style={{ transform: 'rotate(90deg)', width: '50px', marginTop: '35px' }} />
                    <p style={{ transform: 'rotate(-90deg)', marginTop: '40px', border: '1px solid aqua', borderRadius: '8px', padding: '8px', color: 'aqua' }}>FOLLOW ME</p>

                </div>
                <div className="col-10 text-start">
                    <div className="mt-1 ms-4">
                        <p style={{ color: 'aqua' }}>Hello! This is</p>
                        <div className="banner-text">
                            <div className="box">
                                <div className="title">
                                    <span className="block"></span>
                                    <h1 style={{ fontSize: '60px', fontWeight: 800, marginTop: '-20px', marginBottom: '10px' }}>Nur Hossain Rasel</h1>
                                </div>
                            </div>
                            <div className="role">
                                <div className="block"></div>
                                <h4 style={{ color: 'aqua' }} className="fw-bolder">Full Stack Developer</h4>
                            </div>
                        </div>
                    </div>
                    <h5 className="ms-4">
                        <div className="wordCarousel">
                            <span>Technology: </span>
                            <ul className="flip4 fw-bolder">
                                <li className="tech">HTML</li>
                                <li className="tech">CSS</li>
                                <li className="tech">JavaScript</li>
                                <li className="tech">React</li>
                            </ul>
                        </div>
                    </h5>
                    <br />
                    <div className="d-flex align-items-center">
                        <a href="https://doc-10-3c-docs.googleusercontent.com/docs/securesc/fgktbrosslhkhi8bgcj83e6s6mklt5gr/vfd2bqaet553m6kl9lvu98lpmmclqr99/1638206175000/17362211290581971110/17362211290581971110/1kIHSASOizTkRPgKCYw6gZcicpYZjtKGj?e=download&authuser=0&nonce=t521f5dsvls06&user=17362211290581971110&hash=bio1kuhpe1b1rtc5firvtvsu3mholt0g">
                            <button style={{ backgroundColor: 'aqua', color: 'rgb(7, 4, 32)' }} type="button" className="btn btn-lg p-3 ms-4">Get Resume</button>
                        </a>
                        <Nav.Link as={HashLink} to="/home#skill" style={{ textDecoration: 'none', color: 'aqua' }}><button style={{ border: '1px solid aqua', color: 'aqua' }} type="button" className="btn btn-lg p-3">My Skills</button></Nav.Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;