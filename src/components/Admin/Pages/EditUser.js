import React, { useState } from 'react';
import { MDBDataTable, MDBBtn } from 'mdbreact';
import FormUser from '../Components/FormUser';


const EditUser = () => {
  const [showEdit, setShowEdit] = useState(false);

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
    rows: [
      {
        nombre: 'Tiger',
        apellido: 'Nixon',
        usuario: 'System Architect',
        email: 't.nixon@datatables.net',
        editar: <MDBBtn color="blue" size="sm" onClick={editarUsuario}>Editar</MDBBtn>,
        eliminar: <MDBBtn color="red" size="sm">Eliminar</MDBBtn>
      },
      {
        nombre: 'Tiger',
        apellido: 'Nixon',
        usuario: 'System Architect',
        email: 't.nixon@datatables.net',
        editar: <MDBBtn color="blue" size="sm" onClick={editarUsuario}>Editar</MDBBtn>,
        eliminar: <MDBBtn color="red" size="sm">Eliminar</MDBBtn>
      },
      {
        nombre: 'Tiger',
        apellido: 'Nixon',
        usuario: 'System Architect',
        email: 't.nixon@datatables.net',
        editar: <MDBBtn color="blue" size="sm" onClick={editarUsuario}>Editar</MDBBtn>,
        eliminar: <MDBBtn color="red" size="sm">Eliminar</MDBBtn>
      },
      {
        nombre: 'Tiger',
        apellido: 'Nixon',
        usuario: 'System Architect',
        email: 't.nixon@datatables.net',
        editar: <MDBBtn color="blue" size="sm" onClick={editarUsuario}>Editar</MDBBtn>,
        eliminar: <MDBBtn color="red" size="sm">Eliminar</MDBBtn>
      },
      {
        nombre: 'Tiger',
        apellido: 'Nixon',
        usuario: 'System Architect',
        email: 't.nixon@datatables.net',
        editar: <MDBBtn color="blue" size="sm" onClick={editarUsuario}>Editar</MDBBtn>,
        eliminar: <MDBBtn color="red" size="sm">Eliminar</MDBBtn>
      },

    ]
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