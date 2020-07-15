import React from "react";

//Style
import { StatusButtonStyled } from "../../styles";

//Store
import movieStore from "../../stores/MovieStore";

const StatusButton = ({ movie }) => {
  return (
    <>
      <StatusButtonStyled onClick={() => movieStore.updateMovie(movie)}>
        {" "}
        {movie.click ? "unWatched" : "Watched"}{" "}
      </StatusButtonStyled>
    </>
  );
};

export default StatusButton;
