import { Button, Container, Form, Nav, Navbar, NavDropdown, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import "./Navbar.css"


function NavbarComponent() {
    // useState Modal:
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // useState Form:
    const [form, setForm] = useState({});


    function onChangeInputs(e) {
        const { name, value } = e.target;
        const changes = { ...form, [name]: value, admin: "false" };
        setForm(changes);
        console.log(form);
    }

    function SaveLocalStorage() {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        if (form.email != "" && form.name != "" && form.lastname != "" && form.date != "") {
        let response = [...users, form];
        localStorage.setItem("users", JSON.stringify(response));
        handleClose ();
        console.log(response);
        } else {

        }
    }

    return (
        <div>
            {/* Navbar */}
            <Navbar className='Navbar' expand="md">
                <Container fluid>
                    <Navbar.Brand className='text-primary' href="#"><h4>Desafio 3</h4></Navbar.Brand>
                    <Navbar.Toggle className='bg-secondary' />
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link className='text-primary px-3' href="/"><b>Inicio</b></Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Nav.Link className='text-primary px-3' onClick={handleShow}><b>Crear Contacto</b></Nav.Link>
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