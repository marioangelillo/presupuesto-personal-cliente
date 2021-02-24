import React from 'react';
import {Table} from 'react-bootstrap';

export default function LastMovements() {
    return (
        <>
            <p className="titles">Ultimos movimientos</p>
            <hr/>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                    <th>Fecha</th>
                    <th>Concepto</th>
                    <th>Tipo</th>
                    <th>Monto</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>12/12/2020</td>
                    <td>Compra de comida</td>
                    <td>Ingreso</td>
                    <td>$3300</td>
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
        </>
    )
}
