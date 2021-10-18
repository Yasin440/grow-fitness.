import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard/ServiceCard';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id='services' className='container my-5'>
            <div className="serviceTitle text-center">
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