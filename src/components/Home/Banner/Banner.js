import React from 'react';
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

const Banner = () => {
    return (
        <div class="container m-4">
            <div class="row mt-5">
                <div class="col-2 d-flex flex-column align-items-center">
                    <div>
                        <a href="https://github.com/NH-Rasel"><BsGithub style={{ color: 'aqua' }} class="m-2" /></a><br />
                        <a href="https://www.linkedin.com/in/nur-hossain-rasel/"><BsLinkedin style={{ color: 'aqua' }} class="m-2" /></a><br />
                        <a href="https://www.facebook.com/profile.php?id=100013807599316"><BsFacebook style={{ color: 'aqua' }} class="m-2" /></a>
                        <Link to="/"></Link>
                    </div>
                    <hr style={{ transform: 'rotate(90deg)', width: '50px', marginTop: '35px' }} />
                    <p style={{ transform: 'rotate(-90deg)', marginTop: '41px', border: '1px solid aqua', borderRadius: '8px', padding: '8px', color: 'aqua' }}>FOLLOW ME</p>

                </div>
                <div class="col-10 text-start">
                    <div className="mt-3 ms-4">
                        <p style={{ color: 'aqua' }}>Hello! I am</p>
                        <h1 style={{ fontSize: '60px', fontWeight: 800, marginTop: '-20px', marginBottom: '10px' }}>Nur Hossain Rasel</h1>
                        <h4 style={{ color: 'aqua' }} className="fw-bolder">Full Stack Developer</h4>
                    </div>
                    <Typed
                        className="ms-4"
                        strings={["JavaScript | ReactJS"]}
                        typeSpeed={60}
                        backSpeed={70}
                        loop
                    />
                    <br />
                    <a href="https://doc-10-3c-docs.googleusercontent.com/docs/securesc/fgktbrosslhkhi8bgcj83e6s6mklt5gr/vfd2bqaet553m6kl9lvu98lpmmclqr99/1638206175000/17362211290581971110/17362211290581971110/1kIHSASOizTkRPgKCYw6gZcicpYZjtKGj?e=download&authuser=0&nonce=t521f5dsvls06&user=17362211290581971110&hash=bio1kuhpe1b1rtc5firvtvsu3mholt0g">
                        <button style={{ backgroundColor: 'aqua', color: 'rgb(7, 4, 32)' }} type="button" className="btn btn-lg p-3 mt-3 ms-4">Get Resume</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;