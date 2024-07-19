import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

function SignUp() {

  let [name, setUsername] = useState(' ');
  let [password, setPassword] = useState(' ');
  // axios.defaults.withCredentials = true;
  let handleLogin = (event) => {
    event.preventDefault()
   
    axios.post("http://localhost:5001/api/login", { 
      name, password } ,{
        withCredentials: true, 
      }).then(res =>{
        console.log("respo login usre", res)
      }).catch(e =>{
        console.log("error user login", e)
      })
    console.log("login", name, password)

  }

  let handleRegister = () => {
    console.log("register")
    axios.post("http://localhost:5001/api/create", { 
      name, password }).then(res =>{
        alert("user created")
        console.log("respo create usre", res)
      }).catch(e =>{
        alert("error")
        console.log("error user create", e)
      })
  }
  return (
    <Container fluid className="d-flex vh-100 justify-content-center align-items-center">
      <Row className="justify-content-center w-100">
        <Col xs={12} md={6} lg={4}>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Username" onChange={(e) => { setUsername(e.target.value) }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
            {' '}
            <Button onClick={handleRegister} variant="primary" type="button">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
