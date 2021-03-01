import React, {useState, useEffect, useRef} from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

export default function Register({setUserAuth}) {
    
    let history = useHistory();

    const [newUser, setNewUser] = useState({
        username: '',
        email: '',
        password: '',
        image: ''
      });

      const isMountedVal = useRef(1);
      useEffect(() => {
		isMountedVal.current = 1;
		
		return () => {isMountedVal.current = 0;};
	})

    const handleChange = e => {
        setNewUser({
            ...newUser,
            [e.target.name] : e.target.value
        })
    }

    const onChangeImagen = e =>{
        if(e.target.files.length){
            if(e.target.files[0].size > 4194304){
                // 5242880 = 5MB
                // 4194304 = 4MB
                e.target.value=null;
                alert('La imagen es demasiado grande');
                setNewUser({
                    ...newUser,
                    image: null
                });                
                return;
            } 
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onloadend = () => {
                setNewUser({
                    ...newUser,
                    image: reader.result
                });
            }
        }else{
            setNewUser({
                ...newUser,
                image: null
            })            
        }
    }

    const updateState = () => {
		if(isMountedVal.current){
			setUserAuth(newUser);
		}
	}

    const handleSubmit = async e =>{
        e.preventDefault();
        if(newUser.username === '' || newUser.email === '' || newUser.password === ''){
            alert('Complete los campos');
            return
        }

        const request = await fetch('http://localhost:4000/api/insertUser',{   
            method: 'POST',     
            body : JSON.stringify(newUser),
            headers : {
            'Content-Type': 'application/json'
            }
            });
            
            console.log(request);
            const response = await request.json();
            console.log(response);

            if(request.ok){
                alert(response.msg);
                updateState();
                setNewUser({
                    username: '',
                    email: '',
                    password: ''
                });
                   
                history.push("/");             
            }else {
                alert(response.msg);
            }
    }

    return (
        <>
            <Row className="d-flex justify-content-center mt-5">
                 <Col sm={12} md={4}>
                    <p className="titles">Crear cuenta</p>
                    <Form className="border border-1 p-5 mx-2" onSubmit={handleSubmit}>                        
                        <Form.Group>
                            <Form.Label>Nombre y Apellido</Form.Label>                            
                            <Form.Control
                             name="username"
                             value={newUser.username}
                             onChange={handleChange}
                             type="text"
                             required
                             placeholder="Ingrese su nombre y apellido" />                            
                        </Form.Group>
                        
                        <Form.Group>
                            <Form.Label>Email</Form.Label>                            
                            <Form.Control
                             name="email"
                             value={newUser.email}
                             onChange={handleChange}
                             type="email"
                             required
                             placeholder="Ingrese su email" />                            
                        </Form.Group>  

                        <Form.Group>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                             name="password"
                             value={newUser.password}
                             onChange={handleChange}
                             type="password"
                             required
                             placeholder="Contraseña" />
                        </Form.Group> 

                        <Form.Group>
                            <Form.Label>Imagen (opcional)</Form.Label>
                            <Form.Control id="img" type="file" onChange={onChangeImagen}/>
                        </Form.Group>                       
                        <Button variant="primary" type="submit">
                            Crear cuenta
                        </Button>                        
                    </Form>
                </Col>
            </Row>
        </>
    )
}
