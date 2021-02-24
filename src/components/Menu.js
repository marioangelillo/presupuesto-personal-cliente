import React from 'react';
import {Tab, Row, Nav, Col, Image} from  'react-bootstrap';
import '../App.css'
import Categories from './Categories';
import Inputs from './Inputs';
import LastMovements from './LastMovements';
import Outputs from './Outputs';

export default function Menu() {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="1">
            <Row className="mt-2">
                <Col sm={3}>
                <Nav variant="pills" className="flex-column align-items-center">
                    <Image className="imagen_usuario mb-2" src="https://picsum.photos/id/237/200/300" roundedCircle />
                    Mario Angelillo
                    <hr className="w-75" />
                    <Nav.Item className="w-100 text-center my-1">
                    <Nav.Link eventKey="1">Ultimos movimientos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="w-100 text-center my-1">
                    <Nav.Link eventKey="2">Ingresos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="w-100 text-center my-1">
                    <Nav.Link eventKey="3">Egresos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="w-100 text-center my-1">
                    <Nav.Link eventKey="4">Agregar categoría</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>
                <Col sm={9}>
                <Tab.Content>
                    <Tab.Pane eventKey="1">
                        <LastMovements />
                    </Tab.Pane>
                    <Tab.Pane eventKey="2">
                        <Inputs />
                    </Tab.Pane>
                    <Tab.Pane eventKey="3">
                        <Outputs />
                    </Tab.Pane>
                    <Tab.Pane eventKey="4">
                     <Categories />
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}
