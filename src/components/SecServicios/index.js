import React, { useState, useEffect } from "react";
import "./secsvs.css";
import { MDBRow, MDBCol, MDBIcon, MDBContainer, MDBTooltip } from "mdbreact";
import catdog from "../../assets/img/svs/catdog.png";
import { MDBBtn } from "mdbreact";
import Carturnos from "../CarTurnos/Carturnos";
import NavbarPage from "../Navbar/Nav";
import axiosInstance from "../util/axiosInstance";
import Footer from "../Footer/Footer";




const SecServicios = () => {
  const [userCarrito, setUserCarrito] = useState([]);

  const mostrarCarrito = async () => {
    const response = await axiosInstance.get("/shoppingCart");
    if (response.data) {
      setUserCarrito(response.data.items || []);
    }
  };

  useEffect(() => {
    mostrarCarrito();
  }, []);


  return (
    <>
      <NavbarPage userCarrito={userCarrito} />
      <Carturnos />
      <div className="cont_ppal">
        <div className="fotos">
          <section className="my-5">
            <MDBRow>
              <MDBCol md="4">
                <MDBRow className="mb-3">
                  <MDBCol size="2">
                    <MDBIcon
                      icon="stethoscope"
                      size="2x"
                      className="deep-purple-text"
                    />
                  </MDBCol>
                  <MDBCol size="10">
                    <h5 className="font-weight-bold mb-3">Clínica</h5>
                    <p className="grey-text" id="holi">
                      Le ofrecemos una asistencia completa y de calidad a tu
                      mascota. Para ello, contamos con un personal altamente
                      cualificado e instalaciones modernas y bien equipadas.
                    </p>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-3">
                  <MDBCol size="2">
                    <MDBIcon
                      icon="vial"
                      size="2x"
                      className="deep-purple-text"
                    />
                  </MDBCol>
                  <MDBCol size="10">
                    <h5 className="font-weight-bold mb-3">Análisis clínicos</h5>
                    <p className="grey-text" id="holi">
                      Contamos con equipamiento para hacer analíticas in situ.
                      De esta manera se aceleran los procedimientos y podemos
                      emitir un diagnóstico e implementar el tratamiento
                      adecuado de manera rápida y efectiva.
                    </p>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-3">
                  <MDBCol size="2">
                    <MDBIcon
                      icon="heartbeat"
                      size="2x"
                      className="deep-purple-text"
                    />
                  </MDBCol>
                  <MDBCol size="10">
                    <h5 className="font-weight-bold mb-3">Cirugía</h5>
                    <p className="grey-text" id="holi">
                      Hacemos cirugías electivas de esterilización dentro de los
                      planes de prevención de salud reproductiva, cirugía
                      gastrointestinal, de hígado y sistema biliar, de vejiga,
                      uréteres y riñones, adrenales, bazo y páncreas.
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
              <MDBCol md="4" className="text-name">
                <img
                  className="img-fluid img-sec-servicios"
                  src={catdog}
                  alt=""
                />
              </MDBCol>
              <MDBCol md="4">
                <MDBRow className="mb-3">
                  <MDBCol size="2">
                    <MDBIcon
                      icon="spa"
                      size="2x"
                      className="deep-purple-text"
                    />
                  </MDBCol>
                  <MDBCol size="10">
                    <h5 className="font-weight-bold mb-3">Estética y spa</h5>
                    <p className="grey-text" id="holi">
                      Les cortamos el pelo con tijera, se cortan las uñas,
                      limpian los oídos y vacían los sacos anales. Ambientamos
                      con música a 432 hz para procurar que tu mascota se relaje
                      y sienta a gusto.
                    </p>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-3">
                  <MDBCol size="2">
                    <MDBIcon
                      icon="home"
                      size="2x"
                      className="deep-purple-text"
                    />
                  </MDBCol>
                  <MDBCol size="10">
                    <h5 className="font-weight-bold mb-3">Hotel</h5>
                    <p className="grey-text" id="holi">
                      Entre nuestras instalaciones contamos con guarderías para
                      perros y gatos. Para acoger a tus mascotas, es
                      imprescindible que estén vacunados al día y que sean
                      desparasitados antes de su estancia.
                    </p>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-3">
                  <MDBCol size="2">
                    <MDBIcon
                      icon="x-ray"
                      size="2x"
                      className="deep-purple-text"
                    />
                  </MDBCol>
                  <MDBCol size="10">
                    <h5 className="font-weight-bold mb-3">
                      Radiología digital
                    </h5>
                    <p className="grey-text" id="holi">
                      La radiología ofrece información sobre el estado tanto de
                      tejidos blandos como de huesos y articulaciones, por lo
                      que es una herramienta de inestimable utilidad. La técnica
                      digital permite obtener una imagen mucho más clara que la
                      clásica sobre película, lo que optimiza aún más este
                      recurso.
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </section>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default SecServicios;
