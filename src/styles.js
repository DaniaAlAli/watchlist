import styled, { createGlobalStyle } from "styled-components";
import { ListGroup } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";

export const GlobalStyle = createGlobalStyle`
body{
  background-image: url("http://jmd.im/black_wallpapers/I/phone/BLACK_I_phone-6.jpg");
    }
`;
export const DeleteButtonStyled = styled.p`
  color: #760202;
  border: 1px solid #760202;
  background-color: #bb6262;
  border-radius: 20px;
  width: 150px;
  float: right;
  font-size: 20px;
  text-align: center;
  :hover {
    cursor: pointer;
    border: 1px solid #760202;
    background-color: grey;
    border-radius: 20px;
  }
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const StatusButtonStyled = styled.p`
  color: #01018e;
  border: 1px solid #01018e;
  background-color: #3b3bd8;
  border-radius: 20px;
  width: 150px;
  font-size: 20px;
  float: right;
  text-align: center;
  :hover {
    cursor: pointer;
    border: 1px solid #01018e;
    background-color: grey;
    border-radius: 20px;
  }
`;

export const ListStyled = styled(ListGroup)`
  color: black;
  font-family: "Wallpoet", cursive;
  font-size: 35px;
  span {
    color: green;
    font-size: 35px;
  }
`;

export const ListGroupItemStyled = styled(ListGroupItem)`
  color: #ffcf31;
  background-color: #414040;
  font-weight: bold;
  font-family: "Codystar", cursive;
  font-size: 30px;
  border: 1px solid white;
`;

export const AddMovieStyled = styled.div`
  align-items: left;
  justify-content: left;
  padding: 30px;
  display: flex;
`;

export const AddButton = styled.button`
  color: #054f01;
  border: 1px solid #054f01;
  background-color: #75b675;
  font-family: "Wallpoet", cursive;
  border-radius: 20px;
  width: 150px;
  font-size: 20px;
  float: right;
  text-align: center;
  :hover {
    cursor: pointer;
    border: 1px solid #054f01;
    background-color: grey;
    border-radius: 20px;
  }
`;
