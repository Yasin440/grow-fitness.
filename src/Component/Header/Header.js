import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-light header">
            <div className="container">
                <img className='logo' src='https://i.ibb.co/rb8w8Lj/Fitness-logo.png' alt='logo' />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="pages navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink to='/home'>Home</NavLink>
                        <NavLink to='/home#services'>Services</NavLink>
                        <NavLink to='/about'>About Us</NavLink>
                        <NavLink to='/contact'>Contact Us</NavLink>
                    </div>
                    <form className="d-flex">
                        <NavLink to='/login'>
                            <button className="login"><i className="fas fa-sign-in-alt me-1"></i>login</button>
                        </NavLink>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Header;