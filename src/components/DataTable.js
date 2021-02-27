import React from 'react';
import {Table, Button} from 'react-bootstrap';

export default function DataTable({operationsList, setOperationList}) {

    const deleteOperation = async (operation) =>{;
        let url = 'http://localhost:4000/api/delete/'+operation.id;
        const request = await fetch(url,{   
        method: 'DELETE',
        headers : {
        'Content-Type': 'application/json'
        }
        });

        console.log(request);
        const response = await request.json();
        console.log(response);

        if(request.ok){
            alert('Ok');
            setOperationList(
                operationsList.filter(op => op.id !== operation.id)
            )
        }else{
            alert('Hubo un error')
        }
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
                        <td>{operation.dateOperation}</td>
                        <td>{operation.concept}</td>
                        <td>{operation.operation}</td>
                        <td>{operation.amount}</td>
                        <td>
                            <Button variant="danger mr-1 btn-sm" onClick={() => deleteOperation(operation)}>Eliminar</Button>
                            <Button variant="warning btn-sm" onClick={() => updateOperation(operation)}>Modificar</Button>
                        </td>
                        </tr>
                    ))
                }                      
                </tbody>
            </Table>
    )
}
