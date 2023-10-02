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
    state.fetchDataPopular('https://api.themoviedb.org/3/trending/all/week?api_key=05120fd7b187f3223ebe40d815cdfde5');

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
          <button @click="searchMovies" type="button" class="btn btn-outline-light">search</button>
        </div>
      </div>

    </nav>
  </header>

  <!-- Popolari -->
  <div class="container menu-content">
    <div class="row-header text-white" v-if="this.search == false">
      <h5>I titoli del momento</h5>

      <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 ">

        <div class="col pb-4" v-for="movie in state.popularList">


          <a href="#">
            <div class="car">
              <img class="cover" v-if="movie.backdrop_path"
                :src="`https://image.tmdb.org/t/p/w300/` + `${movie.backdrop_path}`" alt="">
              <img v-else src="./assets/img/noavailable.jpg" height="298.66">


              <div class="shows-info ">
                <div class="show-title d-flex gap-2">
                  <h6>Titolo: </h6>
                  <p> {{ movie.title || movie.name }}</p>
                </div>

                <div class="original-title d-flex gap-2">
                  <h6> Titolo originale: </h6>
                  <p>{{ movie.original_title || movie.original_name }}</p>
                </div>


                <div class="lang d-flex gap-2">
                  <h6> Lingua: </h6>
                  <img v-if="movie.original_language == 'en'" class="flag" src="./assets/img/ukflag.png">
                  <img v-else-if="movie.original_language == 'fr'" class="flag" src="./assets/img/france.png">
                  <img v-else-if="movie.original_language == 'it'" class="flag" src="./assets/img/italy.png">
                  <img v-else-if="movie.original_language == 'es'" class="flag" src="./assets/img/spain.png">
                  <p v-else>{{ movie.original_language }}</p>

                </div>

                <div class="vote d-flex gap-2">
                  <h6> Voto: </h6>

                  <div class="d-flex">
                    <i v-for="i in Math.ceil((movie.vote_average * 5) / 10)" class="fa-solid fa-star"
                      style="color: #ffd500;"></i>
                    <i v-for="i in (5 - Math.ceil((movie.vote_average * 5) / 10))" class="fa-regular fa-star"
                      style="color: #ffd500;"></i>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- END popolari -->

    <!-- Ricerca -->
    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4">
      <div class="col pb-4" v-for="movie in state.moviesList">

        <a href="#">
          <div class="car">
            <img class="cover" v-if="movie.backdrop_path"
              :src="`https://image.tmdb.org/t/p/w300/` + `${movie.backdrop_path}`" alt="">
            <img v-else src="./assets/img/noavailable.jpg">


            <div class="shows-info ">
              <div class="show-title d-flex gap-2">
                <h6>Titolo: </h6>
                <p> {{ movie.title || movie.name }}</p>
              </div>

              <div class="original-title d-flex gap-2">
                <h6> Titolo originale: </h6>
                <p>{{ movie.original_title || movie.original_name }}</p>
              </div>


              <div class="lang d-flex gap-2">
                <h6> Lingua: </h6>
                <img v-if="movie.original_language == 'en'" class="flag" src="./assets/img/ukflag.png">
                <img v-else-if="movie.original_language == 'fr'" class="flag" src="./assets/img/france.png">
                <img v-else-if="movie.original_language == 'it'" class="flag" src="./assets/img/italy.png">
                <img v-else-if="movie.original_language == 'es'" class="flag" src="./assets/img/spain.png">
                <p v-else>{{ movie.original_language }}</p>

              </div>

              <div class="vote d-flex gap-2">
                <h6> Voto: </h6>

                <div class="d-flex">
                  <i v-for="i in Math.ceil((movie.vote_average * 5) / 10)" class="fa-solid fa-star"
                    style="color: #ffd500;"></i>
                  <i v-for="i in (5 - Math.ceil((movie.vote_average * 5) / 10))" class="fa-regular fa-star"
                    style="color: #ffd500;"></i>
                </div>
              </div>
            </div>
          </div>
        </a>


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
  height: 4rem;

  a {
    color: white;
  }

  .input-group {
    width: 20rem;
  }

}

body {
  background-color: $bf-dark;
}

.car {
  position: relative;
}

.car img {
  border-radius: 0.2vw;

}

.shows-info {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  line-height: 1.3;
  padding: 1rem;
}



.car:hover .shows-info {
  display: block;
}

.car:hover .cover {
  filter: brightness(0.2);

}

.car:hover img {
  transform: scale(1.5);
}

.car:hover {
  z-index: 11;
}

.car img {
  transition: linear .5s;
}

.menu-content {
  padding-top: 3rem;
}

img {
  max-width: 100%;
  max-height: 169px;
}

a {
  color: white;
}
</style>
