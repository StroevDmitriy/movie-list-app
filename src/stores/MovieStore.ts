import { defineStore } from 'pinia'
import { IState, IMovie } from '../types/store'

export const useMovieStore = defineStore('movieStore', {
    state: (): IState => ({
        movies: [
            {
                id: 1,
                original_title: 'aa',
                overview: 'bb',
                poster_path: '/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg',
                release_date: '2003-12-12',
                isWatched: false,
            },
            {
                id: 2,
                original_title: 'aa2',
                overview: 'bb2',
                poster_path: '/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg',
                release_date: '2022-01-01',
                isWatched: true,
            }
        ],
        activeTab: 1,
    }),
    getters: {
        watchedMovies(): IMovie[] {
            return this.movies.filter((movie: IMovie) => movie.isWatched)
        },
        totalMoviesCounter(): number {
            return this.movies.length
        }
    },
})