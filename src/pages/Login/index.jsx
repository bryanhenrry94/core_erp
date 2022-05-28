import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../../styles/main.scss"
import {
  Container,
  FormContainer,
  Title,
  Form,
  Ancor,
} from "./styles.js"
import { Button } from "../../Atoms/Button"
import { Input } from '../../Atoms/Input'
import { Label } from '../../Atoms/Label'

const Login = () => {
  let navigate = useNavigate();

  const routeChange = () => {
    navigate("/Home");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    routeChange();
  };

  const handleChange = (event) => {
    console.log(`event change value: ${event}`);
  }

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <Title>Login</Title>
        <Form>
          <Label>Email address</Label>
          <Input type="text" required onChange={handleChange}/>
          <Label>Password</Label>
          <Input type="password" required />
          <Button type="submit" value="Ingresar" />
          <Ancor href="/RecoveryPassword">Recuperar Contrasena</Ancor>
        </Form>
        <Ancor href="/SingUp">Registrar</Ancor>
      </FormContainer>
    </Container>
  );
};

export { Login };
