import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const Navigation = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid m-2">
                <div>
                    <NavLink class="navbar-brand me-lg-5" to="/home">
                        <img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" />
                    </NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-4 mb-lg-0">
                        <li class="nav-item me-lg-4">
                            <NavHashLink style={{ textDecoration: 'none' }} class="nav-link active" aria-current="page" to="/home#aboutMe">About Me</NavHashLink>
                        </li>
                        <li class="nav-item me-lg-4">
                            <NavHashLink style={{ textDecoration: 'none' }} class="nav-link active" aria-current="page" to="/home#skill">Skill</NavHashLink>
                        </li>
                        <li class="nav-item me-lg-4">
                            <NavHashLink style={{ textDecoration: 'none' }} class="nav-link active" aria-current="page" to="/home#portfolio">Portfolio</NavHashLink>
                        </li>
                        <li class="nav-item me-lg-4">
                            <NavHashLink style={{ textDecoration: 'none' }} class="nav-link active" aria-current="page" to="/home#contact">Contact</NavHashLink>
                        </li>
                    </ul>
                    <NavLink to="/"><button type="button" class="btn btn-primary">Primary</button></NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;