<template>
  <div class="movie">
    <img
      :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`"
      :alt="movie.original_title"
      class="movie__img"
    />
    <div>
      <div class="movie__name">
        {{ movie.original_title }} ({{ movie.release_date }})
      </div>
      <span class="movie__overview">{{ movie.overview }}</span>

      <div class="movie__buttons" v-if="isSearch">
        <button
          class="btn btn_green"
          @click="searchStore.addToUserMovies(movie)"
        >
          Add
        </button>
      </div>

      <div class="movie__buttons" v-else>
        <button
          class="movie__button movie__button-watched"
          @click="movieStore.toggleWatch(movie.id)"
        >
          <span v-if="!movie.isWatched">Watched</span>
          <span v-else>Unwatched</span>
        </button>
        <button
          class="movie__button movie__button-delete"
          @click="movieStore.deleteMovie(movie.id)"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMovieStore } from "../stores/MovieStore";
import { useSearchStore } from "../stores/SearchStore";

import { type PropType } from "vue";
import { IMovie } from "../types/store";

const movieStore = useMovieStore();
const searchStore = useSearchStore();

const props = defineProps({
  movie: {
    type: Object as PropType<IMovie>,
    required: true,
    default: () => {},
  },
  isSearch: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<style scoped>
.movie {
  display: grid;
  grid-template-columns: 200px 1fr;
  column-gap: 30px;
  margin-bottom: 20px;
  border: 2px solid #efefef;
  padding: 10px;
  border-radius: 10px;
}

.movie__accept {
  margin-right: 10px;
}

.movie__img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
}

.movie__name {
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-bottom: 20px;
}

.movie__overview {
  display: block;
  margin-bottom: 20px;
}

.movie__buttons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.movie__button {
  margin-right: 15px;
  padding: 10px 15px;
  border: none;
  border-radius: 10px;
  color: #fff;
}

.movie__button-watched {
  background-color: #1eb4c3;
}

.movie__button-watched_icon {
  width: 15px;
  margin-left: 10px;
}

.movie__button-delete {
  background-color: #ce2424;
}
</style>
