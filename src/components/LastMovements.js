import React, {useState, useEffect} from 'react';
import {Table} from 'react-bootstrap';

export default function LastMovements({operationsList}) {
    
    const [lastMov, setLastMov] = useState([]);

        useEffect(() => {
            let control = 1;
            for (let i = 0; i < operationsList.length; i++) {
                if(operationsList[i].id > control){
                    setLastMov([...lastMov, operationsList[i]]);
                    control = operationsList[i].id;
                }                
            }
            console.log(lastMov)
        }, [])

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
