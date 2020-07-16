import styled, { createGlobalStyle } from "styled-components";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
body{
  background-image: url("http://jmd.im/black_wallpapers/I/phone/BLACK_I_phone-2.jpg");
    }
`;
export const DeleteButtonStyled = styled.p`
  color: #760202;
  border: 2px solid #760202;
  background-color: #bb6262;
  border-radius: 15px;
  width: 140px;
  float: right;
  font-size: 20px;
  text-align: center;
  :hover {
    cursor: pointer;
    border: 2px solid #760202;
    background-color: grey;
    border-radius: 15px;
  }
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
  border-radius: 20px;
`;

export const StatusButtonStyled = styled.p`
  color: #01018e;
  border: 2px solid #01018e;
  background-color: #7f7fed;
  border-radius: 15px;
  width: 140px;
  font-size: 20px;
  float: right;
  text-align: center;
  font-weight: bold;
  :hover {
    cursor: pointer;
    border: 2px solid #01018e;
    background-color: grey;
    border-radius: 15px;
  }
`;

export const ListStyled = styled(ListGroup)`
  color: black;
  font-family: "Wallpoet", cursive;
  font-size: 35px;
  span {
    color: red;
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
  border: 4px solid #054f01;
  background-color: #75b675;
  font-family: "Wallpoet", cursive;
  border-radius: 20px;
  width: 100px;
  font-size: 20px;
  float: right;
  text-align: center;
  :hover {
    cursor: pointer;
    border: 4px solid #054f01;
    background-color: grey;
    border-radius: 20px;
  }
`;

export const LinkStyled = styled(Link)`
  color: #ffcf31;
`;

export const NavItem = styled(NavLink)`
  padding: 30px;

  &.active {
    color: green;
  }
`;

export const NavStyled = styled.nav`
  // border: 1px solid red;
  // border-radius: 5px;
`;

export const DetailWrapper = styled.div`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  text-align: center;

  h1 {
    font-family: "Codystar", cursive;
    width: 70%;
    font-size: 50px;
    font-weight: bold;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    text-align: center;
    color: red;
  }
  img {
    &.main {
      width: 400px;
      height: 500px;
      border-radius: 20px;
      margin-bottom: 20px;
    }
  }
`;
