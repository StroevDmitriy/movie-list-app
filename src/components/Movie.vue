<template>
    <div class="movie">
        <img
            :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`"
            :alt="movie.original_title"
            class="movie__img">
        <div>
            <div class="movie__name">
                {{ movie.original_title }} ({{ movie.release_date }})
            </div>
            <span class="movie__overview">{{ movie.overview }}</span>
            <div class="movie__buttons">
                <button class="movie__button movie__button-watched">
                    <span v-if="!movie.isWatched">Watched</span>
                    <span v-else>Unwatched</span>
                </button>
                <button class="movie__button movie__button-delete">Delete</button>
            </div>
        </div>
    </div>
    
</template>

<script
    lang="ts"
    setup
>
const props = defineProps({
    movie: {
        type: Object,
        required: true,
        default: () => {}
    }
})
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

.movie__button{
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