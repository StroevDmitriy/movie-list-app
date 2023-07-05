import { defineStore } from "pinia";
import { ISearchState } from "../types/store";

const url =
  "https:api.themoviedb.org/3/search/movie?api_key=2fe29ea4e980aefdc8464fd306e20611&query=";

export const useSearchStore = defineStore("searchStore", {
  state: (): ISearchState => ({
    loader: false,
    movies: [],
  }),
  actions: {
    async getMovies(search: string) {
      this.loader = true;
      const res = await fetch(`${url}${search}`);
      const data = await res.json();

      console.log(data);

      this.movies = data.results;
      this.loader = false;
    },
  },
});
