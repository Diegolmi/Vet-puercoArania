import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

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
'Años': '23'
},
{
'id': '2',
'nombre': 'Anna',
'Raza': 'Wintour',
'Control': 'United Kingdom',

'Años': '36'
},
{
'id': '3',
'nombre': 'Tom',
'Raza': 'Bond',
'Control': 'Spain',
'Años': '25'
},
{
'id': '4',
'nombre': 'Jerry',
'Raza': 'Horwitz',
'Control': 'Italy',
'Años': '41'
},
]
};

return(
    <>
    <h1>Mascotas</h1>
<MDBTable autoWidth striped>
    

  <MDBTableHead columns={mascotas.columns} />
  <MDBTableBody rows={mascotas.rows} />
</MDBTable>
</>
);
};

export default TablePage;


