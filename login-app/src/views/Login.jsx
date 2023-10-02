import React from 'react';
import { Button, Form, Row, Col, Label, FormGroup, Input } from 'reactstrap';
import '../views/Login.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  return(
    <div className='div'>
      <Form>
        <Col md={20}>
          <FormGroup>
            <Label for='input-usuario'>Usuário</Label>
            <Input
              id="input-usuario"
              name='usuario'
              placeholder="Usuário"
            />
          </FormGroup>
          <FormGroup>
            <Label>Senha</Label>
            <Input
              id='input-senha'
              name='senha'
              placeholder='Senha'
              type='password'
            />
          </FormGroup>
        </Col>
        <FormGroup>
          <Button outline color="primary" size="large" disabled={true}>Clique aqui</Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default Login;