import React from "react";

const SelectIpunt = ({ agregarCantidad, stock }) => {
  const options = (amount) => {
    let array = [];
    for (let i = 1; i <= amount; i++) {
      array.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return array;
  };
  return (
    <>
      <h6>Cantidad:</h6>

      <select
        onChange={agregarCantidad}
        className="browser-default custom-select"
      >
        {options(stock)}
      </select>
    </>
  );
};

export default SelectIpunt;
