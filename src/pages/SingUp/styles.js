import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
`

export const FormContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 300px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: var(--hospital-green-bold);
  text-align: center;
  text-decoration: none;
  margin-bottom: 25px;
`;

export const Ancor = styled.a`
  color: var(--hospital-green-bold);
  font-size: var(--sm);
  text-align: center;
  text-decoration: none;
  margin-bottom: 25px;
`;
