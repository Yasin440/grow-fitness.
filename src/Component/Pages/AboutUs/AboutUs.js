import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
            <div className="about container-fluid py-5">
                <div className="row">
                    <div className="col-md-6 p-5">
                        <h4 className='aboutTitle'>About Us</h4>
                        <h2 className='my-5'>
                            From the moment you walk through the door you know Grow Fitness is a unique place
                        </h2>
                        <p className="text-muted">
                            When we created Grow fitness, we knew we wanted to be more than just a simple gym. Having worked in traditional gyms in the past, we knew we needed to create a concept that would provide our members with the most effective tools for success. This meant we needed to offer a wide range of classes both for children and adults.
                        </p>
                        <p className="text-muted mb-5">
                            This also meant we needed to provide a learning environment run by experienced and successful coaches. However, our most important goal was to create a welcoming atmosphere and community in which everyone feels a sense of belonging.
                        </p>
                        <div className="row">
                            <div className="col">
                                <p className="muted mb-1">CLASSES</p>
                                <h4 className='pColor'>Every Level</h4>
                            </div>
                            <div className="col">
                                <p className="muted mb-1">ENVIRONMENT</p>
                                <h4 className='pColor'>Clean and Airy</h4>
                            </div>
                            <div className="col">
                                <p className="muted mb-1">PRICES</p>
                                <h4 className='pColor'>Affordable</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col"><img className='aboutImg' src="https://i.ibb.co/X8NNCft/about-01.jpg" alt="img" /></div>
                            <div className="col"><img className='aboutImg2' src="https://i.ibb.co/6X2pgnD/about-02.jpg" alt="img" /></div>
                        </div>
                        <div className='me-auto'><img className='aboutImg3' src="https://i.ibb.co/xSV7kTs/about-03.jpg" alt="img" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;