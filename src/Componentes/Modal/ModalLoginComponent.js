import { Modal, Button, Form } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import "./ModalLoginComponent.css";

function ModalLoginComponent() {

    const [showLogin, setShowLogin] = useState(false);

    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);


    // useState formLogin:
    const [formLogin, setFormLogin] = useState({});


   // Inputs del Login:
    function onChangeInputsLogin(e) {
        const { name, value } = e.target;
        const changesLogin = { ...formLogin, [name]: value };
        setFormLogin(changesLogin);
        console.log(formLogin);
    }

   // Login - Desde aqui:
    const [users, setusers] = useState([]);
    
    useEffect(() => {
        GetUsers()
    }, []);
    
    function GetUsers() {
        let getUsers = JSON.parse(localStorage.getItem("users")) || [];
        setusers(getUsers);
    }
    
    
    let response = users.find((item) => {
        if (item.email == formLogin.emailLogin & item.name == formLogin.nameLogin) {
            return item
        }
    });
    
    console.log (response)


    function SesionPage () {
    
        if (response != undefined) {
            window.location.href="/film";
        } else {
            alert ("Error en inicio de sesion")
        }
    
    }
   // Login - Hasta aqui.


    return (
        <div>
            <Button variant="outline-primary" className="px-5" onClick={handleShowLogin}>
                <b>Iniciar Sesion</b>
            </Button>

            <Modal show={showLogin} onHide={handleCloseLogin}>
                <Modal.Header closeButton>
                    <Modal.Title>Iniciar Sesion</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="emailLogin" type="email" onChange={onChangeInputsLogin} placeholder="Ingresa tu email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control name="nameLogin" type="text" onChange={onChangeInputsLogin} placeholder="Ingresa tu primer nombre" />
                        </Form.Group>

                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" className="boton" onClick={SesionPage}>
                        Iniciar Sesion
                    </Button>
                </Modal.Footer>

            </Modal>
        </div>
    )
}
export default ModalLoginComponent;