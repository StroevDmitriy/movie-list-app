<template>
  <form @submit.prevent="searchStore.getMovies(searchMovie)">
    <input
      type="text"
      placeholder="Input movie"
      class="search-input"
      v-model="searchMovie"
    />
  </form>
  <Loader v-if="searchStore.loader" />
  <div v-else>
    <Movie
      v-for="movie of searchStore.movies"
      :key="movie.id"
      :movie="movie"
      :isSearch="true"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useSearchStore } from "../stores/SearchStore";
import Loader from "./Loader.vue";
import Movie from "./Movie.vue";

const searchStore = useSearchStore();
const searchMovie = ref("");
</script>

<style>
.search-input {
  border-radius: 1px solid #e7e7e7;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  margin-bottom: 20px;
  border-radius: 10px;
}
</style>
