import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive({
    apiKey: '05120fd7b187f3223ebe40d815cdfde5',
    apiUrl: 'https://api.themoviedb.org/3/search/movie',
    moviesList: [],
    movieSelected: "",

    serieUrl: 'https://api.themoviedb.org/3/search/tv',

    popularList: [],

    tvTopRated: [],
    moviesTopRated: [],







    fetchData(url) {
        axios.get(url,
            {
                params: {
                    api_key: this.apiKey,
                    query: this.movieSelected,
                }
            })

            .then(response => {
                this.moviesList = response.data.results;
                console.log(response.data);

            })
            .catch(error => {
                console.error(error);
            })

    },

    fetchDataSeries(url) {
        axios.get(url,
            {
                params: {
                    api_key: this.apiKey,
                    query: this.movieSelected,
                }
            })

            .then(response => {
                this.moviesList = response.data.results;
                console.log(response.data);

            })
            .catch(error => {
                console.error(error);
            })

    },

    fetchDataPopular(url) {
        axios.get(url)

            .then(response => {
                this.popularList = response.data.results.slice(0, 12);

                console.log(response.data);

            })
            .catch(error => {
                console.error(error);
            })

    },

    fetchDataTvTop(url) {
        axios.get(url)

            .then(response => {
                this.tvTopRated = response.data.results.slice(0, 12);

                console.log(response.data);

            })
            .catch(error => {
                console.error(error);
            })

    },

    fetchDataMoviesTop(url) {
        axios.get(url)

            .then(response => {
                this.moviesTopRated = response.data.results.slice(0, 12);

                console.log(response.data);

            })
            .catch(error => {
                console.error(error);
            })

    },



})