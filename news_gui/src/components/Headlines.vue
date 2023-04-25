<template lang="">
  <div
    id="carouselExampleAutoplaying"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="top-corner"></div>
      <div class="content-banner"></div>
      <div class="middle-banner"></div>
      <div class="bottom-corner"></div>
      <div class="carousel-item active first">
        <div>
          <h3>News</h3>
          <h3>Head<span>lines</span></h3>
        </div>
      </div>
      <div
        class="carousel-item c-item"
        v-for="headline in headlines"
        :style="{ backgroundImage: `url(${headline.urlToImage})` }"
      >
        <h5 class="title">{{ headline.title }}</h5>
        <h4 class="source-name">{{ headline.source.name }}</h4>
        <h3 class="content">{{ headline.content }}</h3>
        <h3 class="description">{{ headline.description }}</h3>
        <button class="read">
          <a :href="headline.url" target="_blank">Read more</a>
        </button>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "headlines",
  computed: {
    ...mapGetters(["headlines","visible"]),
  },
  methods: {
    ...mapActions(["fetchHeadlines","toggleHide"]),
  },
  created() {
    this.fetchHeadlines();
    this.toggleHide();
    
  },
};
</script>
<style scoped>
.news {
  background-color: gray;
  width: 80vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
}

.active {
  width: 100%;
  height: 100%;
  background-color: var(--bgColor); 
}

.first h3 {
  font-weight: bold;
  font-size: 4rem;
}
.active div span {
  color: var(--highlight)
}

.active div {
  width: fit-content;
  height: fit-content;
  position: absolute;
  top: 30%;
  left: 30%;
  text-align: center;
}

.carousel {
  top: 6rem;
  left: 4rem;

  width: 60vw;
  height: 70vh;
  background-color: gray;
}
.carousel-item,
.carousel-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: left;
}

.carousel:hover .middle-banner {
  animation: showDesc 0.6s ease-in-out forwards;
}
.carousel:hover .description {
  animation: showDescTxt 0.6s ease-in-out forwards;
}

.carousel:active .content-banner {
  animation: showCont 0.6s ease-in-out forwards;
}
.carousel:active .content {
  animation: showContTxt 0.6s ease-in-out forwards;
}

.carousel-inner {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.top-corner {
  position: absolute;
  top: 0;
  width: 0;
  height: 0;
  border-top: 3rem solid var(--highlight);
  border-right: 100rem solid transparent;
  z-index: +1;
}
.bottom-corner {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 0;
  border-bottom: 5rem solid var(--highlight);
  border-left: 100rem solid transparent;
  z-index: +3;
}
.source-name {
  position: absolute;
  top: 0;
  z-index: +2;
  color: var(--bgColor);
}
.title {
  position: absolute;
  bottom: 0.5rem;
  z-index: +3;
  color: var(--bgColor);
}

.description {
  position: absolute;
  bottom: -10.5rem;
  z-index: +2;
  color: var(--bgColor);
}
.carousel > button {
  display: none;
}

.middle-banner {
  position: absolute;
  bottom: -15rem;
  right: 0;
  width: 0;
  height: 0;
  border-bottom: 11rem solid rgba(0, 0, 0, 0.5);
  border-left: 290rem solid transparent;
  z-index: +2;
  text-align: start;
}

.content-banner {
  z-index: +2;
  position: absolute;
  bottom: -31rem;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
}

.content {
  z-index: +2;
  position: absolute;
  top: 37em;
  color: var(--bgColor);
}

.read {
  position: absolute;
  z-index: +4;
  bottom: 1rem;
  right: 1rem;
  background: none;
  border: none;
  border: 0.1rem solid var(--bgColor);
  color: var(--bgColor);
  width: 6rem;
  height: 2rem;
  border-radius: 0.4rem;
}

.read a{
  color: var(--bgColor);
  text-decoration: none;
}

@keyframes showDesc {
  0% {
    bottom: -15rem;
  }
  100% {
    bottom: 0;
  }
}

@keyframes showDescTxt {
  0% {
    bottom: -10.5rem;
  }
  100% {
    bottom: 4.5rem;
  }
}

@keyframes showCont {
  0% {
    bottom: -31rem;
  }
  100% {
    bottom: 0;
  }
}

@keyframes showContTxt {
  0% {
    top: 37rem;
  }
  100% {
    top: 6rem;
  }
}
</style>
