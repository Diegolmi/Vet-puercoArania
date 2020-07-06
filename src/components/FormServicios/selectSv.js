import React from "react";

const SelectS = () => {
  return (
    <select className="browser-default custom-select">
      <option>Elegí un servicio</option>
      <option value="1">Consulta médica</option>
      <option value="2">Análisis clínicos</option>
      <option value="3">Radiología</option>
      <option value="4">Cirugía</option>
      <option value="5">Peluquería</option>
      <option value="6">Hotel</option>
    </select>
  );
};

export default SelectS;
