<template lang="">
  <div class="mobile-nav">
    <div><router-link to="/"><i class="fa-solid fa-earth-africa"></i><span>Trending</span></router-link></div>
    <div><router-link to="/news"><i class="fa-regular fa-newspaper"></i><span>All news</span></router-link></div>
    <div><router-link to="/sport"><i class="fa-solid fa-football"></i><span>Sports</span></router-link></div>
  </div>
</template>
<script>
export default {
    name: 'mobilenav'
};
</script>
<style scoped>
.mobile-nav {
    width: 100vw;
    display: flex;
    gap: auto;
    display: none;
    position: fixed;
    bottom: 0;
    z-index: +5;
    background-color: var(--bgColor);
    height: 3rem;
    color: var(--txtColor)
}
.mobile-nav a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
}

.mobile-nav i {
    font-size: x-large;
    text-decoration: none;
}

.mobile-nav span {
    font-size: x-small;
    text-decoration: none;
}
.mobile-nav div {
    width: 100%;
    display: grid;
    place-items: center;
}
.mobile-nav a.router-link-exact-active {
  color: var(--highlight);
}

@media (min-width: 300px) and (max-width: 520px) {
  .mobile-nav {
    display: flex;
  }  
}
</style>
