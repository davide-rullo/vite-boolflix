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
    state.fetchDataTvTop('https://api.themoviedb.org/3/tv/top_rated?api_key=05120fd7b187f3223ebe40d815cdfde5');
    state.fetchDataMoviesTop('https://api.themoviedb.org/3/movie/top_rated?api_key=05120fd7b187f3223ebe40d815cdfde5');

  }
}
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid d-flex justify-content-between">
        <a class="navbar-brand p-4" href="#"><img src="./assets/img/logonetflix.png" width="92" alt=""></a>

        <div class="input-group p-4">
          <input type="search" class="form-control rounded" placeholder="Cerca un film o una serie TV" aria-label="Search"
            aria-describedby="search-addon" v-model="this.state.movieSelected" />
          <button @click="searchMovies" type="button" class="search-btn btn btn-outline-light"><svg
              xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
              viewBox="0 0 16 16">
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg></button>
        </div>
      </div>

    </nav>
  </header>

  <!-- Popolari -->
  <div class="container menu-content">
    <div class="row-header text-white" v-if="this.search == false">
      <h3 class="category-title">I titoli del momento</h3>

      <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 ">

        <div class="col pb-4" v-for="movie in state.popularList">


          <a href="#">
            <div class="car">
              <img class="cover" v-if="movie.backdrop_path"
                :src="`https://image.tmdb.org/t/p/w300/` + `${movie.backdrop_path}`" alt="">
              <img v-else src="./assets/img/noavailable.jpg" class="cover no-img">


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

    <!-- Top Rated Serie TV -->


    <div class="row-header text-white" v-if="this.search == false">
      <h3 class="category-title">Le serie TV da non perdere</h3>

      <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 ">

        <div class="col pb-4" v-for="movie in state.tvTopRated">


          <a href="#">
            <div class="car">
              <img class="cover" v-if="movie.backdrop_path"
                :src="`https://image.tmdb.org/t/p/w300/` + `${movie.backdrop_path}`" alt="">
              <img v-else src="./assets/img/noavailable.jpg" class="cover no-img">


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



    <!-- END Top Rated Serie TV -->




    <!-- Top Rated Movies -->


    <div class="row-header text-white" v-if="this.search == false">
      <h3 class="category-title">Film acclamati dalla critica</h3>

      <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 ">

        <div class="col pb-4" v-for="movie in state.moviesTopRated">


          <a href="#">
            <div class="car">
              <img class="cover" v-if="movie.backdrop_path"
                :src="`https://image.tmdb.org/t/p/w300/` + `${movie.backdrop_path}`" alt="">
              <img v-else src="./assets/img/noavailable.jpg" class="cover no-img">


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



    <!-- END Top Rated Movies -->

    <!-- Ricerca -->
    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4">
      <div class="col pb-4" v-for="movie in state.moviesList">

        <a href="#">
          <div class="car">
            <img class="cover" v-if="movie.backdrop_path"
              :src="`https://image.tmdb.org/t/p/w300/` + `${movie.backdrop_path}`" alt="">
            <img v-else src="./assets/img/noavailable.jpg" class="cover no-img">


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

  <footer>
    <div class="container">
      <div class="social d-flex gap-5 mt-5">
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-facebook"
            viewBox="0 0 16 16">
            <path
              d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
          </svg></a>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-instagram"
            viewBox="0 0 16 16">
            <path
              d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
          </svg>
        </a>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-twitter"
            viewBox="0 0 16 16">
            <path
              d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
          </svg></a>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-youtube"
            viewBox="0 0 16 16">
            <path
              d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
          </svg></a>
      </div>
      <div class="row row-cols-2 row-cols-md-4 pt-4 pb-4">
        <div class="col">
          <ul class="list-unstyled">
            <a href="#">
              <li>Audiodescrizione</li>
            </a>
            <a href="#">
              <li>Rapporti con gli investitori</li>
            </a>
            <a href="#">
              <li>Note legali</li>
            </a>
            <a href="#">
              <li>Preferenze per la pubblicità</li>
            </a>
          </ul>
        </div>
        <div class="col">
          <ul class="list-unstyled">
            <a href="#">
              <li>Centro Assistenza</li>
            </a>
            <a href="#">
              <li>Opportunità di lavoro</li>
            </a>
            <a href="#">
              <li>Preferenze per i cookie</li>
            </a>

          </ul>
        </div>
        <div class="col">
          <ul class="list-unstyled">
            <a href="#">
              <li>Carte regalo</li>
            </a>
            <a href="#">
              <li>Condizioni di utilizzo</li>
            </a>
            <a href="#">
              <li>Informazioni sull'azienda</li>
            </a>

          </ul>
        </div>
        <div class="col">
          <ul class="list-unstyled">
            <a href="#">
              <li>Media Center</li>
            </a>
            <a href="#">
              <li>Privacy</li>
            </a>
            <a href="#">
              <li>Contattaci</li>
            </a>

          </ul>
        </div>
      </div>
    </div>
  </footer>
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
    width: 26rem;
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
  transition: linear .3s;
}

.menu-content {
  padding-top: 3rem;
}

img {
  max-width: 100%;
  max-height: 169px;
}

.no-img {
  width: 100%;
}

a {
  color: white;
}

.category-title {
  padding: 1rem 0;
}

.search-btn {
  background-color: $bf-primary;
  border: none;
}

footer a {
  text-decoration: none;
}

footer li {
  padding: .2rem;
  color: #808080;
}
</style>
