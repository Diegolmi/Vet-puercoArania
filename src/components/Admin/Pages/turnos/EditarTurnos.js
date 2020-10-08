import React, { useState, useEffect } from "react";
import CardTurnos from "../../Components/CardTurnos";
import "../../Admin.css";
import axiosInstance from "../../../util/axiosInstance";
import Swal from "sweetalert2";


const EditarTurnos = () => {
  const [turnos, setTurnos] = useState([]);

  const listarTurnos = async () => {
    const res = await axiosInstance.get("/turnos");
    setTurnos(res.data);
    //console.log(res.data)
  };

  useEffect(() => {
    listarTurnos();
  }, []);

  const eliminarTurno = id => async () =>{
    Swal.fire({
      title: '¿estas seguro que deseas eliminar el turno?',
      text: "no podras revertir el proceso",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Borrado!',
          'El turno fue borrado con éxito',
          'success'
        )
        axiosInstance.delete(`/turnos/${id}`)
        listarTurnos()
      }
      
    })
     
  }

  return (
    <div className="container-turnos-admin my-3">
      <div className="row">
        <div className="col-12">
        <h2 className="m-3">Turnos Disponibles</h2>
              <CardTurnos turnos={turnos} listarTurnos={listarTurnos} eliminarTurno={eliminarTurno} />
          
        </div>
      </div>
    </div>
  );
};

export default EditarTurnos;
