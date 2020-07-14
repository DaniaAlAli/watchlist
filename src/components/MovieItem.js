import React from "react";
import ListGroupItem from "react-bootstrap/ListGroupItem";

const MovieItem = ({ movie }) => {
  return <ListGroupItem>{movie.title}</ListGroupItem>;
};

export default MovieItem;
