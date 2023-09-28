<script>

import { state } from "./state.js"

export default {

  name: 'App',

  data() {
    return {
      state
    }
  },
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
      <button type="button" class="btn btn-outline-primary">search</button>
    </div>
    <ul>
      <li>Ciao</li>
      <li>Ciao</li>
      <li>Ciao</li>
      <li>Ciao</li>
      <li>Ciao</li>
    </ul>
  </div>
</template>

<style lang="scss">
@use './assets/scss/partials/variables.scss' as *;
</style>
