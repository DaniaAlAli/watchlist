import { decorate, observable } from "mobx";

//Data
import movies from "../movies";

class MovieStore {
  movies = movies;

  createMovie = (movieName) => {
    const newMovie = {
      id: this.movies[this.movies.length - 1].id + 1,
      click: false,
      title: movieName,
    };

    this.movies.push(newMovie);
  };

  updateMovie = (updatedMovie) => {
    const movie = this.movies.find((movie) => movie.id === updatedMovie.id);
    movie.click = !movie.click;
  };

  deleteCollection = (movieID) => {
    this.movies = this.movies.filter((movie) => movie.id !== movieID);
    console.log(this.movies);
    this.movies = this.movies.filter((movie) => movie.id !== movieID);
    console.log(this.movies);
  };
}

decorate(MovieStore, { movies: observable });

const movieStore = new MovieStore();

export default movieStore;
