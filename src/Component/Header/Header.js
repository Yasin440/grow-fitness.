import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <nav className="navbar navbar-expand-lg navbar-light header">
            <div className='container'>
                <img className='logo' src='https://i.ibb.co/rb8w8Lj/Fitness-logo.png' alt='logo' />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="pages navbar-nav me-auto mb-2 mb-lg-0">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                    </div>
                    <form className="d-flex">
                        <small className='me-2 user'>
                            <p className='m-0'>Sign as:</p>
                            <p className='m-0'>{user?.email}</p>
                        </small>
                        {
                            user?.email ?
                                <NavLink to='/login'>
                                    <button onClick={logOut} className="login"><i className="fas fa-sign-in-alt me-1"></i>logOut</button>
                                </NavLink>
                                :
                                <NavLink to='/login'>
                                    <button className="login"><i className="fas fa-sign-in-alt me-1"></i>login</button>
                                </NavLink>
                        }

                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;