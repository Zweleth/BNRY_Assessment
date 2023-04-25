<template lang="">
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        >Brand<span class="highlight">News</span></a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/">Trending</router-link>
          <router-link to="/news">News</router-link>
          <router-link to="/sport">Sport</router-link>
        </div>
        
      </div>
      <form class="d-flex" role="search" v-if="visible == true">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="searchValue"
          />
          <button
            class="btn btn-outline-success"
            type="submit"
            @click.prevent="search(searchValue)"
          >
            Search
          </button>
        </form>
    </div>
  </nav>
  
</template>
<script>
import store from "@/store";
import { mapGetters } from "vuex";
export default {
  name: "navbar",
  computed: {
    ...mapGetters(["visible"]),
  },
  methods: {
    search(searchValue) {
      store.dispatch('search', searchValue)
      
    },
    

  },
};
</script>
<style scoped>
nav {
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: +5;
}
nav a {
  font-weight: bold;
  color: var(--txtColor);
  text-decoration: none;
}
.highlight {
  color: var(--highlight);
}
.navbar-nav {
  gap: 1.2rem;
}

nav a.router-link-exact-active {
  color: var(--highlight);
}
form {
  margin-left: auto;
  margin-right: 5rem;
}

@media (min-width: 300px) and (max-width: 720px) {
  .collapse, .navbar-brand, .navbar-nav, .navbar-toggler {
    display: none;
  }  
}
</style>
