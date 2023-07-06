import { defineStore } from "pinia";
import { IState, IMovie } from "../types/store";

export const useMovieStore = defineStore("movieStore", {
  state: (): IState => ({
    movies: [],
    activeTab: 2,
  }),
  getters: {
    watchedMovies(): IMovie[] {
      return this.movies.filter((movie: IMovie) => movie.isWatched);
    },
    totalMoviesCounter(): number {
      return this.movies.length;
    },
  },
  actions: {
    setActiveTab(id: number) {
      this.activeTab = id;
    },
    toggleWatch(id: number) {
      const idx = this.movies.findIndex((movie) => movie.id === id);
      this.movies[idx].isWatched = !this.movies[idx].isWatched;
    },
    deleteMovie(id: number) {
      this.movies = this.movies.filter((movie) => movie.id !== id);
    },
  },
});
