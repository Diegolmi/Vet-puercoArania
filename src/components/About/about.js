  
import React from "react";
import "./about.css";
import medico1 from "../../assets/img/medico1.jpg";
import medico2 from "../../assets/img/medico2.jpg";
import medico3 from "../../assets/img/medico3.jpg";
import medico4 from "../../assets/img/medico4.jpg";
import { Grid, Typography } from "@material-ui/core";
import NavbarPage from '../Navbar/Nav';
import Image from "react-bootstrap/Image";
import alimento1 from "../../assets/img/alimento1.jpg";
import Nav from '../Navbar/Nav';


const Contenido = () => {
  return (
    <>
    <NavbarPage/>
    <div className="institucional container-fluid">
      <Typography variant="h2" className="first-title" align="center">
        Acerca de Veterinaria Puerco Araña
      </Typography>
      <Typography variant="h3" className="third-title">
        Nuestros Profesionales
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={6} md={3} align="center">
          <Image src={medico1} className="imedicos" roundedCircle alt="" paragraph/>
          <Typography className="datosmedicos">Liliana Luna</Typography>
          <Typography className="datosmedicos1">Cirugia</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}align="center">
          <Image src={medico2} className="imedicos" roundedCircle alt="" />
          <Typography className="datosmedicos">Carlos Paez </Typography>
          <Typography className="datosmedicos1">Oftalmologia</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}align="center">
          <Image src={medico3} className="imedicos" roundedCircle alt="" />
          <Typography className="datosmedicos">Marta Cisneros </Typography>
          <Typography className="datosmedicos1">Cardiolgia</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}align="center">
          <Image src={medico4} className="imedicos" roundedCircle alt="" />
          <Typography className="datosmedicos"> Rafael Puentes </Typography>
          <Typography className="datosmedicos1">Fiosioterapia</Typography>
        </Grid>
      </Grid>
      <div className="static-contain">
        <Typography variant="h2" className="second-title">
          Historia de la empresa
        </Typography>
        <Typography variant="body1"className="paragraph">
          Puerco Araña es una empresa más de 20 años en el rubro veterinario. En
          sus comienzos se dedicó a la comercailización de alimentos para perros
          y gatos.
        </Typography>
        <Typography variant="h3" className="third-title">
          Un poco de historia
        </Typography>
        <Typography variant="body1"className="paragraph">
          Ubicada en Calle Mendoza 331, en el centro de San Miguel de Tucumán,
          inspiraron su nombre en el dibujo animado de los Simpson, sugerido por
          Erika, hija de Carlos Lopez y Graciela Correa.
        </Typography>
        <Typography variant="body1"className="paragraph">
          Dos años más se establecieron con un local en General Paz 576 que
          permanece hasta el día de hoy siendo uno de los locales con más
          tradición y la veterinaria más reconocidas de Tucumán.
        </Typography>
        <Typography variant="body1"className="paragraph">
          Luego agregaron el servicio de venta de accesorios, en una que
          conseguían de la industria local. Fue tan impactante que comezaron con
          importación, venta y distribución de accesorios dando origen a la
          empresa Puerco's.
        </Typography>
        <Typography variant="body1"className="paragraph">
          Ya consolidado como uno de los locales más completos en accesorios y
          novedades la tercer generacion comienza la expansion con locales
          propios que hoy cuentan con 9 locales distribuidos en la Provincia de
          Tucumán.
        </Typography>
        <Typography variant="h3" className="five-title">
          <strong>Nuestra clave del éxito</strong> se apoya en 5 pilares
          fundamentales
        </Typography>
        <Typography variant="h4" className="fourd-title">
          Compras centralizadas
        </Typography>
        <Typography variant="body1"className="paragraph">
          Las posibilidades de acceder a economías de escala nos permite acceder
          a condiciones comerciales muy favorables en relación a la competencia.
        </Typography>
        <Typography variant="h4" className="fourd-title">
          Logística integrada
        </Typography>
        <Typography variant="body1"className="paragraph">
          Al contar con sistemas integrados y distribución propia nos permite
          contar con stock diferidos en múltiples puntos de venta y locales
          comerciales que flexibilizan las operaciones comerciales diarias. Con
          entregas semanales podemos hacer transferencias de mercaderías entre
          los puntos de venta prestando artículos entre cada una de las unidades
          perdiendo muy pocas ventas por escasez de producto.
        </Typography>
        <Typography variant="h4" className="fourd-title">
          Tecnología
        </Typography>
        <Typography variant="body1"className="paragraph">
          Con una constante inversión en sistemas de información y bases de
          datos que aseguren el futuro crecimiento, estamos un paso delante de
          nuestra competencia. Con bases de datos que se sincronizan de forma
          inmediata, contamos con información precisa y en el momento justo,
          evitando descapitalizarnos en escenarios de inflación.
        </Typography>
        <Typography variant="h4" className="fourd-title">
          Experiencia
        </Typography>
        <Typography variant="body1"className="paragraph">
          Siendo una familia con más de 20 años en el mercado y habiendo
          importado y distribuido las marcas más importantes de accesorios
          podemos tener un conocimiento de hacia dónde va el mercado argentino.
          Nuestra pasión por las novedades y búsqueda contante de nuevas formas
          de llegar al consumidor nos aseguran un lugar en el futuro entre los
          jugadores importantes del mercado.
        </Typography>
        <Typography variant="h4" className="fourd-title">
          Productos Exclusivos
        </Typography>
        <Typography variant="body1"className="paragraph">
          Mediante la importación exclusiva de productos para nuestros asociados
          nos aseguramos mantener la diferenciación frente a la competencia.
          Packagings y marcas propias nos diferencian de cualquier otra empresa
          del rubro.Todas estas razones son muy importantes y seguramente son
          razones tangibles, pero la más importante es un intangible, una
          realidad paralela, una sensación…y es el factor humano. La gente
          comprometida en el proyecto desde quienes dimos el primer paso a
          quienes se van sumando es nuestro diferencial… gente que se equivoca,
          que trabaja, que se frustra cuando las cosas no salen de la manera
          esperada…. gente que HACE.
        </Typography>
          </>
    
  );
};

export default Contenido;
