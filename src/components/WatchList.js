import React, { useState } from "react";
import { observer } from "mobx-react";
import { ListGroup } from "react-bootstrap";

//Components
import MovieItem from "./MovieItem";

//Store
import movieStore from "../stores/MovieStore";

const WatchList = () => {
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState({ title: "" });

  const watchList = movieStore.movies.map((movie) => (
    <MovieItem movie={movie} key={movie.id} />
  ));

  const watchedList = movieStore.watchedmovies.map((movie) => (
    <MovieItem movie={movie} key={movie.id} />
  ));

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
      <ListGroup>unWatched{watchList}</ListGroup>
      <ListGroup>Watched{watchedList}</ListGroup>
    </div>
  );
};

export default observer(WatchList);
