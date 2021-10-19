// import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import ServiceCard from './ServiceCard/ServiceCard';
import './Services.css';

const Services = () => {
    const{services} = useAuth();
    return (
        <div id='services' className='container py-5'>
            <div className="serviceTitle text-center pt-4">
                <h1 className='title'>Our Best Services</h1>
                <p className="muted">Get our best services according your choice. Always try to get consolute with expats.</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-5 my-5">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;