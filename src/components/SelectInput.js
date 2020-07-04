import React from 'react'

const SelectIpunt = ({agregarCantidad, stock}) => {

 
  const options = (amount) => {
    let array = [];
    for (let i = 1; i <= amount; i++) {
      array.push(<option value={i}>{i}</option>);
    }
    return array;
  };
    return ( 
        <div>
            <h6>Cantidad:</h6>
              <select onChange={agregarCantidad} className="browser-default custom-select">
              {options(stock)}
            </select>
        
      </div>
     );
}
 
export default SelectIpunt;