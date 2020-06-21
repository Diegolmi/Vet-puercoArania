import React, {useState} from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from 'mdbreact';
import {Button} from 'react-bootstrap';
import ModalEdit from './ModalEdit';
import ModalAgregarMascota from './ModalAgregarMascota';

const TablePage = (props) => {
  const [show, setShow] = useState(false);
  const [showA, setShowA] = useState(false);
  const handleShowA = () => setShowA(true);
  
  
  const handleShow = () => setShow(true);

  //const ActualizaNombre = () => {  
  //}

  
  const mascotas = {
    columns: [
      {
        label: '#',
        field: 'id',
        sort: 'asc',
      },
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
        label: 'Control',
        field: 'Control',
        sort: 'asc'
      },
      {
        label: 'Años',
        field: 'Años',
        sort: 'asc'
      }
    ],
    rows: [
      {
        'id': '1',
        'nombre': '',
        'Raza': '',
        'country': '',
        'Años': '',
        'editar': <Button variant="primary" onClick={handleShow}>
        Editar
      </Button>,
        'eliminar': <MDBBtn color="red" size="sm">Eliminar</MDBBtn>
      },
      {
        'id': '2',
        'nombre': 'Anna',
        'Raza': 'Wintour',
        'Control': '15/06/20',

        'Años': '36',
        'editar':<Button variant="primary" onClick={handleShow}>
        Editar
      </Button>,
        'eliminar': <MDBBtn color="red" size="sm">Eliminar</MDBBtn>
      },
      {
        'id': '3',
        'nombre': 'Tom',
        'Raza': 'Bond',
        'Control': 'Spain',
        'Años': '25',
        'editar': <Button variant="primary" onClick={handleShow}>
        Editar
      </Button>,
        'eliminar': <MDBBtn color="red" size="sm">Eliminar</MDBBtn>
      },
      {
        'id': '4',
        'nombre': 'Jerry',
        'Raza': 'Horwitz',
        'Control': 'Italy',
        'Años': '41',
        'editar': <Button variant="primary" onClick={handleShow}>
                        Editar
                  </Button>,
        'eliminar': <MDBBtn color="red" size="sm">Eliminar</MDBBtn>
      },
      
    ]
  };

  return (
    <div className="listMascotas">
      <h1>Mascotas</h1>
      <MDBTable autoWidth striped>


        <MDBTableHead columns={mascotas.columns} />
        <MDBTableBody rows={mascotas.rows} />
      </MDBTable>
      <ModalEdit show={show} setShow={setShow}/>
      <Button variant="primary" onClick={handleShowA}>
        Agregar una mascota
      </Button>
      <ModalAgregarMascota show={showA} setShow={setShowA} />
    </div>
    
);
};

export default TablePage;


