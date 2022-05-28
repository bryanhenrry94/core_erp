import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  FormContainer,
  Form,
  Title,
  Ancor,
  Paragraph,
} from "./styles.js";
import { Button } from "../../Atoms/Button";
import { Label } from "../../Atoms/Label";
import { Input } from "../../Atoms/Input";

const SingUp = () => {
  let navigate = useNavigate();

  const routeChange = () => {
    navigate("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    routeChange();
  };

  return (
    <Container>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Title>Mi Cuenta</Title>
          <Label>Nombre</Label>
          <Input type="text" required></Input>
          <Label>Email</Label>
          <Input type="text" required></Input>
          <Label>Password</Label>
          <Input type="password" required></Input>
          <Button value="Registrar" />
        </Form>
        <Ancor href="/">Atras</Ancor>
      </FormContainer>
    </Container>
  );
};

export { SingUp };
