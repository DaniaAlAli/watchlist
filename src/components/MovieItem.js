import React from "react";
import ListGroupItem from "react-bootstrap/ListGroupItem";

//Component
import DeleteButton from "./buttons/DeleteButton";

const MovieItem = ({ movie }) => {
  return (
    <>
      <ListGroupItem>{movie.title}</ListGroupItem>
      <DeleteButton movieId={movie.id} />
    </>
  );
};

export default MovieItem;
