import React, {useState} from 'react';
import { Form, Col, Button } from 'react-bootstrap';

export default function FormSubmit({operationsList, setOperationList}) {

    const [form, setForm] = useState({
        concept: '',
        amount: '',
        date: '',
        type: ''
    })

    const handleChange = e =>{
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(form);
        if(form.concept === '' || form.amount === '' || form.date === '' || form.type === ''){
            alert('Deben completarse todos los campos');
            return;
        }

        setOperationList([
            ...operationsList,
            form
        ])

        /*const solicitud = await fetch('http://localhost:4000/api/find',{   
        method: 'POST',     
        body : JSON.stringify(product),
        headers : {
        'Content-Type': 'application/json'
        }
        });
        
        const respuesta = await solicitud.json();

        if(solicitud.ok){
            if(respuesta.length === 0){
                alert('No se encontraron productos con ese nombre');
                return;
            }
            setProductsList(respuesta);  
            setProduct({
                name: ''
            })
        }else {
            alert('Hubo un error');
        }*/
    }

    return (
            <Form className="px-1 mb-2" onSubmit={handleSubmit}>
                <Form.Row className="my-1">
                    <Col sm={12} md={6}>
                        <Form.Control
                        name="concept"
                        value={form.concept}
                        onChange={handleChange}
                        required
                        placeholder="Concepto"
                        />
                    </Col>
                    <Col sm={12} md={6}>
                        <Form.Control
                        name="amount"
                        type="number"
                        value={form.amount}
                        onChange={handleChange}
                        required
                        placeholder="Monto"
                        />
                    </Col>
                </Form.Row>
                <Form.Row className="my-1">
                    <Col sm={12} md={6}>
                        <Form.Control
                        name="date"
                        value={form.date}
                        type="date"
                        onChange={handleChange}
                        required
                        placeholder="Fecha"
                        />
                    </Col>
                    <Col sm={12} md={6}>
                        <Form.Control
                        as="select"
                        name="type"
                        value={form.type}                    
                        onChange={handleChange}
                        required
                        placeholder="Tipo de operación"
                        >
                            <option>Ingreso</option>
                            <option>Egreso</option>
                        </Form.Control>
                    </Col> 
                </Form.Row>
                <Button variant="primary" type="submit">AGREGAR</Button>
            </Form>
    )
}

