import React, { useState, useEffect } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from 'mdbreact';
import { Button } from 'react-bootstrap';
import ModalEdit from './ModalEdit';
import ModalAgregarMascota from './ModalAgregarMascota';
import './styleMascotas.css';
import axiosInstance from '../../util/axiosInstance';
import Swal from 'sweetalert2';



const TablePage = () => {
  const [show, setShow] = useState(false);
  const [showA, setShowA] = useState(false);
  const handleShowA = () => setShowA(true);
  const handleShow = () => setShow(true);

  const [traerMascota, setTraerMascota] = useState([])

  const listarMascotas = async () => {
    const response = await axiosInstance.get('/mascota/');
    setTraerMascota(response.data);
    console.log(response.data);
  }

  useEffect(() => {

    listarMascotas();

  }, [])
  const eliminarMascota = async (id) => {
   


    Swal.fire({
        title: 'Eliminar datos!',
        text: "Seguro quiere eliminar ?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Eliminarlo'
    }).then( async (result) => {
        if (result.value ) {
          await axiosInstance.delete(`/mascota/${id}`);
            
        Swal.fire(
            'Eliminado!',
            'Que tengas un lindo dia.',
            'success'
        ); listarMascotas();
        }
        
    })
  
//console.log(result);


}




  const mascotas = {
    columns: [
      
      {
        label: 'Nombre',
        field: 'nombre',
        sort: 'asc'
      },
      {
        label: 'Raza',
        field: 'Raza',
        sort: 'asc'
      },
      {
        label: 'Especie',
        field: 'Especie',
        sort: 'asc'
      },
      {
        label: 'Talle',
        field: 'Talle',
        sort: 'asc'
      },
      {
        label: 'Peso',
        field: 'Peso',
        sort: 'asc'
      }
    ],
    rows: traerMascota.map(mascota => {
      
      const {name, race, size, species, weigth, _id } = mascota
      
      return { 
         
         name,
         race,
         size,
        species,
        weigth,
        'eliminar': <MDBBtn color="red" size="sm" onClick={() => eliminarMascota(_id)}>Eliminar</MDBBtn>
      }
    })


    
  };

  

  return (

    <div className="listMascotas">

      <h1>Mascotas</h1>


      <MDBTable autoWidth striped>




        <MDBTableHead columns={mascotas.columns} />
        <MDBTableBody rows={mascotas.rows}>


        </MDBTableBody>

        <ModalEdit show={show} setShow={setShow} />
        <Button variant="primary" onClick={handleShowA}>
          Agregar una mascota
      </Button>
        <ModalAgregarMascota show={showA} setShow={setShowA} />
      </MDBTable>


    </div>

  );
};

export default TablePage;


