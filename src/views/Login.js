import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";

export default function Login() {
    return (
        <>
            <Container>
                <Card className="col-5 mx-auto">
                    <Card.Body>
                        <Form className="p-3">
                            <h1 className="h3">
                                Silahkan login untuk melanjutkan
                            </h1>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Input password" />
                            </Form.Group>
                            <Button
                                className="btn-fill pull-right mt-3"
                                type="submit"
                                variant="primary"
                            >
                                Login
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}