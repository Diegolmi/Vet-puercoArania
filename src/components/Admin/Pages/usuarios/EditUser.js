import React, { useState, useEffect } from 'react';
import { MDBDataTable, MDBBtn } from 'mdbreact';
import FormUser from '../../Components/FormUser';
import axiosInstance from '../../../util/axiosInstance';



const EditUser = () => {
  const [showEdit, setShowEdit] = useState(false);
  const [usuarios, setUsuarios] = useState([]);

  const listarUsuarios = async () => {
    const response = await axiosInstance.get('/private/user');
    console.log(response.data)
    setUsuarios(response.data.users)
    // console.log(response)
  }
// console.log(usuarios)


  useEffect(() => {
    listarUsuarios()
  }, [])
  

  const editarUsuario = () => {
    setShowEdit(true)
  }

  // const modificarUsuario = () => {
  //   setShowEdit(false)
  // }

  const onSubmitForm = e => {
    e.preventDefault();
  }

  const data = {
    columns: [
      {
        label: 'Nombre',
        field: 'nombre',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Apellido',
        field: 'apellido',
        sort: 'asc',
        width: 150
      },
      {
        label: "E-mail",
        field: 'email',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Usuario',
        field: 'usuario',
        sort: 'asc',
        width: 150
      },
      {
        label: "Editar",
        field: 'editar',
        sort: 'asc',
        width: 150
      },
      {
        label: "Eliminar",
        field: 'eliminar',
        sort: 'asc',
        width: 150
      }
    ],
    rows: usuarios.map(usuario => ({
        nombre: usuario.name,
        apellido: usuario.lastname,
        usuario: usuario.username,
        email: usuario.email,
        editar: <MDBBtn color="blue" size="sm" onClick={editarUsuario}>Editar</MDBBtn>,
        eliminar: <MDBBtn color="red" size="sm">Eliminar</MDBBtn>
    }))
  };

  
  return (
    <div className="container-usuario-admin">
      <div>
        <h2 className="my-5">Editar Usuarios</h2>
      <MDBDataTable
        scrollX
        scrollY
        maxHeight="400px"
        striped
        bordered
        data={data}
        className="table-user"
      />
      </div>
      <div>
        {showEdit ? <FormUser 
                        setShowEdit={setShowEdit} 
                        onSubmitForm={onSubmitForm}
        
                    /> 
        
        : null}
        
      </div>
    </div>
  );
}

export default EditUser;