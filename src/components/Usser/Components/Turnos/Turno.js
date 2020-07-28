import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axiosInstance from "../../../util/axiosInstance";
import "./styleTurno.css";
import Swal from "sweetalert2";

const Turno = ({ turno, listarTurnos }) => {
  const eliminarTurno = async (id) => {
    Swal.fire({
      title: "Eliminar turno!",
      text: "Seguro quiere eliminar este turno?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminarlo",
    }).then(async (result) => {
      if (result.value) {
        await axiosInstance.delete(`/turnos/${id}`);

        Swal.fire("Eliminado!", "Que tengas un lindo dia.", "success");
        listarTurnos();
      }
    });
  };

  return (
    <>
      <Card border="danger" className="cardTurno ">
        <p>
          Mascota: <span>{turno.pet}</span>
        </p>
        <p>
          Dueño: <span>{turno.user}</span>
        </p>
        <p>
          Fecha: <span>{turno.date}</span>
        </p>
        <p>
          Hora: <span>{turno.time}</span>
        </p>
        <p>
          Descripcion: <span>{turno.description}</span>
        </p>
        <p>
          Sector: <span>{turno.service}</span>
        </p>

        <Button
          className="btn btn-danger"
          onClick={() => eliminarTurno(turno._id)}
        >
          Cancelar Turno
        </Button>
      </Card>
    </>
  );
};
export default Turno;
