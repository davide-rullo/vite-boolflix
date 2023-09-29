<script>

import { state } from "./state.js"

export default {

  name: 'App',

  data() {
    return {
      state,
      search: false,
    }
  },

  methods: {
    searchMovies() {
      state.fetchData(this.state.apiUrl);
      state.fetchDataSeries(this.state.serieUrl);
      this.search = true;
    }
  },

  mounted() {
    state.fetchDataPopular('https://api.themoviedb.org/3/movie/popular?api_key=05120fd7b187f3223ebe40d815cdfde5')
  }
}
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid d-flex justify-content-between">
        <a class="navbar-brand p-4" href="#"><img src="./assets/img/logonetflix.png" width="92" alt=""></a>

        <div class="input-group p-4">
          <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
            aria-describedby="search-addon" v-model="this.state.movieSelected" />
          <button @click="searchMovies" type="button" class="btn btn-outline-primary">search</button>
        </div>
      </div>

    </nav>
  </header>

  <!-- Popolari -->
  <div class="container menu-content">
    <div class="row-header text-white" v-if="this.search == false">
      <h5>I titoli del momento</h5>

      <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-5">

        <div class="col" v-for="movie in state.popularList">


          <div class="card">
            <img v-if="movie.backdrop_path" :src="`https://image.tmdb.org/t/p/w342/` + `${movie.backdrop_path}`" alt="">
            <img v-else src="./assets/img/noavailable.jpg" height="298.66">
            <h6>Titolo: </h6>
            <p>{{ movie.title || movie.name }}</p>


            <h6> Titolo originale: </h6>
            <p>{{ movie.original_title || movie.original_name }}</p>


            <h6> Lingua: </h6>
            <img v-if="movie.original_language == 'en'" class="flag" src="./assets/img/ukflag.png">
            <img v-else-if="movie.original_language == 'fr'" class="flag" src="./assets/img/france.png">
            <img v-else-if="movie.original_language == 'it'" class="flag" src="./assets/img/italy.png">
            <img v-else-if="movie.original_language == 'es'" class="flag" src="./assets/img/spain.png">


            <p v-else>{{ movie.original_language }}</p>

            <h6> Voto: </h6>
            <p>{{ Math.ceil((movie.vote_average * 5) / 10) }} </p>
            <div class="d-flex">
              <i v-for="i in Math.ceil((movie.vote_average * 5) / 10)" class="fa-solid fa-star"
                style="color: #ffd500;"></i>
              <i v-for="i in (5 - Math.ceil((movie.vote_average * 5) / 10))" class="fa-regular fa-star"
                style="color: #ffd500;"></i>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-5">
      <div class="col" v-for="movie in state.moviesList">


        <div class="card">

          <img v-if="movie.backdrop_path" :src="`https://image.tmdb.org/t/p/w342/` + `${movie.backdrop_path}`" alt="">
          <img v-else src="./assets/img/noavailable.jpg" height="298.66">
          <h6>Titolo: </h6>
          <p>{{ movie.title || movie.name }}</p>


          <h6> Titolo originale: </h6>
          <p>{{ movie.original_title || movie.original_name }}</p>


          <h6> Lingua: </h6>
          <img v-if="movie.original_language == 'en'" class="flag" src="./assets/img/ukflag.png">
          <img v-else-if="movie.original_language == 'fr'" class="flag" src="./assets/img/france.png">
          <img v-else-if="movie.original_language == 'it'" class="flag" src="./assets/img/italy.png">
          <img v-else-if="movie.original_language == 'es'" class="flag" src="./assets/img/spain.png">


          <p v-else>{{ movie.original_language }}</p>

          <h6> Voto: </h6>
          <p>{{ Math.ceil((movie.vote_average * 5) / 10) }} </p>
          <div class="d-flex">
            <i v-for="i in Math.ceil((movie.vote_average * 5) / 10)" class="fa-solid fa-star" style="color: #ffd500;"></i>
            <i v-for="i in (5 - Math.ceil((movie.vote_average * 5) / 10))" class="fa-regular fa-star"
              style="color: #ffd500;"></i>
          </div>

        </div>


      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use './assets/scss/partials/variables.scss' as *;

.flag {
  width: 20px;
}

.navbar {
  background-color: $bf-dark;

  a {
    color: white;
  }

  .input-group {
    width: 20rem;
  }

}

#app {
  background-color: $bf-darkContent;
}



.card {
  height: 400px;
}


.menu-content {
  padding-top: 3rem;
}
</style>
