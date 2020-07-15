import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardUp,
  MDBAvatar,
  MDBCardBody,
  MDBTypography,
} from "mdbreact";
import "./style.css";
// import NavbarPage from '../Navbar/Nav';
// import Image from "react-bootstrap/Image";
// import { Link } from 'react-router-dom';
import NavbarPage from "../Navbar2/Nav2";

const TestimonialsPage = () => {
  return (
    <div>
      <div className="about">
        <NavbarPage />
        <MDBContainer>
          <div className="imagabout">
            <h1 className="titulo_about">
              Acerca De La Veterinaria Puerco Araña
            </h1>
          </div>
          <section className="text-center ">
            <h1 className="profesionales">Nuestros Profesionales</h1>
            <MDBRow>
              <MDBCol lg="4" md="12" className=" mb-lg-0 mb-4">
                <MDBCardUp color="info" />
                <MDBAvatar className="doctor">
                  <img
                    src="https://static-exp1.licdn.com/sc/p/com.linkedin.jobs-guest-frontend%3Ajobs-guest-frontend-static-content%2B1.0.24/f/%2Fjobs-guest-frontend%2Fimages%2Fcommon%2Fpeople%2Fuser19.jpg"
                    alt=""
                    className="rounded-circle"
                  />
                </MDBAvatar>
                <MDBCardBody>
                  <h5 className="font-weight-bold mb-4">Alfonso Jeink</h5>
                </MDBCardBody>
              </MDBCol>
              <MDBCol lg="4" md="6" className="mb-lg-0 mb-4">
                <MDBCardUp gradient="blue" />
                <MDBAvatar className="doctor">
                  <img
                    src="https://static-exp1.licdn.com/sc/p/com.linkedin.jobs-guest-frontend%3Ajobs-guest-frontend-static-content%2B0.0.2225/f/%2Fjobs-guest-frontend%2Fimages%2Fcommon%2Fpeople%2Fuser7.jpg"
                    alt=""
                    className="rounded-circle"
                  />
                </MDBAvatar>
                <MDBCardBody>
                  <h5 className="font-weight-bold mb-4">Carlos Paez</h5>
                </MDBCardBody>
              </MDBCol>
              <MDBCol lg="4" md="6" className="mb-lg-0 mb-4">
                <MDBCardUp className="indigo" />
                <MDBAvatar className="doctor">
                  <img
                    src="https://pbs.twimg.com/profile_images/658682688325464064/cFYpvy0S_400x400.jpg"
                    alt=""
                    className="rounded-circle "
                  />
                </MDBAvatar>
                <MDBCardBody>
                  <h5 className="font-weight-bold mb-4">Maria Kate</h5>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </section>
          <MDBCol className="texto1">
            <MDBTypography variant="h2" className="titulos">
              Historia de la Empresa
            </MDBTypography>
            <MDBTypography variant="body1" className="contenido1 paragraph">
              Puerco Araña es una empresa más de 20 años en el rubro
              veterinario. En sus comienzos se dedicó a la comercailización de
              alimentos para perros y gatos.
            </MDBTypography>
          </MDBCol>
          <MDBCol className="contenido2 d-flex">
            <div className="texto2">
              <MDBTypography variant="h2" className="texto1 third-title">
                Un Poco de Historia
              </MDBTypography>
              <MDBTypography>
                Ubicada en Calle Mendoza 331, en el centro de San Miguel de
                Tucumán, inspiraron su nombre en el dibujo animado de los
                Simpson, sugerido por Erika, hija de Carlos Lopez y Graciela
                Correa. Dos años más se establecieron con un local en General
                Paz 576 que permanece hasta el día de hoy siendo la veterinaria
                más reconocidas de Tucumán. Luego agregaron el servicio de venta
                de accesorios, en una que conseguían de la industria local. Ya
                consolidado como uno de los locales más completos en accesorios
                y novedades la tercer generacion comienza la expansion con
                locales propios que hoy cuentan con 9 locales distribuidos en la
                Provincia de Tucumán.
              </MDBTypography>
            </div>

            <div className="imagenperro">
              <img
                src="https://www.cursosycarreras.com.mx/orientacion/wp-content/uploads/2019/05/bigstock-Doctor-Veterinarian-At-Clinic-214964890-1-e1557320391714.jpg"
                className=" img-fluid"
                alt=""
              />
            </div>
          </MDBCol>
          <MDBCol className="contenido3 d-flex">
            <div className="imagenespatitas">
              <img
                src="https://thumbs.dreamstime.com/b/perro-de-examen-del-veterinario-con-el-otoscopio-38865424.jpg"
                className="imagenfondo3 img-fluid"
                alt=""
              />
            </div>
            <div className="claves">
              <MDBTypography variant="h3" className="five-title">
                <strong>Nuestra clave del éxito</strong> se apoya en 5 pilares
                fundamentales
              </MDBTypography>
              <MDBTypography variant="h4" className="fourd-title">
                Compras centralizadas
              </MDBTypography>
              <MDBTypography variant="body1" className="paragraph">
                Las posibilidades de acceder a economías de escala nos permite
                acceder a condiciones comerciales muy favorables en relación a
                la competencia.
              </MDBTypography>
              <MDBTypography variant="h4" className="fourd-title">
                Logística integrada
              </MDBTypography>
              <MDBTypography variant="body1" className="paragraph">
                Al contar con sistemas integrados y distribución propia nos
                permite contar con stock diferidos en múltiples puntos de venta
                y locales comerciales que flexibilizan las operaciones
                comerciales diarias.
              </MDBTypography>
              <MDBTypography variant="h4" className="fourd-title">
                Tecnología
              </MDBTypography>
              <MDBTypography variant="body1" className="paragraph">
                Con una constante inversión en sistemas de información y bases
                de datos que aseguren el futuro crecimiento, estamos un paso
                delante de nuestra competencia.
              </MDBTypography>
              <MDBTypography variant="h4" className="fourd-title">
                Experiencia
              </MDBTypography>
              <MDBTypography variant="body1" className="paragraph">
                Siendo una familia con más de 20 años en el mercado y habiendo
                importado y distribuido las marcas más importantes de accesorios
                podemos tener un conocimiento de hacia dónde va el mercado
                argentino.
              </MDBTypography>
              <MDBTypography variant="h4" className="fourd-title">
                Productos Exclusivos
              </MDBTypography>
              <MDBTypography variant="body1" className="paragraph">
                Mediante la importación exclusiva de productos para nuestros
                asociados nos aseguramos mantener la diferenciación frente a la
                competencia. Packagings y marcas propias nos diferencian de
                cualquier otra empresa del rubro.
              </MDBTypography>
            </div>
          </MDBCol>
        </MDBContainer>
        <div className="footer-copyright text-center p-4 mt-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.mdbootstrap.com"> PuercoAraña.com </a>
          </MDBContainer>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
