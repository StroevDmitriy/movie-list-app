import { defineStore } from "pinia";
import { IMovie, ISearchState } from "../types/store";
import { useMovieStore } from "./MovieStore";

const url =
  "https:api.themoviedb.org/3/search/movie?api_key=2fe29ea4e980aefdc8464fd306e20611&query=";

// Options API style

// export const useSearchStore = defineStore("searchStore", {
//   state: (): ISearchState => ({
//     loader: false,
//     movies: [],
//   }),
//   actions: {
//     async getMovies(search: string) {
//       this.loader = true;
//       const res = await fetch(`${url}${search}`);
//       const data = await res.json();

//       this.movies = data.results;
//       this.loader = false;
//     },
//     addToUserMovies(movie: IMovie) {
//       const movieStore = useMovieStore();
//       movieStore.movies.push({ ...movie, isWatched: false });
//       movieStore.activeTab = 1;
//     },
//   },
// });

// Composition API style

import { ref } from "vue";
export const useSearchStore = defineStore("searchStore", () => {
  const loader = ref(false);
  const movies = ref([] as IMovie[]);

  const getMovies = async (search: string) => {
    loader.value = true;
    const res = await fetch(`${url}${search}`);
    const data = await res.json();

    movies.value = data.results;
    loader.value = false;
  };

  const addToUserMovies = (movie: IMovie) => {
    const movieStore = useMovieStore();
    movieStore.movies.push({ ...movie, isWatched: false });
    movieStore.activeTab = 1;
  };

  return {
    loader,
    movies,
    getMovies,
    addToUserMovies,
  };
});
