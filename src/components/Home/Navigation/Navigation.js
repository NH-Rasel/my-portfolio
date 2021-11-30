import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navigation = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg me-auto">
                <div className="container-fluid m-3">
                    <div>
                        <Link className="navbar-brand me-lg-5" to="/home">
                            <img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" />
                        </Link>
                        <button style={{ color: 'aqua' }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span style={{ backgroundColor: 'aqua' }} className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-4 mb-lg-0">
                            <li className="nav-item me-lg-4">
                                <Link as={HashLink} style={{ textDecoration: 'none', color: 'aqua' }}
                                    className="nav-link active" aria-current="page" to="/home#aboutMe">About Me</Link>
                            </li>
                            <li className="nav-item me-lg-4">
                                <Link as={HashLink} style={{ textDecoration: 'none', color: 'aqua' }}
                                    className="nav-link active" aria-current="page" to="/home#skill">Skill</Link>
                            </li>
                            <li className="nav-item me-lg-4">
                                <Link as={HashLink} style={{ textDecoration: 'none', color: 'aqua' }}
                                    className="nav-link active" aria-current="page" to="/home#portfolio">Portfolio</Link>
                            </li>
                            <li className="nav-item me-lg-4">
                                <Link as={HashLink} style={{ textDecoration: 'none', color: 'aqua' }}
                                    className="nav-link active" aria-current="page" to="/home#contact">Contact</Link>
                            </li>
                        </ul>
                        <a href="https://doc-10-3c-docs.googleusercontent.com/docs/securesc/fgktbrosslhkhi8bgcj83e6s6mklt5gr/vfd2bqaet553m6kl9lvu98lpmmclqr99/1638206175000/17362211290581971110/17362211290581971110/1kIHSASOizTkRPgKCYw6gZcicpYZjtKGj?e=download&authuser=0&nonce=t521f5dsvls06&user=17362211290581971110&hash=bio1kuhpe1b1rtc5firvtvsu3mholt0g">
                            <button style={{ border: '1px solid aqua', color: 'aqua' }} type="button" className="btn">Resume</button>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;