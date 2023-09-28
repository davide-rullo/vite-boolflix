<script>

import { state } from "./state.js"

export default {

  name: 'App',

  data() {
    return {
      state
    }
  },

  methods: {
    searchMovies() {
      state.fetchData(this.state.apiUrl);
    }
  }
}
</script>

<template>
  <nav class="navbar">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="" alt="Logo" width="65" height="24" class="d-inline-block align-text-top">

      </a>
    </div>
  </nav>
  <div class="container">
    <div class="input-group">
      <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
        aria-describedby="search-addon" v-model="this.state.movieSelected" />
      <button @click="searchMovies" type="button" class="btn btn-outline-primary">search</button>
    </div>
    <div class="row row-cols-2 g-5">
      <div class="col" v-for="movie in state.moviesList">


        <div class="card">
          <h6>Titolo: </h6>
          <p>{{ movie.title }}</p>


          <h6> Titolo originale: </h6>
          <p>{{ movie.original_title }}</p>

          <h6> Lingua: </h6>
          <p>{{ movie.original_language }}</p>

          <h6> Voto: </h6>
          <p>{{ movie.vote_average }}</p>
        </div>


      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use './assets/scss/partials/variables.scss' as *;
</style>
