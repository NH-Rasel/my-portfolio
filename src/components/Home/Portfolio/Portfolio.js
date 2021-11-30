import React from 'react';
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import './Portfolio.css';
import sawari from '../../../sawari .jpg';
import holiday from '../../../holiday.jpg';
import mankind from '../../../mankind.jpg';
import panda from '../../../panda.jpg';
import footballTv from '../../../footballTv.jpg';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Portfolio = () => {
    return (
        <div id="portfolio" className="container m-5">
            <div className="row">
                <div className="col-10">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col text-start">
                            <div class="card">
                                <img src={sawari} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Niche Website</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <a href="https://github.com/NH-Rasel/sawari-automobiles-client"><BsGithub className="m-2 card-icon" /></a>
                                            <a href="https://sawari-automobiles.web.app/"><BiLinkExternal className="m-2 card-icon" /></a>
                                        </div>
                                        <div>
                                            <Nav.Link as={HashLink} to="/home#skill" style={{ textDecoration: 'none', color: 'aqua' }}><button style={{ border: '1px solid aqua', color: 'aqua' }} type="button" className="btn">Details</button></Nav.Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col text-start">
                            <div class="card">
                                <img src={holiday} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Tourism Website</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <a href="https://github.com/NH-Rasel/holiday-tourism-client"><BsGithub className="m-2 card-icon" /></a>
                                            <a href="https://holiday-tourism-c9766.web.app/"><BiLinkExternal className="m-2 card-icon" /></a>
                                        </div>
                                        <div>
                                            <Nav.Link as={HashLink} to="/home#skill" style={{ textDecoration: 'none', color: 'aqua' }}><button style={{ border: '1px solid aqua', color: 'aqua' }} type="button" className="btn">Details</button></Nav.Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col text-start">
                            <div class="card">
                                <img src={mankind} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Healthcare Website</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <a href="https://github.com/NH-Rasel/mankind-consultation-center"><BsGithub className="m-2 card-icon" /></a>
                                            <a href="https://mankind-consultation-center.web.app/"><BiLinkExternal className="m-2 card-icon" /></a>
                                        </div>
                                        <div>
                                            <Nav.Link as={HashLink} to="/home#skill" style={{ textDecoration: 'none', color: 'aqua' }}><button style={{ border: '1px solid aqua', color: 'aqua' }} type="button" className="btn">Details</button></Nav.Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col text-start">
                            <div class="card">
                                <img src={panda} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">E-Commerce Website</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <a href="https://github.com/NH-Rasel/panda-commerce-bootstrap"><BsGithub className="m-2 card-icon" /></a>
                                            <a href="https://panda-practice-site.netlify.app/"><BiLinkExternal className="m-2 card-icon" /></a>
                                        </div>
                                        <div>
                                            <Nav.Link as={HashLink} to="/home#skill" style={{ textDecoration: 'none', color: 'aqua' }}><button style={{ border: '1px solid aqua', color: 'aqua' }} type="button" className="btn">Details</button></Nav.Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col text-start">
                            <div class="card">
                                <img src={footballTv} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Football TV</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <a href="https://github.com/NH-Rasel/copa-america-2021"><BsGithub className="m-2 card-icon" /></a>
                                            <a href="https://football-tv.netlify.app/"><BiLinkExternal className="m-2 card-icon" /></a>
                                        </div>
                                        <div>
                                            <Nav.Link as={HashLink} to="/home#skill" style={{ textDecoration: 'none', color: 'aqua' }}><button style={{ border: '1px solid aqua', color: 'aqua' }} type="button" className="btn">Details</button></Nav.Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="d-flex flex-column align-items-center">
                        <p style={{ transform: 'rotate(90deg)', marginTop: '70px', border: '1px solid aqua', borderRadius: '8px', padding: '8px', color: 'aqua' }}>PORTFOLIO</p>
                        <hr style={{ transform: 'rotate(90deg)', width: '100px', marginTop: '64px' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;