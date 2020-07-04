import React, { useState, useEffect } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from 'mdbreact';
import { Button } from 'react-bootstrap';
import ModalEdit from './ModalEdit';
import ModalAgregarMascota from './ModalAgregarMascota';
import './styleMascotas.css';
import axiosInstance from '../../util/axiosInstance';


const TablePage = () => {
  const [show, setShow] = useState(false);
  const [showA, setShowA] = useState(false);
  const handleShowA = () => setShowA(true);
  const handleShow = () => setShow(true);

  const [traerMascota, setTraerMascota] = useState([])

  const listarMascotas = async () => {
    const response = await axiosInstance.get('/mascota/');
    console.log(response);
    setTraerMascota(response.data);
  }

  useEffect(() => {

    listarMascotas();

  }, [])



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
      
      const {name, race, size, species, weigth } = mascota
      
      return { 
        
         name,
         race,
         size,
        species,
        weigth,
        'editar': <Button variant="primary" onClick={handleShow}>
          Editar
      </Button>,
        'eliminar': <MDBBtn color="red" size="sm">Eliminar</MDBBtn>
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


