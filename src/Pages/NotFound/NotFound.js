import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404/404.png';
import './NotFound.css';


const NotFound = () => {
    return (
        <div className="notfound">
            <img className="img-fluid" src={notfound} alt="" />
            <br />
            <Link to="/">
                <button className="btn btn-primary mt-3">Go Back to Home Page</button>
            </Link>
        </div>
    );
};

export default NotFound;