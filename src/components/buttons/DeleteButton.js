import React from "react";

//Style
import { DeleteButtonStyled } from "../../styles";

//Store
import movieStore from "../../stores/MovieStore";

const DeleteButton = ({ movieID }) => {
  const handleDelete = () => movieStore.deleteCollection(movieID);
  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
