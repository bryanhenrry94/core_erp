import styled from "styled-components";

export const ButtonDefault = styled.button`
  background-color: var(--hospital-green);
  border-radius: 8px;
  border: none;
  color: var(--white);
  width: 100%;
  cursor: pointer;
  font-size: var(--md);
  font-weight: bold;
  height: 50px;
  margin-top: 14px;
  margin-bottom: 30px;
  &:hover {
    background-color: var(--hospital-green-bold);
  }
`;
