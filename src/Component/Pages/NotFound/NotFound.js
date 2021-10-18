import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="notFound">
            <div className="row container">
                <img className='col-12 w-50 m-auto' src="https://i.ibb.co/xhYCW9f/notFound.jpg" alt="img" />
            </div>
            <div className='button'>
                <h2>--Oops--</h2>
                <p>Nothing to found</p>
                <Link to='/home'>
                    <button><i className="fas fa-arrow-left pe-1"></i>Back To Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;