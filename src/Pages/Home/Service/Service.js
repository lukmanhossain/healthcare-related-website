import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, img, name, description } = service;
    return (
        <div className="service">
            <img className="p-3" src={img} alt="" />
            <h3 className="p-2">{name}</h3>
            <p className="p-2">{description}</p>
            <Link to={`/knowmore/${id}`}>
                <button className="btn btn-primary mb-2">Click here to View Details</button>
            </Link>
        </div>
    );
};

export default Service;