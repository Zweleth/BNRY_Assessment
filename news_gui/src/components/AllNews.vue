<template lang="">
  <div class="allNews">
    <div
      class="point"
      v-for="story in news"
      :style="{ backgroundImage: `url(${story.urlToImage})` }"
    >
    <div class="description">
        <h6>{{story.title}}</h6>
    </div>
    </div>
  </div>
</template>
<script>
import store from "@/store";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "allNews",
  computed: {
    ...mapGetters(["news"]),
  },
  methods: {
    ...mapActions(["fetchNews"]),
  },
  created() {
    this.fetchNews();
  },
};
</script>
<style scoped>
.allNews {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 5rem 1rem 3rem 1rem;
}

.point {
  border: none;
  border: 0.2rem solid gray;
  border-radius: 1rem;
  width: 100%;
  height: 13rem;
  background-image: url(https://i.postimg.cc/26hnSrpw/no-image.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;
}
.description {
    height: 30%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    bottom: -15rem;
    border-radius: 0 0 0.8rem 0.8rem;
    
}

.point:hover .description {
    animation: popUp 0.6s ease-in-out forwards;
}

.description h6 {
    color: var(--bgColor);
}

@keyframes popUp {
    0% {
        bottom: -15rem;
    }
    100% {
        bottom: 0;
    }
}
</style>
