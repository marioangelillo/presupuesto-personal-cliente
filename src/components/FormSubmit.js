import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';

export default function FormSubmit() {
    return (
            <Form className="px-1 mb-2">
                <Form.Row className="my-1">
                    <Col sm={12} md={6}>
                    <Form.Control placeholder="First name" />
                    </Col>
                    <Col sm={12} md={6}>
                    <Form.Control placeholder="Last name" />
                    </Col>
                </Form.Row>
                <Form.Row className="my-1">
                    <Col sm={12} md={6}>
                    <Form.Control placeholder="First name" />
                    </Col>
                    <Col sm={12} md={6}>
                    <Form.Control placeholder="Last name" />
                    </Col> 
                </Form.Row>
                <Button variant="primary">AGREGAR</Button>
            </Form>
    )
}

