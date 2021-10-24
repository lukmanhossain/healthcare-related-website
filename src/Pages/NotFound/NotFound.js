import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404/404.jpg';


const NotFound = () => {
    return (
        <div>
            <img className="img-fluid" src={notfound} alt="" />
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;