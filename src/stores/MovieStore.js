import { decorate, observable } from "mobx";

//Data
import movies from "../movies";
import watchedmovies from "../watchedmovies";

class MovieStore {
  movies = movies;
  watchedmovies = watchedmovies;

  createMovie = (newMovie) => {
    newMovie.id = this.movies[this.movies.length - 1].id + 1;
    this.movies.push(newMovie);
  };

  // updateMug = (updatedMovie) => {
  //     const movie = this.movies.find((movie) => movie.id === updatedMovie.id);

  //     for (const key in updatedMovie) movie[key] = updatedMovie[key];
  //   };

  deleteCollection = (movieID) => {
    this.movies = this.movies.filter((movie) => movie.id !== movieID);
  };

  // decorate(MovieStore, {movies: observable });
}

decorate(MovieStore, { movies: observable });
const movieStore = new MovieStore();
export default movieStore;
