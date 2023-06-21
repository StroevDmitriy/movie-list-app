<template>
    <header class="header">
        <img src="/logo.svg" alt="Logo" class="header__logo">
        <h2>My favorite movies</h2>
    </header>
    <div class="movies">
        {{ movieStore.movies }}
    </div>
</template>

<script setup lang="ts">
import { useMovieStore } from './stores/MovieStore';

const movieStore = useMovieStore()
</script>

<style scoped>
.header{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}
.header__logo{
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
.btn:hover{
    opacity: .7;
    
}
.btn_green{
    background-color: #69cd69;
}
.tabs{
    display: flex;
    justify-content: center;
    /* align-items: center; */
    margin-bottom: 30px;
}
</style>
