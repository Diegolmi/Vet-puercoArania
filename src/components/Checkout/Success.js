import React from 'react';
import axiosInstance from '../util/axiosInstance';
import { useHistory } from 'react-router-dom'



const Success = () => {
    //cuando sea exitoso el pago, actualizar stock
    const history = useHistory();

    const iniciarSuccess = async () =>{
        const response = await axiosInstance.post("/checkout/success")
        console.log(response)
    }

    return (
        <div>
            <button onClick={iniciarSuccess}>iniciar success</button>
        </div>
    )
}

export default Success;