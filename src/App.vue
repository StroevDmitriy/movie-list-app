<template>
  <main>
    <header class="header">
      <img src="/logo.svg" alt="Logo" class="header__logo" />
      <h2>My favorite movies</h2>
    </header>
    <div class="tabs">
      <button
        :class="['btn', { btn_green: movieStore.activeTab === 1 }]"
        @click="setTab(1)"
      >
        Favorite
      </button>
      <button
        :class="['btn', { btn_green: movieStore.activeTab === 2 }]"
        @click="setTab(2)"
      >
        Search
      </button>
    </div>
    <div class="movies" v-if="movieStore.activeTab === 1">
      <div>
        <h3>Watched movies</h3>
        <Movie
          v-for="movie of movieStore.watchedMovies"
          :key="movie.id"
          :movie="movie"
        />
      </div>
      <h3>All movies (count: {{ movieStore.totalMoviesCounter }})</h3>
      <Movie
        v-for="movie of movieStore.movies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
    <div class="search" v-else>Search</div>
  </main>
</template>

<script setup lang="ts">
import { useMovieStore } from "./stores/MovieStore";
import Movie from "./components/Movie.vue";

const setTab = (id: number) => {
  movieStore.setActiveTab(id);
};

const movieStore = useMovieStore();
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
.header__logo {
  max-width: 50px;
  margin-right: 20px;
}
.btn {
  border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  background-color: #cacaca;
}
.btn:hover {
  opacity: 0.7;
}
.btn_green {
  background-color: #69cd69;
}
.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>
