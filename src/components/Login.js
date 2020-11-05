import React, { useRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { v4 as uuidV4 } from 'uuid';

export default function Login(props) {

  const idRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onIdSubmit(idRef.current.value);
  }

  const createNewId = () => {
    props.onIdSubmit(uuidV4());
  }
  return (
    <div>
      <Container className="align-items-center d-flex" style={{ height: '100vh'}}>
        <Form onSubmit={handleSubmit} className="w-100">
          <Form.Group>
            <Form.Label>Enter Your Id</Form.Label>
            <Form.Control type="text" ref={idRef} required></Form.Control>
          </Form.Group>
          <Button type="submit" className="mr-2">Login</Button>
          <Button onClick={createNewId} variant="secondary">Creat A New Id</Button>
        </Form>
      </Container>
    </div>
  )
}