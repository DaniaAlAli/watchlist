import React from "react";

//Style
import { DeleteButtonStyled } from "../../styles";

//Store
import movieStore from "../../stores/MovieStore";

const DeleteButton = ({ movieId }) => {
  const handleDelete = () => movieStore.deleteCollection(movieId);
  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
