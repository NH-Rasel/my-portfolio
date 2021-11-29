import React from 'react';
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div class="container">
            <div class="row m-5">
                <div class="col-2 d-flex flex-column align-items-center">
                    <div>
                        <a href="https://github.com/NH-Rasel"><BsGithub class="m-2" /></a><br />
                        <a href="https://www.linkedin.com/in/nur-hossain-rasel/"><BsLinkedin class="m-2" /></a><br />
                        <a href="https://www.facebook.com/profile.php?id=100013807599316"><BsFacebook class="m-2" /></a>
                        <Link to="/"></Link>
                    </div>
                    <hr style={{ transform: 'rotate(90deg)', width: '50px', marginTop: '35px' }} />
                    <p style={{ transform: 'rotate(-90deg)', marginTop: '41px', border: '1px solid grey', borderRadius: '5px', padding: '4px' }}>FOLLOW ME</p>

                </div>
                <div class="col-10">
                    <div className="text-start mt-5">
                        <p>Hello! I am</p>
                        <h1>Nur Hossain Rasel</h1>
                        <h4>Full Stack Developer</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;