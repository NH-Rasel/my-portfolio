import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Navigation.css';

<style>
    @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
</style>

const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <div className="patterns">
                        <svg>
                            <text x="15%" y="40%" text-anchor="middle"  >
                                NH
                            </text>
                        </svg>
                    </div>
                    <Navbar.Toggle style={{ backgroundColor: 'aqua' }} />
                    <Navbar.Collapse style={{ marginTop: '-60px' }} className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#aboutMe" style={{ textDecoration: 'none', color: 'aqua' }}>About Me</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#skill" style={{ textDecoration: 'none', color: 'aqua' }}>Skill</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#portfolio" style={{ textDecoration: 'none', color: 'aqua' }}>Portfolio</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#contact" style={{ textDecoration: 'none', color: 'aqua' }}>Contact</Nav.Link>
                        <a href="https://drive.google.com/uc?export=download&id=1kIHSASOizTkRPgKCYw6gZcicpYZjtKGj">
                            <button style={{ border: '1px solid aqua', color: 'aqua' }} type="button" className="btn">Resume</button>
                        </a>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;