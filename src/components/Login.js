import React, {useState} from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

export default function Login({setUserAuth}) {

    let history = useHistory()
    const [user, setUser] = useState({
        email: '',
        password: ''
      });

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async e =>{
        e.preventDefault();
        if(user.email === '' || user.password === ''){
            alert('Complete los campos');
            return;
        }

        const request = await fetch('http://localhost:4000/api/login',{   
            method: 'POST',     
            body : JSON.stringify(user),
            headers : {
            'Content-Type': 'application/json'
            }
            });
            
            console.log(request);
            const response = await request.json();
            console.log(response);

            if(request.ok){                
                
                if(response.length){
                    setUserAuth(response[0])
                    setUser({
                        email: '',
                        password: ''
                    });
                }else{
                    alert('Email o contraseña incorrectos')
                }
                console.log(response);                   
                history.push("/");             
            }else {
                alert('Hubo un error');
            }
    }

    return (
        <>
            <Row className="d-flex justify-content-center mt-5">
                <Col sm={12} md={4}>
                    <p className="titles">Iniciar sesión</p>
                    <Form className="border border-1 p-5 mx-2" onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                             name="email"
                             value={user.email}
                             onChange={handleChange}
                             type="email"
                             placeholder="Ingrese su email" />                            
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                             name="password"
                             value={user.password}
                             onChange={handleChange}
                             type="password"
                             placeholder="Contraseña" />
                        </Form.Group>  
                        <div>
                            <Button variant="primary mr-2" type="submit">
                                Iniciar sesión
                            </Button>
                            <a href="/register">No tengo cuenta</a>
                        </div>                      
                        
                    </Form>
                </Col>                
            </Row>
            
        </>
    )
}
