import React, { useState, useEffect } from "react";
import Turno from "./Turno";
import axiosInstance from "../../../util/axiosInstance";


import "./styleTurno.css";

const Turnos = () => {
  const [turnos, setTurnos] = useState([]);

  const listarTurnos = async () => {
    const result = await axiosInstance.get("/turnos/user");

    setTurnos(result.data || []);

    console.log(result.data);

  };

  useEffect(() => {
    listarTurnos();
  }, []);



  return (
    <>
      {turnos.map((turno) => (
        <Turno listarTurnos={listarTurnos} turno={turno} />
      ))}

    </>


  );
};

export default Turnos;
