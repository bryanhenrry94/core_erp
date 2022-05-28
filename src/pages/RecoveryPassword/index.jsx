import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  FormContainer,
  Form,
  Title,
  Label,
  Input,
  InputCode,
  Ancor,
  InputGroup,
} from "./styles.js";
import { Button } from "../../Atoms/Button";
import { Paragraph } from "../../Atoms/Paragraph";
import { ChangePassword } from "../../Organisms/ChangePassword";

const RecoveryPassword = () => {
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showGroupCode, setShowGroupCode] = useState(false);
  let navigate = useNavigate();

  const routeChange = () => {
    navigate("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    routeChange();
  };

  const handleClickSendMail = () => setShowGroupCode(!showGroupCode);

  const hangleChange = () => {
    const codeOne = document.getElementById("CodeOne");
    const CodeTwo = document.getElementById("CodeTwo");
    const CodeThree = document.getElementById("CodeThree");
    const CodeFour = document.getElementById("CodeFour");
    const CodeFive = document.getElementById("CodeFive");
    const CodeSix = document.getElementById("CodeSix");

    if (
      CodeOne.value !== "" &&
      CodeTwo.value !== "" &&
      CodeThree.value !== "" &&
      CodeFour.value !== "" &&
      CodeFive.value !== "" &&
      CodeSix.value !== ""
    )
      setShowChangePassword(true);
    else setShowChangePassword(false);
  };

  return (
    <Container>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Title>Restablecer Contrasena</Title>
          <Paragraph>
            Enviaremos un correo electrónico de confirmación de 6 dígitos a su
            correo electrónico. Ingrese el código en el cuadro a continuación
            para verificar su correo electrónico.
          </Paragraph>
          <Label>Email address</Label>
          <Input type="text" placeholder="bryanhenrry94@gmail.com" />
          <Ancor onClick={handleClickSendMail}>Enviar codigo</Ancor>
          {showGroupCode && (
            <InputGroup>
              <InputCode
                placeholder="-"
                required
                id="CodeOne"
                onChange={hangleChange}
                maxlength="1"
              />
              <InputCode
                placeholder="-"
                required
                id="CodeTwo"
                onChange={hangleChange}
                maxlength="1"
              />
              <InputCode
                placeholder="-"
                required
                id="CodeThree"
                onChange={hangleChange}
                maxlength="1"
              />
              <InputCode
                placeholder="-"
                required
                id="CodeFour"
                onChange={hangleChange}
                maxlength="1"
              />
              <InputCode
                placeholder="-"
                required
                id="CodeFive"
                onChange={hangleChange}
                maxlength="1"
              />
              <InputCode
                placeholder="-"
                required
                id="CodeSix"
                onChange={hangleChange}
                maxlength="1"
              />
            </InputGroup>
          )}
        </Form>
        {showChangePassword && <ChangePassword />}
      </FormContainer>
    </Container>
  );
};

export { RecoveryPassword };
