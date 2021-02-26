import React from 'react';
import {Table, Button} from 'react-bootstrap';

export default function DataTable({operationsList, setOperationList}) {

    const deleteOperation = (operation) =>{
        console.log(operation)
    }

    const updateOperation = (operation) =>{
        console.log(operation)
    }
    
    return (
        <Table striped bordered hover responsive>
                <thead>
                    <tr>
                    <th>Fecha</th>
                    <th>Concepto</th>
                    <th>Tipo</th>
                    <th>Monto</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>

                {
                    operationsList.map(operation =>(
                        <tr>
                        <td>{operation.date}</td>
                        <td>{operation.concept}</td>
                        <td>{operation.type}</td>
                        <td>{operation.amount}</td>
                        <td>
                            <Button variant="danger mr-1 btn-sm" onClick={() => deleteOperation(operation)}>Eliminar</Button>
                            <Button variant="warning btn-sm" onClick={() => updateOperation(operation)}>Modificar</Button>
                        </td>
                        </tr>
                    ))
                }  
                    <tr>
                    <td>12/12/2020</td>
                    <td>Compra de comida</td>
                    <td>Alimentos</td>
                    <td>$1100</td>
                    <td>
                        <Button variant="danger mr-1 btn-sm">Eliminar</Button>
                        <Button variant="warning btn-sm">Modificar</Button>
                    </td>
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
