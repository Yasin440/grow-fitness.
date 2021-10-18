import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = (props) => {
    const { _id, name, picture, details } = props.service;
    return (
        <div className="col serviceCard">
            <div className="card h-100">
                <div className='p-3'>
                    <img src={picture} className="card-img-top" alt="img" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text text-muted">{details.slice(0, 100)}</p>
                </div>
                <div className='text-center my-3'>
                    <Link to={`/details/${_id}`}>
                        <button className="detailsBtn"><i className="fas fa-info-circle me-2"></i>Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;