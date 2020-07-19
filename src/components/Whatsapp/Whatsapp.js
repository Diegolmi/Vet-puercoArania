import React from 'react';
import './wsp.css'

const Whatsapp = () => {
    return ( 
        <div>
        <a href="https://api.whatsapp.com/send?phone=54381569842" className="float" target="_blank" rel="noopener noreferrer">
        <i id="wsp" className="fa fa-whatsapp my-float"></i>
        </a>
        </div>
     );
}
 
export default Whatsapp;