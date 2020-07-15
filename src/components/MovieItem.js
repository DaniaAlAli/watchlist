import React from "react";

//Style
import { ListGroupItemStyled } from "../styles";

//Component
import DeleteButton from "./buttons/DeleteButton";
import StatusButton from "./buttons/StatusButton";

const MovieItem = ({ movie }) => {
  return (
    <>
      <ListGroupItemStyled>
        - {movie.title}
        <DeleteButton movieId={movie.id} />{" "}
        <StatusButton movie={movie}> </StatusButton>
      </ListGroupItemStyled>
    </>
  );
};

export default MovieItem;
