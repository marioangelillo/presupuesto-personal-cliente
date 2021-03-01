import React, {useState} from 'react';
import {Tab, Row, Nav, Col, Image, Button} from  'react-bootstrap';
import '../App.css';
import Abm from './Abm';
import LastMovements from './LastMovements';

export default function Menu({operationsList, setOperationList, userAuth}) {

    const signOff = () =>{
        if(window.confirm('Esta seguro que desea cerrar sesión?')){
          localStorage.removeItem('user');          
          window.location.reload();
        }
        
      }

    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="1">
            <Row className="mt-2">
                <Col sm={3}>
                <Nav variant="pills" className="flex-column align-items-center">+
                    {
                        !userAuth.image ?
                        <Image className="imagen_usuario mb-2" src="https://via.placeholder.com/200px300" roundedCircle />
                        :
                        <Image className="imagen_usuario mb-2" src={userAuth.image} roundedCircle />
                    }
                    
                    {userAuth.username}
                    <Button variant="danger btn-sm mt-1" onClick={signOff}>Cerrar sesión</Button>
                    <hr className="w-75" />
                    <Nav.Item className="w-100 text-center my-1">
                    <Nav.Link eventKey="1">Ultimos movimientos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="w-100 text-center my-1">
                    <Nav.Link eventKey="2">ABM Operaciones</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>
                <Col sm={9}>
                <Tab.Content>
                    <Tab.Pane eventKey="1">
                        <LastMovements operationsList={operationsList}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="2">
                        <Abm operationsList={operationsList} setOperationList={setOperationList}/>
                    </Tab.Pane> 
                </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}
