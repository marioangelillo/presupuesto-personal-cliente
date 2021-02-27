import React, {useState} from 'react';
import { Form, Col, Button } from 'react-bootstrap';

export default function FormSubmit({operationsList, setOperationList}) {

    const [form, setForm] = useState({
        concept: '',
        amount: '',
        dateOperation: '',
        operation: ''
    })

    const handleChange = e =>{
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async e =>{
        e.preventDefault();
        if(form.concept === '' || form.amount === '' || form.date === '' || form.type === ''){
            alert('Deben completarse todos los campos');
            return;
        }        

        const request = await fetch('http://localhost:4000/api/insert',{   
        method: 'POST',     
        body : JSON.stringify(form),
        headers : {
        'Content-Type': 'application/json'
        }
        });
        
        console.log(request)
        const response = await request.json();
        console.log(response)

        if(request.ok){
            alert(response.msg);

            setOperationList([
                ...operationsList,
                form
            ])

            setForm({
                concept: '',
                amount: '',
                date: '',
                type: ''
            });

            document.getElementById('date').value = null
            document.getElementById('op').value = null
        }else {
            alert('Hubo un error');
        }
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
                        id="date"
                        name="dateOperation"
                        value={form.dateOperation}
                        type="date"
                        onChange={handleChange}
                        required
                        placeholder="Fecha"
                        />
                    </Col>
                    <Col sm={12} md={6}>
                        <Form.Control
                        id="op"
                        as="select"
                        name="operation"
                        value={form.operation}                    
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

