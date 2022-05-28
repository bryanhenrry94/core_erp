import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
`;

export const FormContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 350px;
`;

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

export const Label = styled.label`
  font-size: var(--sm);
  font-weight: bold;
  margin-bottom: 4px;
`;

export const Input = styled.input`
  background-color: var(--text-input-field);
  border: 1px solid var(--hospital-green-bold);
  border-radius: 8px;
  height: 30px;
  font-size: var(--md);
  padding: 6px;
  margin-bottom: 22px;
`;

export const InputCode = styled.input`
  background-color: var(--text-input-field);
  border: 1px solid var(--hospital-green-bold);
  border-radius: 8px;
  height: 30px;
  width: 30px;
  font-size: var(--md);
  padding: 3px;
  margin-bottom: 22px;
  margin: 10px;
  text-align: center;
`;

export const InputGroup = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

export const Paragraph = styled.a`
  font-size: var(--sm);
  text-align: center;
  text-decoration: none;
  margin-bottom: 25px;
  padding: 10px;
  justify-content: space-between;
`;

export const Ancor = styled.a`
  color: var(--hospital-green-bold);
  font-size: var(--sm);
  text-align: center;
  text-decoration: none;
  margin-bottom: 10px;
`;
