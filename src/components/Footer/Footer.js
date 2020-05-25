import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter,} from "mdbreact";
import 'mdbreact/dist/css/mdb.css';
import puercoaraña from './puercoaraña.png';
import'./footer.css';


const Footer = () => {
  return (
    <div className="footer">
    <MDBFooter id="fondo" color="mdb-color" className=" font-small mt-2 pt-4 ">
      <MDBContainer fluid className=" text-center text-md-left">
        <MDBRow color="mdb-color ">
          <MDBCol md="3 "  className="forma"> 
            <img src={puercoaraña} className="img" alt="logo" />
          </MDBCol>
          <hr className="clearfix w-100 d-md-none"/>
          <MDBCol md="2" lg="3"   >
            <h5 className="text-uppercase mb-4 font-weight-bold">Información</h5>
            <div className=" d-flex flex-column ">
            <div  className="d-flex ">
            <img src="https://pngimage.net/wp-content/uploads/2018/06/icono-de-direccion-png.png" className="iconos" alt="logo" />
            <p className="m-2 p-1" >
              Gral. Paz 576, SM TUCUMAN
            </p>
            </div>
            <div id="gmail" className="d-flex ">
            <img src="https://i.pinimg.com/originals/84/7c/08/847c083cc09040091439e3c05d1fedde.png" className="iconos" alt="logo" />
            <p className="m-2 p-1">
               puercoarañaoficial@gmail.com
            </p>
            </div>
            <div id="celular" className="d-flex">
            <img src="https://www.theblocklearning.com/wp-content/uploads/2018/09/mobile.png" className="iconos" alt="logo" />
            <p className="m-2 p-1">
               + 54381569842
            </p>
            </div>
            <div  id="telefono" className="d-flex">
            <img src="https://static.websguru.com.ar/var/m_2/2f/2f3/29082/1878674-icon-Phone-circle_zpsbt3frfu1.png" className="iconos" alt="logo" />
            <p className="m-2 p-1">
               + 54381569842
            </p>
            </div>
            </div>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none"/>
          <MDBCol md="5" lg="20" className="text-center">
            <div className="padre">
              <div className="redes">
          <h5 className="text-uppercase mb-2 font-weight-bold">  Redes Sociales  </h5>
            <div className="redessociales">
              <div className="facebook">
             <a href="#!"><img  src="https://images.vexels.com/media/users/3/137253/isolated/preview/90dd9f12fdd1eefb8c8976903944c026-icono-de-facebook-logo-by-vexels.png" className="iconos" alt="logo" /></a>
             </div>
             <div className="instagram">
               <a href="#!">
              <img src="https://es.logodownload.org/wp-content/uploads/2018/10/instagram-logo1.png" className="iconos" alt="logo" />
              </a>
              </div>
             </div>
             <div className="links d-flex flex-column p-4">
               <h5 className="text-uppercase mb-4 font-weight-bold  ">Secciones</h5>
               <div className="columnas d-flex justify-content-center">
               <div className="d-flex ">
            <ul >
              <li className="list-unstyled d-flex justify-content-start">
                <a href="#!">solicitar turno</a>
              </li>
              <li className="list-unstyled d-flex justify-content-start p-1">
                <a href="#!">quienes somos?</a>
              </li>
              <li className="list-unstyled d-flex justify-content-start p-1">
                <a href="#!">cuenta</a>
              </li>
              <li className="list-unstyled d-flex justify-content-start p-1">
                <a href="#!">seguimiento</a>
              </li>
            </ul>
            </div>
            <div className="d-flex ">
            <ul>
              <li className="list-unstyled d-flex justify-content-start">
                <a href="#!">Tienda</a>
              </li>
              <li className="list-unstyled d-flex justify-content-start p-1">
                <a href="#!">Alimentos</a>
              </li>
              <li className="list-unstyled d-flex justify-content-start p-1">
                <a href="#!">Farmacia</a>
              </li>
              <li className="list-unstyled d-flex justify-content-start p-1">
                <a href="#!">Accesorio</a>
              </li>
            </ul>
            </div>
            </div>
            </div>
             </div>
             <div className="ubicacion">
              <div  md="5" >
              <h5 id="texto" className="text-uppercase mb-4 font-weight-bold">   ubicación   </h5>
             <div id="map-container"className=" rounded z-depth-1-half map-container " >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1049265915804!2d-65.20936748545087!3d-26.83661479649731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses!2sar!4v1589831719322!5m2!1ses!2sar"
              title="This is a unique title"
              width="120%"
              height="150%"
              frameBorder="0"
            />
          </div>
              </div>
              </div>  
              </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer >
      <div id="hola" className="footer-copyright text-center p-4 mt-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> PuercoAraña.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
}

export default Footer;