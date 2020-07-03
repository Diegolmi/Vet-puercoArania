import React from 'react';
import axiosInstance from '../util/axiosInstance';
import { useHistory } from 'react-router-dom'

const Pending = () => {
    //cuando sea pendiente el pago, actualizar stock
    const history = useHistory();

    const iniciarPending = async () =>{
      const response = await axiosInstance.post("/checkout/pending")
      console.log(response)
      }

    return (
        <div>
            <button onClick={iniciarPending}>iniciar pending</button>
        </div>
    )
}

export default Pending;