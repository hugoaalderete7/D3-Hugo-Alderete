import { Button, Container, Form, Nav, Navbar, NavDropdown, Modal } from 'react-bootstrap';
import React, { useState } from 'react';

function NavbarComponent() {
    // useState Modal:
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // useState Form:
    const [form, setForm] = useState({});


    function onChangeInputs(e) {
        const { name, value } = e.target;
        const changes = { ...form, [name]: value };
        setForm(changes);
        console.log(form);
    }

    function SaveLocalStorage() {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let response = [...users, form];
        localStorage.setItem("users", JSON.stringify(response));
        console.log(response);
    }

    return (
        <div>
            {/* Navbar */}
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Desafio 3</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link href="/">Inicio</Nav.Link>
                            <Nav.Link href="#action3">Link</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Button variant="outline-success" onClick={handleShow}>Crear Contacto</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Modal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Crear Contacto</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" onChange={onChangeInputs} type="email" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control name="name" onChange={onChangeInputs} type="text" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control name="lastname" onChange={onChangeInputs} type="text" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Fecha de Nacimiento</Form.Label>
                            <Form.Control name="date" onChange={onChangeInputs} type="date" />
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>

                    <Button variant="btn btn-primary w-100" onClick={SaveLocalStorage}>
                        Guardar Contacto
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default NavbarComponent;