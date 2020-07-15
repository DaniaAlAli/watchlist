import React, { useState } from "react";
import { observer } from "mobx-react";

//Components
import MovieItem from "./MovieItem";
import SearchBar from "./SearchBar";

//Style
import { ListStyled, AddMovieStyled, AddButton } from "../styles";

//Store
import movieStore from "../stores/MovieStore";

const WatchList = () => {
  const [query, setQuery] = useState("");
  const [queryWatched, setQueryWatched] = useState("");
  const [movieName, setMovieName] = useState("");

  const watchList = movieStore.movies
    .filter(
      (movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase()) &&
        movie.click === false
    )
    .map((movie) => <MovieItem movie={movie} key={movie.id} />);

  const watchedList = movieStore.movies
    .filter(
      (movie) =>
        movie.title.toLowerCase().includes(queryWatched.toLowerCase()) &&
        movie.click === true
    )
    .map((movie) => <MovieItem movie={movie} key={movie.id} />);

  const handleChange = (event) => {
    setMovieName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    movieStore.createMovie(movieName);
    setMovieName("");
  };

  const checkIfEmpty = (list) => {
    if (list.length <= 0) return <p>No Movies</p>;
  };

  return (
    <div>
      <AddMovieStyled>
        <form onSubmit={handleSubmit}>
          <div>
            <label
              style={{
                color: "red",
                fontSize: "30px",
                fontFamily: "Wallpoet, cursive",
              }}
            >
              Add a New Movie
            </label>
            <input
              title="title"
              type="text"
              onChange={handleChange}
              className="form-control"
              value={movieName}
              defaultValue="Reset"
            />{" "}
            <AddButton>Add</AddButton>
          </div>
        </form>
      </AddMovieStyled>
      <div className="row">
        <div className="col-6">
          <SearchBar setQuery={setQuery} />
          <ListStyled>
            <span>WatchList - {watchList.length} </span>
            {watchList}
            <span
              style={{
                color: "white",
              }}
            >
              {checkIfEmpty(watchList)}
            </span>{" "}
          </ListStyled>
        </div>
        <div className="col-6">
          <SearchBar setQuery={setQueryWatched} />
          <ListStyled>
            <span>Watched - {watchedList.length}</span>
            {watchedList}{" "}
            <span
              style={{
                color: "white",
              }}
            >
              {checkIfEmpty(watchedList)}
            </span>{" "}
          </ListStyled>
        </div>
      </div>
    </div>
  );
};

export default observer(WatchList);
