import React from 'react'
import './Error.css';
import { Link } from 'react-router-dom';

const Error404 = () => {
   
    return (
        <>
            <div id="container-not-found">
                <div className="content-error">
                    <h2 className="h2-content">404</h2>
                    <h4 className="h4-content anim-typewriter">Opps! Page Not Found</h4>
                    <p className="para-content">The page you were looking for doesn't exist. You may have mistyped the address or the page may have moved.</p>
                    <Link to="/" className="back-to-home">Back to Home</Link>
                </div>
            </div>
        </>
    );
}

export default Error404;
