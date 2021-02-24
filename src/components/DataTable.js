import React from 'react';
import {Table} from 'react-bootstrap';

export default function DataTable() {
    return (
        <Table striped bordered hover responsive>
                <thead>
                    <tr>
                    <th>Fecha</th>
                    <th>Concepto</th>
                    <th>Categoría</th>
                    <th>Monto</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>12/12/2020</td>
                    <td>Compra de comida</td>
                    <td>Alimentos</td>
                    <td>$1100</td>
                    </tr>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto asdasd</td>
                    <td>@mdo asdasdas</td>
                    </tr>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    
                </tbody>
            </Table>
    )
}
