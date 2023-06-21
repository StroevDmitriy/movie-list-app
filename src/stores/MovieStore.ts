import { defineStore } from 'pinia'

export const useMovieStore = defineStore('movieStore', {
    state: () => ({
        movies: [
            {
                id: 1,
                original_title: 'aa',
                overview: 'bb',
                poster_path: '/1',
                release_date: '2003-12-12',
                isWathched: false,
            },
            {
                id: 2,
                original_title: 'aa2',
                overview: 'bb2',
                poster_path: '/2',
                release_date: '2022-01-01',
                isWathched: true,
            }
        ]
    })
})