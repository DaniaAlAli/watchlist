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

  const [movie, setMovie] = useState({
    title: "",
    poster: "",
    click: false,
  });

  const handleChange = (event) => {
    const newMovie = { ...movie, [event.target.name]: event.target.value };
    setMovie(newMovie);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    movieStore.createMovie(movie);
    setMovie({
      title: "",
      poster: "",
      click: false,
    });
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
                color: "green",
                fontSize: "30px",
                fontFamily: "Wallpoet, cursive",
              }}
            >
              Add a New Movie
            </label>
            <input
              name="title"
              type="text"
              onChange={handleChange}
              className="form-control"
              value={movie.title}
              placeholder="Movie's Name 🎥.."
            />{" "}
            <label
              style={{
                color: "green",
                fontSize: "30px",
                fontFamily: "Wallpoet, cursive",
              }}
            >
              Image
            </label>
            <input
              name="poster"
              onChange={handleChange}
              className="form-control"
              value={movie.poster}
              placeholder="Movie's URL 🎥.."
            />{" "}
            <AddButton>Add</AddButton>
          </div>
        </form>
      </AddMovieStyled>
      <div className="row">
        <div className="col-6">
          <SearchBar setQuery={setQuery} />
          <ListStyled className="mx-5">
            <span>
              WatchList -{" "}
              <span
                style={{
                  color: "white",
                }}
              >
                {watchList.length}
              </span>{" "}
            </span>
            {watchList}
            <span
              style={{
                color: "white",
                fontSize: "25px",
              }}
            >
              {checkIfEmpty(watchList)}
            </span>{" "}
          </ListStyled>
        </div>
        <div className="col-6">
          <SearchBar setQuery={setQueryWatched} />
          <ListStyled className="mx-5">
            <span>
              Watched -{" "}
              <span
                style={{
                  color: "white",
                }}
              >
                {watchedList.length}
              </span>
            </span>
            {watchedList}{" "}
            <span
              style={{
                color: "white",
                fontSize: "25px",
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
