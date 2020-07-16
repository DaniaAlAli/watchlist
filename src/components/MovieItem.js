import React, { useState } from "react";

//Style
import { ListGroupItemStyled, imageStyled } from "../styles";

//Component
import DeleteButton from "./buttons/DeleteButton";
import StatusButton from "./buttons/StatusButton";

const MovieItem = ({ movie }) => {
  const [currentTheme, setCurrentTheme] = useState(movie.poster);

  const showImage = () => {
    if (currentTheme === `${movie.poster}`) setCurrentTheme(`${movie.title}`);
    else if (currentTheme === `${movie.title}`)
      setCurrentTheme(`${movie.poster}`);
  };

  return (
    <>
      <ListGroupItemStyled>
        <imageStyled onClick={showImage}>
          <span style={{ fontSize: "80%" }}>🎬</span>{" "}
          {currentTheme === `${movie.title}` ? (
            <img
              style={{ width: "130px", height: "160px", borderRadius: "20px" }}
              src={movie.poster}
              alt={movie.title}
            />
          ) : (
            `${movie.title}`
          )}
        </imageStyled>
        <DeleteButton movieId={movie.id} />{" "}
        <StatusButton movie={movie}> </StatusButton>
      </ListGroupItemStyled>
    </>
  );
};

export default MovieItem;
