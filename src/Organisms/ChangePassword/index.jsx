import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "./styles.js";
import { Button } from "../../Atoms/Button";
import { Label } from "../../Atoms/Label";
import { Input } from "../../Atoms/Input";
import { Paragraph } from "../../Atoms/Paragraph";

const ChangePassword = ({ display }) => {
  let navigate = useNavigate();

  const routeChange = () => {
    navigate("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    routeChange();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Paragraph>Ingrese su nueva contrasena</Paragraph>
        <Label>Password</Label>
        <Input type="password" placeholder="********" required></Input>
        <Label>Confirmar Password</Label>
        <Input type="password" placeholder="********" required></Input>
        <Button type="submit" value="Cambiar Contrasena" />
      </Form>
    </div>
  );
};

export { ChangePassword };
