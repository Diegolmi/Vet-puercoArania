import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import axiosInstance from "../../../util/axiosInstance";
import '../../Admin.css';
import { FaTrashAlt, FaUserPlus } from "react-icons/fa";
import ModalAdd from "./ModalAdd";
import Swal from 'sweetalert2';


const EditUser = () => {
  const [show, setShow] = useState(false);
  const [usuarios, setUsuarios] = useState([]);
  const [userById] = useState({})

  const handleShow = () => setShow(true)

  const listarUsuarios = async () => {
    const response = await axiosInstance.get("/private/user");
    setUsuarios(response.data.users);
  };

  useEffect(() => {
    listarUsuarios();
  }, []);


  const eliminarUser = id => async () => {
    Swal.fire({
      title: '¿estas seguro de borrar este usuario?',
      text: "no se podra revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrarlo!'
    }).then((result) => {
      if (result.value) {
        
        Swal.fire(
          'Borrado!',
          'El Usuario fue eliminado correctamente',
          'success'
        )
        axiosInstance.delete(`/private/user/${id}`);
        listarUsuarios()
      }
    })
    
  }

  const data = {
    columns: [
      {
        label: "Nombre",
        field: "nombre",
        sort: "asc",
        width: 150,
      },
      {
        label: "Apellido",
        field: "apellido",
        sort: "asc",
        width: 150,
      },
      {
        label: "E-mail",
        field: "email",
        sort: "asc",
        width: 200,
      },
      {
        label: "Usuario",
        field: "usuario",
        sort: "asc",
        width: 150,
      },
      {
        label: "rol",
        field: "rol",
        sort: "asc",
        width: 70,
      },
      {
        label: "Eliminar",
        field: "eliminar",
        sort: "asc",
        width: 70,
      },
    ],
    rows: usuarios.map((usuario) => ({
      nombre: usuario.name,
      apellido: usuario.lastname,
      usuario: usuario.username,
      email: usuario.email,
      rol: usuario.role,
      
      eliminar: (
       <button className="boton-borrar-user" onClick={eliminarUser(usuario._id)}><FaTrashAlt /></button>
         
      ),
    })),
  };

  return (
    <div className="container-usuario-admin">
        <h2 className="my-5">Lista de Usuarios</h2>
        <div className="boton-agregar-user">
          <button className="button-add mr-2" onClick={handleShow}> Agregar Usuario <FaUserPlus className="icon-add" /> </button>
        </div>
        <MDBDataTable
          scrollX
          scrollY
          maxHeight="600px"
          striped
          bordered
          entriesLabel="Mostrar Entradas"
          searchLabel="Buscar"
          infoLabel={["mostrar", "al", "de", "entradas"]}
          data={data}
          className="table-user mt-5"
          responsiveSm
          responsiveMd
          responsiveLg
          small
          paginationLabel={["anterior", "siguiente"]}
        />
      <div>
      
      </div>
      <ModalAdd listarUsuarios={listarUsuarios} usuarios={usuarios} userById={userById} setShow={setShow} show={show} />
    </div>
  );
};

export default EditUser;
