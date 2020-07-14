import React, { useState } from "react";
import { observer } from "mobx-react";
import ListGroup from "'react-bootstrap/ListGroup";

//Components
import MovieItem from "./MovieItem";

//Store
import movieStore from "../stores/MovieStore";

const WatchList = () => {
  const watchList = movieStore.movies.map((movie) => (
    <MovieItem movie={movie} key={movie.id} />
  ));

  const [movie, setMovie] = useState({ title: "" });

  const handleChange = (event) => {
    const newMovie = { ...movie, [event.target.title]: event.target.value };
    setMovie(newMovie);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    movieStore.createMovie(movie);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Movie</label>
          <input
            title="title"
            type="text"
            onChange={handleChange}
            className="form-control"
            value={movie.name}
          />
        </div>
      </form>{" "}
      <ListGroup>{watchList}</ListGroup>
    </div>
  );
};

export default observer(WatchList);
