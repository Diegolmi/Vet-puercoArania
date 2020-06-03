import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Login = () => {

    // State para iniciar sesion
    const [usuario, guardarUsuario] = useState({
        email:"",
        contraseña: "",
    })

    const {email, contraseña} = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })

    }
    const onSubmit = e =>{
        e.preventDefault();


        //validar que no haya campos vacios

        //pasarlo al action
    }


    return (



        <div className="form-usuario">
            <div className="contenedor-form sobra-dark">
                <h1>Iniciar Sesion</h1>
            </div>
            <form onSubmit={onSubmit}>
                <div className="campo-form">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Tu Email"
                        value={email}
                        onChange={onChange}
                        ></input>
                </div>
                <div className="campo-form">
                    <label htmlFor="contraseña">Contraseña</label>
                    <input
                        type="password"
                        id="contraseña"
                        name="contraseña"
                        placeholder="Tu Contraseña"
                        value={contraseña}
                        onChange={onChange}
                        ></input>
                </div>
                <div className="campo-form">
                    <input type="submit" className="btn btn-primary btn-block"
                    value="Iniciar Sesion" />
                    </div>
            </form>
            <Link to={'/Registro'} className= "enlace-cuenta">
                Obtener cuenta.
            </Link>
        </div>
    )
}

export default Login;
