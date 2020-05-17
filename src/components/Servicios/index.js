import React from 'react';
import './style.css';
import clinica from '../../assets/img/svs/veter.jpg';
import estetica from '../../assets/img/svs/foto1.jpg';
import hotel from '../../assets/img/svs/foto2.jpg';



const Servicios = () => {
    return ( 
            
        <div className= "section">
            <div className="servicios">
                <div className="title"><h2><strong> Nuestros Servicios</strong></h2></div>
                <div className="lorem"><p>Porque nos importa tanto como a vos, queremos acompañarte en los cuidados de tu mascota.<br/>Contamos con un equipo de profesionales en cada categoría para atender a sus necesidades.</p></div>
        <button id="boton">Ver todos</button>
         </div>       
        <div>


</div>

             <div className="images">
                <figure>
                <img src={clinica}></img>
                <figcaption>Clínica</figcaption>
                </figure>
                <figure>
                <img src={estetica}></img>
                <figcaption>Estética y spa</figcaption>
                </figure>
                <figure>
                <img src={hotel}></img>
                <figcaption>Hotel</figcaption>
                </figure>
                




                
            </div> 

        </div>

     );
}
 
export default Servicios;