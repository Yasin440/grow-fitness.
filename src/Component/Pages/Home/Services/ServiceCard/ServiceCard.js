import React from 'react';
import './ServiceCard.css';

const ServiceCard = (props) => {
    const { name, picture, details } = props.service;
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
                    <button className="detailsBtn"><i class="fas fa-info-circle me-2"></i>Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;