import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.png';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <img className="notfound-img" src={notfound} alt="" />
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;