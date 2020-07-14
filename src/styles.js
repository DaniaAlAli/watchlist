import styled, { createGlobalStyle } from "styled-components";

export const DeleteButtonStyled = styled.p`
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: red;
  :hover {
    cursor: pointer;
    border: 1px solid red;
    background-color: grey;
    border-radius: 20px;
  }
`;
