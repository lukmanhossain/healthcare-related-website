import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { img, name, description } = service;
    return (
        <div className="service">
            <img className="p-3" src={img} alt="" />
            <h3 className="p-2">{name}</h3>
            <p className="p-2">{description}</p>
        </div>
    );
};

export default Service;