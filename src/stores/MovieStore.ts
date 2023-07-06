import { defineStore } from "pinia";
import { IState, IMovie } from "../types/store";

// Options API style

// export const useMovieStore = defineStore("movieStore", {
//   state: (): IState => ({
//     movies: [],
//     activeTab: 2,
//   }),
//   getters: {
//     watchedMovies(): IMovie[] {
//       return this.movies.filter((movie: IMovie) => movie.isWatched);
//     },
//     totalMoviesCounter(): number {
//       return this.movies.length;
//     },
//   },
//   actions: {
//     setActiveTab(id: number) {
//       this.activeTab = id;
//     },
//     toggleWatch(id: number) {
//       const idx = this.movies.findIndex((movie) => movie.id === id);
//       this.movies[idx].isWatched = !this.movies[idx].isWatched;
//     },
//     deleteMovie(id: number) {
//       this.movies = this.movies.filter((movie) => movie.id !== id);
//     },
//   },
// });

// Composition API style

import { ref, computed, watch } from "vue";

export const useMovieStore = defineStore("movieStore", () => {
  const movies = ref([] as IMovie[]);
  const activeTab = ref(2);

  const moviesInLocalStorage = localStorage.getItem("movies");

  if (moviesInLocalStorage) {
    movies.value = JSON.parse(moviesInLocalStorage)._value;
  }

  const setActiveTab = (id: number) => {
    activeTab.value = id;
  };

  const toggleWatch = (id: number) => {
    const idx = movies.value.findIndex((movie) => movie.id === id);
    movies.value[idx].isWatched = !movies.value[idx].isWatched;
  };

  const deleteMovie = (id: number) => {
    movies.value = movies.value.filter((movie) => movie.id !== id);
  };

  const watchedMovies = computed(() =>
    movies.value.filter((movie: IMovie) => movie.isWatched)
  );

  const totalMoviesCounter = computed(() => movies.value.length);

  watch(
    () => movies,
    (state) => {
      localStorage.setItem("movies", JSON.stringify(state));
    },
    { deep: true }
  );

  return {
    movies,
    activeTab,
    watchedMovies,
    totalMoviesCounter,
    toggleWatch,
    deleteMovie,
    setActiveTab,
  };
});
