import React from 'react';
import './Skill.css';

const Skill = () => {
    return (
        <div id="skill" className="container ms-2" style={{ marginTop: '150px' }}>
            <div className="row">
                <div className="col-2 d-flex flex-column align-items-center">
                    <hr style={{ transform: 'rotate(90deg)', width: '100px', marginTop: '80px' }} />
                    <p style={{ transform: 'rotate(-90deg)', marginTop: '60px', border: '1px solid aqua', borderRadius: '8px', padding: '8px', color: 'aqua' }}>MY SKILLS</p>
                </div>
                <div className="col-10">
                    <div className="row row-cols-1 row-cols-md-4 g-3">
                        <div className="col">
                            <div className="skill-card">
                                <div className="box">
                                    <div className="percent">
                                        <svg className="skill-svg">
                                            <circle cx="70" cy="70" r="70"></circle>
                                            <circle cx="70" cy="70" r="70"></circle>
                                        </svg>
                                        <div className="num">
                                            <h2>85<span>%</span></h2>
                                        </div>
                                    </div>
                                    <h2 className="text">Html</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="skill-card">
                                <div className="box">
                                    <div className="percent">
                                        <svg className="skill-svg">
                                            <circle cx="70" cy="70" r="70"></circle>
                                            <circle cx="70" cy="70" r="70"></circle>
                                        </svg>
                                        <div className="num">
                                            <h2>80<span>%</span></h2>
                                        </div>
                                    </div>
                                    <h2 className="text">CSS</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="skill-card">
                                <div className="box">
                                    <div className="percent">
                                        <svg className="skill-svg">
                                            <circle cx="70" cy="70" r="70"></circle>
                                            <circle cx="70" cy="70" r="70"></circle>
                                        </svg>
                                        <div className="num">
                                            <h2>80<span>%</span></h2>
                                        </div>
                                    </div>
                                    <h2 className="text">Bootstrap</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="skill-card">
                                <div className="box">
                                    <div className="percent">
                                        <svg className="skill-svg">
                                            <circle cx="70" cy="70" r="70"></circle>
                                            <circle cx="70" cy="70" r="70"></circle>
                                        </svg>
                                        <div className="num">
                                            <h2>70<span>%</span></h2>
                                        </div>
                                    </div>
                                    <h2 className="text">Javascript</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="skill-card">
                                <div className="box">
                                    <div className="percent">
                                        <svg className="skill-svg">
                                            <circle cx="70" cy="70" r="70"></circle>
                                            <circle cx="70" cy="70" r="70"></circle>
                                        </svg>
                                        <div className="num">
                                            <h2>70<span>%</span></h2>
                                        </div>
                                    </div>
                                    <h2 className="text">React</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="skill-card">
                                <div className="box">
                                    <div className="percent">
                                        <svg className="skill-svg">
                                            <circle cx="70" cy="70" r="70"></circle>
                                            <circle cx="70" cy="70" r="70"></circle>
                                        </svg>
                                        <div className="num">
                                            <h2>65<span>%</span></h2>
                                        </div>
                                    </div>
                                    <h2 className="text">Node JS</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="skill-card">
                                <div className="box">
                                    <div className="percent">
                                        <svg className="skill-svg">
                                            <circle cx="70" cy="70" r="70"></circle>
                                            <circle cx="70" cy="70" r="70"></circle>
                                        </svg>
                                        <div className="num">
                                            <h2>60<span>%</span></h2>
                                        </div>
                                    </div>
                                    <h2 className="text">Express JS</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="skill-card">
                                <div className="box">
                                    <div className="percent">
                                        <svg className="skill-svg">
                                            <circle cx="70" cy="70" r="70"></circle>
                                            <circle cx="70" cy="70" r="70"></circle>
                                        </svg>
                                        <div className="num">
                                            <h2>60<span>%</span></h2>
                                        </div>
                                    </div>
                                    <h2 className="text">MongoDB</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Skill;