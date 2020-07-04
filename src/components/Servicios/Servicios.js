import React from 'react';
import './styleServicios.css';
import clinica from '../../assets/img/svs/veter.jpg';
import estetica from '../../assets/img/svs/foto1.jpg';
import hotel from '../../assets/img/svs/foto2.jpg';


const Servicios = () => {
    return ( 
        <div className= "section">
            <div className="servicios">
                <div className="title"><h2><strong> Cuidamos a tu mascota como si fuera la nuestra.</strong></h2></div>
                    <div className="lorem"><p>Queremos acompañarte en los cuidados de tu mascota.<br/>Pedí tu turno online y conocé todos nuestros servicios.</p></div>
                        <button id="boton">VER MÁS </button>
                </div>       
         <div>
    </div>
             <div className="images">
                <figure>
                    <img className="imge" alt="" src={clinica}></img>
                        <figcaption>Clínica</figcaption>
                </figure>
                <figure>
                    <img className="imge"  alt="" src={estetica}></img>
                        <figcaption>Estética y spa</figcaption>
                </figure>
                <figure>
                    <img className="imge" alt="" src={hotel}></img>
                        <figcaption>Hotel</figcaption>
                </figure>  
            </div> 

        </div>

     );
}
 
export default Servicios;