import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from 'mdbreact';

const TablePage = (props) => {
  
  
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
        'nombre': 'Kate',
        'Raza': 'Moss',
        'country': 'USA',
        'Años': '23',
        'editar': <MDBBtn color="green" size="sm">Editar</MDBBtn>,
        'eliminar': <MDBBtn color="red" size="sm">Eliminar</MDBBtn>
      },
      {
        'id': '2',
        'nombre': 'Anna',
        'Raza': 'Wintour',
        'Control': '15/06/20',

        'Años': '36',
        'editar': <MDBBtn color="green" size="sm">Editar</MDBBtn>,
        'eliminar': <MDBBtn color="red" size="sm">Eliminar</MDBBtn>
      },
      {
        'id': '3',
        'nombre': 'Tom',
        'Raza': 'Bond',
        'Control': 'Spain',
        'Años': '25',
        'editar': <MDBBtn color="green" size="sm" onClick="">Editar</MDBBtn>,
        'eliminar': <MDBBtn color="red" size="sm">Eliminar</MDBBtn>
      },
      {
        'id': '4',
        'nombre': 'Jerry',
        'Raza': 'Horwitz',
        'Control': 'Italy',
        'Años': '41',
        'editar': <MDBBtn color="green" size="sm">Editar</MDBBtn>,
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
      
    </div>
    
);
};

export default TablePage;


