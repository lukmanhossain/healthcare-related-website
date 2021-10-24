import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h1 className="mt-3 text-primary">Our Services</h1>
            <p className="mb-3">Take our exclusive service. We care for your health.</p>
            <div className="service-container mx-3">
                {
                    services.map(service => <Service
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;