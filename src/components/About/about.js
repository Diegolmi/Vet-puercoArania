import React from "react";
import "./about.css";
import medico1 from "../../assets/img/medico1.jpg";
import medico2 from "../../assets/img/medico2.jpg";
import medico3 from "../../assets/img/medico3.jpg";
import medico4 from "../../assets/img/medico4.jpg";

// import alimento1 from "../../assets/img/alimento1.jpg";
// import Image from "react-bootstrap/Image";

// import alimento1 from "../../assets/img/alimento1.jpg";
import Image from "react-bootstrap/Image";
import Nav from '../Navbar/Nav';


const Contenido = () => {
  return (
    <div className="container">

      <Nav />

      <div className="main-container col4-right-layout">
        <div className="main container">
          <div className="row">
            <section className="col-main col-sm-12">
              <div className="institucional">

                  <h1 className="first-title"> Acerca de Veterinaria Puerco Araña</h1>
                  <div className="medicos d-md-flex flex-column flex-md-row justify-content-center justify-content-md-between">
                    <Image src={medico1} className="image" roundedCircle alt="" />
                    <Image src={medico2} className="image" roundedCircle alt="" />
                    <Image src={medico3} className="image" roundedCircle alt="" />
                    <Image src={medico4} className="image" roundedCircle alt="" />
                  </div>
                  <div className="static-contain">

                    <h3>Historia de la empresa</h3>
                    <p>

                      <h3 className="third-title">Historia de la empresa</h3>
                      <p className="paragraph">

                        Puerco Araña es una empresa más de 20 años en el rubro
                        veterinario. En sus comienzos se dedicó a la
                        comercailización de alimentos para perros y gatos.
                      </p>



                      <p className="paragraph">

                        Un poco de historia:
                            <br></br>
                            Ubicada en Calle Mendoza 331, en el centro de San Miguel de
                            Tucumán, inspiraron su nombre en el dibujo animado de los
                            Simpson, sugerido por Erika, hija de Carlos Lopez y Graciela
                            Correa.
                      </p>



                      <p className="paragraph">

                        Dos años más se establecieron con un local en San Juan 1160
                        que permanece hasta el día de hoy siendo uno de los locales
                        con más tradición y la veterinaria más reconocidas de
                        Tucumán.
                      </p>



                      <p className="paragraph">

                        Luego agregaron el servicio de venta de accesorios, en una
                        que conseguían de la industria local. Fue tan impactante que
                        comezaron con importación, venta y distribución de
                        accesorios dando origen a la empresa Puerco's.
                      </p>



                      <p className="paragraph">

                        Ya consolidado como uno de los locales más completos en
                        accesorios y novedades la tercer generacion comienza la
                        expansion con locales propios que hoy cuentan con 9 locales
                        distribuidos en la Provincia de Tucumán.
                      </p>

                      <h2>
                        <strong>Nuestra clave del éxito</strong> se apoya en 5
                                  pilares fundamentales
                                </h2>
                      <h3>Compras centralizadas</h3>


                      <h2 className="second-title">
                        <strong>Nuestra clave del éxito</strong> se apoya en 5
                                      pilares fundamentales
                                  </h2>
                      <h3 className="third-title">Compras centralizadas</h3>
                      <p className="paragraph">

                        Las posibilidades de acceder a economías de escala nos
                        permite acceder a condiciones comerciales muy favorables en
                        relación a la competencia.
                        </p>

                      <h3>Logística integrada</h3>


                      <h3 className="third-title">Logística integrada</h3>
                      <p className="paragraph">

                        Al contar con sistemas integrados y distribución propia nos
                        permite contar con stock diferidos en múltiples puntos de
                        venta y locales comerciales que flexibilizan las operaciones
                        comerciales diarias. Con entregas semanales podemos hacer
                        transferencias de mercaderías entre los puntos de venta
                        prestando artículos entre cada una de las unidades perdiendo
                        muy pocas ventas por escasez de producto.
                        </p>

                      <h3>Tecnología</h3>

                      <h3 className="third-title">Tecnología</h3>
                      <p className="paragraph">

                        Con una constante inversión en sistemas de información y
                        bases de datos que aseguren el futuro crecimiento, estamos
                        un paso delante de nuestra competencia. Con bases de datos
                        que se sincronizan de forma inmediata, contamos con
                        información precisa y en el momento justo, evitando
                        descapitalizarnos en escenarios de inflación.
                        </p>

                      <h3>Experiencia</h3>

                      <h3 className="third-title">Experiencia</h3>
                      <p className="paragraph">

                        Siendo una familia con más de 20 años en el mercado y
                        habiendo importado y distribuido las marcas más importantes
                        de accesorios podemos tener un conocimiento de hacia dónde
                        va el mercado argentino. Nuestra pasión por las novedades y
                        búsqueda contante de nuevas formas de llegar al consumidor
                        nos aseguran un lugar en el futuro entre los jugadores
                        importantes del mercado.
                        </p>

                      <h3>Productos exclusivos</h3>


                      <h3 className="third-title">Productos exclusivos</h3>
                      <p className="paragraph">

                        Mediante la importación exclusiva de productos para nuestros
                        asociados nos aseguramos mantener la diferenciación frente a
                        la competencia. Packagings y marcas propias nos diferencian
                        de cualquier otra empresa del rubro.Todas estas razones son
                        muy importantes y seguramente son razones tangibles, pero la
                        más importante es un intangible, una realidad paralela, una
                        sensación…y es el factor humano. La gente comprometida en el
                        proyecto desde quienes dimos el primer paso a quienes se van
                        sumando es nuestro diferencial… gente que se equivoca, que
                        trabaja, que se frustra cuando las cosas no salen de la
                        manera esperada…. gente que HACE.
                      </p>
                    </p>
                </div>
                </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contenido;
