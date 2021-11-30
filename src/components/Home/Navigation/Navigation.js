import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Navigation.css'

const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <div class="patterns">
                        <svg>
                            <text x="15%" y="40%" text-anchor="middle"  >
                                NH
                            </text>
                        </svg>
                    </div>
                    <Navbar.Toggle />
                    <Navbar.Collapse style={{ marginTop: '-65px' }} className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#aboutMe" style={{ textDecoration: 'none', color: 'aqua' }}>About Me</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#skill" style={{ textDecoration: 'none', color: 'aqua' }}>Skill</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#portfolio" style={{ textDecoration: 'none', color: 'aqua' }}>Portfolio</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#contact" style={{ textDecoration: 'none', color: 'aqua' }}>Contact</Nav.Link>
                        <a href="https://doc-10-3c-docs.googleusercontent.com/docs/securesc/fgktbrosslhkhi8bgcj83e6s6mklt5gr/vfd2bqaet553m6kl9lvu98lpmmclqr99/1638206175000/17362211290581971110/17362211290581971110/1kIHSASOizTkRPgKCYw6gZcicpYZjtKGj?e=download&authuser=0&nonce=t521f5dsvls06&user=17362211290581971110&hash=bio1kuhpe1b1rtc5firvtvsu3mholt0g">
                            <button style={{ border: '1px solid aqua', color: 'aqua' }} type="button" className="btn">Resume</button>
                        </a>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;